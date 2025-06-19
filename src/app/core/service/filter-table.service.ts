import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FilterTableService {
  filter(event: any, data: any): any {
    const val = event.target.value.toLowerCase();
    const keys = Object.keys(data[0]);
    const FilteredData = data.filter((item: any): any => {
      for (let i = 0; i < keys.length; i++) {
        if (
          item[keys[i]].toString().toLowerCase().indexOf(val) !== -1 ||
          !val
        ) {
          return true;
        }
      }
    });
    return FilteredData;
  }

  filterOne(event: any, data: any, itemFilter: any): any {
    const val = event.target.value.toLowerCase();
    const filteredData = data.filter((item: any): any => {
      if (
        item[itemFilter].toString().toLowerCase().indexOf(val) !== -1 ||
        !val
      ) {
        return true;
      }
    });
    return filteredData;
  }

  filterNoEvent(value: any, data: any, itemFilters: string[]): any {
    const val = value.toLowerCase();
    const FilteredData = data.filter((item: any): any => {
      for (let i = 0; i < itemFilters.length; i++) {
        if (
          item[itemFilters[i]].toString().toLowerCase().indexOf(val) !== -1 ||
          !val
        ) {
          return true;
        }
      }
    });
    return FilteredData;
  }

  filterListPedidos(event: any, data: any, itemFilters: string[]): any {
    const val = this.normalizeText(event.target.value.toLowerCase());

    if (!val) {
      return [...data]; // Devuelve copia de los datos originales si no hay valor de búsqueda
    }

    return data.filter((item: any) => {
      return itemFilters.some(filter => {
        const fieldValue = this.normalizeText(item[filter]?.toString().toLowerCase());
        return fieldValue.includes(val);
      });
    });
  }

  // Función para normalizar texto (quitar acentos y caracteres especiales)
  private normalizeText(text: string): string {
    return text
      .normalize('NFD') // Separa caracteres base de sus acentos
      .replace(/[\u0300-\u036f]/g, '') // Elimina los diacríticos
      .replace(/[^a-zA-Z0-9 ]/g, ''); // Opcional: elimina otros caracteres especiales
  }

  formatDate(fecha: Date, format?: string): string {
    let day: any = fecha.getDate();
    let month: any = fecha.getMonth() + 1;
    const year: any = fecha.getFullYear();
    const hour: any = fecha.getHours();
    let minutes: any = fecha.getMinutes();
    let seconds: any = fecha.getSeconds();
    month = month < 10 ? `0${month}` : month;
    day = day < 10 ? `0${day}` : day;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;
    switch (format) {
      case 'yyyy-mm-dd':
        return `${year}-${month}-${day} ${hour}:${minutes}:${seconds}`;
      case 'dd-mm-yyyy':
        return `${day}-${month}-${year} ${hour}:${minutes}:${seconds}`;
      case 'yyyy/mm/dd':
        return `${year}/${month}/${day} ${hour}:${minutes}:${seconds}`;
      case 'dd/mm/yyyy':
        return `${day}/${month}/${year} ${hour}:${minutes}:${seconds}`;
      case 'only':
        return `${day}/${month}/${year}`;
      case 'only_date':
        return `${year}-${month}-${day}`;
      default:
        return `${year}-${month}-${day} ${hour}:${minutes}:${seconds}`;
    }
  }
}
