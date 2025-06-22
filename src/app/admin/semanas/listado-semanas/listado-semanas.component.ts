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
import { MatRippleModule } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';
import { FeatherIconsComponent } from '@shared/components/feather-icons/feather-icons.component';

declare module 'jspdf' {
  interface jsPDF {
    autoTable: (options: any) => jsPDF;
  }
}
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
    MatRippleModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    DatePipe,
    MatMenuModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FeatherIconsComponent
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
    'partida',
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
    'partida',
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
  mostrarModal = false;
  selectedItem!: Pago;
  selectedItem1!: Pago;
  totalGeneral = 0;
  totalPartida1 = 0;
  totalPartida2 = 0;

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
          for (let i = 0; i < pagos.length; i++) {
            pagos[i].trabajoAnterior ||= null;
            pagos[i].trabajoReferencia ||= null;
            pagos[i].partida ||= 'Partida 1';
          }
          this.pagosTodos = pagos;
          const semanas = this.pagosTodos.map((res: Pago) => res.semana);
          const semanasUnicasOrdenadas = [...new Set(semanas)].sort((a, b) => {
            const numA = parseInt(a.replace(/\D/g, ''));
            const numB = parseInt(b.replace(/\D/g, ''));
            return numB - numA;
          });
          this.semanas = semanasUnicasOrdenadas;
          const ultimaSemana = semanasUnicasOrdenadas[0];
          this.semanaSelect = ultimaSemana;
          this.pagos = this.pagosTodos.filter((res: Pago) => res.semana === ultimaSemana);
          this.pagosFilter = this.pagos;
          this.totalGeneral = this.pagos.reduce(
            (sum: any, value: any) => sum + Number(value.totalPorCobrar),
            0
          );
          this.totalPartida1 = this.pagos.reduce(
            (sum: number, value: any) => {
              return value.partida === 'Partida 1'
                ? sum + Number(value.totalPorCobrar)
                : sum;
            },
            0
          );
          this.totalPartida2 = this.pagos.reduce(
            (sum: number, value: any) => {
              return value.partida === 'Partida 2'
                ? sum + Number(value.totalPorCobrar)
                : sum;
            },
            0
          );
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
      ['noContrato', 'consultorio', 'trabajo', 'material', 'tono']
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

  async eliminarPago(row: any) {
    row.idTrabajoAnterior ||= '';
    const opt = await this.alertService.alertConfirm('¿Estás seguro de eliminar el pago?');
    if (opt.isConfirmed) {
      await this.db.deleteDoc('pagos', row.id);
      if (row.idTrabajoAnterior !== '') {
        await this.db.updateDoc({ trabajoReferencia: null, idReferencia: '', pagado: '' }, 'pagos', row.idTrabajoAnterior);
      }
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
    this.totalGeneral = this.pagos.reduce(
      (sum: any, value: any) => sum + Number(value.totalPorCobrar),
      0
    );
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

  abrirModal(item: any, item1: any) {
    item.pagado ||= 'SI'
    this.mostrarModal = true;
    this.selectedItem = item;
    this.selectedItem1 = item1;
  }

  selectType(title: string, type: string) {
    this.alertService.alertSelectType(title, type === 'pdf' ? 'Generar PDF' : 'Compartir').then((result) => {
      if (result.isConfirmed) {
        const selected = result.value;
        console.log(selected);
        if (type === 'pdf') {
          this.generatePDF(selected);
        } else {
          this.shareViaWhatsApp(selected)
        }
      }
    });
  }

  // En tu componente
  generatePDF(select: string) {
    const pagosFilter = select === '' || select === 'total' ? this.pagos.filter((res: any) => Number(res.totalPorCobrar || 0) > 0) :
      this.pagos.filter((res: any) => Number(res.totalPorCobrar || 0) > 0 && res.partida === select)
    const doc = new jsPDF({ orientation: 'landscape' });
    // Configuración del documento
    doc.setFont('helvetica');
    doc.setFontSize(18);
    doc.setTextColor(40, 40, 40);
    doc.text(`Reporte de Trabajos ${this.semanaSelect}${select === '' || select === 'total' ? ' (General)' : " (" + select + ")"}`, 148.5, 15, { align: 'center' });

    // Datos para la tabla
    const headers = [
      ['No. Contrato', 'Consultorio', 'Trabajo', 'Material', 'Placa Base', 'Urgente', 'Estatus', 'Total a Cobrar']
    ];

    const body = pagosFilter.map(pago => [
      pago.noContrato || '',
      pago.consultorio || '',
      pago.trabajo || '',
      pago.material || '',
      pago.placaBase || 'NO',
      pago.urgente || 'NO',
      pago.pruebaTerminada = pago.pruebaTerminada
        ? pago.pruebaTerminada.charAt(0).toUpperCase() + pago.pruebaTerminada.slice(1).toLowerCase()
        : 'Terminada',
      `$${(+pago.totalPorCobrar).toLocaleString('es-MX', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      })}`
    ]);

    // Agregar tabla
    autoTable(doc, {
      head: headers,
      body: body,
      startY: 25,
      margin: { top: 20 },
      styles: {
        font: 'helvetica',
        fontSize: 10,
        cellPadding: 4,
        valign: 'middle',
        halign: 'left'
      },
      headStyles: {
        fillColor: [128, 0, 128],
        textColor: 255,
        fontStyle: 'bold',
        halign: 'center'
      },
      bodyStyles: {
        textColor: [40, 40, 40]
      },
      alternateRowStyles: {
        fillColor: [245, 245, 245]
      },
      columnStyles: {
        0: { cellWidth: 25, halign: 'center' },
        1: { cellWidth: 35 },
        2: { cellWidth: 'auto' },
        3: { cellWidth: 25, halign: 'center' },
        4: { cellWidth: 25, halign: 'center' },
        5: { cellWidth: 25, halign: 'center' },
        6: { cellWidth: 25, halign: 'center' },
        7: { cellWidth: 30, halign: 'center' }
      }
    });

    // Pie de página
    const total = pagosFilter.reduce((sum, pago) => sum + (+pago.totalPorCobrar || 0), 0);
    doc.setFontSize(12); // Aumentar el tamaño de fuente (de 10 a 12)
    doc.setFont('helvetica', 'bold'); // Establecer fuente en negrita
    doc.text(
      `TOTAL: $${total.toLocaleString('es-MX', { minimumFractionDigits: 2 })}`,
      14,
      (doc as any).lastAutoTable.finalY + 10
    );

    // Guardar PDF
    doc.save(`reporte_trabajos_${this.semanaSelect}_${select === '' || select === 'total' ? 'General' : select}.pdf`);
  }

  shareViaWhatsApp(select: string) {
    // Crear el texto para compartir
    const pagosFilter = select === '' || select === 'total' ? this.pagos.filter((res: any) => Number(res.totalPorCobrar || 0) > 0) :
      this.pagos.filter((res: any) => Number(res.totalPorCobrar || 0) > 0 && res.partida === select)
    let shareText = '📋 *Reporte de Trabajos* 📋\n\n';
    shareText += '--------------------------------\n\n';
    // Agregar cada trabajo al texto
    pagosFilter.forEach((pago, index) => {
      shareText += `*No. Contrato*: ${pago.noContrato || ''}\n`;
      shareText += `*Consultorio*: ${pago.consultorio || ''}\n`;
      shareText += `*Trabajo*: ${pago.trabajo || ''} ${pago.placaBase.toLowerCase() === 'si' ? ', con placa base' : ''} ${pago.urgente.toLowerCase() === 'si' ? 'y fue urgente' : ''} (*${pago.pruebaTerminada ? pago.pruebaTerminada.charAt(0).toUpperCase() + pago.pruebaTerminada.slice(1).toLowerCase() : 'Terminada'}*)\n`;
      shareText += `*Material*: ${pago.material || ''}\n`;
      shareText += `*Total a Cobrar*: $${(+pago.totalPorCobrar).toLocaleString('es-MX', { minimumFractionDigits: 2 })}\n`;

      if (index < pagosFilter.length - 1) {
        shareText += '--------------------------------\n\n';
      }
    });

    // Total general
    const totalGeneral = pagosFilter.reduce((sum, pago) => sum + (+pago.totalPorCobrar || 0), 0);
    shareText += '\n--------------------------------\n';
    const totalFormatted = totalGeneral
      .toLocaleString('es-MX', { minimumFractionDigits: 2 })
      .replace(/,/g, ''); // elimina las comas

    shareText += `*TOTAL: $${totalFormatted}*\n`;

    // Codificar el texto para URL de WhatsApp
    const encodedText = encodeURIComponent(shareText);

    // Abrir WhatsApp con el texto
    window.open(`https://wa.me/?text=${encodedText}`, '_blank');
  }

}
