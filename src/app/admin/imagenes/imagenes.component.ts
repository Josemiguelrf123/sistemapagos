import { CommonModule, DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { GoogleDriveService } from '../../core/service/google-drive.service';
import { FirestoreService } from '../../core/service/firestore.service';
import { AlertService } from '../../core/service/alert.service';
import { BreadcrumbComponent } from '../../shared/components/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-imagenes',
  standalone: true,
  templateUrl: './imagenes.component.html',
  styleUrl: './imagenes.component.scss',
  imports: [
    CommonModule,
    FormsModule,
    BreadcrumbComponent,
    DatePipe,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
  ],
})

export class ImagenesComponent implements OnInit {
  imagenes: any[] = [];
  imagenesFiltradas: any[] = [];
  seleccionadas = new Set<string>();
  fechaInicio: Date | null = null;
  fechaFin: Date | null = null;
  cargando = false;
  eliminando = false;

  constructor(
    private readonly googleDriveService: GoogleDriveService,
    private readonly db: FirestoreService,
    private readonly alertService: AlertService,
  ) {}

  ngOnInit(): void {
    void this.cargarImagenes();
  }

  async cargarImagenes(): Promise<void> {
    this.cargando = true;
    try {
      const snapshot = await this.db.asyncColl('pagos');
      const imagenes: any[] = [];
      const ids = new Set<string>();

      snapshot.forEach((documento) => {
        const pago: any = documento.data();
        const fechaTrabajo = this.convertirFecha(pago.fechaRegistro);
        for (const tipo of ['revision', 'entrega']) {
          for (const imagen of pago.fotografias?.[tipo] ?? []) {
            if (!imagen.fileId || ids.has(imagen.fileId)) {
              continue;
            }
            ids.add(imagen.fileId);
            imagenes.push({
              ...imagen,
              tipo,
              coleccion: 'pagos',
              pagoId: documento.id,
              trabajo: pago.trabajo || pago.nombreTrabajo || 'Trabajo',
              fecha: this.convertirFecha(imagen.createdAt || imagen.fecha || fechaTrabajo),
            });
          }
        }
      });

      const gastosSnapshot = await this.db.asyncColl('gastos');
      gastosSnapshot.forEach((documento) => {
        const gasto: any = documento.data();
        const fechaGasto = this.convertirFecha(gasto.fecha);
        for (const imagen of gasto.archivos ?? []) {
          if (!imagen.fileId || ids.has(imagen.fileId)) {
            continue;
          }
          ids.add(imagen.fileId);
          imagenes.push({
            ...imagen,
            tipo: 'gastos',
            coleccion: 'gastos',
            pagoId: documento.id,
            trabajo: `Gasto: ${gasto.concepto || 'Sin concepto'}`,
            fecha: this.convertirFecha(imagen.createdAt || imagen.fecha || fechaGasto),
          });
        }
      });

      this.imagenes = imagenes.sort(
        (a, b) => (b.fecha?.getTime() ?? 0) - (a.fecha?.getTime() ?? 0),
      );
      this.aplicarFiltro();
    } catch {
      this.alertService.toast('No fue posible cargar las imágenes.', 'snackbar-error');
    } finally {
      this.cargando = false;
    }
  }

  aplicarFiltro(): void {
    const inicio = this.inicioDelDia(this.fechaInicio);
    const fin = this.finDelDia(this.fechaFin);
    this.imagenesFiltradas = this.imagenes.filter((imagen) => {
      const tiempo = imagen.fecha?.getTime();
      if (!tiempo) {
        return !inicio && !fin;
      }
      return (!inicio || tiempo >= inicio.getTime()) && (!fin || tiempo <= fin.getTime());
    });
    this.seleccionadas = new Set(
      [...this.seleccionadas].filter((id) => this.imagenesFiltradas.some((imagen) => imagen.fileId === id)),
    );
  }

  limpiarFiltro(): void {
    this.fechaInicio = null;
    this.fechaFin = null;
    this.aplicarFiltro();
  }

  alternarSeleccion(fileId: string, seleccionado: boolean): void {
    if (seleccionado) {
      this.seleccionadas.add(fileId);
    } else {
      this.seleccionadas.delete(fileId);
    }
  }

  estaSeleccionada(fileId: string): boolean {
    return this.seleccionadas.has(fileId);
  }

