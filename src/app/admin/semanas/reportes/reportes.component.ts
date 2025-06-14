import { ChangeDetectorRef, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { NgClass, CommonModule, DatePipe } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { BreadcrumbComponent } from '@shared/components/breadcrumb/breadcrumb.component';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Observable, Subscription } from 'rxjs';
import { Pago } from '../componentes/pago.model';
import { FirestoreService } from '@core/service/firestore.service';
import { Router } from '@angular/router';
import { ExcelService } from '@core/service/excel.service';
import { AlertService } from '@core/service/alert.service';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatExpansionModule } from '@angular/material/expansion';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';

declare module 'jspdf' {
  interface jsPDF {
    autoTable: (options: any) => jsPDF;
  }
}

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.scss'],
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
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatExpansionModule
  ],
})
export class ReportesComponent implements OnDestroy {
  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;
  @ViewChild('filter', { static: true })
  filter!: ElementRef;
  dataSource!: MatTableDataSource<any>;
  id!: number;
  subscriptions: Subscription = new Subscription();
  pagos: Pago[] = [];
  pagosFilter: Pago[] = [];
  dataObs$!: Observable<any>;

  // Filtros
  searchControl = new FormControl('');
  consultorioControl = new FormControl('');
  semanaControl = new FormControl('');
  estadoControl = new FormControl('');
  pagadoControl = new FormControl('');
  urgenteControl = new FormControl('');
  fechaRegistroInicioControl = new FormControl('');
  fechaRegistroFinControl = new FormControl('');
  fechaEntregaInicioControl = new FormControl('');
  fechaEntregaFinControl = new FormControl('');
  tonoControl = new FormControl('');
  materialControl = new FormControl('');

  // Opciones para los selects
  consultorios: any = [];
  semanas: any = [];
  estados: string[] = ['prueba', 'terminada'];
  pagadoOptions: string[] = ['SI', 'NO'];
  urgenteOptions: string[] = ['SI', 'NO'];
  tonos: string[] = [];
  materiales: string[] = [];

  // Para el panel de filtros en móvil
  panelOpenState = false;

  availableColumns = [
    'semana',
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
  ];
  displayedColumns = [
    'semana',
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
  ];

