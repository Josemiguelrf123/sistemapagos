import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-fotos-trabajo',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
  ],
  templateUrl: './fotos-trabajo.component.html',
  styleUrls: ['./fotos-trabajo.component.scss'],
})
export class FotosTrabajoComponent {

  @Input() fotografias: any = {};

  @Input()
  modo: 'tabla' | 'tarjeta' | 'seleccionado' | 'seleccionado-legacy' = 'tabla';

  @Output()
  verFoto = new EventEmitter<{
    fotos: any[];
    indice: number;
  }>();

  mostrarFotos = false;

  get fotosRevision(): any[] {
    return this.fotografias?.revision || [];
  }

  get fotosEntrega(): any[] {
    return this.fotografias?.entrega || [];
  }

  get todasLasFotos(): any[] {
    return [
      ...this.fotosRevision,
      ...this.fotosEntrega,
    ];
  }

  get tieneFotos(): boolean {
    return this.todasLasFotos.length > 0;
  }

  get cantidadFotos(): number {
    return this.todasLasFotos.length;
  }

  toggleFotos(): void {
    this.mostrarFotos = !this.mostrarFotos;
  }

  abrirFoto(fotos: any[], indice: number): void {
    this.verFoto.emit({
      fotos,
      indice,
    });
  }

  abrirFotoRevision(indice: number): void {
    this.abrirFoto(this.fotosRevision, indice);
  }

  abrirFotoEntrega(indice: number): void {
    this.abrirFoto(this.fotosEntrega, indice);
  }

  cerrarFotos(): void {
    this.mostrarFotos = false;
  }
}
