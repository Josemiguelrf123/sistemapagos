import { FotosTrabajoComponent } from './../../../shared/components/fotos-trabajo/fotos-trabajo.component';
import { Component, HostListener } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
  FormsModule,
  ReactiveFormsModule,
  UntypedFormControl,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { ActivatedRoute, Router } from '@angular/router';
import { Pago } from '../componentes/pago.model';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatRadioModule } from '@angular/material/radio';
import { DatePipe } from '@angular/common';
import { BreadcrumbComponent } from '../../../shared/components/breadcrumb/breadcrumb.component';
import { FirestoreService } from '../../../core/service/firestore.service';
import { AlertService } from '../../../core/service/alert.service';
import { GoogleDriveService } from '../../../core/service/google-drive.service';
@Component({
  selector: 'app-nuevo-trabajo',
  templateUrl: './nuevo-trabajo.component.html',
  styleUrls: ['./nuevo-trabajo.component.scss'],
  standalone: true,
  imports: [
    BreadcrumbComponent,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatDatepickerModule,
    MatButtonModule,
    MatTabsModule,
    MatIconModule,
    MatAutocompleteModule,
    MatTableModule,
    MatCheckboxModule,
    MatCardModule,
    MatChipsModule,
    MatRadioModule,
    DatePipe,
    FotosTrabajoComponent,
  ],
})
export class NuevoTrabajoComponent {
  @HostListener('window:resize')
  onWindowResize(): void {
    this.ajustarViewerAlCambiarPantalla();
  }

  pagosForm!: UntypedFormGroup;
  pago!: Pago;
  edit = false;
  id = '';
  semanas: any = [];
  semanasFilter: any = [];
  semanasTodasFilter: any = [];
  trabajos: any = [];
  trabajosFilter: any = [];
  tonos: any = [];
  tonosFilter: any = [];
  consultorios: any = [];
  consultoriosFilter: any = [];
  materiales: any = [];
  materialesFilter: any = [];
  mostrarModal = false;
  originalData: any = [];
  filteredData: any = [];
  searchTerm: string = '';
  displayedColumns: string[] = [
    'select',
    'semana',
    'partida',
    'noContrato',
    'consultorio',
    'trabajo',
    'tono',
    'material',
    'fechaRegistro',
    'fechaEntrega',
    'precioTotal',
    'cobrado',
    'imagenes',
  ];
  selectedItemOriginal: any = null;
  selectedItem: any = null;
  imagenesExpandida = false;
  imagenesSeleccionadaExpandida = false;
  anioActual!: number;
  fotoRevision: File[] = [];
  fotoEntrega: File[] = [];
  fotosGuardadasRevision: any[] = [];
  fotosGuardadasEntrega: any[] = [];

  previewRevision: string[] = [];
  previewEntrega: string[] = [];

  subiendoRevision = false;
  subiendoEntrega = false;

  readonly MAX_FOTOS = 10;

  readonly MAX_TAMANO_FOTO = 15 * 1024 * 1024; // 15 MB

  readonly TIPOS_FOTO_PERMITIDOS = ['image/jpeg', 'image/png', 'image/webp'];

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

  modalImagenesAbierto = false;
  trabajoImagenesSeleccionado: any = null;

  constructor(
    private fb: UntypedFormBuilder,
    private db: FirestoreService,
    private alertService: AlertService,
    private router: Router,
    private route: ActivatedRoute,
    private googleDriveService: GoogleDriveService,
  ) {
    this.getPagos();
    this.getValueTrabajos();
    this.getValueTonos();
    this.getValueConsultorios();
    this.getValueMateriales();
    this.route.params.subscribe(({ id }) => this.validarId(id));
  }

  // async guardar() {
  //   const data: any = []

  //   const convertirFecha = (obj: any, campo: string) => {
  //     if (obj?.[campo]?.seconds) {
  //       obj[campo] = new Date(obj[campo].seconds * 1000);
  //     }
  //   };
  //   for (let i = 0; i < data.length; i++) {

  //     // Fechas principales
  //     convertirFecha(data[i], 'create_at');
  //     convertirFecha(data[i], 'fechaRegistro');
  //     convertirFecha(data[i], 'fechaEntrega');

  //     // Trabajo anterior
  //     if (data[i]?.trabajoAnterior) {
  //       convertirFecha(data[i].trabajoAnterior, 'createAt');
  //       convertirFecha(data[i].trabajoAnterior, 'fechaRegistro');
  //       convertirFecha(data[i].trabajoAnterior, 'fechaEntrega');
  //     }

  //     // Trabajo referencia
  //     if (data[i]?.trabajoReferencia) {
  //       convertirFecha(data[i].trabajoReferencia, 'createAt');
  //       convertirFecha(data[i].trabajoReferencia, 'fechaRegistro');
  //       convertirFecha(data[i].trabajoReferencia, 'fechaEntrega');
  //     }

  //     await this.db.createDoc(
  //       data[i],
  //       'pagos',
  //       data[i].id
  //     );

  //     console.log('terminado--', i, 'De----', data.length);
  //   }
  //   console.log('termino------------------');
  // }

