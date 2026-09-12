import { CommonModule, DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BreadcrumbComponent } from '../../shared/components/breadcrumb/breadcrumb.component';
import { AlertService } from '../../core/service/alert.service';
import { FirestoreService } from '../../core/service/firestore.service';
import { GoogleDriveService } from '../../core/service/google-drive.service';

interface Gasto {
  id: string;
  fecha: any;
  concepto: string;
  monto: number;
  archivos: any[];
  createAt?: any;
}

@Component({
  selector: 'app-gastos',
  standalone: true,
  templateUrl: './gastos.component.html',
  styleUrl: './gastos.component.scss',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BreadcrumbComponent,
    DatePipe,
    MatButtonModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatTooltipModule,
  ],
})
export class GastosComponent implements OnInit {
  readonly columnas = ['fecha', 'concepto', 'monto', 'archivos', 'acciones'];
  readonly maximoArchivos = 10;

  gastos: Gasto[] = [];
  gastoForm: FormGroup;
  gastoEditando: Gasto | null = null;
  archivosPendientes: File[] = [];
  previewsPendientes: string[] = [];
  cargando = false;
  guardando = false;
  formularioAbierto = false;
  gastoArchivosAbierto: Gasto | null = null;

  constructor(
    private readonly fb: FormBuilder,
    private readonly db: FirestoreService,
    private readonly googleDrive: GoogleDriveService,
    private readonly alertService: AlertService,
  ) {
    this.gastoForm = this.fb.group({
      fecha: [new Date(), Validators.required],
      concepto: ['', [Validators.required, Validators.maxLength(180)]],
      monto: [null, [Validators.required, Validators.min(0.01)]],
    });
  }

  ngOnInit(): void {
    void this.cargarGastos();
  }

  async cargarGastos(): Promise<void> {
    this.cargando = true;
    try {
      const snapshot = await this.db.asyncCollOrderBy('gastos', 'fecha', 'desc');
      this.gastos = snapshot.docs.map((documento) => ({
        id: documento.id,
        ...(documento.data() as Omit<Gasto, 'id'>),
      }));
      console.log(this.gastos);
      
    } catch {
      this.alertService.toast('No fue posible cargar los gastos.', 'snackbar-error');
    } finally {
      this.cargando = false;
    }
  }

  abrirNuevo(): void {
    this.gastoEditando = null;
    this.archivosPendientes = [];
    this.previewsPendientes = [];
    this.gastoForm.reset({ fecha: new Date(), concepto: '', monto: null });
    this.formularioAbierto = true;
  }

  abrirEdicion(gasto: Gasto): void {
    this.gastoEditando = gasto;
    this.archivosPendientes = [];
    this.previewsPendientes = [];
    this.gastoForm.reset({
      fecha: this.convertirFecha(gasto.fecha),
      concepto: gasto.concepto,
      monto: gasto.monto,
    });
    this.formularioAbierto = true;
  }

  cerrarFormulario(): void {
    if (!this.guardando) {
      this.formularioAbierto = false;
    }
  }

  abrirArchivos(gasto: Gasto): void {
    this.gastoArchivosAbierto = gasto;
  }

  cerrarArchivos(): void {
    this.gastoArchivosAbierto = null;
  }

  getArchivoViewUrl(archivo: any): string {
    if (!archivo) {
      return '';
    }
    if (archivo.fileId) {
      return `https://drive.google.com/thumbnail?id=${archivo.fileId}&sz=w1200`;
    }
    return archivo.viewUrl || archivo.url || '';
  }

  getArchivoOpenUrl(archivo: any): string {
    if (!archivo) {
      return '';
    }
    if (archivo.fileId) {
      return `https://drive.google.com/file/d/${archivo.fileId}/view`;
    }
    return archivo.viewUrl || archivo.url || '';
  }

  seleccionarArchivos(event: Event): void {
    const input = event.target as HTMLInputElement;
    const archivos = Array.from(input.files ?? []).filter((archivo) =>
      ['image/jpeg', 'image/png', 'image/webp'].includes(archivo.type),
    );
    const rechazados = Array.from(input.files ?? []).length - archivos.length;
    const actuales = this.gastoEditando?.archivos?.length ?? 0;
    const disponibles = this.maximoArchivos - actuales - this.archivosPendientes.length;

    if (rechazados) {
      this.alertService.toast('Solo puedes adjuntar imágenes JPG, PNG o WEBP.', 'snackbar-warning');
    }

    if (archivos.length > disponibles) {
      this.alertService.toast(
        `Puedes adjuntar hasta ${this.maximoArchivos} imágenes por gasto.`,
        'snackbar-warning',
      );
    }

    const nuevosArchivos = archivos.slice(0, Math.max(disponibles, 0));
    this.archivosPendientes = [...this.archivosPendientes, ...nuevosArchivos];
    this.previewsPendientes = [
      ...this.previewsPendientes,
      ...nuevosArchivos.map((archivo) => URL.createObjectURL(archivo)),
    ];
    input.value = '';
  }

  quitarArchivoPendiente(indice: number): void {
    URL.revokeObjectURL(this.previewsPendientes[indice]);
    this.archivosPendientes.splice(indice, 1);
    this.previewsPendientes.splice(indice, 1);
  }