  getImagenViewUrl(imagen: any): string {
    if (!imagen) {
      return '';
    }
    if (imagen.fileId) {
      return `https://drive.google.com/thumbnail?id=${imagen.fileId}&sz=w1200`;
    }
    return imagen.viewUrl || imagen.url || '';
  }

  getImagenOpenUrl(imagen: any): string {
    if (!imagen) {
      return '';
    }
    if (imagen.fileId) {
      return `https://drive.google.com/file/d/${imagen.fileId}/view`;
    }
    return imagen.viewUrl || imagen.url || '';
  }

  seleccionarTodas(): void {
    if (this.seleccionadas.size === this.imagenesFiltradas.length) {
      this.seleccionadas.clear();
      return;
    }
    this.imagenesFiltradas.forEach((imagen) => this.seleccionadas.add(imagen.fileId));
  }

  async eliminarSeleccionadas(): Promise<void> {
    await this.eliminarArchivos([...this.seleccionadas]);
  }

  async eliminarUna(imagen: any): Promise<void> {
    await this.eliminarArchivos([imagen.fileId]);
  }

  private async eliminarArchivos(fileIds: string[]): Promise<void> {
    if (!fileIds.length || this.eliminando) {
      return;
    }
    const confirmado = await this.alertService.alertConfirm(
      fileIds.length > 1
        ? `¿Deseas eliminar ${fileIds.length} imágenes seleccionadas?`
        : '¿Deseas eliminar esta imagen?',
      '',
      'Sí, eliminar',
      'Cancelar',
    );
    if (!confirmado.isConfirmed) {
      return;
    }

    this.eliminando = true;
    this.alertService.loanding(
      fileIds.length > 1 ? 'Eliminando imágenes...' : 'Eliminando imagen...',
    );
    try {
      const imagenesAEliminar = this.imagenes.filter((imagen) => fileIds.includes(imagen.fileId));
      for (const fileId of fileIds) {
        await this.googleDriveService.eliminarImagen(fileId);
      }

      const grupos = new Map<string, Set<string>>();
      for (const imagen of imagenesAEliminar) {
        const clave = `${imagen.coleccion}:${imagen.pagoId}:${imagen.tipo}`;
        const ids = grupos.get(clave) ?? new Set<string>();
        ids.add(imagen.fileId);
        grupos.set(clave, ids);
      }

      for (const [clave, ids] of grupos) {
        const [coleccion, pagoId, tipo] = clave.split(':');
        const documento = await this.db.asyncDoc(coleccion, pagoId);
        if (!documento.exists()) {
          continue;
        }
        const pago: any = documento.data();
        const archivosActualizados = coleccion === 'gastos'
          ? (pago.archivos ?? []).filter((imagen: any) => !ids.has(imagen.fileId))
          : (pago.fotografias?.[tipo] ?? []).filter(
          (imagen: any) => !ids.has(imagen.fileId),
          );
        const datosActualizados = coleccion === 'gastos'
          ? { archivos: archivosActualizados }
          : { fotografias: { ...(pago.fotografias ?? {}), [tipo]: archivosActualizados } };
        await this.db.updateDoc(datosActualizados, coleccion, pagoId);
      }

      const ids = new Set(fileIds);
      this.imagenes = this.imagenes.filter((imagen) => !ids.has(imagen.fileId));
      this.aplicarFiltro();
      this.seleccionadas.clear();
      this.alertService.toast('Imágenes eliminadas correctamente.', 'snackbar-success');
    } catch {
      this.alertService.toast('No fue posible eliminar todas las imágenes.', 'snackbar-error');
    } finally {
      this.eliminando = false;
      this.alertService.alertClose();
    }
  }

  private convertirFecha(valor: any): Date | null {
    if (!valor) {
      return null;
    }
    if (valor instanceof Date) {
      return valor;
    }
    if (typeof valor.toDate === 'function') {
      return valor.toDate();
    }
    if (valor.seconds) {
      return new Date(valor.seconds * 1000);
    }
    const fecha = new Date(valor);
    return Number.isNaN(fecha.getTime()) ? null : fecha;
  }

  private inicioDelDia(fecha: Date | null): Date | null {
    if (!fecha) {
      return null;
    }
    const resultado = new Date(fecha);
    resultado.setHours(0, 0, 0, 0);
    return resultado;
  }

  private finDelDia(fecha: Date | null): Date | null {
    if (!fecha) {
      return null;
    }
    const resultado = new Date(fecha);
    resultado.setHours(23, 59, 59, 999);
    return resultado;
  }

}