  async getValueSemanas() {
    //  const data: any[] = [];
    // const collRef1 = await this.db.asyncColl(
    //   'semanas',
    // );
    // collRef1.forEach((doc) => data.push(doc.data()));
    // for (const d of data){
    //   await this.db.updateDoc({ years: 2025 }, 'semanas', d.id);
    // }
    // console.log(data);
    // return
    this.semanas = [];

    const dataSemanas: any[] = [];
    const collRef = await this.db.asyncCollWhereOrderBy(
      'semanas',
      'years',
      '==',
      this.anioActual,
      'nombre',
      'desc',
    );
    collRef.forEach((doc) => dataSemanas.push(doc.data()));

    // 🧼 Normaliza: sin tildes, minúsculas, trim
    const normalizar = (texto: string): string =>
      texto
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .trim()
        .toLowerCase();

    // 🧹 Quitar duplicados por clave normalizada
    const mapaUnicos = new Map<string, string>();
    for (const item of dataSemanas) {
      const original = item.nombre || '';
      const clave = normalizar(original);
      if (!mapaUnicos.has(clave)) {
        mapaUnicos.set(clave, original.trim());
      }
    }

    // 🔠 Capitaliza la primera letra
    const resultadoFinal = Array.from(mapaUnicos.values()).map(
      (str) => str.charAt(0).toUpperCase() + str.slice(1),
    );

    // 🔢 Ordenar por número descendente (Semana 10 antes que Semana 2)
    const ordenadas = resultadoFinal.sort((a, b) => {
      const numA = parseInt(a.replace(/\D/g, ''), 10);
      const numB = parseInt(b.replace(/\D/g, ''), 10);

      if (!isNaN(numA) && !isNaN(numB)) return numB - numA;
      return a.localeCompare(b);
    });

    if (ordenadas.length > 0) {
      this.semanas = ordenadas;
      this.semanasFilter = [...ordenadas];
      this.getPagos();
    }
  }

  capitalizarPrimeraLetra(texto: string): string {
    texto = texto.trim().toLowerCase();
    return texto.charAt(0).toUpperCase() + texto.slice(1);
  }

  async getPagos() {
    const dataPagos: any = [];
    const collRef = await this.db.asyncCollWhereOrderBy(
      'pagos',
      'pagado',
      '!=',
      'SI',
      'fechaRegistro',
      'desc',
    );
    collRef.forEach((pagos) => dataPagos.push(pagos.data()));
    dataPagos.forEach((item: Pago) => {
      item.partida ||= 'Partida 1';
      item.semana = this.capitalizarPrimeraLetra(item.semana);
      item.consultorio = this.capitalizarPrimeraLetra(item.consultorio);
      item.trabajo = this.capitalizarPrimeraLetra(item.trabajo);
      item.material = this.capitalizarPrimeraLetra(item.material);
      item.tono = item.tono !== '' ? item.tono.toLocaleUpperCase() : item.tono;
      item.fotografias ??= {
        revision: [],
        entrega: [],
      };
    });

    this.originalData = dataPagos.filter(
      (res: any) => res.semana !== this.semanas[0],
    );
    this.filteredData = [...this.originalData];
  }

  async getValueTrabajos() {
    this.trabajos = [];

    const dataTrabajos: any[] = [];
    const collRef = await this.db.asyncCollOrderBy('trabajos', 'nombre', 'asc');
    collRef.forEach((doc) => dataTrabajos.push(doc.data()));

    // 🔤 Normalizar para comparar: quitar acentos, minúsculas, trim
    const normalizar = (texto: string): string =>
      texto
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .trim()
        .toLowerCase();

    // ✍️ Capitalizar cada palabra (Ej: "limpieza dental" → "Limpieza Dental")
    const capitalizar = (texto: string): string =>
      texto
        .toLowerCase()
        .split(' ')
        .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
        .join(' ');

    // 🧹 Eliminar duplicados con un Map
    const mapaUnicos = new Map<string, string>();
    for (const item of dataTrabajos) {
      const original = item.nombre || '';
      const clave = normalizar(original);
      if (!mapaUnicos.has(clave)) {
        mapaUnicos.set(clave, original.trim());
      }
    }

    const resultadoFinal = Array.from(mapaUnicos.values()).map(capitalizar);

    // 🔢 Ordenar por número si hay, si no alfabéticamente
    const ordenadas = resultadoFinal.sort((a, b) => {
      const numA = parseInt(a.replace(/\D/g, ''), 10);
      const numB = parseInt(b.replace(/\D/g, ''), 10);

      if (!isNaN(numA) && !isNaN(numB)) return numB - numA;
      return a.localeCompare(b);
    });

    this.trabajos = ordenadas;
    this.trabajosFilter = [...ordenadas];
  }

  async getValueTonos() {
    this.tonos = [];

    const dataTonos: any[] = [];
    const collRef = await this.db.asyncCollOrderBy('tonos', 'nombre', 'asc');
    collRef.forEach((doc) => dataTonos.push(doc.data()));

    // 🔤 Normaliza: quita acentos, pasa a minúsculas, recorta espacios
    const normalizar = (texto: string): string =>
      texto
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .trim()
        .toLowerCase();

    // 🧹 Eliminar duplicados basados en versión sin acentos
    const mapaUnicos = new Map<string, string>();
    for (const item of dataTonos) {
      const original = item.nombre || '';
      const clave = normalizar(original);
      if (!mapaUnicos.has(clave)) {
        mapaUnicos.set(clave, original.trim());
      }
    }

    // 🔠 Convertir a MAYÚSCULAS como lo pediste
    const resultadoFinal = Array.from(mapaUnicos.values()).map((str) =>
      str.toUpperCase(),
    );

    // 🔢 Ordenar por número si hay, si no alfabéticamente
    const ordenadas = resultadoFinal.sort((a, b) => {
      const numA = parseInt(a.replace(/\D/g, ''), 10);
      const numB = parseInt(b.replace(/\D/g, ''), 10);

      if (!isNaN(numA) && !isNaN(numB)) return numB - numA;
      return a.localeCompare(b);
    });

    this.tonos = ordenadas;
    this.tonosFilter = [...ordenadas];
  }