  async quitarArchivoGuardado(archivo: any): Promise<void> {
    const confirmado = await this.alertService.alertConfirm(
      '¿Deseas eliminar esta imagen del gasto?',
      '',
      'Sí, eliminar',
      'Cancelar',
    );
    if (!confirmado.isConfirmed || !this.gastoEditando) {
      return;
    }

    this.alertService.loanding('Eliminando imagen...');
    try {
      await this.googleDrive.eliminarImagen(archivo.fileId);
      const archivos = (this.gastoEditando.archivos ?? []).filter(
        (item: any) => item.fileId !== archivo.fileId,
      );
      await this.db.updateDoc({ archivos }, 'gastos', this.gastoEditando.id);
      this.gastoEditando.archivos = archivos;
      this.actualizarGastoLocal(this.gastoEditando);
      this.alertService.toast('Imagen eliminada correctamente.', 'snackbar-success');
    } catch {
      this.alertService.toast('No fue posible eliminar la imagen.', 'snackbar-error');
    } finally {
      this.alertService.alertClose();
    }
  }

  async guardarGasto(): Promise<void> {
    if (this.gastoForm.invalid || this.guardando) {
      this.gastoForm.markAllAsTouched();
      return;
    }

    this.guardando = true;
    this.alertService.loanding(this.gastoEditando ? 'Actualizando gasto...' : 'Guardando gasto...');
    const valor = this.gastoForm.getRawValue();
    const id = this.gastoEditando?.id ?? this.db.getId();
    const archivosExistentes = (this.gastoEditando?.archivos ?? []).filter(
      (archivo: any) => archivo?.fileId,
    );

    try {
      const gastoBase = {
        fecha: new Date(valor.fecha),
        concepto: String(valor.concepto).trim(),
        monto: Number(valor.monto),
        archivos: archivosExistentes,
        updatedAt: new Date(),
      };

      await this.db.createDoc(
        this.gastoEditando ? gastoBase : { ...gastoBase, createAt: new Date() },
        'gastos',
        id,
      );

      let archivos = archivosExistentes;
      if (this.archivosPendientes.length) {
        const respuestas = await this.googleDrive.subirImagenes(
          id,
          'gastos',
          this.archivosPendientes,
        );
        const respuestaFallida = respuestas.find((respuesta: any) => !respuesta?.ok);
        if (respuestaFallida) {
          throw new Error((respuestaFallida as any).error || 'No fue posible subir una imagen.');
        }
        archivos = [...archivosExistentes, ...respuestas];
        await this.db.updateDoc({ archivos }, 'gastos', id);
      }

      const gastoGuardado: Gasto = { id, ...gastoBase, archivos };
      this.actualizarGastoLocal(gastoGuardado);
      this.formularioAbierto = false;
      this.alertService.toast(
        this.gastoEditando ? 'Gasto actualizado correctamente.' : 'Gasto registrado correctamente.',
        'snackbar-success',
      );
    } catch {
      this.alertService.toast('No fue posible guardar el gasto.', 'snackbar-error');
    } finally {
      this.guardando = false;
      this.alertService.alertClose();
    }
  }

  async eliminarGasto(gasto: Gasto): Promise<void> {
    const confirmado = await this.alertService.alertConfirm(
      '¿Estás seguro de eliminar este gasto?',
      '',
      'Sí, eliminar',
      'Cancelar',
    );
    if (!confirmado.isConfirmed) {
      return;
    }

    this.alertService.loanding('Eliminando gasto...');
    try {
      const archivos = gasto.archivos ?? [];
      for (const archivo of archivos) {
        if (archivo.fileId) {
          await this.googleDrive.eliminarImagen(archivo.fileId);
        }
      }
      await this.db.deleteDoc('gastos', gasto.id);
      this.gastos = this.gastos.filter((item) => item.id !== gasto.id);
      this.alertService.toast('Gasto eliminado correctamente.', 'snackbar-success');
    } catch {
      this.alertService.toast('No fue posible eliminar el gasto.', 'snackbar-error');
    } finally {
      this.alertService.alertClose();
    }
  }

  obtenerFecha(fecha: any): Date | null {
    return this.convertirFecha(fecha);
  }

  private convertirFecha(fecha: any): Date | null {
    if (!fecha) {
      return null;
    }
    if (fecha instanceof Date) {
      return fecha;
    }
    if (typeof fecha.toDate === 'function') {
      return fecha.toDate();
    }
    if (fecha.seconds) {
      return new Date(fecha.seconds * 1000);
    }
    return new Date(fecha);
  }

  private actualizarGastoLocal(gasto: Gasto): void {
    const indice = this.gastos.findIndex((item) => item.id === gasto.id);
    if (indice === -1) {
      this.gastos = [gasto, ...this.gastos];
    } else {
      this.gastos = this.gastos.map((item) => item.id === gasto.id ? gasto : item);
    }
    this.gastos.sort((a, b) => {
      const fechaA = this.obtenerFecha(a.fecha)?.getTime() ?? 0;
      const fechaB = this.obtenerFecha(b.fecha)?.getTime() ?? 0;
      return fechaB - fechaA;
    });
  }
}
