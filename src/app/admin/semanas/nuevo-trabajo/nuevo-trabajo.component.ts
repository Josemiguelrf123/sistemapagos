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

  constructor(
    private fb: UntypedFormBuilder,
    private db: FirestoreService,
    private alertService: AlertService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.getPagos();
    this.getValueSemanas();
    this.getValueTrabajos();
    this.getValueTonos();
    this.getValueConsultorios();
    this.getValueMateriales();
    this.route.params.subscribe(({ id }) => this.validarId(id));
  }

  async getValueSemanas() {
    this.semanas = [];
    const dataSemanas: any = [];
    const collRef = await this.db.asyncCollOrderBy(
      'semanas',
      'nombre',
      'desc'
    );
    collRef.forEach((tono) => dataSemanas.push(tono.data()));
    if (dataSemanas.length > 0) {
      this.semanas.push(dataSemanas[0].nombre);
      this.semanasFilter = this.semanas;
      this.semanasTodasFilter = dataSemanas.map((res:any) => res.nombre);
      this.getPagos();
    }
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
    console.log(this.semanas[0]);
    
    this.originalData = dataPagos.filter((res: any) => res.semana !== this.semanas[0]);
    this.filteredData = [...this.originalData];
    console.log(this.originalData);
  }

  async getValueTrabajos() {
    this.trabajos = [];
    const dataTrabajos: any = [];
    const collRef = await this.db.asyncCollOrderBy('trabajos', 'nombre', 'asc');
    collRef.forEach((trabajo) => dataTrabajos.push(trabajo.data()));
    for (const doc of dataTrabajos) {
      this.trabajos.push(doc.nombre);
    }
    this.trabajosFilter = this.trabajos;
  }

  async getValueTonos() {
    this.tonos = [];
    const dataTonos: any = [];
    const collRef = await this.db.asyncCollOrderBy('tonos', 'nombre', 'asc');
    collRef.forEach((tono) => dataTonos.push(tono.data()));
    for (const doc of dataTonos) {
      this.tonos.push(doc.nombre);
    }
    this.tonosFilter = this.tonos;
  }

  async getValueConsultorios() {
    this.consultorios = [];
    const dataConsultorios: any = [];
    const collRef = await this.db.asyncCollOrderBy(
      'consultorios',
      'nombre',
      'asc'
    );
    collRef.forEach((consultorios) =>
      dataConsultorios.push(consultorios.data())
    );
    for (const doc of dataConsultorios) {
      this.consultorios.push(doc.nombre);
    }
    this.consultoriosFilter = this.consultorios;
  }

  async getValueMateriales() {
    this.materiales = [];
    const dataMateriales: any = [];
    const collRef = await this.db.asyncCollOrderBy(
      'materiales',
      'nombre',
      'asc'
    );
    collRef.forEach((material) => dataMateriales.push(material.data()));
    for (const doc of dataMateriales) {
      this.materiales.push(doc.nombre);
    }
    this.materialesFilter = this.materiales;
  }

  validarId(id: string) {
    this.id = id;
    if (id !== 'agregar') {
      this.obtenerInformacion(id);
    } else {
      const blankObject = {} as Pago;
      this.pago = new Pago(blankObject);
      this.crearFormulario();
    }
  }

  async obtenerInformacion(id: string) {
    try {
      const doc = await this.db.asyncDoc('pagos', id);
      this.pago = doc.data() as Pago;
      this.pago.trabajoAnterior ||= null;
      this.pago.fechaEntrega ||= '';
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
    await this.db.createDoc(
      {
        ...this.pagosForm.getRawValue(),
        createAt: new Date(),
        trabajoAnterior: this.selectedItem,
        idTrabajoAnterior: this.selectedItem ? this.selectedItem.id : '',
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
      this.alertService.loanding('Modificando datos del registro de pago.');
      await this.db.updateDoc(
        {
          ...datos,
          trabajoAnterior: this.selectedItem,
          idTrabajoAnterior: this.selectedItem ? this.selectedItem.id : ''
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
      !this.semanasTodasFilter.some(
        (semana: any) => semana.toLowerCase() === datos.semana.toLowerCase()
      ) &&
      datos.semana !== ''
    ) {
      const id = this.db.getId();
      await this.db.createDoc(
        { nombre: datos.semana, create_at: new Date(), id },
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
