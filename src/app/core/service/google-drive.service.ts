import { Injectable } from '@angular/core';

export interface DriveImageResponse {
  ok: boolean;
  mensaje: string;
  fileId: string;
  fileName: string;
  mimeType: string;
  size: number;
  url: string;
  viewUrl: string;
}

@Injectable({
  providedIn: 'root',
})
export class GoogleDriveService {
  private readonly APPS_SCRIPT_URL =
    'https://script.google.com/macros/s/AKfycbySoUfgfpaXkQzAcJQNWKqBrJVjpQ0H_tKw-wm_ZICYpKn2-eMjdrI7K_vLztNIy6L5/exec';

  async subirImagen(
    trabajoId: string,
    tipoFoto: 'revision' | 'entrega' | 'gastos',
    archivo: File,
  ): Promise<DriveImageResponse> {
    const imagen = await this.comprimirImagen(archivo);

    const base64 = await this.fileToBase64(imagen);

    const payload = {
      trabajoId,
      tipoFoto,
      nombreArchivo: imagen.name,
      mimeType: imagen.type,
      archivo: base64,
    };

    const response = await fetch(this.APPS_SCRIPT_URL, {
      method: 'POST',
      redirect: 'follow',
      headers: {
        'Content-Type': 'text/plain;charset=utf-8',
      },
      body: JSON.stringify(payload),
    });

    const texto = await response.text();

    try {
      return JSON.parse(texto) as DriveImageResponse;
    } catch {
      throw new Error(
        'Apps Script devolvió una respuesta inesperada: ' + texto,
      );
    }
  }

  private async comprimirImagen(file: File): Promise<File> {
    const imagen = await this.cargarImagen(file);

    const maxWidth = 2000;
    const maxHeight = 2000;

    const maxBytes = 5 * 1024 * 1024;

    let width = imagen.width;
    let height = imagen.height;

    // Mantener siempre la proporción original
    const escala = Math.min(maxWidth / width, maxHeight / height, 1);

    width = Math.round(width * escala);
    height = Math.round(height * escala);

    const canvas = document.createElement('canvas');

    canvas.width = width;
    canvas.height = height;

    const ctx = canvas.getContext('2d');

    if (!ctx) {
      throw new Error('No se pudo crear el canvas.');
    }

    // Mejor calidad de escalado
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';

    // Dibuja la imagen completa sin recortar ni deformar
    ctx.drawImage(imagen, 0, 0, width, height);

    // Empezamos con calidad alta
    let calidad = 0.92;

    let blob: Blob | null = null;

    // Bajamos calidad muy poco a poco.
    // Nunca bajaremos de 0.75.
    while (calidad >= 0.75) {
      blob = await new Promise<Blob | null>((resolve) => {
        canvas.toBlob((resultado) => resolve(resultado), 'image/jpeg', calidad);
      });

      if (!blob) {
        throw new Error('No se pudo comprimir la imagen.');
      }

      // Si ya pesa menos de 5 MB, terminamos.
      if (blob.size <= maxBytes) {
        break;
      }

      calidad -= 0.03;
    }

    // Si todavía pesa más de 5 MB,
    // reducimos dimensiones manteniendo la proporción.
    while (blob && blob.size > maxBytes && width > 1200) {
      width = Math.round(width * 0.9);
      height = Math.round(height * 0.9);

      canvas.width = width;
      canvas.height = height;

      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';

      ctx.drawImage(imagen, 0, 0, width, height);

      // Volvemos a intentar con calidad alta.
      calidad = 0.85;

      blob = await new Promise<Blob | null>((resolve) => {
        canvas.toBlob((resultado) => resolve(resultado), 'image/jpeg', calidad);
      });
    }

    if (!blob) {
      throw new Error('No se pudo comprimir la imagen.');
    }

    if (blob.size > maxBytes) {
      throw new Error(
        'La imagen sigue superando los 5 MB después de la compresión.',
      );
    }

    const nombre = this.nombreJPEG(file.name);

    return new File([blob], nombre, {
      type: 'image/jpeg',
    });
  }

  private cargarImagen(file: File): Promise<HTMLImageElement> {
    return new Promise((resolve, reject) => {
      const url = URL.createObjectURL(file);

      const imagen = new Image();

      imagen.onload = () => {
        URL.revokeObjectURL(url);
        resolve(imagen);
      };

      imagen.onerror = () => {
        URL.revokeObjectURL(url);
        reject(new Error('No se pudo leer la imagen.'));
      };

      imagen.src = url;
    });
  }

  private fileToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = () => {
        const resultado = reader.result as string;

        const base64 = resultado.split(',')[1];

        resolve(base64);
      };

      reader.onerror = () => {
        reject(new Error('No se pudo convertir la imagen.'));
      };

      reader.readAsDataURL(file);
    });
  }

  private nombreJPEG(nombre: string): string {
    const nombreSinExtension = nombre.replace(/\.[^/.]+$/, '');

    return `${nombreSinExtension}.jpg`;
  }

  // ============================================================
  // SUBIR VARIAS IMÁGENES
  // ============================================================

  async subirImagenes(
    trabajoId: string,
    tipoFoto: 'revision' | 'entrega' | 'gastos',
    archivos: File[],
  ): Promise<DriveImageResponse[]> {
    const respuestas: DriveImageResponse[] = [];

    for (const archivo of archivos) {
      const respuesta = await this.subirImagen(trabajoId, tipoFoto, archivo);

      respuestas.push(respuesta);
    }

    return respuestas;
  }

  async eliminarImagen(fileId: string): Promise<any> {
    if (!fileId) {
      throw new Error('No se recibió el ID de la imagen.');
    }

    const payload = {
      accion: 'eliminar',
      fileId: fileId,
    };

    console.log('ELIMINAR FOTO - PAYLOAD:', payload);

    const response = await fetch(this.APPS_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain;charset=utf-8',
      },
      body: JSON.stringify(payload),
      redirect: 'follow',
    });

    const texto = await response.text();

    console.log('ELIMINAR FOTO - STATUS:', response.status);
    console.log('ELIMINAR FOTO - URL FINAL:', response.url);
    console.log(
      'ELIMINAR FOTO - CONTENT-TYPE:',
      response.headers.get('content-type'),
    );
    console.log(
      'ELIMINAR FOTO - RESPUESTA PRIMEROS 500 CARACTERES:',
      texto.substring(0, 500),
    );

    if (!texto.trim().startsWith('{')) {
      throw new Error(
        'Google Apps Script no devolvió JSON. Revisa la URL final y la respuesta en consola.',
      );
    }

    let resultado: any;

    try {
      resultado = JSON.parse(texto);
    } catch {
      throw new Error(
        'La respuesta de Google Apps Script no es un JSON válido.',
      );
    }

    if (!resultado.ok) {
      throw new Error(resultado.error || 'No fue posible eliminar la imagen.');
    }

    return resultado;
  }
}
