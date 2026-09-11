import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { NgClass, CommonModule, DatePipe } from '@angular/common';
import { MatTabChangeEvent, MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { BreadcrumbComponent } from '@shared/components/breadcrumb/breadcrumb.component';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Observable } from 'rxjs';
import { FirestoreService } from '@core/service/firestore.service';
import { FilterTableService } from '@core/service/filter-table.service';
import { AlertService } from '@core/service/alert.service';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRippleModule } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FeatherIconsComponent } from '@shared/components/feather-icons/feather-icons.component';

@Component({
  selector: 'app-listado-datos',
  templateUrl: './listado-datos.component.html',
  styleUrls: ['./listado-datos.component.scss'],
  standalone: true,
  imports: [
    BreadcrumbComponent,
    MatIconModule,
    NgClass,
    MatTabsModule,
    CommonModule,
    MatTooltipModule,
    MatButtonModule,
    MatTableModule,
    MatCheckboxModule,
    MatRippleModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    DatePipe,
    MatMenuModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FeatherIconsComponent,
  ],
})
export class ListadoDatosComponent {
  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;
  @ViewChild('filter', { static: true })
  filter!: ElementRef;
  dataSource!: MatTableDataSource<any>;
  id!: number;
  // subscriptions: Subscription = new Subscription();
  datos: any[] = [];
  datosFilter: any[] = [];
  dataObs$!: Observable<any>;
  availableColumns = ['fechaRegistro', 'Nombre', 'actions'];
  displayedColumns = ['fechaRegistro', 'Nombre', 'actions'];
  coleccion: any = ['Consultorios', 'Materiales', 'Tonos', 'Trabajos'];
  coleccionSelect = '';
  selectedTabIndex = 0;

  constructor(
    private db: FirestoreService,
    private _changeDetectorRef: ChangeDetectorRef,
    private filterSvc: FilterTableService,
    private alertService: AlertService,
  ) {
    this.coleccionSelect = 'Consultorios';
    this.getDatos();
  }

  async getDatos() {
    this.datos = [];
    this.alertService.loanding('Cargando datos...');
    const datos: any[] = [];
    const collRef = await this.db.asyncCollOrderBy(
      this.coleccionSelect.toLocaleLowerCase(),
      'nombre',
      'asc',
    );
    collRef.forEach((doc) => {
      const dato = doc.data();
      datos.push({
        ...dato,
        id: doc.id,
      });
    });
    this.alertService.alertClose();
    this.datos = this.agruparDatos(datos);
    this.datosFilter = [...this.datos];
    this.setPagination(this.datos);
  }

  private normalizarNombre(nombre: unknown): string {
    return String(nombre ?? '')
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/\s+/g, ' ')
      .trim()
      .toLocaleLowerCase('es-MX');
  }

  private agruparDatos(datos: any[]): any[] {
    const grupos = new Map<string, any>();

    for (const dato of datos) {
      const clave = this.normalizarNombre(dato.nombre);
      const grupoExistente = grupos.get(clave);

      if (grupoExistente) {
        grupoExistente.__groupIds.push(dato.id);
        continue;
      }

      grupos.set(clave, {
        ...dato,
        nombre: String(dato.nombre ?? '').replace(/\s+/g, ' ').trim(),
        __groupIds: [dato.id],
      });
    }

    return Array.from(grupos.values());
  }

  filterDatatable(event: any) {
    if (event.target.value === '') {
      this.datos = [...this.datosFilter];
      this.setPagination(this.datos);
      return;
    }

    this.datos = this.filterSvc.filterListPedidos(
      event,
      [...this.datosFilter],
      ['nombre'],
    );
    this.setPagination(this.datos);
  }

  setPagination(tableData: any[]) {
    this.dataSource = new MatTableDataSource<any>(tableData);
    this._changeDetectorRef.detectChanges();
    this.dataSource.paginator = this.paginator;
    this.dataObs$ = this.dataSource.connect();
  }

  async eliminarPago(row: any) {
    const ids = row.__groupIds?.length ? row.__groupIds : [row.id];
    const cantidad = ids.length;
    const opt = await this.alertService.alertConfirm(
      cantidad > 1
        ? `¿Estás seguro de eliminar este grupo? Se eliminarán ${cantidad} registros relacionados.`
        : '¿Estás seguro de eliminar el dato?',
    );
    if (opt.isConfirmed) {
      for (const id of ids) {
        await this.db.deleteDoc(
          this.coleccionSelect.toLocaleLowerCase(),
          id,
        );
      }

      const idsEliminados = new Set(ids);
      const conservarGrupo = (dato: any): boolean =>
        !dato.__groupIds?.some((id: string) => idsEliminados.has(id));

      this.datosFilter = this.datosFilter.filter(conservarGrupo);
      this.datos = this.datos.filter(conservarGrupo);
      this.setPagination(this.datos);

      this.alertService.toast(
        cantidad > 1
          ? 'Grupo eliminado correctamente.'
          : 'Dato eliminado correctamente.',
        'snackbar-success',
      );
    }
  }

  onTabChanged(event: MatTabChangeEvent) {
    const selectedIndex = event.index;
    const selectedWeek = this.coleccion[selectedIndex];
    this.coleccionSelect = selectedWeek;
    this.getDatos();
  }

  toggleColumn(column: string) {
    const index = this.displayedColumns.indexOf(column);
    if (index > -1) {
      this.displayedColumns.splice(index, 1);
    } else {
      this.displayedColumns.splice(-1, 0, column); // Inserta antes de acciones
    }
  }
}