  constructor(
    private db: FirestoreService,
    private _changeDetectorRef: ChangeDetectorRef,
    private router: Router,
    private excelService: ExcelService,
    private alertService: AlertService
  ) {
    this.getPagos();
    this.setupFilterListeners();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  getPagos() {
    const query = this.db.getCollOrderBy('pagos', 'semana', 'desc');
    this.subscriptions.add(
      query.subscribe({
        next: async (pagos: Pago[]) => {
          for (let i = 0; i < pagos.length; i++) {
            pagos[i].trabajoAnterior ||= null;
            pagos[i].trabajoReferencia ||= null;
            pagos[i].urgente ||= 'NO';
            pagos[i].placaBase ||= 'NO';
            pagos[i].pagado ||= 'NO';
          }
          this.pagos = pagos;
          this.pagosFilter = this.pagos;

          // Extraer opciones únicas para los filtros
          this.consultorios = [...new Set(pagos.map((p: any) => p.consultorio))];
          this.semanas = [...new Set(pagos.map((p: any) => p.semana))].sort((a: any, b: any) => {
            // Ordenar semanas de más reciente a más antigua
            const numA = parseInt(a.replace('semana ', ''));
            const numB = parseInt(b.replace('semana ', ''));
            return numB - numA;
          });
          this.tonos = [...new Set(pagos.map((p: any) => p.tono).filter((t: any) => t))];
          this.materiales = [...new Set(pagos.map((p: any) => p.material).filter((m: any) => m))];

          this.setPagination(this.pagos);
        },
        error: (err: any) => console.log(err),
      })
    );
  }

  setupFilterListeners() {
    // Escuchar cambios en todos los filtros
    this.searchControl.valueChanges.subscribe(() => this.applyFilters());
    this.consultorioControl.valueChanges.subscribe(() => this.applyFilters());
    this.semanaControl.valueChanges.subscribe(() => this.applyFilters());
    this.estadoControl.valueChanges.subscribe(() => this.applyFilters());
    this.pagadoControl.valueChanges.subscribe(() => this.applyFilters());
    this.urgenteControl.valueChanges.subscribe(() => this.applyFilters());
    this.fechaRegistroInicioControl.valueChanges.subscribe(() => this.applyFilters());
    this.fechaRegistroFinControl.valueChanges.subscribe(() => this.applyFilters());
    this.fechaEntregaInicioControl.valueChanges.subscribe(() => this.applyFilters());
    this.fechaEntregaFinControl.valueChanges.subscribe(() => this.applyFilters());
    this.tonoControl.valueChanges.subscribe(() => this.applyFilters());
    this.materialControl.valueChanges.subscribe(() => this.applyFilters());
  }

  applyFilters() {
    let filteredData = [...this.pagosFilter];

    // Aplicar filtro de búsqueda general
    const searchTerm = this.searchControl.value?.toLowerCase() || '';
    if (searchTerm) {
      filteredData = filteredData.filter((pago: any) => (
        pago.noContrato?.toLowerCase().includes(searchTerm) ||
        (pago.trabajo?.toLowerCase().includes(searchTerm)) ||
        (pago.consultorio?.toLowerCase().includes(searchTerm)) ||
        (pago.material?.toLowerCase().includes(searchTerm))
      ))
    }

    // Aplicar filtros específicos
    if (this.consultorioControl.value) {
      filteredData = filteredData.filter(pago => pago.consultorio === this.consultorioControl.value);
    }

    if (this.semanaControl.value) {
      filteredData = filteredData.filter(pago => pago.semana === this.semanaControl.value);
    }

    if (this.estadoControl.value) {
      filteredData = filteredData.filter(pago => pago.pruebaTerminada === this.estadoControl.value);
    }

    if (this.pagadoControl.value) {
      filteredData = filteredData.filter(pago => pago.pagado === this.pagadoControl.value);
    }

    if (this.urgenteControl.value) {
      filteredData = filteredData.filter(pago => pago.urgente === this.urgenteControl.value);
    }

    // Filtro por tono
    if (this.tonoControl.value) {
      filteredData = filteredData.filter(pago => pago.tono === this.tonoControl.value);
    }

    // Filtro por material
    if (this.materialControl.value) {
      filteredData = filteredData.filter(pago => pago.material === this.materialControl.value);
    }

    // Filtro por fecha de registro
    if (this.fechaRegistroInicioControl.value) {
      const startDate = new Date(this.fechaRegistroInicioControl.value);
      startDate.setHours(0, 0, 0, 0);

      filteredData = filteredData.filter(pago => {
        if (!pago.fechaRegistro?.seconds) return false;
        const registroDate = new Date(pago.fechaRegistro.seconds * 1000);
        return registroDate >= startDate;
      });
    }

    if (this.fechaRegistroFinControl.value) {
      const endDate = new Date(this.fechaRegistroFinControl.value);
      endDate.setHours(23, 59, 59, 999);

      filteredData = filteredData.filter(pago => {
        if (!pago.fechaRegistro?.seconds) return false;
        const registroDate = new Date(pago.fechaRegistro.seconds * 1000);
        return registroDate <= endDate;
      });
    }

    // Filtro por fecha de entrega
    if (this.fechaEntregaInicioControl.value) {
      const startDate = new Date(this.fechaEntregaInicioControl.value);
      startDate.setHours(0, 0, 0, 0);

      filteredData = filteredData.filter(pago => {
        if (!pago.fechaEntrega?.seconds) return false;
        const entregaDate = new Date(pago.fechaEntrega.seconds * 1000);
        return entregaDate >= startDate;
      });
    }

    if (this.fechaEntregaFinControl.value) {
      const endDate = new Date(this.fechaEntregaFinControl.value);
      endDate.setHours(23, 59, 59, 999);

      filteredData = filteredData.filter(pago => {
        if (!pago.fechaEntrega?.seconds) return false;
        const entregaDate = new Date(pago.fechaEntrega.seconds * 1000);
        return entregaDate <= endDate;
      });
    }

    this.pagos = filteredData;
    this.setPagination(this.pagos);
  }

  resetFilters() {
    this.searchControl.reset('');
    this.consultorioControl.reset('');
    this.semanaControl.reset('');
    this.estadoControl.reset('');
    this.pagadoControl.reset('');
    this.urgenteControl.reset('');
    this.fechaRegistroInicioControl.reset('');
    this.fechaRegistroFinControl.reset('');
    this.fechaEntregaInicioControl.reset('');
    this.fechaEntregaFinControl.reset('');
    this.tonoControl.reset('');
    this.materialControl.reset('');
    this.pagos = [...this.pagosFilter];
    this.setPagination(this.pagos);
  }

  setPagination(tableData: Pago[]) {
    this.dataSource = new MatTableDataSource<Pago>(tableData);
    this._changeDetectorRef.detectChanges();
    this.dataSource.paginator = this.paginator;
    this.dataObs$ = this.dataSource.connect();
  }

  toggleColumn(column: string) {
    const index = this.displayedColumns.indexOf(column);
    if (index > -1) {
      this.displayedColumns.splice(index, 1);
    } else {
      this.displayedColumns.splice(-1, 0, column); // Inserta antes de acciones
    }
  }

  // En tu componente
  generatePDF() {
    const pagosFilter = this.pagos.filter((res: any) => Number(res.totalPorCobrar || 0) > 0)
    const doc = new jsPDF();

    // Configuración del documento
    doc.setFont('helvetica');
    doc.setFontSize(18);
    doc.setTextColor(40, 40, 40);
    doc.text('Reporte de Trabajos', 105, 15, { align: 'center' });

    // Datos para la tabla
    const headers = [
      ['Semana', 'No. Contrato', 'Consultorio', 'Trabajo', 'Total Cobrado']
    ];

    const body = pagosFilter.map(pago => [
      pago.semana || 'N/A',
      pago.noContrato || 'N/A',
      pago.consultorio || 'N/A',
      pago.trabajo || 'N/A',
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
        1: { cellWidth: 25, halign: 'center' },
        2: { cellWidth: 35 },
        3: { cellWidth: 'auto' },
        4: { cellWidth: 30, halign: 'right' }
      }
    });

    // Pie de página
    const total = pagosFilter.reduce((sum, pago) => sum + (+pago.totalPorCobrar || 0), 0);
    doc.setFontSize(12); // Aumentar el tamaño de fuente (de 10 a 12)
    doc.setFont('helvetica', 'bold'); // Establecer fuente en negrita
    doc.text(
      `TOTAL GENERAL COBRADO: $${total.toLocaleString('es-MX', { minimumFractionDigits: 2 })}`,
      14,
      (doc as any).lastAutoTable.finalY + 10
    );

    // Guardar PDF
    doc.save(`reporte_trabajos_${new Date().toISOString().slice(0, 10)}.pdf`);
  }

