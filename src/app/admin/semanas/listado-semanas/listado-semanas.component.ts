import { ChangeDetectorRef, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { NgClass, CommonModule, DatePipe } from '@angular/common';
import { MatTabChangeEvent, MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { BreadcrumbComponent } from '@shared/components/breadcrumb/breadcrumb.component';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Observable, Subscription } from 'rxjs';
import { Pago } from '../componentes/pago.model';
import { FirestoreService } from '@core/service/firestore.service';
import { Router } from '@angular/router';
import { FilterTableService } from '@core/service/filter-table.service';
import { ExcelService } from '@core/service/excel.service';
import { AlertService } from '@core/service/alert.service';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FeatherIconsComponent } from '@shared/components/feather-icons/feather-icons.component';
import { MatRippleModule } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-listado-semanas',
  templateUrl: './listado-semanas.component.html',
  styleUrls: ['./listado-semanas.component.scss'],
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
    FeatherIconsComponent,
    MatRippleModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    DatePipe,
    MatMenuModule,
    MatCardModule
  ],
})
export class ListadoSemanasComponent implements OnDestroy {
  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;
  @ViewChild('filter', { static: true })
  filter!: ElementRef;
  dataSource!: MatTableDataSource<any>;
  id!: number;
  subscriptions: Subscription = new Subscription();
  pagosTodos: Pago[] = [];
  pagos: Pago[] = [];
  pagosFilter: Pago[] = [];
  dataObs$!: Observable<any>;
  availableColumns = [
    'noContrato',
    'trabajo',
    'consultorio',
    'tono',
    'material',
    'fechaRegistro',
    'fechaEntrega',
    'pruebaTerminada',
    'urgente',
    'placabase',
    'total',
    'totalcobrar',
    'observaciones',
    'actions'
  ];
  displayedColumns = [
    'noContrato',
    'trabajo',
    'consultorio',
    'tono',
    'material',
    'fechaRegistro',
    'fechaEntrega',
    'pruebaTerminada',
    'urgente',
    'placabase',
    'total',
    'totalcobrar',
    'observaciones',
    'actions'
  ];
  semanas: any = [];
  semanaSelect = '';

  constructor(
    private db: FirestoreService,
    private _changeDetectorRef: ChangeDetectorRef,
    private router: Router,
    private filterSvc: FilterTableService,
    private excelService: ExcelService,
    private alertService: AlertService
  ) {
    this.getPagos();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  getPagos() {
    const query = this.db.getCollOrderBy('pagos', 'fechaRegistro', 'desc');
    this.subscriptions.add(
      query.subscribe({
        next: async (pagos: any) => {
          this.semanas = Array.from(new Set(pagos.map((res: any) => res.semana)));
          this.pagosTodos = pagos;
          const ultimaSemana = this.pagosTodos[0].semana;
          this.semanaSelect = ultimaSemana;
          this.pagos = this.pagosTodos.filter((res: Pago) => res.semana === ultimaSemana);
          this.pagosFilter = this.pagos;
          this.setPagination(this.pagos);
        },
        error: (err: any) => console.log(err),
      })
    );
  }

  filterDatatable(event: any) {
    if (event.target.value === '') {
      this.pagos = [...this.pagosFilter];
      this.setPagination(this.pagos);
      return;
    }
    this.pagos = this.filterSvc.filterListPedidos(
      event,
      [...this.pagosFilter],
      ['noContrato', 'consultorio', 'trabajo', 'material']
    );
    this.setPagination(this.pagos);
  }

  setPagination(tableData: Pago[]) {
    this.dataSource = new MatTableDataSource<Pago>(tableData);
    this._changeDetectorRef.detectChanges();
    this.dataSource.paginator = this.paginator;
    this.dataObs$ = this.dataSource.connect();
  }

  iraNuevo() {
    this.router.navigate(['/admin/semanas/nuevo-trabajo/agregar']);
  }

  iraEditar(id: string) {
    this.router.navigate(['/admin/semanas/nuevo-trabajo/', id]);
  }

  dynamicExcel(row: any) {
    row.totalPuntos = row.puntos.length;
    row.noRealizado = row.puntos.reduce(
      (sum: any, value: any) => sum + Number(value.estatus === ''),
      0
    );
    row.siRealizado = row.puntos.reduce(
      (sum: any, value: any) => sum + Number(value.estatus !== ''),
      0
    );
    row.totalIntegrado = row.puntos.reduce(
      (sum: any, value: any) =>
        sum + Number(value.estatus === 'DOCUMENTO INTEGRADO'),
      0
    );
    row.totalNoIntegrado = row.puntos.reduce(
      (sum: any, value: any) =>
        sum + Number(value.estatus === 'DOCUMENTO NO INTEGRADO'),
      0
    );
    row.totalIncumplimiento = row.puntos.reduce(
      (sum: any, value: any) =>
        sum + Number(value.estatus === 'DOCUMENTO CON INCUMPLIMIENTO'),
      0
    );
    row.totalNA = row.puntos.reduce(
      (sum: any, value: any) =>
        sum + Number(value.estatus === 'DOCUMENTO NO APLICABLE'),
      0
    );
    row.totalNAT = row.puntos.reduce(
      (sum: any, value: any) =>
        sum +
        Number(
          value.estatus ===
          'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
        ),
      0
    );

    row.totalRealizados =
      row.totalIntegrado +
      row.totalNoIntegrado +
      row.totalIncumplimiento +
      row.totalNA +
      row.totalNAT;
    row.porcentajeTotal =
      (row.totalIntegrado * 100) / (row.puntos.length - row.totalNA);
    for (let i = 0; i < row.puntos.length; i++) {
      row.puntos[i].bullet1 = '';
      if (row.puntos[i].puntos.length > 0) {
        let stringArray = '';
        for (let j = 0; j < row.puntos[i].puntos.length; j++) {
          stringArray += `${j + 1}.-${row.puntos[i].puntos[j]}\n`;
        }
        row.puntos[i].bullet1 =
          row.puntos[i].bullet +
          '\n' +
          'Listado de puntos' +
          '\n' +
          stringArray;
      } else {
        row.puntos[i].bullet1 = row.puntos[i].bullet;
      }
    }
    if (row.tipoContrato === 'Adquisición') {
      this.excelService.generateExcelA(row);
    } else {
      this.excelService.generateExcelO(row);
    }
  }

  async eliminarExpediente(row: any) {
    const opt = await this.alertService.alertConfirm('eliminar el pago');
    if (opt.isConfirmed) {
      await this.db.deleteDoc('pagos', row.id);
      this.alertService.toast(
        'Pago eliminado correctamente',
        'snackbar-success'
      );
    }
  }

  onTabChanged(event: MatTabChangeEvent) {
    const selectedIndex = event.index;
    const selectedWeek = this.semanas[selectedIndex];
    this.semanaSelect = selectedWeek;
    this.pagos = this.pagosTodos.filter((res: Pago) => res.semana === selectedWeek);
    this.pagosFilter = this.pagos;
    this.setPagination(this.pagos);
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
