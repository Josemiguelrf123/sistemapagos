import { ChangeDetectorRef, Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { NgClass, CommonModule, DatePipe } from '@angular/common';
import { MatTabChangeEvent, MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { BreadcrumbComponent } from '@shared/components/breadcrumb/breadcrumb.component';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Observable } from 'rxjs';
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
import { FotosTrabajoComponent } from '@shared/components/fotos-trabajo/fotos-trabajo.component';

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
    MatSelectModule,
     FeatherIconsComponent,
     FotosTrabajoComponent
  ],
})
export class ListadoSemanasComponent {
  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;
  @ViewChild('filter', { static: true })
  filter!: ElementRef;
  dataSource!: MatTableDataSource<any>;
  id!: number;
  // subscriptions: Subscription = new Subscription();
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
    'imagenes',
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
    'imagenes',
    'actions'
  ];
  semanas: any = [];
  semanaSelect = '';
  mostrarModal = false;
  selectedItem!: Pago;
  selectedItem1!: Pago;
  modalImagenesAbierto = false;
  trabajoImagenesSeleccionado: any = null;
  fotoViewerAbierto = false;
  fotosViewer: any[] = [];
  indiceFotoViewer = 0;
  zoomFotoViewer = 1;
  posicionXFotoViewer = 0;
  posicionYFotoViewer = 0;
  arrastrandoFotoViewer = false;
  inicioArrastreX = 0;
  inicioArrastreY = 0;
  distanciaInicialPinch = 0;
  zoomInicialPinch = 1;
  dedosIniciales = 0;
  puntoPinchX = 0;
  puntoPinchY = 0;
  arrastrandoTouch = false;
  inicioTouchX = 0;
  inicioTouchY = 0;
  totalGeneral = 0;
  totalPartida1 = 0;
  totalPartida2 = 0;
  anios: number[] = [];
  anioSeleccionado!: number;
  selectedTabIndex = 0;

  constructor(
    private db: FirestoreService,
    private _changeDetectorRef: ChangeDetectorRef,
    private router: Router,
    private filterSvc: FilterTableService,
    private excelService: ExcelService,
    private alertService: AlertService
  ) {
    const anioActual = new Date().getFullYear();
    for (let anio = 2025; anio <= anioActual; anio++) {
      this.anios.push(anio);
    }

    this.anioSeleccionado = anioActual;
    this.getPagos();
  }

  // ngOnDestroy(): void {
  //   this.subscriptions.unsubscribe();
  // }

  async getPagos() {
    // const data: any[] = [];
    // const collRef1 = await this.db.asyncColl(
    //   'pagos',
    // );
    // collRef1.forEach((doc) => data.push(doc.data()));
    // for (const d of data){
    //   await this.db.updateDoc({ years: 2025 }, 'pagos', d.id);
    // }
    // console.log(data);
    // return
    const pagos: any[] = [];
    const collRef = await this.db.asyncCollWhereOrderBy(
      'pagos',
      'years',
      '==',
      this.anioSeleccionado,
      'fechaRegistro',
      'desc'
    );
    collRef.forEach((doc) => pagos.push(doc.data()));
    this.alertService.alertClose();
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
    if (this.semanas.length > 0) {
      const ultimaSemana = semanasUnicasOrdenadas[0];
      this.selectedTabIndex = 0;
      this.semanaSelect = ultimaSemana;
      this.pagos = this.pagosTodos.filter(
        (res: Pago) => res.semana === this.semanaSelect
      );
    } else {
      this.selectedTabIndex = 0;
      this.semanaSelect = '';
      this.pagos = [];
    }

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

    // const query = this.db.getCollOrderBy('pagos', 'fechaRegistro', 'desc');
    // this.subscriptions.add(
    //   query.subscribe({
    //     next: async (pagos: any) => {
    //       for (let i = 0; i < pagos.length; i++) {
    //         pagos[i].trabajoAnterior ||= null;
    //         pagos[i].trabajoReferencia ||= null;
    //         pagos[i].partida ||= 'Partida 1';
    //       }
    //       this.pagosTodos = pagos;
    //       const semanas = this.pagosTodos.map((res: Pago) => res.semana);
    //       const semanasUnicasOrdenadas = [...new Set(semanas)].sort((a, b) => {
    //         const numA = parseInt(a.replace(/\D/g, ''));
    //         const numB = parseInt(b.replace(/\D/g, ''));
    //         return numB - numA;
    //       });
    //       this.semanas = semanasUnicasOrdenadas;
    //       const ultimaSemana = semanasUnicasOrdenadas[0];
    //       this.semanaSelect = ultimaSemana;
    //       this.pagos = this.pagosTodos.filter((res: Pago) => res.semana === ultimaSemana);
    //       this.pagosFilter = this.pagos;
    //       this.totalGeneral = this.pagos.reduce(
    //         (sum: any, value: any) => sum + Number(value.totalPorCobrar),
    //         0
    //       );
    //       this.totalPartida1 = this.pagos.reduce(
    //         (sum: number, value: any) => {
    //           return value.partida === 'Partida 1'
    //             ? sum + Number(value.totalPorCobrar)
    //             : sum;
    //         },
    //         0
    //       );
    //       this.totalPartida2 = this.pagos.reduce(
    //         (sum: number, value: any) => {
    //           return value.partida === 'Partida 2'
    //             ? sum + Number(value.totalPorCobrar)
    //             : sum;
    //         },
    //         0
    //       );
    //       this.setPagination(this.pagos);
    //     },
    //     error: (err: any) => console.log(err),
    //   })
    // );
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
      this.getPagos();
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

  tieneFotografias(fotografias: any): boolean {
    return Boolean(
      fotografias?.revision?.length || fotografias?.entrega?.length,
    );
  }

  abrirModalImagenes(trabajo: any): void {
    if (!trabajo?.fotografias?.revision?.length && !trabajo?.fotografias?.entrega?.length) {
      return;
    }

    this.trabajoImagenesSeleccionado = trabajo;
    this.modalImagenesAbierto = true;
  }

  cerrarModalImagenes(): void {
    this.modalImagenesAbierto = false;
    this.trabajoImagenesSeleccionado = null;
  }

  getFotoViewUrl(foto: any): string {
    return foto?.fileId
      ? `https://drive.google.com/thumbnail?id=${foto.fileId}&sz=w1200`
      : '';
  }

  abrirFotoViewer(fotos: any[], indice: number): void {
    if (!fotos?.length) {
      return;
    }

    this.fotosViewer = fotos;
    this.indiceFotoViewer = indice;
    this.fotoViewerAbierto = true;
    this.reiniciarPosicionFoto();
  }

  cerrarFotoViewer(): void {
    this.fotoViewerAbierto = false;
    this.fotosViewer = [];
    this.indiceFotoViewer = 0;
    this.reiniciarPosicionFoto();
  }

  fotoAnterior(): void {
    if (this.fotosViewer.length === 0) {
      return;
    }

    this.indiceFotoViewer = this.indiceFotoViewer === 0
      ? this.fotosViewer.length - 1
      : this.indiceFotoViewer - 1;
    this.reiniciarPosicionFoto();
  }

  fotoSiguiente(): void {
    if (this.fotosViewer.length === 0) {
      return;
    }

    this.indiceFotoViewer = this.indiceFotoViewer === this.fotosViewer.length - 1
      ? 0
      : this.indiceFotoViewer + 1;
    this.reiniciarPosicionFoto();
  }

  acercarFoto(): void {
    this.zoomFotoViewer = Math.min(3, this.zoomFotoViewer + 0.25);
  }

  alejarFoto(): void {
    this.zoomFotoViewer = Math.max(1, this.zoomFotoViewer - 0.25);
  }

  restablecerZoom(): void {
    this.reiniciarPosicionFoto();
  }

  reiniciarPosicionFoto(): void {
    this.zoomFotoViewer = 1;
    this.posicionXFotoViewer = 0;
    this.posicionYFotoViewer = 0;
  }

  getFotoViewerUrl(): string {
    return this.getFotoViewUrl(this.fotosViewer[this.indiceFotoViewer]);
  }

  zoomConRueda(event: WheelEvent): void {
    event.preventDefault();
    const contenedor = event.currentTarget as HTMLElement;
    const rect = contenedor.getBoundingClientRect();
    const cursorX = event.clientX - rect.left - rect.width / 2;
    const cursorY = event.clientY - rect.top - rect.height / 2;
    const zoomAnterior = this.zoomFotoViewer;
    const nuevoZoom = Math.min(8, Math.max(1, zoomAnterior + (event.deltaY < 0 ? 0.2 : -0.2)));

    if (nuevoZoom === zoomAnterior) {
      return;
    }

    const factor = nuevoZoom / zoomAnterior;
    this.posicionXFotoViewer = cursorX - (cursorX - this.posicionXFotoViewer) * factor;
    this.posicionYFotoViewer = cursorY - (cursorY - this.posicionYFotoViewer) * factor;
    this.zoomFotoViewer = nuevoZoom;
    this.limitarPosicionFoto();
  }

  iniciarArrastre(event: MouseEvent): void {
    if (this.zoomFotoViewer <= 1) {
      return;
    }

    this.arrastrandoFotoViewer = true;
    this.inicioArrastreX = event.clientX - this.posicionXFotoViewer;
    this.inicioArrastreY = event.clientY - this.posicionYFotoViewer;
  }

  moverFoto(event: MouseEvent): void {
    if (!this.arrastrandoFotoViewer) {
      return;
    }

    this.posicionXFotoViewer = event.clientX - this.inicioArrastreX;
    this.posicionYFotoViewer = event.clientY - this.inicioArrastreY;
    this.limitarPosicionFoto();
  }

  terminarArrastre(): void {
    this.arrastrandoFotoViewer = false;
  }

  obtenerDistanciaEntreDedos(touches: TouchList): number {
    const dedo1 = touches[0];
    const dedo2 = touches[1];
    const dx = dedo2.clientX - dedo1.clientX;
    const dy = dedo2.clientY - dedo1.clientY;
    return Math.sqrt(dx * dx + dy * dy);
  }

  iniciarPinch(event: TouchEvent): void {
    if (event.touches.length !== 2) {
      return;
    }

    event.preventDefault();
    const contenedor = event.currentTarget as HTMLElement;
    const rect = contenedor.getBoundingClientRect();
    const dedo1 = event.touches[0];
    const dedo2 = event.touches[1];
    this.puntoPinchX = (dedo1.clientX + dedo2.clientX) / 2 - rect.left - rect.width / 2;
    this.puntoPinchY = (dedo1.clientY + dedo2.clientY) / 2 - rect.top - rect.height / 2;
    this.dedosIniciales = this.obtenerDistanciaEntreDedos(event.touches);
    this.zoomInicialPinch = this.zoomFotoViewer;
  }

  moverPinch(event: TouchEvent): void {
    if (event.touches.length !== 2 || this.dedosIniciales === 0) {
      return;
    }

    event.preventDefault();
    const distanciaActual = this.obtenerDistanciaEntreDedos(event.touches);
    const factor = distanciaActual / this.dedosIniciales;
    const zoomAnterior = this.zoomFotoViewer;
    const nuevoZoom = Math.min(8, Math.max(1, this.zoomInicialPinch * factor));

    if (nuevoZoom === zoomAnterior) {
      return;
    }

    const factorZoom = nuevoZoom / zoomAnterior;
    this.posicionXFotoViewer = this.puntoPinchX - (this.puntoPinchX - this.posicionXFotoViewer) * factorZoom;
    this.posicionYFotoViewer = this.puntoPinchY - (this.puntoPinchY - this.posicionYFotoViewer) * factorZoom;
    this.zoomFotoViewer = nuevoZoom;
    this.limitarPosicionFoto();
  }

  terminarPinch(): void {
    this.dedosIniciales = 0;
  }

  iniciarArrastreTouch(event: TouchEvent): void {
    if (event.touches.length !== 1 || this.zoomFotoViewer <= 1) {
      return;
    }

    event.preventDefault();
    const touch = event.touches[0];
    this.arrastrandoTouch = true;
    this.inicioTouchX = touch.clientX - this.posicionXFotoViewer;
    this.inicioTouchY = touch.clientY - this.posicionYFotoViewer;
  }

  moverArrastreTouch(event: TouchEvent): void {
    if (!this.arrastrandoTouch || event.touches.length !== 1) {
      return;
    }

    event.preventDefault();
    const touch = event.touches[0];
    this.posicionXFotoViewer = touch.clientX - this.inicioTouchX;
    this.posicionYFotoViewer = touch.clientY - this.inicioTouchY;
    this.limitarPosicionFoto();
  }

  terminarArrastreTouch(): void {
    this.arrastrandoTouch = false;
  }

  limitarPosicionFoto(): void {
    if (this.zoomFotoViewer <= 1) {
      this.posicionXFotoViewer = 0;
      this.posicionYFotoViewer = 0;
      return;
    }

    const contenedor = document.querySelector('.photo-viewer-image-container') as HTMLElement | null;
    const imagen = document.querySelector('.photo-viewer-image') as HTMLImageElement | null;

    if (!contenedor || !imagen) {
      return;
    }

    const limiteX = Math.max(0, (imagen.clientWidth * this.zoomFotoViewer - contenedor.clientWidth) / 2);
    const limiteY = Math.max(0, (imagen.clientHeight * this.zoomFotoViewer - contenedor.clientHeight) / 2);
    this.posicionXFotoViewer = Math.max(-limiteX, Math.min(limiteX, this.posicionXFotoViewer));
    this.posicionYFotoViewer = Math.max(-limiteY, Math.min(limiteY, this.posicionYFotoViewer));
  }

  imagenViewerCargada(): void {
    setTimeout(() => this.limitarPosicionFoto());
  }

  @HostListener('window:resize')
  ajustarViewerAlCambiarPantalla(): void {
    if (this.fotoViewerAbierto) {
      setTimeout(() => this.limitarPosicionFoto());
    }
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
    doc.text(`Reporte de Trabajos ${this.semanaSelect} - ${this.anioSeleccionado}${select === '' || select === 'total' ? ' (General)' : " (" + select + ")"}`, 148.5, 15, { align: 'center' });

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
    doc.save(`reporte_trabajos_${this.semanaSelect}_${this.anioSeleccionado}_${select === '' || select === 'total' ? 'General' : select}.pdf`);
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

  cargarPorAnio() {
    this.semanas = [];
    this.pagos = [];
    this.pagosFilter = [];
    this.semanaSelect = '';
    this.selectedTabIndex = 0;
    this.alertService.loanding('Cargando datos...')
    this.getPagos();
  }

}