  shareViaWhatsApp() {
    // Crear el texto para compartir
    const pagosFilter = this.pagos.filter((res: any) => Number(res.totalPorCobrar || 0) > 0)
    let shareText = '📋 *Reporte de Trabajos* 📋\n\n';
    shareText += `📅 Generado el: ${new Date().toLocaleDateString()}\n\n`;
    shareText += '--------------------------------\n\n';
    // Agregar cada trabajo al texto
    pagosFilter.forEach((pago, index) => {
      shareText += `*Semana*: ${pago.semana || 'N/A'}\n`;
      shareText += `*No. Contrato*: ${pago.noContrato || 'N/A'}\n`;
      shareText += `*Consultorio*: ${pago.consultorio || 'N/A'}\n`;
      shareText += `*Trabajo*: ${pago.trabajo || 'N/A'}\n`;
      shareText += `*Total Cobrado*: $${(+pago.totalPorCobrar).toLocaleString('es-MX', { minimumFractionDigits: 2 })}\n`;

      if (index < pagosFilter.length - 1) {
        shareText += '--------------------------------\n\n';
      }
    });

    // Total general
    const totalGeneral = pagosFilter.reduce((sum, pago) => sum + (+pago.totalPorCobrar || 0), 0);
    shareText += '\n--------------------------------\n';
    shareText += `*TOTAL GENERAL COBRADO*: $${totalGeneral.toLocaleString('es-MX', { minimumFractionDigits: 2 })}\n`;

    // Codificar el texto para URL de WhatsApp
    const encodedText = encodeURIComponent(shareText);

    // Abrir WhatsApp con el texto
    window.open(`https://wa.me/?text=${encodedText}`, '_blank');
  }

}