  async getValueConsultorios() {
    this.consultorios = [];

    const dataConsultorios: any[] = [];
    const collRef = await this.db.asyncCollOrderBy(
      'consultorios',
      'nombre',
      'asc',
    );
    collRef.forEach((doc) => dataConsultorios.push(doc.data()));

    // Función para limpiar (quita acentos, espacios, minúsculas)
    const normalizar = (texto: string): string =>
      texto
        .normalize('NFD') // separa letras acentuadas
        .replace(/[\u0300-\u036f]/g, '') // elimina los acentos
        .trim()
        .toLowerCase();

    // Mapear y eliminar duplicados usando clave normalizada
    const mapaUnicos = new Map<string, string>();

    for (const item of dataConsultorios) {
      const original = item.nombre || '';
      const clave = normalizar(original);
      if (!mapaUnicos.has(clave)) {
        mapaUnicos.set(clave, original.trim());
      }
    }

    // Capitalizar la primera letra de cada palabra (ej: "La Merced")
    const capitalizar = (str: string): string =>
      str
        .toLowerCase()
        .split(' ')
        .map((palabra) => palabra.charAt(0).toUpperCase() + palabra.slice(1))
        .join(' ');

    const resultadoFinal = Array.from(mapaUnicos.values()).map(capitalizar);

    // Ordenar por número si existe, si no por nombre
    const ordenadas = resultadoFinal.sort((a, b) => {
      const numA = parseInt(a.replace(/\D/g, ''), 10);
      const numB = parseInt(b.replace(/\D/g, ''), 10);

      if (!isNaN(numA) && !isNaN(numB)) return numB - numA;
      return a.localeCompare(b);
    });

    this.consultorios = ordenadas;
    this.consultoriosFilter = [...ordenadas];
  }

