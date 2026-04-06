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
    this.alertService.loanding('Cargando datos;');
    const datos: any[] = [];
    const collRef = await this.db.asyncCollOrderBy(
      this.coleccionSelect.toLocaleLowerCase(),
      'nombre',
      'asc',
    );
    collRef.forEach((doc) => datos.push(doc.data()));
    this.alertService.alertClose();
    this.datos = datos;
    this.datosFilter = datos;
    this.setPagination(this.datos);
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
    row.idTrabajoAnterior ||= '';
    const opt = await this.alertService.alertConfirm(
      '¿Estás seguro de eliminar el dato?',
    );
    if (opt.isConfirmed) {
      await this.db.deleteDoc('pagos', row.id);
      if (row.idTrabajoAnterior !== '') {
        await this.db.updateDoc(
          { trabajoReferencia: null, idReferencia: '', pagado: '' },
          'pagos',
          row.idTrabajoAnterior,
        );
      }
      this.getDatos();
      this.alertService.toast(
        'Dato eliminado correctamente',
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
