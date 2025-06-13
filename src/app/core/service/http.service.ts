/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Observer, lastValueFrom } from 'rxjs';
const headers: any = new HttpHeaders({ 'Content-Type': 'application/json' });

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  public baseURLTester = 'http://localhost:3003/upload';
  public baseURL = 'http://localhost:3003/upload';
  base64Image: any;

  constructor(private http: HttpClient) {}

  post(archivo: string, options: any) {
    return this.http.post(
      `${this.baseURL}${archivo}`,
      JSON.stringify(options),
      headers
    );
  }

  postpdf(archivo: string, options: any) {
    return this.http.post(
      `${this.baseURL}${archivo}`,
      JSON.stringify(options),
      headers
    );
  }

  postFile(archivo: string, file: any) {
    return this.http.post(`${this.baseURL}?folder=contratos2`, file);
  }

  compressImage(imageFile: any, quality = 50, maxWidth = 800): Promise<Blob> {
    return new Promise((resolve, reject) => {
      const $canvas = document.createElement('canvas');
      const image = new Image();
      image.onload = () => {
        // const scaleSize = maxWidth / image.width;
        $canvas.width = image.width;
        $canvas.height = image.height;
        $canvas?.getContext('2d')?.drawImage(image, 0, 0);
        $canvas.toBlob(
          (blob) => {
            if (blob === null) {
              return reject(blob);
            } else {
              resolve(blob);
            }
          },
          'image/jpeg',
          quality / 100
        );
      };
      image.src = URL.createObjectURL(imageFile);
    });
  }

  compressImg(imageFile: File, quality = 50, maxWidth = 800): Promise<Blob> {
    return new Promise((resolve, reject) => {
      const $canvas = document.createElement('canvas');
      const image = new Image();
      image.onload = () => {
        $canvas.width = image.width;
        $canvas.height = image.height;
        $canvas.getContext('2d')?.drawImage(image, 0, 0);
        $canvas.toBlob(
          (blob) => {
            if (blob === null) {
              return reject(blob);
            } else {
              resolve(blob);
            }
          },
          'image/jpeg',
          quality / 100
        );
      };
      image.src = URL.createObjectURL(imageFile);
    });
  }

  downloadImage(url: string) {
    this.getBase64ImageFromURL(url).subscribe((base64data: any) => {
      this.base64Image = 'data:image/jpg;base64,' + base64data;
      // save image to disk
      var link = document.createElement('a');

      document.body.appendChild(link); // for Firefox

      link.setAttribute('href', this.base64Image);
      link.setAttribute(
        'download',
        `imagen.${url.split('?')[0].split('.').pop()}`
      );
      link.click();
    });
  }

  getBase64ImageFromURL(url: string) {
    return Observable.create((observer: Observer<string>) => {
      const img: HTMLImageElement = new Image();
      img.crossOrigin = 'Anonymous';
      img.src = url;
      if (!img.complete) {
        img.onload = () => {
          observer.next(this.getBase64Image(img));
          observer.complete();
        };
        img.onerror = (err) => {
          observer.error(err);
        };
      } else {
        observer.next(this.getBase64Image(img));
        observer.complete();
      }
    });
  }

  getBase64Image(img: HTMLImageElement) {
    const canvas: HTMLCanvasElement = document.createElement('canvas');
    canvas.width = img.width;
    canvas.height = img.height;
    const ctx: any = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0);
    const dataURL: string = canvas.toDataURL('image/png');

    return dataURL.replace(/^data:image\/(png|jpg);base64,/, '');
  }

  downloadFile(url: any, fileName: any) {
    var link = document.createElement('a');
    link.download = fileName;
    link.href = url;
    link.setAttribute('target', '_blank');
    link.click();
    link.remove();
  }
}
