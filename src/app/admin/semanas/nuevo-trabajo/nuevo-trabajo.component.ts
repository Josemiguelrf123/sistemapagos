import { Component } from '@angular/core';
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
import { BreadcrumbComponent } from '@shared/components/breadcrumb/breadcrumb.component';
import { FirestoreService } from '@core/service/firestore.service';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { AlertService } from '@core/service/alert.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Pago } from '../componentes/pago.model';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatRadioModule } from '@angular/material/radio';
import { DatePipe } from '@angular/common';
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
  ],
})
export class NuevoTrabajoComponent {
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
  ];
  selectedItemOriginal: any = null;
  selectedItem: any = null;
  anioActual!: number;

  constructor(
    private fb: UntypedFormBuilder,
    private db: FirestoreService,
    private alertService: AlertService,
    private router: Router,
    private route: ActivatedRoute
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
      'desc'
    );
    collRef.forEach((doc) => dataSemanas.push(doc.data()));

    // 🧼 Normaliza: sin tildes, minúsculas, trim
    const normalizar = (texto: string): string =>
      texto
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
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
    const resultadoFinal = Array.from(mapaUnicos.values()).map((str) =>
      str.charAt(0).toUpperCase() + str.slice(1)
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
      'desc'
    );
    collRef.forEach((pagos) => dataPagos.push(pagos.data()));
    dataPagos.forEach((item: Pago) => {
      item.partida ||= 'Partida 1';
      item.semana = this.capitalizarPrimeraLetra(item.semana);
      item.consultorio = this.capitalizarPrimeraLetra(item.consultorio);
      item.trabajo = this.capitalizarPrimeraLetra(item.trabajo);
      item.material = this.capitalizarPrimeraLetra(item.material);
      item.tono = item.tono !== '' ? item.tono.toLocaleUpperCase() : item.tono;
    });
    this.originalData = dataPagos.filter((res: any) => res.semana !== this.semanas[0]);
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
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .trim()
        .toLowerCase();

    // ✍️ Capitalizar cada palabra (Ej: "limpieza dental" → "Limpieza Dental")
    const capitalizar = (texto: string): string =>
      texto
        .toLowerCase()
        .split(" ")
        .map(p => p.charAt(0).toUpperCase() + p.slice(1))
        .join(" ");

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
      const numA = parseInt(a.replace(/\D/g, ""), 10);
      const numB = parseInt(b.replace(/\D/g, ""), 10);

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
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
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
      str.toUpperCase()
    );

    // 🔢 Ordenar por número si hay, si no alfabéticamente
    const ordenadas = resultadoFinal.sort((a, b) => {
      const numA = parseInt(a.replace(/\D/g, ""), 10);
      const numB = parseInt(b.replace(/\D/g, ""), 10);

      if (!isNaN(numA) && !isNaN(numB)) return numB - numA;
      return a.localeCompare(b);
    });

    this.tonos = ordenadas;
    this.tonosFilter = [...ordenadas];
  }

  async getValueConsultorios() {
    this.consultorios = [];

    const dataConsultorios: any[] = [];
    const collRef = await this.db.asyncCollOrderBy('consultorios', 'nombre', 'asc');
    collRef.forEach((doc) => dataConsultorios.push(doc.data()));

    // Función para limpiar (quita acentos, espacios, minúsculas)
    const normalizar = (texto: string): string =>
      texto
        .normalize("NFD") // separa letras acentuadas
        .replace(/[\u0300-\u036f]/g, "") // elimina los acentos
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
      const numA = parseInt(a.replace(/\D/g, ""), 10);
      const numB = parseInt(b.replace(/\D/g, ""), 10);

      if (!isNaN(numA) && !isNaN(numB)) return numB - numA;
      return a.localeCompare(b);
    });

    this.consultorios = ordenadas;
    this.consultoriosFilter = [...ordenadas];
  }


  async getValueMateriales() {
    this.materiales = [];

    const dataMateriales: any[] = [];
    const collRef = await this.db.asyncCollOrderBy('materiales', 'nombre', 'asc');
    collRef.forEach((material) => dataMateriales.push(material.data()));

    // 🔧 Función para limpiar: quita acentos, minúsculas, trim
    const normalizar = (texto: string): string =>
      texto
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
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
    const resultadoFinal = Array.from(mapaUnicos.values()).map((str) =>
      str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
    );

    // 📊 Paso 3: ordenar (por número si hay, si no alfabético)
    const ordenadas = resultadoFinal.sort((a, b) => {
      const numA = parseInt(a.replace(/\D/g, ""), 10);
      const numB = parseInt(b.replace(/\D/g, ""), 10);

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
      this.crearFormulario();
      this.getValueSemanas();
    }
  }

  async obtenerInformacion(id: string) {
    try {
      const doc = await this.db.asyncDoc('pagos', id);
      this.pago = doc.data() as Pago;
      this.pago.partida ||= 'Partida 1';
      this.pago.trabajoAnterior ||= null;
      this.pago.fechaEntrega ||= '';
      this.anioActual = this.pago.years;
      this.edit = true;
      if (this.pago.fechaRegistro) {
        this.pago.fechaRegistro = new Date(
          this.pago.fechaRegistro.seconds * 1000
        );
      }
      if (this.pago.fechaEntrega) {
        this.pago.fechaEntrega = new Date(
          this.pago.fechaEntrega.seconds * 1000
        );
      }
      this.selectedItem = this.pago.trabajoAnterior;
      this.selectedItemOriginal = JSON.parse(JSON.stringify(this.pago.trabajoAnterior));
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
        new Date(this.pagosForm.controls['fechaRegistro'].value)
      );
    }
    if (this.pagosForm.controls['fechaEntrega'].value !== '') {
      this.pagosForm.controls['fechaEntrega'].setValue(
        new Date(this.pagosForm.controls['fechaEntrega'].value)
      );
    }

    this.id === 'agregar' ? this.guardarRegistro() : this.editarRegistro();
  }

  async guardarRegistro() {
    this.alertService.loanding('Registrando nuevo pago.');
    const id = await this.db.getId();
    this.pagosForm.controls['id'].setValue(id);
    const datos: Pago = this.pagosForm.getRawValue();
    const semanaEncontrada = this.semanasFilter.find(
      (semana: any) => semana.toLowerCase() === datos.semana.toLowerCase()
    );
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
      },
      'pagos',
      id
    );
    this.cambiarValorSemana(datos, 'Nuevo trabajo guardado correctamente');
  }

  async editarRegistro() {
    const opt = await this.alertService.alertConfirm('¿Estás seguro de editar la información?');
    if (opt.isConfirmed) {
      const datos = this.pagosForm.getRawValue();
      const semanaEncontrada = this.semanasFilter.find(
        (semana: any) => semana.toLowerCase() === datos.semana.toLowerCase()
      );
      this.alertService.loanding('Modificando datos del registro de pago.');
      await this.db.updateDoc(
        {
          ...datos,
          trabajoAnterior: this.selectedItem,
          idTrabajoAnterior: this.selectedItem ? this.selectedItem.id : '',
          semana: semanaEncontrada ? semanaEncontrada : datos.semana,
          urgente: datos.urgente === '' ? 'NO' : datos.urgente,
          placaBase: datos.placaBase === '' ? 'NO' : datos.placaBase,
          pagado: datos.pagado === '' ? 'NO' : datos.pagado,
        },
        'pagos',
        datos.id
      );
      this.cambiarValorSemana(datos, 'Datos del trabajo modificados correctamente');
    }
  }

  async cambiarValorSemana(datos: any, msg: string) {
    if (this.selectedItem) {
      await this.db.updateDoc({ trabajoReferencia: datos, idReferencia: datos.id, pagado: 'SI' }, 'pagos', this.selectedItem.id);
    }
    if (this.selectedItem && this.selectedItemOriginal && this.selectedItemOriginal.id !== this.selectedItem.id) {
      await this.db.updateDoc({ trabajoReferencia: null, idReferencia: '', pagado: '' }, 'pagos', this.selectedItemOriginal.id);
    }
    this.validarNuevos(msg, datos);
  }

  async validarNuevos(msj: string, datos: any) {
    if (
      !this.semanasFilter.some(
        (semana: any) => semana.toLowerCase() === datos.semana.toLowerCase()
      ) &&
      datos.semana !== ''
    ) {
      const id = this.db.getId();
      await this.db.createDoc(
        { nombre: datos.semana, create_at: new Date(), years: this.anioActual, id },
        'semanas',
        id
      );
    }
    if (
      !this.trabajosFilter.some(
        (trabajo: any) => trabajo.toLowerCase() === datos.trabajo.toLowerCase()
      ) &&
      datos.trabajo !== ''
    ) {
      const id = this.db.getId();
      await this.db.createDoc(
        { nombre: datos.trabajo, create_at: new Date(), id },
        'trabajos',
        id
      );
    }
    if (
      !this.tonosFilter.some(
        (tono: any) => tono.toLowerCase() === datos.tono.toLowerCase()
      ) &&
      datos.tono !== ''
    ) {
      const id = this.db.getId();
      await this.db.createDoc(
        { nombre: datos.tono, create_at: new Date(), id },
        'tonos',
        id
      );
    }
    if (
      !this.consultoriosFilter.some(
        (consultorio: any) =>
          consultorio.toLowerCase() === datos.consultorio.toLowerCase()
      ) &&
      datos.consultorio !== ''
    ) {
      const id = this.db.getId();
      await this.db.createDoc(
        { nombre: datos.consultorio, create_at: new Date(), id },
        'consultorios',
        id
      );
    }
    console.log(this.materialesFilter);
    console.log(datos.material.toLowerCase());  
    
    if (
      !this.materialesFilter.some(
        (material: any) =>
          material.toLowerCase() === datos.material.toLowerCase()
      ) &&
      datos.material !== ''
    ) {
      const id = this.db.getId();
      await this.db.createDoc(
        { nombre: datos.material, create_at: new Date(), id },
        'materiales',
        id
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
        option.toString().toLowerCase().includes(value.toLowerCase())
      )
      .map((value) => value);
  }

  _filterProvTrabajos(value: string) {
    this.trabajosFilter = [...this.trabajos]
      .filter((option) =>
        option.toString().toLowerCase().includes(value.toLowerCase())
      )
      .map((value) => value);
  }

  _filterProvTonos(value: string) {
    this.tonosFilter = [...this.tonos]
      .filter((option) =>
        option.toString().toLowerCase().includes(value.toLowerCase())
      )
      .map((value) => value);
  }

  _filterProvConsultorios(value: string) {
    this.consultoriosFilter = [...this.consultorios]
      .filter((option) =>
        option.toString().toLowerCase().includes(value.toLowerCase())
      )
      .map((value) => value);
  }

  _filterProvMateriales(value: string) {
    this.materialesFilter = [...this.materiales]
      .filter((option) =>
        option.toString().toLowerCase().includes(value.toLowerCase())
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
        item.material.toLowerCase().includes(searchText)
    );
  }

  async onItemSelected(item: any) {
    const mensaje = this.selectedItem ?
      '¿Estás seguro de seleccionar este trabajo? Se reemplazará por el que habías seleccionado anteriormente.' :
      '¿Deseas seleccionar este trabajo?';
    const opt = await this.alertService.alertConfirm(mensaje);
    if (opt.isConfirmed) {
      this.selectedItem = item;
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
}