  async getValueMateriales() {
    this.materiales = [];

    const dataMateriales: any[] = [];
    const collRef = await this.db.asyncCollOrderBy(
      'materiales',
      'nombre',
      'asc',
    );
    collRef.forEach((material) => dataMateriales.push(material.data()));

    // 🔧 Función para limpiar: quita acentos, minúsculas, trim
    const normalizar = (texto: string): string =>
      texto
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .trim()
        .toLowerCase();

    // 🧹 Paso 1: quitar duplicados con Set usando versión normalizada
    const mapaUnicos = new Map<string, string>(); // clave: limpio, valor: original

    for (const material of dataMateriales) {
      const nombreOriginal = material.nombre || '';
      const claveNormalizada = normalizar(nombreOriginal);
      if (!mapaUnicos.has(claveNormalizada)) {
        mapaUnicos.set(claveNormalizada, nombreOriginal.trim());
      }
    }

    // ✍️ Paso 2: capitalizar correctamente (solo la primera letra)
    const resultadoFinal = Array.from(mapaUnicos.values()).map(
      (str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase(),
    );

    // 📊 Paso 3: ordenar (por número si hay, si no alfabético)
    const ordenadas = resultadoFinal.sort((a, b) => {
      const numA = parseInt(a.replace(/\D/g, ''), 10);
      const numB = parseInt(b.replace(/\D/g, ''), 10);

      if (!isNaN(numA) && !isNaN(numB)) {
        return numB - numA; // mayor a menor si tienen número
      }

      return a.localeCompare(b); // si no, orden alfabético
    });

    this.materiales = ordenadas;
    this.materialesFilter = [...ordenadas];
  }

  validarId(id: string) {
    this.id = id;
    if (id !== 'agregar') {
      this.obtenerInformacion(id);
    } else {
      this.anioActual = new Date().getFullYear();
      const blankObject = {} as Pago;
      this.pago = new Pago(blankObject);
      this.fotosGuardadasRevision = [];
      this.fotosGuardadasEntrega = [];
      this.crearFormulario();
      this.getValueSemanas();
    }
  }

  async obtenerInformacion(id: string) {
    try {
      const doc = await this.db.asyncDoc('pagos', id);
      this.pago = doc.data() as Pago;
      const fotografias = (this.pago as any).fotografias || {};

      this.fotosGuardadasRevision = fotografias.revision || [];
      this.fotosGuardadasEntrega = fotografias.entrega || [];
      this.pago.partida ||= 'Partida 1';
      this.pago.trabajoAnterior ||= null;
      this.pago.fechaEntrega ||= '';
      this.anioActual = this.pago.years;
      this.edit = true;
      if (this.pago.fechaRegistro) {
        this.pago.fechaRegistro = new Date(
          this.pago.fechaRegistro.seconds * 1000,
        );
      }
      if (this.pago.fechaEntrega) {
        this.pago.fechaEntrega = new Date(
          this.pago.fechaEntrega.seconds * 1000,
        );
      }
      this.selectedItem = this.pago.trabajoAnterior;
      this.selectedItemOriginal = JSON.parse(
        JSON.stringify(this.pago.trabajoAnterior),
      );
      this.getValueSemanas();
      this.crearFormulario();
    } catch (error) {
      console.log(error);
    }
  }

  crearFormulario() {
    this.pagosForm = this.createContactForm();
    this.pagosForm.get('semana')?.valueChanges.subscribe((value) => {
      this._filterProvSemanas(value || '');
    });
    this.pagosForm.get('trabajo')?.valueChanges.subscribe((value) => {
      this._filterProvTrabajos(value || '');
    });
    this.pagosForm.get('tono')?.valueChanges.subscribe((value) => {
      this._filterProvTonos(value || '');
    });
    this.pagosForm.get('consultorio')?.valueChanges.subscribe((value) => {
      this._filterProvConsultorios(value || '');
    });
    this.pagosForm.get('material')?.valueChanges.subscribe((value) => {
      this._filterProvMateriales(value || '');
    });
  }

  formControl = new UntypedFormControl('', [Validators.required]);

  getErrorMessage() {
    return this.formControl.hasError('required')
      ? 'Campo requerido.'
      : this.formControl.hasError('email')
        ? 'No es un correo electrónico valido.'
        : '';
  }

  createContactForm(): UntypedFormGroup {
    return this.fb.group({
      id: [this.pago.id],
      semana: [this.pago.semana],
      partida: [this.pago.partida],
      noContrato: [this.pago.noContrato],
      trabajo: [this.pago.trabajo],
      tono: [this.pago.tono],
      consultorio: [this.pago.consultorio],
      fechaRegistro: [this.pago.fechaRegistro],
      fechaEntrega: [this.pago.fechaEntrega],
      material: [this.pago.material],
      pruebaTerminada: [this.pago.pruebaTerminada],
      urgente: [this.pago.urgente],
      placaBase: [this.pago.placaBase],
      precio: [this.pago.precio],
      totalPorCobrar: [this.pago.totalPorCobrar],
      pagado: [this.pago.pagado],
      observaciones: [this.pago.observaciones],
      years: [this.pago.years],
    });
  }

  async onSubmit() {
    if (this.pagosForm.controls['fechaRegistro'].value !== '') {
      this.pagosForm.controls['fechaRegistro'].setValue(
        new Date(this.pagosForm.controls['fechaRegistro'].value),
      );
    }
    if (this.pagosForm.controls['fechaEntrega'].value !== '') {
      this.pagosForm.controls['fechaEntrega'].setValue(
        new Date(this.pagosForm.controls['fechaEntrega'].value),
      );
    }

    this.id === 'agregar' ? this.guardarRegistro() : this.editarRegistro();
  }

  async guardarRegistro() {
    try {
      // ============================================================
      // 1. Mostrar cargando
      // ============================================================

      this.alertService.loanding('Registrando nuevo pago.');

      // ============================================================
      // 2. Obtener ID del nuevo trabajo
      // ============================================================

      const id = await this.db.getId();
      this.pagosForm.controls['id'].setValue(id);

      // ============================================================
      // 3. Obtener datos del formulario
      // ============================================================

      const datos: Pago = this.pagosForm.getRawValue();
      const semanaEncontrada = this.semanasFilter.find(
        (semana: any) => semana.toLowerCase() === datos.semana.toLowerCase(),
      );

      // ============================================================
      // 4. SUBIR FOTOS DE REVISIÓN
      // ============================================================

      let fotosRevision: any[] = [];

      if (this.fotoRevision.length > 0) {
        this.subiendoRevision = true;

        fotosRevision = await this.googleDriveService.subirImagenes(
          id,
          'revision',
          this.fotoRevision,
        );

        this.subiendoRevision = false;
      }

      // ============================================================
      // 5. SUBIR FOTOS DE ENTREGA
      // ============================================================

      let fotosEntrega: any[] = [];

      if (this.fotoEntrega.length > 0) {
        this.subiendoEntrega = true;

        fotosEntrega = await this.googleDriveService.subirImagenes(
          id,
          'entrega',
          this.fotoEntrega,
        );

        this.subiendoEntrega = false;
      }

      // ============================================================
      // 6. Preparar información de fotografías
      // ============================================================

      const fotografias = {
        revision: fotosRevision.map((foto: any) => ({
          fileId: foto.fileId,
          fileName: foto.fileName,
          mimeType: foto.mimeType,
          size: foto.size,
          url: foto.url,
          viewUrl: foto.viewUrl,
        })),

        entrega: fotosEntrega.map((foto: any) => ({
          fileId: foto.fileId,
          fileName: foto.fileName,
          mimeType: foto.mimeType,
          size: foto.size,
          url: foto.url,
          viewUrl: foto.viewUrl,
        })),
      };

      // ============================================================
      // 7. Guardar trabajo en Firestore
      // ============================================================

      await this.db.createDoc(
        {
          ...this.pagosForm.getRawValue(),
          createAt: new Date(),
          trabajoAnterior: this.selectedItem,
          idTrabajoAnterior: this.selectedItem ? this.selectedItem.id : '',
          semana: semanaEncontrada ? semanaEncontrada : datos.semana,
          urgente: datos.urgente === '' ? 'NO' : datos.urgente,
          placaBase: datos.placaBase === '' ? 'NO' : datos.placaBase,
          pagado: datos.pagado === '' ? 'NO' : datos.pagado,
          fotografias,
        },
        'pagos',
        id,
      );

      // ============================================================
      // 8. Continuar proceso normal
      // ============================================================

      this.cambiarValorSemana(datos, 'Nuevo trabajo guardado correctamente');
    } catch (error) {
      // ============================================================
      // 9. Restaurar estados
      // ============================================================

      this.subiendoRevision = false;
      this.subiendoEntrega = false;

      console.error('Error al guardar trabajo:', error);

      this.alertService.alertClose();

      this.alertService.toast(
        'No fue posible guardar el trabajo o subir las fotografías.',
        'snackbar-error',
      );
    }
  }

  async editarRegistro() {
    const opt = await this.alertService.alertConfirm(
      '¿Estás seguro de editar la información?',
    );

    if (!opt.isConfirmed) {
      return;
    }

    try {
      this.alertService.loanding('Modificando datos del registro de pago.');

      const datos = this.pagosForm.getRawValue();

      const semanaEncontrada = this.semanasFilter.find(
        (semana: any) => semana.toLowerCase() === datos.semana.toLowerCase(),
      );

      // ============================================================
      // 1. FOTOS EXISTENTES
      // ============================================================

      let fotosRevision = [...this.fotosGuardadasRevision];
      let fotosEntrega = [...this.fotosGuardadasEntrega];

      // ============================================================
      // 2. SUBIR NUEVAS FOTOS DE REVISIÓN
      // ============================================================

      if (this.fotoRevision.length > 0) {
        this.subiendoRevision = true;

        const nuevasFotosRevision = await this.googleDriveService.subirImagenes(
          datos.id,
          'revision',
          this.fotoRevision,
        );

        fotosRevision = [...fotosRevision, ...nuevasFotosRevision];

        this.subiendoRevision = false;
      }

      // ============================================================
      // 3. SUBIR NUEVAS FOTOS DE ENTREGA
      // ============================================================

      if (this.fotoEntrega.length > 0) {
        this.subiendoEntrega = true;

        const nuevasFotosEntrega = await this.googleDriveService.subirImagenes(
          datos.id,
          'entrega',
          this.fotoEntrega,
        );

        fotosEntrega = [...fotosEntrega, ...nuevasFotosEntrega];

        this.subiendoEntrega = false;
      }

      // ============================================================
      // 4. PREPARAR FOTOGRAFÍAS
      // ============================================================

      const fotografias = {
        revision: fotosRevision.map((foto: any) => ({
          fileId: foto.fileId,
          fileName: foto.fileName,
          mimeType: foto.mimeType,
          size: foto.size,
          url: foto.url,
          viewUrl: foto.viewUrl ?? '',
        })),

        entrega: fotosEntrega.map((foto: any) => ({
          fileId: foto.fileId,
          fileName: foto.fileName,
          mimeType: foto.mimeType,
          size: foto.size,
          url: foto.url,
          viewUrl: foto.viewUrl ?? '',
        })),
      };

      // ============================================================
      // 5. ACTUALIZAR FIRESTORE
      // ============================================================

      await this.db.updateDoc(
        {
          ...datos,

          trabajoAnterior: this.selectedItem,

          idTrabajoAnterior: this.selectedItem ? this.selectedItem.id : '',

          semana: semanaEncontrada ? semanaEncontrada : datos.semana,

          urgente: datos.urgente === '' ? 'NO' : datos.urgente,

          placaBase: datos.placaBase === '' ? 'NO' : datos.placaBase,

          pagado: datos.pagado === '' ? 'NO' : datos.pagado,

          fotografias,
        },
        'pagos',
        datos.id,
      );

      // ============================================================
      // 6. CONTINUAR PROCESO NORMAL
      // ============================================================

      this.cambiarValorSemana(
        datos,
        'Datos del trabajo modificados correctamente',
      );
    } catch (error) {
      console.log(error);

      this.subiendoRevision = false;
      this.subiendoEntrega = false;

      console.error('Error al editar trabajo o subir fotografías:', error);

      this.alertService.alertClose();

      this.alertService.toast(
        'No fue posible modificar el trabajo o subir las fotografías.',
        'snackbar-error',
      );
    }
  }

  async cambiarValorSemana(datos: any, msg: string) {
    if (this.selectedItem) {
      await this.db.updateDoc(
        { trabajoReferencia: datos, idReferencia: datos.id, pagado: 'SI' },
        'pagos',
        this.selectedItem.id,
      );
    }
    if (
      this.selectedItem &&
      this.selectedItemOriginal &&
      this.selectedItemOriginal.id !== this.selectedItem.id
    ) {
      await this.db.updateDoc(
        { trabajoReferencia: null, idReferencia: '', pagado: '' },
        'pagos',
        this.selectedItemOriginal.id,
      );
    }
    this.validarNuevos(msg, datos);
  }

  async validarNuevos(msj: string, datos: any) {
    if (
      !this.semanasFilter.some(
        (semana: any) => semana.toLowerCase() === datos.semana.toLowerCase(),
      ) &&
      datos.semana !== ''
    ) {
      const id = this.db.getId();
      await this.db.createDoc(
        {
          nombre: datos.semana,
          create_at: new Date(),
          years: this.anioActual,
          id,
        },
        'semanas',
        id,
      );
    }
    if (
      !this.trabajosFilter.some(
        (trabajo: any) => trabajo.toLowerCase() === datos.trabajo.toLowerCase(),
      ) &&
      datos.trabajo !== ''
    ) {
      const id = this.db.getId();
      await this.db.createDoc(
        { nombre: datos.trabajo, create_at: new Date(), id },
        'trabajos',
        id,
      );
    }
    if (
      !this.tonosFilter.some(
        (tono: any) => tono.toLowerCase() === datos.tono.toLowerCase(),
      ) &&
      datos.tono !== ''
    ) {
      const id = this.db.getId();
      await this.db.createDoc(
        { nombre: datos.tono, create_at: new Date(), id },
        'tonos',
        id,
      );
    }
    if (
      !this.consultoriosFilter.some(
        (consultorio: any) =>
          consultorio.toLowerCase() === datos.consultorio.toLowerCase(),
      ) &&
      datos.consultorio !== ''
    ) {
      const id = this.db.getId();
      await this.db.createDoc(
        { nombre: datos.consultorio, create_at: new Date(), id },
        'consultorios',
        id,
      );
    }

    if (
      !this.materialesFilter.some(
        (material: any) =>
          material.toLowerCase() === datos.material.toLowerCase(),
      ) &&
      datos.material !== ''
    ) {
      const id = this.db.getId();
      await this.db.createDoc(
        { nombre: datos.material, create_at: new Date(), id },
        'materiales',
        id,
      );
    }
    this.alertService.alertClose();
    this.router.navigate(['/admin/semanas/listado-semanas']);
    this.alertService.toast(msj, 'snackbar-success');
  }

  preventScroll(event: WheelEvent) {
    (event.target as HTMLElement).blur();
    event.preventDefault();
  }

  _filterProvSemanas(value: string) {
    this.semanasFilter = [...this.semanas]
      .filter((option) =>
        option.toString().toLowerCase().includes(value.toLowerCase()),
      )
      .map((value) => value);
  }

  _filterProvTrabajos(value: string) {
    this.trabajosFilter = [...this.trabajos]
      .filter((option) =>
        option.toString().toLowerCase().includes(value.toLowerCase()),
      )
      .map((value) => value);
  }

  _filterProvTonos(value: string) {
    this.tonosFilter = [...this.tonos]
      .filter((option) =>
        option.toString().toLowerCase().includes(value.toLowerCase()),
      )
      .map((value) => value);
  }

  _filterProvConsultorios(value: string) {
    this.consultoriosFilter = [...this.consultorios]
      .filter((option) =>
        option.toString().toLowerCase().includes(value.toLowerCase()),
      )
      .map((value) => value);
  }

  _filterProvMateriales(value: string) {
    this.materialesFilter = [...this.materiales]
      .filter((option) =>
        option.toString().toLowerCase().includes(value.toLowerCase()),
      )
      .map((value) => value);
  }

  applyFilter(): void {
    if (!this.searchTerm) {
      this.filteredData = [...this.originalData];
      return;
    }

    const searchText = this.searchTerm.toLowerCase();
    this.filteredData = this.originalData.filter(
      (item: any) =>
        item.consultorio.toLowerCase().includes(searchText) ||
        item.noContrato.toLowerCase().includes(searchText) ||
        item.trabajo.toLowerCase().includes(searchText) ||
        item.material.toLowerCase().includes(searchText),
    );
  }

  async onItemSelected(item: any) {
    const mensaje = this.selectedItem
      ? '¿Estás seguro de seleccionar este trabajo? Se reemplazará por el que habías seleccionado anteriormente.'
      : '¿Deseas seleccionar este trabajo?';
    const opt = await this.alertService.alertConfirm(mensaje);
    if (opt.isConfirmed) {
      this.selectedItem = item;
      this.imagenesSeleccionadaExpandida = false;
      this.mostrarModal = false;
      this.pagosForm.patchValue({
        noContrato: this.selectedItem.noContrato || '',
        trabajo: this.selectedItem.trabajo || '',
        consultorio: this.selectedItem.consultorio || '',
        tono: this.selectedItem.tono || '',
        material: this.selectedItem.material || '',
        urgente: this.selectedItem.urgente || 'NO',
        placaBase: this.selectedItem.placaBase || 'NO',
        precio: this.selectedItem.precio || 0,
        observaciones: this.selectedItem.observaciones || '',
        fotografias: (this.selectedItem.fotografias ??= {
          revision: [],
          entrega: [],
        }),
      });
      setTimeout(() => {
        document.querySelector('.selected-info')?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }, 100);
    } else {
      this.selectedItem = null;
    }
  }

  // ============================================================
  // SELECCIONAR FOTO DE REVISIÓN
  // ============================================================

  seleccionarFotoRevision(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (!input.files || input.files.length === 0) {
      return;
    }

    const archivos = Array.from(input.files);

    this.agregarFotos(archivos, 'revision');

    // Permite volver a seleccionar las mismas imágenes
    input.value = '';
  }

  // ============================================================
  // SELECCIONAR FOTO DE ENTREGA
  // ============================================================

  seleccionarFotoEntrega(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (!input.files || input.files.length === 0) {
      return;
    }

    const archivos = Array.from(input.files);

    this.agregarFotos(archivos, 'entrega');

    // Permite volver a seleccionar las mismas imágenes
    input.value = '';
  }

  // ============================================================
  // AGREGAR FOTOS
  // ============================================================

  private agregarFotos(archivos: File[], tipo: 'revision' | 'entrega'): void {
    const fotosActuales =
      tipo === 'revision' ? this.fotoRevision : this.fotoEntrega;

    // Espacios disponibles
    const espaciosDisponibles = this.MAX_FOTOS - fotosActuales.length;

    if (espaciosDisponibles <= 0) {
      this.alertService.toast(
        `Ya tienes el máximo de ${this.MAX_FOTOS} fotos de ${tipo}.`,
        'snackbar-error',
      );

      return;
    }

    // Solo tomar las que caben
    const archivosAAgregar = archivos.slice(0, espaciosDisponibles);

    // Validar y agregar
    for (const archivo of archivosAAgregar) {
      if (!this.validarImagen(archivo)) {
        continue;
      }

      fotosActuales.push(archivo);

      this.generarPreview(archivo, tipo);
    }

    // Avisar si seleccionaron más de las permitidas
    if (archivos.length > espaciosDisponibles) {
      this.alertService.toast(
        `Solo puedes tener ${this.MAX_FOTOS} fotos de ${tipo}.`,
        'snackbar-error',
      );
    }
  }

  // ============================================================
  // VALIDAR IMAGEN
  // ============================================================

  private validarImagen(archivo: File): boolean {
    if (!this.TIPOS_FOTO_PERMITIDOS.includes(archivo.type)) {
      this.alertService.toast(
        `La imagen "${archivo.name}" no tiene un formato permitido.`,
        'snackbar-error',
      );

      return false;
    }

    if (archivo.size > this.MAX_TAMANO_FOTO) {
      this.alertService.toast(
        `La imagen "${archivo.name}" supera los 15 MB.`,
        'snackbar-error',
      );

      return false;
    }

    return true;
  }

  // ============================================================
  // GENERAR PREVISUALIZACIÓN
  // ============================================================

  private generarPreview(archivo: File, tipo: 'revision' | 'entrega'): void {
    const reader = new FileReader();

    reader.onload = () => {
      const resultado = reader.result;

      if (typeof resultado !== 'string') {
        return;
      }

      if (tipo === 'revision') {
        this.previewRevision.push(resultado);
      } else {
        this.previewEntrega.push(resultado);
      }
    };

    reader.readAsDataURL(archivo);
  }

  // ============================================================
  // QUITAR FOTO DE REVISIÓN
  // ============================================================

  quitarFotoRevision(index: number): void {
    this.fotoRevision.splice(index, 1);

    this.previewRevision.splice(index, 1);
  }

  // ============================================================
  // QUITAR FOTO DE ENTREGA
  // ============================================================

  quitarFotoEntrega(index: number): void {
    this.fotoEntrega.splice(index, 1);

    this.previewEntrega.splice(index, 1);
  }

  getFotoViewUrl(foto: any): string {
    if (!foto) {
      return '';
    }

    if (foto.fileId) {
      return `https://drive.google.com/thumbnail?id=${foto.fileId}&sz=w1200`;
    }

    return '';
  }

  abrirFotoViewer(fotos: any[], indice: number): void {
    if (!fotos || fotos.length === 0) {
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

    this.indiceFotoViewer =
      this.indiceFotoViewer === 0
        ? this.fotosViewer.length - 1
        : this.indiceFotoViewer - 1;

    this.reiniciarPosicionFoto();
  }

  fotoSiguiente(): void {
    if (this.fotosViewer.length === 0) {
      return;
    }

    this.indiceFotoViewer =
      this.indiceFotoViewer === this.fotosViewer.length - 1
        ? 0
        : this.indiceFotoViewer + 1;

    this.reiniciarPosicionFoto();
  }

  getFotoViewerUrl(): string {
    const foto = this.fotosViewer[this.indiceFotoViewer];

    if (!foto) {
      return '';
    }

    return this.getFotoViewUrl(foto);
  }

  reiniciarPosicionFoto(): void {
    this.zoomFotoViewer = 1;
    this.posicionXFotoViewer = 0;
    this.posicionYFotoViewer = 0;
  }

  zoomConRueda(event: WheelEvent): void {
    event.preventDefault();

    const contenedor = event.currentTarget as HTMLElement;

    const rect = contenedor.getBoundingClientRect();

    // Posición del cursor dentro del visor
    const cursorX = event.clientX - rect.left - rect.width / 2;

    const cursorY = event.clientY - rect.top - rect.height / 2;

    const zoomAnterior = this.zoomFotoViewer;

    const incremento = event.deltaY < 0 ? 0.2 : -0.2;

    const nuevoZoom = Math.min(8, Math.max(1, zoomAnterior + incremento));

    if (nuevoZoom === zoomAnterior) {
      return;
    }

    // Mantener el punto bajo el cursor
    const factor = nuevoZoom / zoomAnterior;

    this.posicionXFotoViewer =
      cursorX - (cursorX - this.posicionXFotoViewer) * factor;

    this.posicionYFotoViewer =
      cursorY - (cursorY - this.posicionYFotoViewer) * factor;

    this.zoomFotoViewer = nuevoZoom;

    if (this.zoomFotoViewer === 1) {
      this.posicionXFotoViewer = 0;
      this.posicionYFotoViewer = 0;
    } else {
      this.limitarPosicionFoto();
    }
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

  acercarFoto(): void {
    this.zoomFotoViewer = Math.min(this.zoomFotoViewer + 0.25, 3);
  }

  alejarFoto(): void {
    this.zoomFotoViewer = Math.max(this.zoomFotoViewer - 0.25, 1);
  }

  restablecerZoom(): void {
    this.zoomFotoViewer = 1;
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

    this.puntoPinchX =
      (dedo1.clientX + dedo2.clientX) / 2 - rect.left - rect.width / 2;

    this.puntoPinchY =
      (dedo1.clientY + dedo2.clientY) / 2 - rect.top - rect.height / 2;

    this.dedosIniciales = this.obtenerDistanciaEntreDedos(event.touches);

    this.zoomInicialPinch = this.zoomFotoViewer;
  }

  moverPinch(event: TouchEvent): void {
    if (event.touches.length !== 2 || this.dedosIniciales === 0) {
      return;
    }

    event.preventDefault();

    const contenedor = event.currentTarget as HTMLElement;

    const rect = contenedor.getBoundingClientRect();

    const dedo1 = event.touches[0];
    const dedo2 = event.touches[1];

    // Punto medio entre los dos dedos
    const puntoX =
      (dedo1.clientX + dedo2.clientX) / 2 - rect.left - rect.width / 2;

    const puntoY =
      (dedo1.clientY + dedo2.clientY) / 2 - rect.top - rect.height / 2;

    const distanciaActual = this.obtenerDistanciaEntreDedos(event.touches);

    const factor = distanciaActual / this.dedosIniciales;

    const zoomAnterior = this.zoomFotoViewer;

    const nuevoZoom = Math.min(8, Math.max(1, this.zoomInicialPinch * factor));

    if (nuevoZoom === zoomAnterior) {
      return;
    }

    const factorZoom = nuevoZoom / zoomAnterior;

    // Mantener el punto entre los dedos
    this.posicionXFotoViewer =
      puntoX - (puntoX - this.posicionXFotoViewer) * factorZoom;

    this.posicionYFotoViewer =
      puntoY - (puntoY - this.posicionYFotoViewer) * factorZoom;

    this.zoomFotoViewer = nuevoZoom;

    if (this.zoomFotoViewer === 1) {
      this.posicionXFotoViewer = 0;
      this.posicionYFotoViewer = 0;
    } else {
      this.limitarPosicionFoto();
    }
  }

  terminarPinch(): void {
    this.dedosIniciales = 0;
  }

  limitarPosicionFoto(): void {
    if (this.zoomFotoViewer <= 1) {
      this.posicionXFotoViewer = 0;
      this.posicionYFotoViewer = 0;
      return;
    }

    const contenedor = document.querySelector(
      '.photo-viewer-image-container',
    ) as HTMLElement | null;

    const imagen = document.querySelector(
      '.photo-viewer-image',
    ) as HTMLImageElement | null;

    if (!contenedor || !imagen) {
      return;
    }

    const anchoContenedor = contenedor.clientWidth;
    const altoContenedor = contenedor.clientHeight;

    const anchoImagen = imagen.clientWidth;
    const altoImagen = imagen.clientHeight;

    const anchoZoom = anchoImagen * this.zoomFotoViewer;

    const altoZoom = altoImagen * this.zoomFotoViewer;

    const limiteX = Math.max(0, (anchoZoom - anchoContenedor) / 2);

    const limiteY = Math.max(0, (altoZoom - altoContenedor) / 2);

    this.posicionXFotoViewer = Math.max(
      -limiteX,
      Math.min(limiteX, this.posicionXFotoViewer),
    );

    this.posicionYFotoViewer = Math.max(
      -limiteY,
      Math.min(limiteY, this.posicionYFotoViewer),
    );
  }

  imagenViewerCargada(): void {
    setTimeout(() => {
      this.limitarPosicionFoto();
    });
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

  ajustarViewerAlCambiarPantalla(): void {
    if (!this.fotoViewerAbierto) {
      return;
    }

    setTimeout(() => {
      this.limitarPosicionFoto();
    });
  }

  async eliminarFotoGuardada(
    foto: any,
    tipo: 'revision' | 'entrega',
    index: number,
  ): Promise<void> {
    if (!foto?.fileId) {
      this.alertService.toast(
        'No se encontró el ID de la fotografía.',
        'snackbar-error',
      );
      return;
    }

    const opt = await this.alertService.alertConfirm(
      '¿Estás seguro de eliminar esta fotografía?',
    );

    if (!opt.isConfirmed) {
      return;
    }

    try {
      this.alertService.loanding('Eliminando fotografía...');

      // ============================================================
      // 1. ELIMINAR DE GOOGLE DRIVE
      // ============================================================

      console.log('ELIMINANDO DE DRIVE:', foto.fileId);

      const respuestaDrive = await this.googleDriveService.eliminarImagen(
        foto.fileId,
      );

      console.log('DRIVE ELIMINÓ CORRECTAMENTE:', respuestaDrive);

      // ============================================================
      // 2. ELIMINAR DEL ARREGLO LOCAL
      // ============================================================

      if (tipo === 'revision') {
        this.fotosGuardadasRevision = this.fotosGuardadasRevision.filter(
          (_, i) => i !== index,
        );
      } else {
        this.fotosGuardadasEntrega = this.fotosGuardadasEntrega.filter(
          (_, i) => i !== index,
        );
      }

      // ============================================================
      // 3. ACTUALIZAR FIRESTORE
      // ============================================================

      console.log('ACTUALIZANDO FOTOS EN FIRESTORE...');

      await this.db.updateDoc(
        {
          fotografias: {
            revision: this.fotosGuardadasRevision,
            entrega: this.fotosGuardadasEntrega,
          },
        },
        'pagos',
        this.pago.id,
      );

      console.log('FIRESTORE ACTUALIZADO CORRECTAMENTE.');

      // ============================================================
      // 4. CERRAR LOADING
      // ============================================================

      this.alertService.alertClose();

      this.alertService.toast(
        'Fotografía eliminada correctamente.',
        'snackbar-success',
      );
    } catch (error) {
      console.error('ERROR AL ELIMINAR FOTOGRAFÍA:', error);

      this.alertService.alertClose();

      this.alertService.toast(
        'No fue posible completar la eliminación.',
        'snackbar-error',
      );
    }
  }

  abrirModalImagenes(trabajo: any): void {
    this.trabajoImagenesSeleccionado = trabajo;
    this.modalImagenesAbierto = true;
  }

  cerrarModalImagenes(): void {
    this.modalImagenesAbierto = false;
    this.trabajoImagenesSeleccionado = null;
  }

  toggleImagenes(): void {
    this.imagenesExpandida = !this.imagenesExpandida;
  }

  toggleImagenesSeleccionada(): void {
    this.imagenesSeleccionadaExpandida = !this.imagenesSeleccionadaExpandida;
  }
}
