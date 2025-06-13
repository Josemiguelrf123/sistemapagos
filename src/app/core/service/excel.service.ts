import { Injectable } from '@angular/core';
import { Workbook } from 'exceljs';
import * as fs from 'file-saver';
import { FilterTableService } from './filter-table.service';

@Injectable({
  providedIn: 'root',
})
export class ExcelService {
  clasificacionesA: any = [
    'PLANEACIÓN, PROGRAMACIÓN Y PRESUPUESTACION',
    'ESTUDIOS PREVIOS',
    'PROCEDIMIENTO DE ADJUDICACIÓN',
    'GARANTÍAS',
    'DOCUMENTACIÓN LEGAL Y TÉCNICA DEL PROVEEDOR',
    'CONTRATACIÓN',
    'SUPERVISIÓN, ENTREGABLES Y PAGOS',
  ];
  clasificacionesO: any = [
    'PLANEACIÓN, PROGRAMACIÓN Y PRESUPUESTACION',
    'ESTUDIOS PREVIOS',
    'PROYECTO EJECUTIVO',
    'PROCEDIMIENTO DE LICITACIÓN (PÚBLICA FEDERAL Y ESTATAL), (INVITACIÓN A TRES Y ADJUDICACIÓN DIRECTA)',
    'EXCEPCIONES PARA LA LICITACIÓN',
    'CONTRATACIÓN',
    'EJECUCIÓN',
    'ESTIMACIONES DE OBRA DEBIDAMENTE REQUISITADAS',
    'AJUSTE DE COSTOS',
    'CONVENIOS',
    'SUSPENSIÓN, TERMINACIÓN ANTICIPADA O RESCISIÓN',
    'TERMINACIÓN DE LOS TRABAJOS',
    'OTROS',
  ];
  constructor(private filterSvc: FilterTableService) {}

  async generateExcelA(row: any) {
    let puntosAdquisiciones: any = await this.agruparDatosA(row.puntos);
    console.log(puntosAdquisiciones);
    puntosAdquisiciones[37] = {
      documentos: [],
      fechaRealizacion: {
        seconds: 1723063394,
        nanoseconds: 502000000,
      },
      semaforo: '',
      comentario: '',
      bullet: '',
      number: 0,
      nombres: [],
      type: '',
      puntos: [],
      estatus: 'E',
      grado: '',
      id: '',
      bullet1: '',
    };
    puntosAdquisiciones[38] = {
      documentos: [],
      fechaRealizacion: {
        seconds: 1723063394,
        nanoseconds: 502000000,
      },
      semaforo: '',
      comentario: '',
      bullet: '',
      number: 0,
      nombres: [],
      type: '',
      puntos: [],
      estatus: 'E',
      grado: '',
      id: '',
      bullet1: '',
    };
    puntosAdquisiciones[39] = {
      documentos: [],
      fechaRealizacion: {
        seconds: 1723063394,
        nanoseconds: 502000000,
      },
      semaforo: '',
      comentario: '',
      bullet: '',
      number: 0,
      nombres: [],
      type: '',
      puntos: [],
      estatus: 'E',
      grado: '',
      id: '',
      bullet1: '',
    };
    puntosAdquisiciones[40] = {
      documentos: [],
      fechaRealizacion: {
        seconds: 1723063394,
        nanoseconds: 502000000,
      },
      semaforo: '',
      comentario: '',
      bullet: '',
      number: 0,
      nombres: [],
      type: '',
      puntos: [],
      estatus: 'E',
      grado: '',
      id: '',
      bullet1: '',
    };
    puntosAdquisiciones[41] = {
      documentos: [],
      fechaRealizacion: {
        seconds: 1723063394,
        nanoseconds: 502000000,
      },
      semaforo: '',
      comentario: '',
      bullet: '',
      number: 0,
      nombres: [],
      type: '',
      puntos: [],
      estatus: 'E',
      grado: '',
      id: '',
      bullet1: '',
    };
    puntosAdquisiciones[42] = {
      documentos: [],
      fechaRealizacion: {
        seconds: 1723063394,
        nanoseconds: 502000000,
      },
      semaforo: '',
      comentario: '',
      bullet: '',
      number: 0,
      nombres: [],
      type: '',
      puntos: [],
      estatus: 'E',
      grado: '',
      id: '',
      bullet1: '',
    };
    puntosAdquisiciones[43] = {
      documentos: [],
      fechaRealizacion: {
        seconds: 1723063394,
        nanoseconds: 502000000,
      },
      semaforo: '',
      comentario: '',
      bullet: '',
      number: 0,
      nombres: [],
      type: '',
      puntos: [],
      estatus: 'E',
      grado: '',
      id: '',
      bullet1: '',
    };
    puntosAdquisiciones[44] = {
      documentos: [],
      fechaRealizacion: {
        seconds: 1723063394,
        nanoseconds: 502000000,
      },
      semaforo: '',
      comentario: '',
      bullet: '',
      number: 0,
      nombres: [],
      type: '',
      puntos: [],
      estatus: 'E',
      grado: '',
      id: '',
      bullet1: '',
    };
    puntosAdquisiciones[45] = {
      documentos: [],
      fechaRealizacion: {
        seconds: 1723063394,
        nanoseconds: 502000000,
      },
      semaforo: '',
      comentario: '',
      bullet: '',
      number: 0,
      nombres: [],
      type: '',
      puntos: [],
      estatus: 'E',
      grado: '',
      id: '',
      bullet1: '',
    };
    puntosAdquisiciones[46] = {
      documentos: [],
      fechaRealizacion: {
        seconds: 1723063394,
        nanoseconds: 502000000,
      },
      semaforo: '',
      comentario: '',
      bullet: '',
      number: 0,
      nombres: [],
      type: '',
      puntos: [],
      estatus: 'E',
      grado: '',
      id: '',
      bullet1: '',
    };
    puntosAdquisiciones[47] = {
      documentos: [],
      fechaRealizacion: {
        seconds: 1723063394,
        nanoseconds: 502000000,
      },
      semaforo: '',
      comentario: '',
      bullet: '',
      number: 0,
      nombres: [],
      type: '',
      puntos: [],
      estatus: 'E',
      grado: '',
      id: '',
      bullet1: '',
    };
    const data = [
      [
        '',
        puntosAdquisiciones[0].type,
        1,
        puntosAdquisiciones[0].bullet1,
        '',
        puntosAdquisiciones[0].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
        puntosAdquisiciones[0].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
        puntosAdquisiciones[0].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
          ? 'IN'
          : '',
        puntosAdquisiciones[0].estatus === 'DOCUMENTO NO APLICABLE'
          ? 'N/A'
          : puntosAdquisiciones[0].estatus ===
            'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
          ? 'NA/T'
          : '',
        puntosAdquisiciones[25].type,
        26,
        puntosAdquisiciones[25].bullet1,
        '',
        puntosAdquisiciones[25].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
        puntosAdquisiciones[25].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
        puntosAdquisiciones[25].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
          ? 'IN'
          : '',
        puntosAdquisiciones[25].estatus === 'DOCUMENTO NO APLICABLE'
          ? 'N/A'
          : puntosAdquisiciones[25].estatus ===
            'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
          ? 'NA/T'
          : '',
      ],
      [
        '',
        puntosAdquisiciones[1].type,
        2,
        puntosAdquisiciones[1].bullet1,
        '',
        puntosAdquisiciones[1].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
        puntosAdquisiciones[1].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
        puntosAdquisiciones[1].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
          ? 'IN'
          : '',
        puntosAdquisiciones[1].estatus === 'DOCUMENTO NO APLICABLE'
          ? 'N/A'
          : puntosAdquisiciones[1].estatus ===
            'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
          ? 'NA/T'
          : '',
        puntosAdquisiciones[26].type,
        27,
        puntosAdquisiciones[26].bullet1,
        '',
        puntosAdquisiciones[26].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
        puntosAdquisiciones[26].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
        puntosAdquisiciones[26].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
          ? 'IN'
          : '',
        puntosAdquisiciones[26].estatus === 'DOCUMENTO NO APLICABLE'
          ? 'N/A'
          : puntosAdquisiciones[26].estatus ===
            'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
          ? 'NA/T'
          : '',
      ],
      [
        '',
        puntosAdquisiciones[2].type,
        3,
        puntosAdquisiciones[2].bullet1,
        '',
        puntosAdquisiciones[2].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
        puntosAdquisiciones[2].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
        puntosAdquisiciones[2].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
          ? 'IN'
          : '',
        puntosAdquisiciones[2].estatus === 'DOCUMENTO NO APLICABLE'
          ? 'N/A'
          : puntosAdquisiciones[2].estatus ===
            'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
          ? 'NA/T'
          : '',
        puntosAdquisiciones[27].type,
        28,
        puntosAdquisiciones[27].bullet1,
        '',
        puntosAdquisiciones[27].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
        puntosAdquisiciones[27].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
        puntosAdquisiciones[27].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
          ? 'IN'
          : '',
        puntosAdquisiciones[27].estatus === 'DOCUMENTO NO APLICABLE'
          ? 'N/A'
          : puntosAdquisiciones[27].estatus ===
            'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
          ? 'NA/T'
          : '',
      ],
      [
        '',
        puntosAdquisiciones[3].type,
        4,
        puntosAdquisiciones[3].bullet1,
        '',
        puntosAdquisiciones[3].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
        puntosAdquisiciones[3].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
        puntosAdquisiciones[3].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
          ? 'IN'
          : '',
        puntosAdquisiciones[3].estatus === 'DOCUMENTO NO APLICABLE'
          ? 'N/A'
          : puntosAdquisiciones[3].estatus ===
            'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
          ? 'NA/T'
          : '',
        puntosAdquisiciones[28].type,
        29,
        puntosAdquisiciones[28].bullet1,
        '',
        puntosAdquisiciones[28].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
        puntosAdquisiciones[28].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
        puntosAdquisiciones[28].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
          ? 'IN'
          : '',
        puntosAdquisiciones[28].estatus === 'DOCUMENTO NO APLICABLE'
          ? 'N/A'
          : puntosAdquisiciones[28].estatus ===
            'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
          ? 'NA/T'
          : '',
      ],
      [
        '',
        puntosAdquisiciones[4].type,
        5,
        puntosAdquisiciones[4].bullet1,
        '',
        puntosAdquisiciones[4].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
        puntosAdquisiciones[4].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
        puntosAdquisiciones[4].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
          ? 'IN'
          : '',
        puntosAdquisiciones[4].estatus === 'DOCUMENTO NO APLICABLE'
          ? 'N/A'
          : puntosAdquisiciones[4].estatus ===
            'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
          ? 'NA/T'
          : '',
        puntosAdquisiciones[29].type,
        30,
        puntosAdquisiciones[29].bullet1,
        '',
        puntosAdquisiciones[29].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
        puntosAdquisiciones[29].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
        puntosAdquisiciones[29].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
          ? 'IN'
          : '',
        puntosAdquisiciones[29].estatus === 'DOCUMENTO NO APLICABLE'
          ? 'N/A'
          : puntosAdquisiciones[29].estatus ===
            'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
          ? 'NA/T'
          : '',
      ],
      [
        '',
        puntosAdquisiciones[5].type,
        6,
        puntosAdquisiciones[5].bullet1,
        '',
        puntosAdquisiciones[5].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
        puntosAdquisiciones[5].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
        puntosAdquisiciones[5].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
          ? 'IN'
          : '',
        puntosAdquisiciones[5].estatus === 'DOCUMENTO NO APLICABLE'
          ? 'N/A'
          : puntosAdquisiciones[5].estatus ===
            'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
          ? 'NA/T'
          : '',
        puntosAdquisiciones[30].type,
        31,
        puntosAdquisiciones[30].bullet1,
        '',
        puntosAdquisiciones[30].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
        puntosAdquisiciones[30].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
        puntosAdquisiciones[30].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
          ? 'IN'
          : '',
        puntosAdquisiciones[30].estatus === 'DOCUMENTO NO APLICABLE'
          ? 'N/A'
          : puntosAdquisiciones[30].estatus ===
            'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
          ? 'NA/T'
          : '',
      ],
      [
        '',
        puntosAdquisiciones[6].type,
        7,
        puntosAdquisiciones[6].bullet1,
        '',
        puntosAdquisiciones[6].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
        puntosAdquisiciones[6].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
        puntosAdquisiciones[6].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
          ? 'IN'
          : '',
        puntosAdquisiciones[6].estatus === 'DOCUMENTO NO APLICABLE'
          ? 'N/A'
          : puntosAdquisiciones[6].estatus ===
            'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
          ? 'NA/T'
          : '',
        puntosAdquisiciones[31].type,
        32,
        puntosAdquisiciones[31].bullet1,
        '',
        puntosAdquisiciones[31].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
        puntosAdquisiciones[31].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
        puntosAdquisiciones[31].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
          ? 'IN'
          : '',
        puntosAdquisiciones[31].estatus === 'DOCUMENTO NO APLICABLE'
          ? 'N/A'
          : puntosAdquisiciones[31].estatus ===
            'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
          ? 'NA/T'
          : '',
      ],
      [
        '',
        puntosAdquisiciones[7].type,
        8,
        puntosAdquisiciones[7].bullet1,
        '',
        puntosAdquisiciones[7].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
        puntosAdquisiciones[7].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
        puntosAdquisiciones[7].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
          ? 'IN'
          : '',
        puntosAdquisiciones[7].estatus === 'DOCUMENTO NO APLICABLE'
          ? 'N/A'
          : puntosAdquisiciones[7].estatus ===
            'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
          ? 'NA/T'
          : '',
        puntosAdquisiciones[32].type,
        33,
        puntosAdquisiciones[32].bullet1,
        '',
        puntosAdquisiciones[32].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
        puntosAdquisiciones[32].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
        puntosAdquisiciones[32].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
          ? 'IN'
          : '',
        puntosAdquisiciones[32].estatus === 'DOCUMENTO NO APLICABLE'
          ? 'N/A'
          : puntosAdquisiciones[32].estatus ===
            'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
          ? 'NA/T'
          : '',
      ],
      [
        '',
        '',
        '',
        '',
        '',
        ' ',
        '',
        '',
        '',
        puntosAdquisiciones[33].type,
        34,
        puntosAdquisiciones[33].bullet1,
        '',
        puntosAdquisiciones[33].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
        puntosAdquisiciones[33].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
        puntosAdquisiciones[33].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
          ? 'IN'
          : '',
        puntosAdquisiciones[33].estatus === 'DOCUMENTO NO APLICABLE'
          ? 'N/A'
          : puntosAdquisiciones[33].estatus ===
            'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
          ? 'NA/T'
          : '',
      ],
      [
        '',
        puntosAdquisiciones[8].type,
        9,
        puntosAdquisiciones[8].bullet1,
        '',
        puntosAdquisiciones[8].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
        puntosAdquisiciones[8].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
        puntosAdquisiciones[8].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
          ? 'IN'
          : '',
        puntosAdquisiciones[8].estatus === 'DOCUMENTO NO APLICABLE'
          ? 'N/A'
          : puntosAdquisiciones[8].estatus ===
            'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
          ? 'NA/T'
          : '',
        puntosAdquisiciones[34].type,
        35,
        puntosAdquisiciones[34].bullet1,
        '',
        puntosAdquisiciones[34].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
        puntosAdquisiciones[34].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
        puntosAdquisiciones[34].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
          ? 'IN'
          : '',
        puntosAdquisiciones[34].estatus === 'DOCUMENTO NO APLICABLE'
          ? 'N/A'
          : puntosAdquisiciones[34].estatus ===
            'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
          ? 'NA/T'
          : '',
      ],
      [
        '',
        puntosAdquisiciones[9].type,
        10,
        puntosAdquisiciones[9].bullet1,
        '',
        puntosAdquisiciones[9].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
        puntosAdquisiciones[9].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
        puntosAdquisiciones[9].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
          ? 'IN'
          : '',
        puntosAdquisiciones[9].estatus === 'DOCUMENTO NO APLICABLE'
          ? 'N/A'
          : puntosAdquisiciones[9].estatus ===
            'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
          ? 'NA/T'
          : '',
        puntosAdquisiciones[35].type,
        36,
        puntosAdquisiciones[35].bullet1,
        '',
        puntosAdquisiciones[35].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
        puntosAdquisiciones[35].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
        puntosAdquisiciones[35].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
          ? 'IN'
          : '',
        puntosAdquisiciones[35].estatus === 'DOCUMENTO NO APLICABLE'
          ? 'N/A'
          : puntosAdquisiciones[35].estatus ===
            'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
          ? 'NA/T'
          : '',
      ],
      [
        '',
        puntosAdquisiciones[10].type,
        11,
        puntosAdquisiciones[10].bullet1,
        '',
        puntosAdquisiciones[10].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
        puntosAdquisiciones[10].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
        puntosAdquisiciones[10].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
          ? 'IN'
          : '',
        puntosAdquisiciones[10].estatus === 'DOCUMENTO NO APLICABLE'
          ? 'N/A'
          : puntosAdquisiciones[10].estatus ===
            'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
          ? 'NA/T'
          : '',
        puntosAdquisiciones[36].type,
        37,
        puntosAdquisiciones[36].bullet1,
        '',
        puntosAdquisiciones[36].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
        puntosAdquisiciones[36].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
        puntosAdquisiciones[36].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
          ? 'IN'
          : '',
        puntosAdquisiciones[36].estatus === 'DOCUMENTO NO APLICABLE'
          ? 'N/A'
          : puntosAdquisiciones[36].estatus ===
            'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
          ? 'NA/T'
          : '',
      ],
      [
        '',
        puntosAdquisiciones[11].type,
        12,
        puntosAdquisiciones[11].bullet1,
        '',
        puntosAdquisiciones[11].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
        puntosAdquisiciones[11].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
        puntosAdquisiciones[11].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
          ? 'IN'
          : '',
        puntosAdquisiciones[11].estatus === 'DOCUMENTO NO APLICABLE'
          ? 'N/A'
          : puntosAdquisiciones[11].estatus ===
            'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
          ? 'NA/T'
          : '',
        puntosAdquisiciones[37].type,
        38,
        puntosAdquisiciones[37].bullet1,
        '',
        puntosAdquisiciones[37].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
        puntosAdquisiciones[37].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
        puntosAdquisiciones[37].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
          ? 'IN'
          : '',
        puntosAdquisiciones[37].estatus === 'DOCUMENTO NO APLICABLE'
          ? 'N/A'
          : puntosAdquisiciones[37].estatus ===
            'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
          ? 'NA/T'
          : '',
      ],
      [
        '',
        puntosAdquisiciones[12].type,
        13,
        puntosAdquisiciones[12].bullet1,
        '',
        puntosAdquisiciones[12].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
        puntosAdquisiciones[12].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
        puntosAdquisiciones[12].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
          ? 'IN'
          : '',
        puntosAdquisiciones[12].estatus === 'DOCUMENTO NO APLICABLE'
          ? 'N/A'
          : puntosAdquisiciones[12].estatus ===
            'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
          ? 'NA/T'
          : '',
        puntosAdquisiciones[38].type,
        39,
        puntosAdquisiciones[38].bullet1,
        '',
        puntosAdquisiciones[38].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
        puntosAdquisiciones[38].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
        puntosAdquisiciones[38].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
          ? 'IN'
          : '',
        puntosAdquisiciones[38].estatus === 'DOCUMENTO NO APLICABLE'
          ? 'N/A'
          : puntosAdquisiciones[38].estatus ===
            'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
          ? 'NA/T'
          : '',
      ],
      [
        '',
        puntosAdquisiciones[13].type,
        14,
        puntosAdquisiciones[13].bullet1,
        '',
        puntosAdquisiciones[13].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
        puntosAdquisiciones[13].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
        puntosAdquisiciones[13].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
          ? 'IN'
          : '',
        puntosAdquisiciones[13].estatus === 'DOCUMENTO NO APLICABLE'
          ? 'N/A'
          : puntosAdquisiciones[13].estatus ===
            'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
          ? 'NA/T'
          : '',
        puntosAdquisiciones[39].type,
        40,
        puntosAdquisiciones[39].bullet1,
        '',
        puntosAdquisiciones[39].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
        puntosAdquisiciones[39].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
        puntosAdquisiciones[39].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
          ? 'IN'
          : '',
        puntosAdquisiciones[39].estatus === 'DOCUMENTO NO APLICABLE'
          ? 'N/A'
          : puntosAdquisiciones[39].estatus ===
            'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
          ? 'NA/T'
          : '',
      ],
      [
        '',
        puntosAdquisiciones[14].type,
        15,
        puntosAdquisiciones[14].bullet1,
        '',
        puntosAdquisiciones[14].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
        puntosAdquisiciones[14].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
        puntosAdquisiciones[14].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
          ? 'IN'
          : '',
        puntosAdquisiciones[14].estatus === 'DOCUMENTO NO APLICABLE'
          ? 'N/A'
          : puntosAdquisiciones[14].estatus ===
            'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
          ? 'NA/T'
          : '',
        puntosAdquisiciones[40].type,
        41,
        puntosAdquisiciones[40].bullet1,
        '',
        puntosAdquisiciones[40].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
        puntosAdquisiciones[40].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
        puntosAdquisiciones[40].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
          ? 'IN'
          : '',
        puntosAdquisiciones[40].estatus === 'DOCUMENTO NO APLICABLE'
          ? 'N/A'
          : puntosAdquisiciones[40].estatus ===
            'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
          ? 'NA/T'
          : '',
      ],
      [
        '',
        puntosAdquisiciones[15].type,
        16,
        puntosAdquisiciones[15].bullet1,
        '',
        puntosAdquisiciones[15].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
        puntosAdquisiciones[15].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
        puntosAdquisiciones[15].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
          ? 'IN'
          : '',
        puntosAdquisiciones[15].estatus === 'DOCUMENTO NO APLICABLE'
          ? 'N/A'
          : puntosAdquisiciones[15].estatus ===
            'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
          ? 'NA/T'
          : '',
        puntosAdquisiciones[41].type,
        42,
        puntosAdquisiciones[41].bullet1,
        '',
        puntosAdquisiciones[41].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
        puntosAdquisiciones[41].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
        puntosAdquisiciones[41].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
          ? 'IN'
          : '',
        puntosAdquisiciones[41].estatus === 'DOCUMENTO NO APLICABLE'
          ? 'N/A'
          : puntosAdquisiciones[41].estatus ===
            'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
          ? 'NA/T'
          : '',
      ],
      [
        '',
        puntosAdquisiciones[16].type,
        17,
        puntosAdquisiciones[16].bullet1,
        '',
        puntosAdquisiciones[16].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
        puntosAdquisiciones[16].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
        puntosAdquisiciones[16].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
          ? 'IN'
          : '',
        puntosAdquisiciones[16].estatus === 'DOCUMENTO NO APLICABLE'
          ? 'N/A'
          : puntosAdquisiciones[16].estatus ===
            'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
          ? 'NA/T'
          : '',
        puntosAdquisiciones[42].type,
        43,
        puntosAdquisiciones[42].bullet1,
        '',
        puntosAdquisiciones[42].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
        puntosAdquisiciones[42].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
        puntosAdquisiciones[42].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
          ? 'IN'
          : '',
        puntosAdquisiciones[42].estatus === 'DOCUMENTO NO APLICABLE'
          ? 'N/A'
          : puntosAdquisiciones[42].estatus ===
            'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
          ? 'NA/T'
          : '',
      ],
      [
        '',
        puntosAdquisiciones[17].type,
        18,
        puntosAdquisiciones[17].bullet1,
        '',
        puntosAdquisiciones[17].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
        puntosAdquisiciones[17].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
        puntosAdquisiciones[17].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
          ? 'IN'
          : '',
        puntosAdquisiciones[17].estatus === 'DOCUMENTO NO APLICABLE'
          ? 'N/A'
          : puntosAdquisiciones[17].estatus ===
            'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
          ? 'NA/T'
          : '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
      ],
      [
        '',
        puntosAdquisiciones[18].type,
        19,
        puntosAdquisiciones[18].bullet1,
        '',
        puntosAdquisiciones[18].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
        puntosAdquisiciones[18].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
        puntosAdquisiciones[18].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
          ? 'IN'
          : '',
        puntosAdquisiciones[18].estatus === 'DOCUMENTO NO APLICABLE'
          ? 'N/A'
          : puntosAdquisiciones[18].estatus ===
            'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
          ? 'NA/T'
          : '',
        puntosAdquisiciones[43].type,
        44,
        puntosAdquisiciones[43].bullet1,
        '',
        puntosAdquisiciones[43].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
        puntosAdquisiciones[43].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
        puntosAdquisiciones[43].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
          ? 'IN'
          : '',
        puntosAdquisiciones[43].estatus === 'DOCUMENTO NO APLICABLE'
          ? 'N/A'
          : puntosAdquisiciones[43].estatus ===
            'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
          ? 'NA/T'
          : '',
      ],
      [
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        puntosAdquisiciones[44].type,
        45,
        puntosAdquisiciones[44].bullet1,
        '',
        puntosAdquisiciones[44].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
        puntosAdquisiciones[44].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
        puntosAdquisiciones[44].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
          ? 'IN'
          : '',
        puntosAdquisiciones[44].estatus === 'DOCUMENTO NO APLICABLE'
          ? 'N/A'
          : puntosAdquisiciones[44].estatus ===
            'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
          ? 'NA/T'
          : '',
      ],
      [
        '',
        puntosAdquisiciones[19].type,
        20,
        puntosAdquisiciones[19].bullet1,
        '',
        puntosAdquisiciones[19].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
        puntosAdquisiciones[19].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
        puntosAdquisiciones[19].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
          ? 'IN'
          : '',
        puntosAdquisiciones[19].estatus === 'DOCUMENTO NO APLICABLE'
          ? 'N/A'
          : puntosAdquisiciones[19].estatus ===
            'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
          ? 'NA/T'
          : '',
        puntosAdquisiciones[45].type,
        46,
        puntosAdquisiciones[45].bullet1,
        '',
        puntosAdquisiciones[45].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
        puntosAdquisiciones[45].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
        puntosAdquisiciones[45].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
          ? 'IN'
          : '',
        puntosAdquisiciones[45].estatus === 'DOCUMENTO NO APLICABLE'
          ? 'N/A'
          : puntosAdquisiciones[45].estatus ===
            'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
          ? 'NA/T'
          : '',
      ],
      [
        '',
        puntosAdquisiciones[20].type,
        21,
        puntosAdquisiciones[20].bullet1,
        '',
        puntosAdquisiciones[20].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
        puntosAdquisiciones[20].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
        puntosAdquisiciones[20].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
          ? 'IN'
          : '',
        puntosAdquisiciones[20].estatus === 'DOCUMENTO NO APLICABLE'
          ? 'N/A'
          : puntosAdquisiciones[20].estatus ===
            'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
          ? 'NA/T'
          : '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
      ],
      [
        '',
        puntosAdquisiciones[21].type,
        22,
        puntosAdquisiciones[21].bullet1,
        '',
        puntosAdquisiciones[21].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
        puntosAdquisiciones[21].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
        puntosAdquisiciones[21].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
          ? 'IN'
          : '',
        puntosAdquisiciones[21].estatus === 'DOCUMENTO NO APLICABLE'
          ? 'N/A'
          : puntosAdquisiciones[21].estatus ===
            'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
          ? 'NA/T'
          : '',
        puntosAdquisiciones[46].type,
        47,
        puntosAdquisiciones[46].bullet1,
        '',
        puntosAdquisiciones[46].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
        puntosAdquisiciones[46].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
        puntosAdquisiciones[46].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
          ? 'IN'
          : '',
        puntosAdquisiciones[46].estatus === 'DOCUMENTO NO APLICABLE'
          ? 'N/A'
          : puntosAdquisiciones[46].estatus ===
            'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
          ? 'NA/T'
          : '',
      ],
      [
        '',
        puntosAdquisiciones[22].type,
        23,
        puntosAdquisiciones[22].bullet1,
        '',
        puntosAdquisiciones[22].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
        puntosAdquisiciones[22].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
        puntosAdquisiciones[22].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
          ? 'IN'
          : '',
        puntosAdquisiciones[22].estatus === 'DOCUMENTO NO APLICABLE'
          ? 'N/A'
          : puntosAdquisiciones[22].estatus ===
            'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
          ? 'NA/T'
          : '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
      ],
      [
        '',
        puntosAdquisiciones[23].type,
        24,
        puntosAdquisiciones[23].bullet1,
        '',
        puntosAdquisiciones[23].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
        puntosAdquisiciones[23].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
        puntosAdquisiciones[23].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
          ? 'IN'
          : '',
        puntosAdquisiciones[23].estatus === 'DOCUMENTO NO APLICABLE'
          ? 'N/A'
          : puntosAdquisiciones[23].estatus ===
            'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
          ? 'NA/T'
          : '',
        puntosAdquisiciones[47].type,
        48,
        puntosAdquisiciones[47].bullet1,
        '',
        puntosAdquisiciones[47].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
        puntosAdquisiciones[47].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
        puntosAdquisiciones[47].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
          ? 'IN'
          : '',
        puntosAdquisiciones[47].estatus === 'DOCUMENTO NO APLICABLE'
          ? 'N/A'
          : puntosAdquisiciones[47].estatus ===
            'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
          ? 'NA/T'
          : '',
      ],
      [
        '',
        puntosAdquisiciones[24].type,
        25,
        puntosAdquisiciones[24].bullet1,
        '',
        puntosAdquisiciones[24].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
        puntosAdquisiciones[24].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
        puntosAdquisiciones[24].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
          ? 'IN'
          : '',
        puntosAdquisiciones[24].estatus === 'DOCUMENTO NO APLICABLE'
          ? 'N/A'
          : puntosAdquisiciones[24].estatus ===
            'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
          ? 'NA/T'
          : '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
      ],
    ];
    const title = 'INSTITUTO MEXICANO DEL SEGURO SOCIAL';
    const subtitle = 'FICHA DE INFORMACIÓN DOCUMENTAL-A';
    const subtitle1 = 'GENERALES';
    const subtitle2 = 'ÁREA REQUIRENTE Y/O RESPONSABLE';
    const subtitle3 = 'EJERCICIO';
    const subtitle4 = 'N° DE CONTRATO';
    const subtitle5 = 'N° DE ADJUDICACIÓN';
    const subtitle6 = 'TIPO DE ADJUDICACIÓN';
    const subtitle7 = 'FONDO Y PARTIDA PRESUPUESTAL';
    const subtitle8 = 'PROVEEDOR';
    const subtitle9 = 'VIGENCIA';
    const subtitle10 = 'MONTO';
    const subtitle11 = 'OBJETO DEL CONTRATO';
    const subtitle12 = 'COMENTARIOS Y OBSERVACIONES';
    const header = [
      '',
      'ETAPA',
      'No',
      'DOCUMENTO',
      '',
      'SI',
      'NO',
      'INCUMPLE',
      'NA',
      'ETAPA',
      'No',
      'DOCUMENTO',
      '',
      'SI',
      'NO',
      'INCUMPLE',
      'NA',
    ];

    const workbook = new Workbook();
    const worksheet = workbook.addWorksheet('FID-A');
    const titleRow = worksheet.addRow(['', title]);
    titleRow.font = {
      name: 'Calibri',
      size: 12,
      underline: 'none',
      bold: true,
      color: { argb: 'ffffff' },
    };
    titleRow.alignment = { horizontal: 'center', vertical: 'middle' };
    titleRow.height = 34.5;
    ['B1'].map((key) => {
      worksheet.getCell(key).fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: '6FAE45' },
      };
      worksheet.getCell(key).border = {
        top: { style: 'medium', color: { argb: '000000' } },
        left: { style: 'medium', color: { argb: '000000' } },
        bottom: { style: 'medium', color: { argb: '000000' } },
        right: { style: 'medium', color: { argb: '000000' } },
      };
    });
    worksheet.mergeCells('B1:Q1');

    const subtitleRow = worksheet.addRow(['', subtitle]);
    subtitleRow.font = {
      name: 'Calibri',
      size: 12,
      underline: 'none',
      bold: true,
      color: { argb: 'ffffff' },
    };
    subtitleRow.alignment = { horizontal: 'center', vertical: 'middle' };
    subtitleRow.height = 39;
    ['B2'].map((key) => {
      worksheet.getCell(key).fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: '6FAE45' },
      };
      worksheet.getCell(key).border = {
        top: { style: 'medium', color: { argb: '000000' } },
        left: { style: 'medium', color: { argb: '000000' } },
        bottom: { style: 'medium', color: { argb: '000000' } },
        right: { style: 'medium', color: { argb: '000000' } },
      };
    });
    worksheet.mergeCells('B2:Q2');

    const generalRow = worksheet.addRow([
      '',
      subtitle1,
      '',
      subtitle2,
      '',
      row.areaRequirente,
    ]);
    generalRow.font = {
      name: 'Calibri',
      size: 12,
      underline: 'none',
      bold: true,
      color: { argb: 'ffffff' },
    };
    generalRow.alignment = { horizontal: 'center', vertical: 'middle' };
    generalRow.height = 45;
    ['B3'].map((key) => {
      worksheet.getCell(key).fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: '6FAE45' },
      };
      worksheet.getCell(key).border = {
        top: { style: 'medium', color: { argb: '000000' } },
        left: { style: 'medium', color: { argb: '000000' } },
        bottom: { style: 'medium', color: { argb: '000000' } },
        right: { style: 'medium', color: { argb: '000000' } },
      };
    });
    ['D3'].map((key) => {
      worksheet.getCell(key).fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: '6FAE45' },
      };
      worksheet.getCell(key).border = {
        top: { style: 'medium', color: { argb: '000000' } },
        left: { style: 'medium', color: { argb: '000000' } },
        bottom: { style: 'medium', color: { argb: '000000' } },
        right: { style: 'medium', color: { argb: '000000' } },
      };
    });
    const texto1 = generalRow.getCell(6);
    texto1.font = {
      name: 'Calibri',
      size: 12,
      underline: 'none',
    };
    texto1.alignment = {
      horizontal: 'center',
      vertical: 'middle',
      wrapText: true,
    };
    texto1.border = {
      top: { style: 'medium' },
      left: { style: 'medium' },
      bottom: { style: 'medium' },
      right: { style: 'medium' },
    };

    const campoRow = worksheet.addRow([
      '',
      '',
      '',
      subtitle3,
      '',
      row.ejercicio,
    ]);
    campoRow.font = {
      name: 'Calibri',
      size: 12,
      underline: 'none',
      bold: true,
      color: { argb: 'ffffff' },
    };
    campoRow.alignment = { horizontal: 'center', vertical: 'middle' };

    ['D4'].map((key) => {
      worksheet.getCell(key).fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: '6FAE45' },
      };
      worksheet.getCell(key).border = {
        top: { style: 'medium', color: { argb: '000000' } },
        left: { style: 'medium', color: { argb: '000000' } },
        bottom: { style: 'medium', color: { argb: '000000' } },
        right: { style: 'medium', color: { argb: '000000' } },
      };
    });

    const texto2 = campoRow.getCell(6);
    texto2.font = {
      name: 'Calibri',
      size: 12,
      underline: 'none',
    };
    texto2.alignment = {
      horizontal: 'center',
      vertical: 'middle',
      wrapText: true,
    };
    texto2.border = {
      top: { style: 'medium' },
      left: { style: 'medium' },
      bottom: { style: 'medium' },
      right: { style: 'medium' },
    };

    const campoRow2 = worksheet.addRow([
      '',
      '',
      '',
      subtitle4,
      '',
      row.noContrato,
    ]);
    campoRow2.font = {
      name: 'Calibri',
      size: 12,
      underline: 'none',
      bold: true,
      color: { argb: 'ffffff' },
    };
    campoRow2.alignment = { horizontal: 'center', vertical: 'middle' };

    ['D5'].map((key) => {
      worksheet.getCell(key).fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: '6FAE45' },
      };
      worksheet.getCell(key).border = {
        top: { style: 'medium', color: { argb: '000000' } },
        left: { style: 'medium', color: { argb: '000000' } },
        bottom: { style: 'medium', color: { argb: '000000' } },
        right: { style: 'medium', color: { argb: '000000' } },
      };
    });

    const texto3 = campoRow2.getCell(6);
    texto3.font = {
      name: 'Calibri',
      size: 12,
      underline: 'none',
    };
    texto3.alignment = {
      horizontal: 'center',
      vertical: 'middle',
      wrapText: true,
    };
    texto3.border = {
      top: { style: 'medium' },
      left: { style: 'medium' },
      bottom: { style: 'medium' },
      right: { style: 'medium' },
    };

    const campoRow3 = worksheet.addRow([
      '',
      '',
      '',
      subtitle5,
      '',
      row.noAdjudicacion,
    ]);
    campoRow3.font = {
      name: 'Calibri',
      size: 12,
      underline: 'none',
      bold: true,
      color: { argb: 'ffffff' },
    };
    campoRow3.alignment = { horizontal: 'center', vertical: 'middle' };

    ['D6'].map((key) => {
      worksheet.getCell(key).fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: '6FAE45' },
      };
      worksheet.getCell(key).border = {
        top: { style: 'medium', color: { argb: '000000' } },
        left: { style: 'medium', color: { argb: '000000' } },
        bottom: { style: 'medium', color: { argb: '000000' } },
        right: { style: 'medium', color: { argb: '000000' } },
      };
    });

    const texto4 = campoRow3.getCell(6);
    texto4.font = {
      name: 'Calibri',
      size: 12,
      underline: 'none',
    };
    texto4.alignment = {
      horizontal: 'center',
      vertical: 'middle',
      wrapText: true,
    };
    texto4.border = {
      top: { style: 'medium' },
      left: { style: 'medium' },
      bottom: { style: 'medium' },
      right: { style: 'medium' },
    };

    const campoRow4 = worksheet.addRow([
      '',
      '',
      '',
      subtitle6,
      '',
      row.tipoAdjudicacion,
    ]);
    campoRow4.font = {
      name: 'Calibri',
      size: 12,
      underline: 'none',
      bold: true,
      color: { argb: 'ffffff' },
    };
    campoRow4.alignment = { horizontal: 'center', vertical: 'middle' };

    ['D7'].map((key) => {
      worksheet.getCell(key).fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: '6FAE45' },
      };
      worksheet.getCell(key).border = {
        top: { style: 'medium', color: { argb: '000000' } },
        left: { style: 'medium', color: { argb: '000000' } },
        bottom: { style: 'medium', color: { argb: '000000' } },
        right: { style: 'medium', color: { argb: '000000' } },
      };
    });

    const texto5 = campoRow4.getCell(6);
    texto5.font = {
      name: 'Calibri',
      size: 12,
      underline: 'none',
    };
    texto5.alignment = {
      horizontal: 'center',
      vertical: 'middle',
      wrapText: true,
    };
    texto5.border = {
      top: { style: 'medium' },
      left: { style: 'medium' },
      bottom: { style: 'medium' },
      right: { style: 'medium' },
    };

    const campoRow5 = worksheet.addRow(['', '', '', subtitle7, '', row.fondo]);
    campoRow5.font = {
      name: 'Calibri',
      size: 12,
      underline: 'none',
      bold: true,
      color: { argb: 'ffffff' },
    };
    campoRow5.alignment = { horizontal: 'center', vertical: 'middle' };

    ['D8'].map((key) => {
      worksheet.getCell(key).fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: '6FAE45' },
      };
      worksheet.getCell(key).border = {
        top: { style: 'medium', color: { argb: '000000' } },
        left: { style: 'medium', color: { argb: '000000' } },
        bottom: { style: 'medium', color: { argb: '000000' } },
        right: { style: 'medium', color: { argb: '000000' } },
      };
    });

    const texto6 = campoRow5.getCell(6);
    texto6.font = {
      name: 'Calibri',
      size: 12,
      underline: 'none',
    };
    texto6.alignment = {
      horizontal: 'center',
      vertical: 'middle',
      wrapText: true,
    };
    texto6.border = {
      top: { style: 'medium' },
      left: { style: 'medium' },
      bottom: { style: 'medium' },
      right: { style: 'medium' },
    };

    const campoRow6 = worksheet.addRow([
      '',
      '',
      '',
      subtitle8,
      '',
      row.proveedor,
    ]);
    campoRow6.font = {
      name: 'Calibri',
      size: 12,
      underline: 'none',
      bold: true,
      color: { argb: 'ffffff' },
    };
    campoRow6.alignment = { horizontal: 'center', vertical: 'middle' };

    ['D9'].map((key) => {
      worksheet.getCell(key).fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: '6FAE45' },
      };
      worksheet.getCell(key).border = {
        top: { style: 'medium', color: { argb: '000000' } },
        left: { style: 'medium', color: { argb: '000000' } },
        bottom: { style: 'medium', color: { argb: '000000' } },
        right: { style: 'medium', color: { argb: '000000' } },
      };
    });

    const texto7 = campoRow6.getCell(6);
    texto7.font = {
      name: 'Calibri',
      size: 12,
      underline: 'none',
    };
    texto7.alignment = {
      horizontal: 'center',
      vertical: 'middle',
      wrapText: true,
    };
    texto7.border = {
      top: { style: 'medium' },
      left: { style: 'medium' },
      bottom: { style: 'medium' },
      right: { style: 'medium' },
    };

    let fechaI: any = '';
    let fechaF: any = '';

    if (row.vigenciaInicio !== undefined && row.vigenciaInicio !== '') {
      fechaI = this.filterSvc.formatDate(
        new Date(row.vigenciaInicio.seconds * 1000),
        'only_date'
      );
    }
    if (row.vigenciaFin !== undefined && row.vigenciaFin !== '') {
      fechaF = this.filterSvc.formatDate(
        new Date(row.vigenciaFin.seconds * 1000),
        'only_date'
      );
    }

    const campoRow7 = worksheet.addRow([
      '',
      '',
      '',
      subtitle9,
      '',
      `${fechaI} - ${fechaF}`,
    ]);
    campoRow7.font = {
      name: 'Calibri',
      size: 12,
      underline: 'none',
      bold: true,
      color: { argb: 'ffffff' },
    };
    campoRow7.alignment = { horizontal: 'center', vertical: 'middle' };

    ['D10'].map((key) => {
      worksheet.getCell(key).fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: '6FAE45' },
      };
      worksheet.getCell(key).border = {
        top: { style: 'medium', color: { argb: '000000' } },
        left: { style: 'medium', color: { argb: '000000' } },
        bottom: { style: 'medium', color: { argb: '000000' } },
        right: { style: 'medium', color: { argb: '000000' } },
      };
    });

    const texto8 = campoRow7.getCell(6);
    texto8.font = {
      name: 'Calibri',
      size: 12,
      underline: 'none',
    };
    texto8.alignment = {
      horizontal: 'center',
      vertical: 'middle',
      wrapText: true,
    };
    texto8.border = {
      top: { style: 'medium' },
      left: { style: 'medium' },
      bottom: { style: 'medium' },
      right: { style: 'medium' },
    };

    const campoRow8 = worksheet.addRow(['', '', '', subtitle10, '', row.monto]);
    campoRow8.font = {
      name: 'Calibri',
      size: 12,
      underline: 'none',
      bold: true,
      color: { argb: 'ffffff' },
    };
    campoRow8.alignment = { horizontal: 'center', vertical: 'middle' };

    ['D11'].map((key) => {
      worksheet.getCell(key).fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: '6FAE45' },
      };
      worksheet.getCell(key).border = {
        top: { style: 'medium', color: { argb: '000000' } },
        left: { style: 'medium', color: { argb: '000000' } },
        bottom: { style: 'medium', color: { argb: '000000' } },
        right: { style: 'medium', color: { argb: '000000' } },
      };
    });

    const texto9 = campoRow8.getCell(6);
    texto9.font = {
      name: 'Calibri',
      size: 12,
      underline: 'none',
    };
    texto9.alignment = {
      horizontal: 'center',
      vertical: 'middle',
      wrapText: true,
    };
    texto9.border = {
      top: { style: 'medium' },
      left: { style: 'medium' },
      bottom: { style: 'medium' },
      right: { style: 'medium' },
    };

    const campoRow9 = worksheet.addRow([
      '',
      '',
      '',
      subtitle11,
      '',
      row.objetivo,
    ]);
    campoRow9.font = {
      name: 'Calibri',
      size: 12,
      underline: 'none',
      bold: true,
      color: { argb: 'ffffff' },
    };
    campoRow9.alignment = { horizontal: 'center', vertical: 'middle' };

    ['D12'].map((key) => {
      worksheet.getCell(key).fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: '6FAE45' },
      };
      worksheet.getCell(key).border = {
        top: { style: 'medium', color: { argb: '000000' } },
        left: { style: 'medium', color: { argb: '000000' } },
        bottom: { style: 'medium', color: { argb: '000000' } },
        right: { style: 'medium', color: { argb: '000000' } },
      };
    });

    const texto10 = campoRow9.getCell(6);
    texto10.font = {
      name: 'Calibri',
      size: 12,
      underline: 'none',
    };
    texto10.alignment = {
      horizontal: 'center',
      vertical: 'middle',
      wrapText: true,
    };
    texto10.border = {
      top: { style: 'medium' },
      left: { style: 'medium' },
      bottom: { style: 'medium' },
      right: { style: 'medium' },
    };

    worksheet.mergeCells('B3:C12');
    worksheet.mergeCells('D3:E3');
    worksheet.mergeCells('F3:Q3');
    worksheet.mergeCells('F4:Q4');
    worksheet.mergeCells('F5:Q5');
    worksheet.mergeCells('F6:Q6');
    worksheet.mergeCells('F7:Q7');
    worksheet.mergeCells('F8:Q8');
    worksheet.mergeCells('F9:Q9');
    worksheet.mergeCells('F10:Q10');
    worksheet.mergeCells('F11:Q11');
    worksheet.mergeCells('F12:Q12');
    worksheet.mergeCells('D4:E4');
    worksheet.mergeCells('D5:E5');
    worksheet.mergeCells('D6:E6');
    worksheet.mergeCells('D7:E7');
    worksheet.mergeCells('D8:E8');
    worksheet.mergeCells('D9:E9');
    worksheet.mergeCells('D10:E10');
    worksheet.mergeCells('D11:E11');
    worksheet.mergeCells('D12:E12');

    const headerRow = worksheet.addRow(header);

    headerRow.eachCell((cell, number) => {
      if (number !== 1) {
        cell.font = {
          name: 'Calibri',
          size: 12,
          underline: 'none',
          bold: true,
          color: { argb: 'ffffff' },
        };
        cell.alignment = { horizontal: 'center', vertical: 'middle' };
        cell.fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: { argb: '6FAE45' },
          bgColor: { argb: '6FAE45' },
        };
        cell.border = {
          top: { style: 'medium' },
          left: { style: 'medium' },
          bottom: { style: 'medium' },
          right: { style: 'medium' },
        };
      }
    });
    worksheet.mergeCells('D13:E13');
    worksheet.mergeCells('L13:M13');

    data.forEach((d) => {
      const row = worksheet.addRow(d);

      row.font = {
        name: 'Calibri',
        size: 12,
        underline: 'none',
      };
      row.alignment = {
        horizontal: 'center',
        vertical: 'middle',
        wrapText: true,
      };
      row.border = {
        top: { style: 'thin' },
        left: { style: 'thin' },
        bottom: { style: 'thin' },
        right: { style: 'thin' },
      };
      if (
        row.number !== 21 &&
        row.number !== 22 &&
        row.number !== 33 &&
        row.number !== 34
      ) {
        worksheet.mergeCells(`D${String(row.number)}:E${String(row.number)}`);
      }
      if (
        row.number !== 31 &&
        row.number !== 32 &&
        row.number !== 35 &&
        row.number !== 36 &&
        row.number !== 37 &&
        row.number !== 38 &&
        row.number !== 39 &&
        row.number !== 40
      ) {
        worksheet.mergeCells(`L${String(row.number)}:M${String(row.number)}`);
      }
      const qty0 = row.getCell(1);
      const qty = row.getCell(2);
      const qty1 = row.getCell(10);
      const qty2 = row.getCell(17);

      qty.font = {
        name: 'Calibri',
        size: 12,
        underline: 'none',
        bold: true,
        color: { argb: 'ffffff' },
      };
      qty.alignment = {
        horizontal: 'center',
        vertical: 'middle',
        wrapText: true,
        textRotation: 90,
      };
      qty.fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: '6FAE45' },
        bgColor: { argb: '6FAE45' },
      };
      qty.border = {
        top: { style: 'medium' },
        left: { style: 'medium' },
        bottom: { style: 'medium' },
        right: { style: 'medium' },
      };
      qty1.font = {
        name: 'Calibri',
        size: 12,
        underline: 'none',
        bold: true,
        color: { argb: 'ffffff' },
      };
      qty1.alignment = {
        horizontal: 'center',
        vertical: 'middle',
        wrapText: true,
        textRotation: 90,
      };
      qty1.fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: '6FAE45' },
        bgColor: { argb: '6FAE45' },
      };
      qty1.border = {
        top: { style: 'medium' },
        left: { style: 'medium' },
        bottom: { style: 'medium' },
        right: { style: 'medium' },
      };
      qty0.font = {
        name: 'Calibri',
        size: 12,
        underline: 'none',
        bold: true,
        color: { argb: 'ffffff' },
      };
      qty0.alignment = {
        horizontal: 'center',
        vertical: 'middle',
        wrapText: true,
        textRotation: 90,
      };
      qty0.fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: 'ffffff' },
        bgColor: { argb: 'ffffff' },
      };
      qty0.border = {
        right: { style: 'medium' },
      };
      qty2.border = {
        top: { style: 'medium' },
        left: { style: 'medium' },
        bottom: { style: 'medium' },
        right: { style: 'medium' },
      };
      row.getCell(3).border = {
        top: { style: 'medium' },
        left: { style: 'medium' },
        bottom: { style: 'medium' },
        right: { style: 'medium' },
      };
      row.getCell(4).border = {
        top: { style: 'medium' },
        left: { style: 'medium' },
        bottom: { style: 'medium' },
        right: { style: 'medium' },
      };
      row.getCell(5).border = {
        top: { style: 'medium' },
        left: { style: 'medium' },
        bottom: { style: 'medium' },
        right: { style: 'medium' },
      };
      row.getCell(6).border = {
        top: { style: 'medium' },
        left: { style: 'medium' },
        bottom: { style: 'medium' },
        right: { style: 'medium' },
      };
      if (row.getCell(6).text === 'P') {
        row.getCell(6).font = {
          name: 'Calibri',
          size: 12,
          underline: 'none',
          bold: true,
        };
        row.getCell(6).fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: { argb: '92d14f' },
          bgColor: { argb: '92d14f' },
        };
      }
      row.getCell(7).border = {
        top: { style: 'medium' },
        left: { style: 'medium' },
        bottom: { style: 'medium' },
        right: { style: 'medium' },
      };
      if (row.getCell(7).text === 'O') {
        row.getCell(7).font = {
          name: 'Calibri',
          size: 12,
          underline: 'none',
          bold: true,
        };
        row.getCell(7).fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: { argb: 'fe0000' },
          bgColor: { argb: 'fe0000' },
        };
      }
      row.getCell(8).border = {
        top: { style: 'medium' },
        left: { style: 'medium' },
        bottom: { style: 'medium' },
        right: { style: 'medium' },
      };
      if (row.getCell(8).text === 'IN') {
        row.getCell(8).font = {
          name: 'Calibri',
          size: 12,
          underline: 'none',
          bold: true,
        };
        row.getCell(8).fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: { argb: 'ffff01' },
          bgColor: { argb: 'ffff01' },
        };
      }
      row.getCell(9).border = {
        top: { style: 'medium' },
        left: { style: 'medium' },
        bottom: { style: 'medium' },
        right: { style: 'medium' },
      };
      if (row.getCell(9).text === 'N/A' || row.getCell(9).text === 'NA/T') {
        row.getCell(9).font = {
          name: 'Calibri',
          size: 12,
          underline: 'none',
          bold: true,
        };
        if (row.getCell(9).text === 'N/A') {
          row.getCell(9).fill = {
            type: 'pattern',
            pattern: 'solid',
            fgColor: { argb: 'a5a5a5' },
            bgColor: { argb: 'a5a5a5' },
          };
        } else {
          row.getCell(9).fill = {
            type: 'pattern',
            pattern: 'solid',
            fgColor: { argb: '5a9bd5' },
            bgColor: { argb: '5a9bd5' },
          };
        }
      }
      row.getCell(11).border = {
        top: { style: 'medium' },
        left: { style: 'medium' },
        bottom: { style: 'medium' },
        right: { style: 'medium' },
      };
      row.getCell(12).border = {
        top: { style: 'medium' },
        left: { style: 'medium' },
        bottom: { style: 'medium' },
        right: { style: 'medium' },
      };
      row.getCell(13).border = {
        top: { style: 'medium' },
        left: { style: 'medium' },
        bottom: { style: 'medium' },
        right: { style: 'medium' },
      };
      row.getCell(14).border = {
        top: { style: 'medium' },
        left: { style: 'medium' },
        bottom: { style: 'medium' },
        right: { style: 'medium' },
      };
      if (row.getCell(14).text === 'P') {
        row.getCell(14).font = {
          name: 'Calibri',
          size: 12,
          underline: 'none',
          bold: true,
        };
        row.getCell(14).fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: { argb: '92d14f' },
          bgColor: { argb: '92d14f' },
        };
      }
      row.getCell(15).border = {
        top: { style: 'medium' },
        left: { style: 'medium' },
        bottom: { style: 'medium' },
        right: { style: 'medium' },
      };
      if (row.getCell(15).text === 'O') {
        row.getCell(15).font = {
          name: 'Calibri',
          size: 12,
          underline: 'none',
          bold: true,
        };
        row.getCell(15).fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: { argb: 'fe0000' },
          bgColor: { argb: 'fe0000' },
        };
      }
      row.getCell(16).border = {
        top: { style: 'medium' },
        left: { style: 'medium' },
        bottom: { style: 'medium' },
        right: { style: 'medium' },
      };
      if (row.getCell(16).text === 'IN') {
        row.getCell(16).font = {
          name: 'Calibri',
          size: 12,
          underline: 'none',
          bold: true,
        };
        row.getCell(16).fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: { argb: 'ffff01' },
          bgColor: { argb: 'ffff01' },
        };
      }
      if (row.getCell(17).text === 'N/A' || row.getCell(17).text === 'NA/T') {
        row.getCell(17).font = {
          name: 'Calibri',
          size: 12,
          underline: 'none',
          bold: true,
        };
        if (row.getCell(17).text === 'N/A') {
          row.getCell(17).fill = {
            type: 'pattern',
            pattern: 'solid',
            fgColor: { argb: 'a5a5a5' },
            bgColor: { argb: 'a5a5a5' },
          };
        } else {
          row.getCell(17).fill = {
            type: 'pattern',
            pattern: 'solid',
            fgColor: { argb: '5a9bd5' },
            bgColor: { argb: '5a9bd5' },
          };
        }
      }
    });

    worksheet.mergeCells('D21:E22');
    worksheet.mergeCells('D33:E34');
    worksheet.mergeCells('F33:F34');
    worksheet.mergeCells('G33:G34');
    worksheet.mergeCells('H33:H34');
    worksheet.mergeCells('I33:I34');
    worksheet.mergeCells('N31:N32');
    worksheet.mergeCells('O31:O32');
    worksheet.mergeCells('P31:P32');
    worksheet.mergeCells('Q31:Q32');
    worksheet.mergeCells('N35:N36');
    worksheet.mergeCells('O35:O36');
    worksheet.mergeCells('P35:P36');
    worksheet.mergeCells('Q35:Q36');
    worksheet.mergeCells('N37:N38');
    worksheet.mergeCells('O37:O38');
    worksheet.mergeCells('P37:P38');
    worksheet.mergeCells('Q37:Q38');
    worksheet.mergeCells('N39:N40');
    worksheet.mergeCells('O39:O40');
    worksheet.mergeCells('P39:P40');
    worksheet.mergeCells('Q39:Q40');
    worksheet.mergeCells('L31:M32');
    worksheet.mergeCells('L35:M36');
    worksheet.mergeCells('L37:M38');
    worksheet.mergeCells('L39:M40');
    worksheet.mergeCells('B14:B17');
    worksheet.mergeCells('B18:B34');
    worksheet.mergeCells('B35:B38');
    worksheet.mergeCells('B39:B40');
    worksheet.mergeCells('C21:C22');
    worksheet.mergeCells('C33:C34');
    worksheet.mergeCells('K31:K32');
    worksheet.mergeCells('K35:K36');
    worksheet.mergeCells('K37:K38');
    worksheet.mergeCells('K39:K40');
    worksheet.mergeCells('F21:F22');
    worksheet.mergeCells('G21:G22');
    worksheet.mergeCells('H21:H22');
    worksheet.mergeCells('I21:I22');
    worksheet.mergeCells('J14:J26');
    worksheet.mergeCells('J27:J30');
    worksheet.mergeCells('J31:J40');

    const footerRow = worksheet.addRow(['', subtitle12]);
    footerRow.font = {
      name: 'Calibri',
      size: 12,
      underline: 'none',
      bold: true,
      color: { argb: 'ffffff' },
    };
    footerRow.alignment = { horizontal: 'center', vertical: 'middle' };
    ['B41'].map((key) => {
      worksheet.getCell(key).fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: '6FAE45' },
      };
      worksheet.getCell(key).border = {
        top: { style: 'medium', color: { argb: '000000' } },
        left: { style: 'medium', color: { argb: '000000' } },
        bottom: { style: 'medium', color: { argb: '000000' } },
        right: { style: 'medium', color: { argb: '000000' } },
      };
    });
    worksheet.mergeCells('B41:Q41');

    const footerRow1 = worksheet.addRow(['', row.observaciones]);
    footerRow1.font = {
      name: 'Calibri',
      size: 12,
      underline: 'none',
      bold: false,
    };
    footerRow1.alignment = {
      horizontal: 'center',
      vertical: 'middle',
      wrapText: true,
    };

    footerRow1.getCell(15).font = {
      name: 'Calibri',
      size: 12,
      underline: 'none',
      bold: true,
    };
    footerRow1.getCell(15).fill = {
      type: 'pattern',
      pattern: 'solid',
      fgColor: { argb: 'fe0000' },
      bgColor: { argb: 'fe0000' },
    };

    ['B42'].map((key) => {
      worksheet.getCell(key).fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: 'ffffff' },
      };
      worksheet.getCell(key).border = {
        top: { style: 'medium', color: { argb: '000000' } },
        left: { style: 'medium', color: { argb: '000000' } },
        bottom: { style: 'medium', color: { argb: '000000' } },
        right: { style: 'medium', color: { argb: '000000' } },
      };
    });
    ['B51'].map((key) => {
      worksheet.getCell(key).fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: 'ffffff' },
      };
      worksheet.getCell(key).border = {
        top: { style: 'medium', color: { argb: '000000' } },
        left: { style: 'medium', color: { argb: '000000' } },
        bottom: { style: 'medium', color: { argb: '000000' } },
        right: { style: 'medium', color: { argb: '000000' } },
      };
    });
    worksheet.mergeCells('B42:Q51');

    worksheet.addRow(['']);

    ['B52'].map((key) => {
      worksheet.getCell(key).border = {
        top: { style: 'medium', color: { argb: '000000' } },
      };
    });
    worksheet.mergeCells('B52:Q52');

    const nomeclatura = worksheet.addRow([
      '',
      'NOMENCLATURA',
      '',
      '',
      '',
      'TOTAL DE DOCUMENTOS',
      '',
      '',
      row.siRealizado,
      '',
      '',
      '',
      'Responsable de la información:',
      '',
      '',
    ]);
    nomeclatura.getCell(2).font = {
      name: 'Calibri',
      size: 10,
      underline: 'none',
      bold: true,
      color: { argb: 'ffffff' },
    };
    nomeclatura.getCell(6).font = {
      name: 'Calibri',
      size: 10,
      underline: 'none',
      bold: true,
      color: { argb: 'ffffff' },
    };
    nomeclatura.getCell(9).font = {
      name: 'Calibri',
      size: 12,
      underline: 'none',
      bold: false,
    };
    nomeclatura.getCell(13).font = {
      name: 'Calibri',
      size: 12,
      underline: 'none',
      bold: false,
    };
    nomeclatura.getCell(15).font = {
      name: 'Calibri',
      size: 12,
      underline: 'none',
      bold: false,
    };
    nomeclatura.alignment = {
      horizontal: 'center',
      vertical: 'middle',
      wrapText: true,
    };

    ['B53'].map((key) => {
      worksheet.getCell(key).fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: '6FAE45' },
      };
      worksheet.getCell(key).border = {
        top: { style: 'medium', color: { argb: '000000' } },
        left: { style: 'medium', color: { argb: '000000' } },
        bottom: { style: 'medium', color: { argb: '000000' } },
        right: { style: 'medium', color: { argb: '000000' } },
      };
    });

    ['F53'].map((key) => {
      worksheet.getCell(key).fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: '6FAE45' },
      };
      worksheet.getCell(key).border = {
        top: { style: 'medium', color: { argb: '000000' } },
        left: { style: 'medium', color: { argb: '000000' } },
        bottom: { style: 'medium', color: { argb: '000000' } },
        right: { style: 'medium', color: { argb: '000000' } },
      };
    });

    ['I53'].map((key) => {
      worksheet.getCell(key).border = {
        top: { style: 'medium', color: { argb: '000000' } },
        left: { style: 'medium', color: { argb: '000000' } },
        bottom: { style: 'medium', color: { argb: '000000' } },
        right: { style: 'medium', color: { argb: '000000' } },
      };
    });

    ['M53'].map((key) => {
      worksheet.getCell(key).border = {
        top: { style: 'medium', color: { argb: '000000' } },
        left: { style: 'medium', color: { argb: '000000' } },
        bottom: { style: 'medium', color: { argb: '000000' } },
        right: { style: 'medium', color: { argb: '000000' } },
      };
    });

    ['O53'].map((key) => {
      worksheet.getCell(key).border = {
        top: { style: 'medium', color: { argb: '000000' } },
        left: { style: 'medium', color: { argb: '000000' } },
        bottom: { style: 'medium', color: { argb: '000000' } },
        right: { style: 'medium', color: { argb: '000000' } },
      };
    });

    const documentoI = worksheet.addRow([
      '',
      'P',
      'DOCUMENTO INTEGRADO',
      '',
      '',
      'TOTAL DE DOCUMENTOS INTEGRADOS',
      '',
      '',
      row.totalIntegrado,
      '',
      '',
      '',
      '',
      '',
      '',
    ]);
    documentoI.getCell(2).font = {
      name: 'Calibri',
      size: 10,
      underline: 'none',
      bold: false,
    };
    documentoI.getCell(3).font = {
      name: 'Calibri',
      size: 10,
      underline: 'none',
      bold: false,
    };
    documentoI.getCell(6).font = {
      name: 'Calibri',
      size: 10,
      underline: 'none',
      bold: true,
      color: { argb: 'ffffff' },
    };
    documentoI.getCell(9).font = {
      name: 'Calibri',
      size: 12,
      underline: 'none',
      bold: false,
    };
    documentoI.getCell(13).font = {
      name: 'Calibri',
      size: 12,
      underline: 'none',
      bold: false,
    };
    documentoI.getCell(15).font = {
      name: 'Calibri',
      size: 12,
      underline: 'none',
      bold: false,
    };
    documentoI.alignment = {
      horizontal: 'center',
      vertical: 'middle',
      wrapText: true,
    };

    ['B54'].map((key) => {
      worksheet.getCell(key).fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: '92d14f' },
      };
      worksheet.getCell(key).border = {
        top: { style: 'medium', color: { argb: '000000' } },
        left: { style: 'medium', color: { argb: '000000' } },
        bottom: { style: 'medium', color: { argb: '000000' } },
        right: { style: 'medium', color: { argb: '000000' } },
      };
    });

    ['C54'].map((key) => {
      worksheet.getCell(key).fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: 'ffffff' },
      };
      worksheet.getCell(key).border = {
        top: { style: 'medium', color: { argb: '000000' } },
        left: { style: 'medium', color: { argb: '000000' } },
        bottom: { style: 'medium', color: { argb: '000000' } },
        right: { style: 'medium', color: { argb: '000000' } },
      };
    });

    ['F54'].map((key) => {
      worksheet.getCell(key).fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: '6FAE45' },
      };
      worksheet.getCell(key).border = {
        top: { style: 'medium', color: { argb: '000000' } },
        left: { style: 'medium', color: { argb: '000000' } },
        bottom: { style: 'medium', color: { argb: '000000' } },
        right: { style: 'medium', color: { argb: '000000' } },
      };
    });

    ['I54'].map((key) => {
      worksheet.getCell(key).border = {
        top: { style: 'medium', color: { argb: '000000' } },
        left: { style: 'medium', color: { argb: '000000' } },
        bottom: { style: 'medium', color: { argb: '000000' } },
        right: { style: 'medium', color: { argb: '000000' } },
      };
    });

    const documentoNoI = worksheet.addRow([
      '',
      'O',
      'DOCUMENTO NO INTEGRADO',
      '',
      '',
      'TOTAL DE DOCUMENTOS NO INTEGRADOS',
      '',
      '',
      row.totalNoIntegrado,
      '',
      '',
      '',
      'Fecha compromiso de entrega:',
      '',
      '',
    ]);
    documentoNoI.getCell(2).font = {
      name: 'Calibri',
      size: 10,
      underline: 'none',
      bold: false,
    };
    documentoNoI.getCell(3).font = {
      name: 'Calibri',
      size: 10,
      underline: 'none',
      bold: false,
    };
    documentoNoI.getCell(6).font = {
      name: 'Calibri',
      size: 10,
      underline: 'none',
      bold: true,
      color: { argb: 'ffffff' },
    };
    documentoNoI.getCell(9).font = {
      name: 'Calibri',
      size: 12,
      underline: 'none',
      bold: false,
    };
    documentoNoI.getCell(13).font = {
      name: 'Calibri',
      size: 12,
      underline: 'none',
      bold: false,
    };
    documentoNoI.getCell(15).font = {
      name: 'Calibri',
      size: 12,
      underline: 'none',
      bold: false,
    };
    documentoNoI.alignment = {
      horizontal: 'center',
      vertical: 'middle',
      wrapText: true,
    };

    ['B55'].map((key) => {
      worksheet.getCell(key).fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: 'fe0000' },
      };
      worksheet.getCell(key).border = {
        top: { style: 'medium', color: { argb: '000000' } },
        left: { style: 'medium', color: { argb: '000000' } },
        bottom: { style: 'medium', color: { argb: '000000' } },
        right: { style: 'medium', color: { argb: '000000' } },
      };
    });

    ['C55'].map((key) => {
      worksheet.getCell(key).fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: 'ffffff' },
      };
      worksheet.getCell(key).border = {
        top: { style: 'medium', color: { argb: '000000' } },
        left: { style: 'medium', color: { argb: '000000' } },
        bottom: { style: 'medium', color: { argb: '000000' } },
        right: { style: 'medium', color: { argb: '000000' } },
      };
    });

    ['F55'].map((key) => {
      worksheet.getCell(key).fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: '6FAE45' },
      };
      worksheet.getCell(key).border = {
        top: { style: 'medium', color: { argb: '000000' } },
        left: { style: 'medium', color: { argb: '000000' } },
        bottom: { style: 'medium', color: { argb: '000000' } },
        right: { style: 'medium', color: { argb: '000000' } },
      };
    });

    ['I55'].map((key) => {
      worksheet.getCell(key).border = {
        top: { style: 'medium', color: { argb: '000000' } },
        left: { style: 'medium', color: { argb: '000000' } },
        bottom: { style: 'medium', color: { argb: '000000' } },
        right: { style: 'medium', color: { argb: '000000' } },
      };
    });

    ['M55'].map((key) => {
      worksheet.getCell(key).border = {
        top: { style: 'medium', color: { argb: '000000' } },
        left: { style: 'medium', color: { argb: '000000' } },
        bottom: { style: 'medium', color: { argb: '000000' } },
        right: { style: 'medium', color: { argb: '000000' } },
      };
    });

    ['O55'].map((key) => {
      worksheet.getCell(key).border = {
        top: { style: 'medium', color: { argb: '000000' } },
        left: { style: 'medium', color: { argb: '000000' } },
        bottom: { style: 'medium', color: { argb: '000000' } },
        right: { style: 'medium', color: { argb: '000000' } },
      };
    });

    const documentoIN = worksheet.addRow([
      '',
      'IN',
      'DOCUMENTO CON INCUMPLIMIENTO',
      '',
      '',
      'TOTAL DE DOCUMENTOS CON INCUMPLIMIENTO',
      '',
      '',
      row.totalIncumplimiento,
      '',
      '',
      '',
      '',
      '',
      '',
    ]);
    documentoIN.getCell(2).font = {
      name: 'Calibri',
      size: 10,
      underline: 'none',
      bold: false,
    };
    documentoIN.getCell(3).font = {
      name: 'Calibri',
      size: 10,
      underline: 'none',
      bold: false,
    };
    documentoIN.getCell(6).font = {
      name: 'Calibri',
      size: 10,
      underline: 'none',
      bold: true,
      color: { argb: 'ffffff' },
    };
    documentoIN.getCell(9).font = {
      name: 'Calibri',
      size: 12,
      underline: 'none',
      bold: false,
    };
    documentoIN.getCell(13).font = {
      name: 'Calibri',
      size: 12,
      underline: 'none',
      bold: false,
    };
    documentoIN.getCell(15).font = {
      name: 'Calibri',
      size: 12,
      underline: 'none',
      bold: false,
    };
    documentoIN.alignment = {
      horizontal: 'center',
      vertical: 'middle',
      wrapText: true,
    };

    ['B56'].map((key) => {
      worksheet.getCell(key).fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: 'ffff01' },
      };
      worksheet.getCell(key).border = {
        top: { style: 'medium', color: { argb: '000000' } },
        left: { style: 'medium', color: { argb: '000000' } },
        bottom: { style: 'medium', color: { argb: '000000' } },
        right: { style: 'medium', color: { argb: '000000' } },
      };
    });

    ['C56'].map((key) => {
      worksheet.getCell(key).fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: 'ffffff' },
      };
      worksheet.getCell(key).border = {
        top: { style: 'medium', color: { argb: '000000' } },
        left: { style: 'medium', color: { argb: '000000' } },
        bottom: { style: 'medium', color: { argb: '000000' } },
        right: { style: 'medium', color: { argb: '000000' } },
      };
    });

    ['F56'].map((key) => {
      worksheet.getCell(key).fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: '6FAE45' },
      };
      worksheet.getCell(key).border = {
        top: { style: 'medium', color: { argb: '000000' } },
        left: { style: 'medium', color: { argb: '000000' } },
        bottom: { style: 'medium', color: { argb: '000000' } },
        right: { style: 'medium', color: { argb: '000000' } },
      };
    });

    ['I56'].map((key) => {
      worksheet.getCell(key).border = {
        top: { style: 'medium', color: { argb: '000000' } },
        left: { style: 'medium', color: { argb: '000000' } },
        bottom: { style: 'medium', color: { argb: '000000' } },
        right: { style: 'medium', color: { argb: '000000' } },
      };
    });

    const documentoNA = worksheet.addRow([
      '',
      'N/A',
      'DOCUMENTO NO APLICABLE',
      '',
      '',
      'TOTAL DE DOCUMENTOS  NO APLICABLES',
      '',
      '',
      row.totalNA,
      '',
      '',
      '',
      'Revisó:',
      '',
      row.responsable,
    ]);
    documentoNA.getCell(2).font = {
      name: 'Calibri',
      size: 10,
      underline: 'none',
      bold: false,
    };
    documentoNA.getCell(3).font = {
      name: 'Calibri',
      size: 10,
      underline: 'none',
      bold: false,
    };
    documentoNA.getCell(6).font = {
      name: 'Calibri',
      size: 10,
      underline: 'none',
      bold: true,
      color: { argb: 'ffffff' },
    };
    documentoNA.getCell(9).font = {
      name: 'Calibri',
      size: 12,
      underline: 'none',
      bold: false,
    };
    documentoNA.getCell(13).font = {
      name: 'Calibri',
      size: 12,
      underline: 'none',
      bold: false,
    };
    documentoNA.getCell(15).font = {
      name: 'Calibri',
      size: 12,
      underline: 'none',
      bold: false,
    };
    documentoNA.alignment = {
      horizontal: 'center',
      vertical: 'middle',
      wrapText: true,
    };

    ['B57'].map((key) => {
      worksheet.getCell(key).fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: 'a5a5a5' },
      };
      worksheet.getCell(key).border = {
        top: { style: 'medium', color: { argb: '000000' } },
        left: { style: 'medium', color: { argb: '000000' } },
        bottom: { style: 'medium', color: { argb: '000000' } },
        right: { style: 'medium', color: { argb: '000000' } },
      };
    });

    ['C57'].map((key) => {
      worksheet.getCell(key).fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: 'ffffff' },
      };
      worksheet.getCell(key).border = {
        top: { style: 'medium', color: { argb: '000000' } },
        left: { style: 'medium', color: { argb: '000000' } },
        bottom: { style: 'medium', color: { argb: '000000' } },
        right: { style: 'medium', color: { argb: '000000' } },
      };
    });

    ['F57'].map((key) => {
      worksheet.getCell(key).fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: '6FAE45' },
      };
      worksheet.getCell(key).border = {
        top: { style: 'medium', color: { argb: '000000' } },
        left: { style: 'medium', color: { argb: '000000' } },
        bottom: { style: 'medium', color: { argb: '000000' } },
        right: { style: 'medium', color: { argb: '000000' } },
      };
    });

    ['I57'].map((key) => {
      worksheet.getCell(key).border = {
        top: { style: 'medium', color: { argb: '000000' } },
        left: { style: 'medium', color: { argb: '000000' } },
        bottom: { style: 'medium', color: { argb: '000000' } },
        right: { style: 'medium', color: { argb: '000000' } },
      };
    });

    ['M57'].map((key) => {
      worksheet.getCell(key).border = {
        top: { style: 'medium', color: { argb: '000000' } },
        left: { style: 'medium', color: { argb: '000000' } },
        bottom: { style: 'medium', color: { argb: '000000' } },
        right: { style: 'medium', color: { argb: '000000' } },
      };
    });

    ['O57'].map((key) => {
      worksheet.getCell(key).border = {
        top: { style: 'medium', color: { argb: '000000' } },
        left: { style: 'medium', color: { argb: '000000' } },
        bottom: { style: 'medium', color: { argb: '000000' } },
        right: { style: 'medium', color: { argb: '000000' } },
      };
    });

    const documentoNAT = worksheet.addRow([
      '',
      'NA/T',
      'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN',
      '',
      '',
      'TOTAL DE DOCUMENTOS  NO APLICABLES POR ESTAR EN TIEMPO DE INTEGRACIÓN',
      '',
      '',
      row.totalNAT,
      '',
      '',
      '',
      '',
      '',
      '',
    ]);
    documentoNAT.getCell(2).font = {
      name: 'Calibri',
      size: 10,
      underline: 'none',
      bold: false,
    };
    documentoNAT.getCell(3).font = {
      name: 'Calibri',
      size: 10,
      underline: 'none',
      bold: false,
    };
    documentoNAT.getCell(6).font = {
      name: 'Calibri',
      size: 10,
      underline: 'none',
      bold: true,
      color: { argb: 'ffffff' },
    };
    documentoNAT.getCell(9).font = {
      name: 'Calibri',
      size: 12,
      underline: 'none',
      bold: false,
    };
    documentoNAT.getCell(13).font = {
      name: 'Calibri',
      size: 12,
      underline: 'none',
      bold: false,
    };
    documentoNAT.getCell(15).font = {
      name: 'Calibri',
      size: 12,
      underline: 'none',
      bold: false,
    };
    documentoNAT.alignment = {
      horizontal: 'center',
      vertical: 'middle',
      wrapText: true,
    };

    ['B58'].map((key) => {
      worksheet.getCell(key).fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: '5a9bd5' },
      };
      worksheet.getCell(key).border = {
        top: { style: 'medium', color: { argb: '000000' } },
        left: { style: 'medium', color: { argb: '000000' } },
        bottom: { style: 'medium', color: { argb: '000000' } },
        right: { style: 'medium', color: { argb: '000000' } },
      };
    });

    ['C58'].map((key) => {
      worksheet.getCell(key).fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: 'ffffff' },
      };
      worksheet.getCell(key).border = {
        top: { style: 'medium', color: { argb: '000000' } },
        left: { style: 'medium', color: { argb: '000000' } },
        bottom: { style: 'medium', color: { argb: '000000' } },
        right: { style: 'medium', color: { argb: '000000' } },
      };
    });

    ['F58'].map((key) => {
      worksheet.getCell(key).fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: '6FAE45' },
      };
      worksheet.getCell(key).border = {
        top: { style: 'medium', color: { argb: '000000' } },
        left: { style: 'medium', color: { argb: '000000' } },
        bottom: { style: 'medium', color: { argb: '000000' } },
        right: { style: 'medium', color: { argb: '000000' } },
      };
    });

    ['I58'].map((key) => {
      worksheet.getCell(key).border = {
        top: { style: 'medium', color: { argb: '000000' } },
        left: { style: 'medium', color: { argb: '000000' } },
        bottom: { style: 'medium', color: { argb: '000000' } },
        right: { style: 'medium', color: { argb: '000000' } },
      };
    });

    const porcentaje = worksheet.addRow([
      '',
      '',
      '',
      '',
      '',
      'PORCENTAJE DE INTEGRACIÓN',
      '',
      '',
      `${row.porcentajeTotal.toFixed(2)}%`,
      '',
      '',
      '',
      '',
      '',
      '',
    ]);
    porcentaje.getCell(6).font = {
      name: 'Calibri',
      size: 10,
      underline: 'none',
      bold: true,
      color: { argb: 'ffffff' },
    };
    porcentaje.getCell(9).font = {
      name: 'Calibri',
      size: 12,
      underline: 'none',
      bold: false,
    };
    porcentaje.alignment = {
      horizontal: 'center',
      vertical: 'middle',
      wrapText: true,
    };

    ['F59'].map((key) => {
      worksheet.getCell(key).fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: '6FAE45' },
      };
      worksheet.getCell(key).border = {
        top: { style: 'medium', color: { argb: '000000' } },
        left: { style: 'medium', color: { argb: '000000' } },
        bottom: { style: 'medium', color: { argb: '000000' } },
        right: { style: 'medium', color: { argb: '000000' } },
      };
    });

    ['I59'].map((key) => {
      worksheet.getCell(key).border = {
        top: { style: 'medium', color: { argb: '000000' } },
        left: { style: 'medium', color: { argb: '000000' } },
        bottom: { style: 'medium', color: { argb: '000000' } },
        right: { style: 'medium', color: { argb: '000000' } },
      };
    });

    worksheet.mergeCells('B53:D53');
    worksheet.mergeCells('F53:H53');
    worksheet.mergeCells('I53:K53');
    worksheet.mergeCells('M53:N53');
    worksheet.mergeCells('O53:P53');

    worksheet.mergeCells('C54:D54');
    worksheet.mergeCells('F54:H54');
    worksheet.mergeCells('I54:K54');

    worksheet.mergeCells('C55:D55');
    worksheet.mergeCells('F55:H55');
    worksheet.mergeCells('I55:K55');
    worksheet.mergeCells('M55:N55');
    worksheet.mergeCells('O55:P55');

    worksheet.mergeCells('C56:D56');
    worksheet.mergeCells('F56:H56');
    worksheet.mergeCells('I56:K56');

    worksheet.mergeCells('C57:D57');
    worksheet.mergeCells('F57:H57');
    worksheet.mergeCells('I57:K57');
    worksheet.mergeCells('M57:N57');
    worksheet.mergeCells('O57:P57');

    worksheet.mergeCells('C58:D58');
    worksheet.mergeCells('F58:H58');
    worksheet.mergeCells('I58:K58');

    worksheet.mergeCells('F59:H59');
    worksheet.mergeCells('I59:K59');

    worksheet.getRow(4).height = 24;
    worksheet.getRow(5).height = 24;
    worksheet.getRow(6).height = 24;
    worksheet.getRow(7).height = 22.5;
    worksheet.getRow(8).height = 22.5;
    worksheet.getRow(8).height = 22.5;
    worksheet.getRow(9).height = 21;
    worksheet.getRow(10).height = 22.5;
    worksheet.getRow(11).height = 22.5;
    worksheet.getRow(12).height = 54;
    worksheet.getRow(13).height = 54;
    worksheet.getRow(14).height = 52.5;
    worksheet.getRow(15).height = 57;
    worksheet.getRow(16).height = 58.5;
    worksheet.getRow(17).height = 49.5;
    worksheet.getRow(18).height = 79.5;
    worksheet.getRow(19).height = 64.5;
    worksheet.getRow(20).height = 36;
    worksheet.getRow(21).height = 108;
    worksheet.getRow(22).height = 100.5;
    worksheet.getRow(23).height = 135;
    worksheet.getRow(24).height = 69;
    worksheet.getRow(25).height = 66;
    worksheet.getRow(26).height = 85.5;
    worksheet.getRow(27).height = 76.5;
    worksheet.getRow(28).height = 138;
    worksheet.getRow(29).height = 138;
    worksheet.getRow(30).height = 93;
    worksheet.getRow(31).height = 58.5;
    worksheet.getRow(32).height = 63;
    worksheet.getRow(33).height = 57;
    worksheet.getRow(34).height = 46.5;
    worksheet.getRow(35).height = 28.5;
    worksheet.getRow(36).height = 28.5;
    worksheet.getRow(37).height = 28.5;
    worksheet.getRow(38).height = 39;
    worksheet.getRow(39).height = 37.5;
    worksheet.getRow(40).height = 48;
    worksheet.getRow(41).height = 27;
    worksheet.getRow(42).height = 26.25;
    worksheet.getRow(43).height = 15.75;
    worksheet.getRow(44).height = 15.75;
    worksheet.getRow(45).height = 15.75;
    worksheet.getRow(46).height = 15.75;
    worksheet.getRow(47).height = 15.75;
    worksheet.getRow(48).height = 15.75;
    worksheet.getRow(49).height = 15.75;
    worksheet.getRow(50).height = 15.75;
    worksheet.getRow(51).height = 15.75;
    worksheet.getRow(52).height = 15.75;
    worksheet.getRow(53).height = 48;
    worksheet.getRow(54).height = 45.75;
    worksheet.getRow(55).height = 48.75;
    worksheet.getRow(56).height = 47.25;
    worksheet.getRow(57).height = 53.25;
    worksheet.getRow(58).height = 63.75;
    worksheet.getRow(59).height = 51;

    worksheet.getColumn(1).width = 10;
    worksheet.getColumn(2).width = 11.29;
    worksheet.getColumn(3).width = 7.29;
    worksheet.getColumn(4).width = 11;
    worksheet.getColumn(5).width = 38.86;
    worksheet.getColumn(6).width = 4.43;
    worksheet.getColumn(7).width = 5;
    worksheet.getColumn(8).width = 15.29;
    worksheet.getColumn(9).width = 5;
    worksheet.getColumn(10).width = 11;
    worksheet.getColumn(11).width = 4.71;
    worksheet.getColumn(12).width = 22.71;
    worksheet.getColumn(13).width = 22.71;
    worksheet.getColumn(14).width = 4.43;
    worksheet.getColumn(15).width = 5;
    worksheet.getColumn(16).width = 15.86;
    worksheet.getColumn(17).width = 5.29;
    worksheet.getColumn(18).width = 0.5;

    // Generate Excel File with given name
    workbook.xlsx.writeBuffer().then((data: any) => {
      const blob = new Blob([data], {
        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      });
      fs.saveAs(blob, 'Ficha de Información Documental Adquisiciones.xlsx');
    });
  }

  async generateExcelO(row: any) {
    let puntosObras: any = await this.agruparDatosO(row.puntos);
    const data = [
      [
        '',
        puntosObras[0].type,
        1,
        puntosObras[0].bullet1,
        '',
        puntosObras[0].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
        puntosObras[0].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
        puntosObras[0].estatus === 'DOCUMENTO CON INCUMPLIMIENTO' ? 'IN' : '',
        puntosObras[0].estatus === 'DOCUMENTO NO APLICABLE'
          ? 'N/A'
          : puntosObras[0].estatus ===
            'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
          ? 'NA/T'
          : '',
        puntosObras[48].type,
        49,
        puntosObras[48].bullet1,
        '',
        puntosObras[48].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
        puntosObras[48].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
        puntosObras[48].estatus === 'DOCUMENTO CON INCUMPLIMIENTO' ? 'IN' : '',
        puntosObras[48].estatus === 'DOCUMENTO NO APLICABLE'
          ? 'N/A'
          : puntosObras[48].estatus ===
            'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
          ? 'NA/T'
          : '',
      ],
      [
        '',
        puntosObras[1].type,
        2,
        puntosObras[1].bullet1,
        '',
        puntosObras[1].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
        puntosObras[1].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
        puntosObras[1].estatus === 'DOCUMENTO CON INCUMPLIMIENTO' ? 'IN' : '',
        puntosObras[1].estatus === 'DOCUMENTO NO APLICABLE'
          ? 'N/A'
          : puntosObras[1].estatus ===
            'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
          ? 'NA/T'
          : '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
      ],
      [
        '',
        puntosObras[2].type,
        3,
        puntosObras[2].bullet1,
        '',
        puntosObras[2].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
        puntosObras[2].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
        puntosObras[2].estatus === 'DOCUMENTO CON INCUMPLIMIENTO' ? 'IN' : '',
        puntosObras[2].estatus === 'DOCUMENTO NO APLICABLE'
          ? 'N/A'
          : puntosObras[2].estatus ===
            'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
          ? 'NA/T'
          : '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
      ],
      [
        '',
        puntosObras[3].type,
        4,
        puntosObras[3].bullet1,
        '',
        puntosObras[3].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
        puntosObras[3].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
        puntosObras[3].estatus === 'DOCUMENTO CON INCUMPLIMIENTO' ? 'IN' : '',
        puntosObras[3].estatus === 'DOCUMENTO NO APLICABLE'
          ? 'N/A'
          : puntosObras[3].estatus ===
            'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
          ? 'NA/T'
          : '',
        puntosObras[49].type,
        50,
        puntosObras[49].bullet1,
        '',
        puntosObras[49].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
        puntosObras[49].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
        puntosObras[49].estatus === 'DOCUMENTO CON INCUMPLIMIENTO' ? 'IN' : '',
        puntosObras[49].estatus === 'DOCUMENTO NO APLICABLE'
          ? 'N/A'
          : puntosObras[49].estatus ===
            'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
          ? 'NA/T'
          : '',
      ],
      [
        '',
        puntosObras[4].type,
        5,
        puntosObras[4].bullet1,
        '',
        puntosObras[4].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
        puntosObras[4].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
        puntosObras[4].estatus === 'DOCUMENTO CON INCUMPLIMIENTO' ? 'IN' : '',
        puntosObras[4].estatus === 'DOCUMENTO NO APLICABLE'
          ? 'N/A'
          : puntosObras[4].estatus ===
            'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
          ? 'NA/T'
          : '',
        puntosObras[50].type,
        51,
        puntosObras[50].bullet1,
        '',
        puntosObras[50].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
        puntosObras[50].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
        puntosObras[50].estatus === 'DOCUMENTO CON INCUMPLIMIENTO' ? 'IN' : '',
        puntosObras[50].estatus === 'DOCUMENTO NO APLICABLE'
          ? 'N/A'
          : puntosObras[50].estatus ===
            'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
          ? 'NA/T'
          : '',
      ],
      [
        '',
        puntosObras[5].type,
        6,
        puntosObras[5].bullet1,
        '',
        puntosObras[5].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
        puntosObras[5].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
        puntosObras[5].estatus === 'DOCUMENTO CON INCUMPLIMIENTO' ? 'IN' : '',
        puntosObras[5].estatus === 'DOCUMENTO NO APLICABLE'
          ? 'N/A'
          : puntosObras[5].estatus ===
            'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
          ? 'NA/T'
          : '',
        puntosObras[51].type,
        52,
        puntosObras[51].bullet1,
        '',
        puntosObras[51].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
        puntosObras[51].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
        puntosObras[51].estatus === 'DOCUMENTO CON INCUMPLIMIENTO' ? 'IN' : '',
        puntosObras[51].estatus === 'DOCUMENTO NO APLICABLE'
          ? 'N/A'
          : puntosObras[51].estatus ===
            'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
          ? 'NA/T'
          : '',
      ],
      [
        '',
        puntosObras[6].type,
        7,
        puntosObras[6].bullet1,
        '',
        puntosObras[6].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
        puntosObras[6].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
        puntosObras[6].estatus === 'DOCUMENTO CON INCUMPLIMIENTO' ? 'IN' : '',
        puntosObras[6].estatus === 'DOCUMENTO NO APLICABLE'
          ? 'N/A'
          : puntosObras[6].estatus ===
            'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
          ? 'NA/T'
          : '',
        puntosObras[52].type,
        53,
        puntosObras[52].bullet1,
        '',
        puntosObras[52].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
        puntosObras[52].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
        puntosObras[52].estatus === 'DOCUMENTO CON INCUMPLIMIENTO' ? 'IN' : '',
        puntosObras[52].estatus === 'DOCUMENTO NO APLICABLE'
          ? 'N/A'
          : puntosObras[52].estatus ===
            'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
          ? 'NA/T'
          : '',
      ],
      [
        '',
        puntosObras[7].type,
        8,
        puntosObras[7].bullet1,
        '',
        puntosObras[7].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
        puntosObras[7].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
        puntosObras[7].estatus === 'DOCUMENTO CON INCUMPLIMIENTO' ? 'IN' : '',
        puntosObras[7].estatus === 'DOCUMENTO NO APLICABLE'
          ? 'N/A'
          : puntosObras[7].estatus ===
            'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
          ? 'NA/T'
          : '',
        puntosObras[53].type,
        54,
        puntosObras[53].bullet1,
        '',
        puntosObras[53].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
        puntosObras[53].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
        puntosObras[53].estatus === 'DOCUMENTO CON INCUMPLIMIENTO' ? 'IN' : '',
        puntosObras[53].estatus === 'DOCUMENTO NO APLICABLE'
          ? 'N/A'
          : puntosObras[53].estatus ===
            'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
          ? 'NA/T'
          : '',
      ],
      [
        '',
        puntosObras[8].type,
        9,
        puntosObras[8].bullet1,
        '',
        puntosObras[8].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
        puntosObras[8].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
        puntosObras[8].estatus === 'DOCUMENTO CON INCUMPLIMIENTO' ? 'IN' : '',
        puntosObras[8].estatus === 'DOCUMENTO NO APLICABLE'
          ? 'N/A'
          : puntosObras[8].estatus ===
            'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
          ? 'NA/T'
          : '',
        puntosObras[54].type,
        55,
        puntosObras[54].bullet1,
        '',
        puntosObras[54].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
        puntosObras[54].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
        puntosObras[54].estatus === 'DOCUMENTO CON INCUMPLIMIENTO' ? 'IN' : '',
        puntosObras[54].estatus === 'DOCUMENTO NO APLICABLE'
          ? 'N/A'
          : puntosObras[54].estatus ===
            'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
          ? 'NA/T'
          : '',
      ],
      [
        '',
        puntosObras[9].type,
        10,
        puntosObras[9].bullet1,
        '',
        puntosObras[9].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
        puntosObras[9].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
        puntosObras[9].estatus === 'DOCUMENTO CON INCUMPLIMIENTO' ? 'IN' : '',
        puntosObras[9].estatus === 'DOCUMENTO NO APLICABLE'
          ? 'N/A'
          : puntosObras[9].estatus ===
            'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
          ? 'NA/T'
          : '',
        puntosObras[55].type,
        56,
        puntosObras[55].bullet1,
        '',
        puntosObras[55].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
        puntosObras[55].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
        puntosObras[55].estatus === 'DOCUMENTO CON INCUMPLIMIENTO' ? 'IN' : '',
        puntosObras[55].estatus === 'DOCUMENTO NO APLICABLE'
          ? 'N/A'
          : puntosObras[55].estatus ===
            'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
          ? 'NA/T'
          : '',
      ],
      [
        '',
        puntosObras[10].type,
        11,
        puntosObras[10].bullet1,
        '',
        puntosObras[10].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
        puntosObras[10].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
        puntosObras[10].estatus === 'DOCUMENTO CON INCUMPLIMIENTO' ? 'IN' : '',
        puntosObras[10].estatus === 'DOCUMENTO NO APLICABLE'
          ? 'N/A'
          : puntosObras[10].estatus ===
            'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
          ? 'NA/T'
          : '',
        puntosObras[56].type,
        57,
        puntosObras[56].bullet1,
        '',
        puntosObras[56].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
        puntosObras[56].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
        puntosObras[56].estatus === 'DOCUMENTO CON INCUMPLIMIENTO' ? 'IN' : '',
        puntosObras[56].estatus === 'DOCUMENTO NO APLICABLE'
          ? 'N/A'
          : puntosObras[56].estatus ===
            'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
          ? 'NA/T'
          : '',
      ],
      [
        '',
        puntosObras[11].type,
        12,
        puntosObras[11].bullet1,
        '',
        puntosObras[11].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
        puntosObras[11].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
        puntosObras[11].estatus === 'DOCUMENTO CON INCUMPLIMIENTO' ? 'IN' : '',
        puntosObras[11].estatus === 'DOCUMENTO NO APLICABLE'
          ? 'N/A'
          : puntosObras[11].estatus ===
            'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
          ? 'NA/T'
          : '',
        puntosObras[57].type,
        58,
        puntosObras[57].bullet1,
        '',
        puntosObras[57].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
        puntosObras[57].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
        puntosObras[57].estatus === 'DOCUMENTO CON INCUMPLIMIENTO' ? 'IN' : '',
        puntosObras[57].estatus === 'DOCUMENTO NO APLICABLE'
          ? 'N/A'
          : puntosObras[57].estatus ===
            'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
          ? 'NA/T'
          : '',
      ],
      [
        '',
        puntosObras[12].type,
        13,
        puntosObras[12].bullet1,
        '',
        puntosObras[12].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
        puntosObras[12].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
        puntosObras[12].estatus === 'DOCUMENTO CON INCUMPLIMIENTO' ? 'IN' : '',
        puntosObras[12].estatus === 'DOCUMENTO NO APLICABLE'
          ? 'N/A'
          : puntosObras[12].estatus ===
            'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
          ? 'NA/T'
          : '',
        puntosObras[58].type,
        59,
        puntosObras[58].bullet1,
        '',
        puntosObras[58].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
        puntosObras[58].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
        puntosObras[58].estatus === 'DOCUMENTO CON INCUMPLIMIENTO' ? 'IN' : '',
        puntosObras[58].estatus === 'DOCUMENTO NO APLICABLE'
          ? 'N/A'
          : puntosObras[58].estatus ===
            'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
          ? 'NA/T'
          : '',
      ],
      [
        '',
        puntosObras[13].type,
        14,
        puntosObras[13].bullet1,
        '',
        puntosObras[13].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
        puntosObras[13].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
        puntosObras[13].estatus === 'DOCUMENTO CON INCUMPLIMIENTO' ? 'IN' : '',
        puntosObras[13].estatus === 'DOCUMENTO NO APLICABLE'
          ? 'N/A'
          : puntosObras[13].estatus ===
            'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
          ? 'NA/T'
          : '',
        puntosObras[59].type,
        60,
        puntosObras[59].bullet1,
        '',
        puntosObras[59].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
        puntosObras[59].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
        puntosObras[59].estatus === 'DOCUMENTO CON INCUMPLIMIENTO' ? 'IN' : '',
        puntosObras[59].estatus === 'DOCUMENTO NO APLICABLE'
          ? 'N/A'
          : puntosObras[59].estatus ===
            'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
          ? 'NA/T'
          : '',
      ],
      [
        '',
        puntosObras[14].type,
        15,
        puntosObras[14].bullet1,
        '',
        puntosObras[14].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
        puntosObras[14].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
        puntosObras[14].estatus === 'DOCUMENTO CON INCUMPLIMIENTO' ? 'IN' : '',
        puntosObras[14].estatus === 'DOCUMENTO NO APLICABLE'
          ? 'N/A'
          : puntosObras[14].estatus ===
            'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
          ? 'NA/T'
          : '',
        puntosObras[60].type,
        61,
        puntosObras[60].bullet1,
        '',
        puntosObras[60].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
        puntosObras[60].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
        puntosObras[60].estatus === 'DOCUMENTO CON INCUMPLIMIENTO' ? 'IN' : '',
        puntosObras[60].estatus === 'DOCUMENTO NO APLICABLE'
          ? 'N/A'
          : puntosObras[60].estatus ===
            'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
          ? 'NA/T'
          : '',
      ],
      [
        '',
        puntosObras[15].type,
        16,
        puntosObras[15].bullet1,
        '',
        puntosObras[15].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
        puntosObras[15].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
        puntosObras[15].estatus === 'DOCUMENTO CON INCUMPLIMIENTO' ? 'IN' : '',
        puntosObras[15].estatus === 'DOCUMENTO NO APLICABLE'
          ? 'N/A'
          : puntosObras[15].estatus ===
            'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
          ? 'NA/T'
          : '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
      ],
      [
        '',
        puntosObras[16].type,
        17,
        puntosObras[16].bullet1,
        '',
        puntosObras[16].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
        puntosObras[16].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
        puntosObras[16].estatus === 'DOCUMENTO CON INCUMPLIMIENTO' ? 'IN' : '',
        puntosObras[16].estatus === 'DOCUMENTO NO APLICABLE'
          ? 'N/A'
          : puntosObras[16].estatus ===
            'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
          ? 'NA/T'
          : '',
        puntosObras[61].type,
        62,
        puntosObras[61].bullet1,
        '',
        puntosObras[61].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
        puntosObras[61].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
        puntosObras[61].estatus === 'DOCUMENTO CON INCUMPLIMIENTO' ? 'IN' : '',
        puntosObras[61].estatus === 'DOCUMENTO NO APLICABLE'
          ? 'N/A'
          : puntosObras[61].estatus ===
            'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
          ? 'NA/T'
          : '',
      ],
      [
        '',
        puntosObras[17].type,
        18,
        puntosObras[17].bullet1,
        '',
        puntosObras[17].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
        puntosObras[17].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
        puntosObras[17].estatus === 'DOCUMENTO CON INCUMPLIMIENTO' ? 'IN' : '',
        puntosObras[17].estatus === 'DOCUMENTO NO APLICABLE'
          ? 'N/A'
          : puntosObras[17].estatus ===
            'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
          ? 'NA/T'
          : '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
      ],
      [
        '',
        puntosObras[18].type,
        19,
        puntosObras[18].bullet1,
        '',
        puntosObras[18].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
        puntosObras[18].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
        puntosObras[18].estatus === 'DOCUMENTO CON INCUMPLIMIENTO' ? 'IN' : '',
        puntosObras[18].estatus === 'DOCUMENTO NO APLICABLE'
          ? 'N/A'
          : puntosObras[18].estatus ===
            'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
          ? 'NA/T'
          : '',
        puntosObras[62].type,
        63,
        puntosObras[62].bullet1,
        '',
        puntosObras[62].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
        puntosObras[62].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
        puntosObras[62].estatus === 'DOCUMENTO CON INCUMPLIMIENTO' ? 'IN' : '',
        puntosObras[62].estatus === 'DOCUMENTO NO APLICABLE'
          ? 'N/A'
          : puntosObras[62].estatus ===
            'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
          ? 'NA/T'
          : '',
      ],
      [
        '',
        puntosObras[19].type,
        20,
        puntosObras[19].bullet1,
        '',
        puntosObras[19].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
        puntosObras[19].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
        puntosObras[19].estatus === 'DOCUMENTO CON INCUMPLIMIENTO' ? 'IN' : '',
        puntosObras[19].estatus === 'DOCUMENTO NO APLICABLE'
          ? 'N/A'
          : puntosObras[19].estatus ===
            'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
          ? 'NA/T'
          : '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
      ],
      [
        '',
        puntosObras[20].type,
        21,
        puntosObras[20].bullet1,
        '',
        puntosObras[20].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
        puntosObras[20].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
        puntosObras[20].estatus === 'DOCUMENTO CON INCUMPLIMIENTO' ? 'IN' : '',
        puntosObras[20].estatus === 'DOCUMENTO NO APLICABLE'
          ? 'N/A'
          : puntosObras[20].estatus ===
            'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
          ? 'NA/T'
          : '',
        puntosObras[63].type,
        64,
        puntosObras[63].bullet1,
        '',
        puntosObras[63].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
        puntosObras[63].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
        puntosObras[63].estatus === 'DOCUMENTO CON INCUMPLIMIENTO' ? 'IN' : '',
        puntosObras[63].estatus === 'DOCUMENTO NO APLICABLE'
          ? 'N/A'
          : puntosObras[63].estatus ===
            'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
          ? 'NA/T'
          : '',
      ],
      [
        '',
        puntosObras[21].type,
        22,
        puntosObras[21].bullet1,
        '',
        puntosObras[21].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
        puntosObras[21].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
        puntosObras[21].estatus === 'DOCUMENTO CON INCUMPLIMIENTO' ? 'IN' : '',
        puntosObras[21].estatus === 'DOCUMENTO NO APLICABLE'
          ? 'N/A'
          : puntosObras[21].estatus ===
            'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
          ? 'NA/T'
          : '',
        puntosObras[64].type,
        65,
        puntosObras[64].bullet1,
        '',
        puntosObras[64].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
        puntosObras[64].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
        puntosObras[64].estatus === 'DOCUMENTO CON INCUMPLIMIENTO' ? 'IN' : '',
        puntosObras[64].estatus === 'DOCUMENTO NO APLICABLE'
          ? 'N/A'
          : puntosObras[64].estatus ===
            'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
          ? 'NA/T'
          : '',
      ],
      [
        '',
        puntosObras[22].type,
        23,
        puntosObras[22].bullet1,
        '',
        puntosObras[22].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
        puntosObras[22].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
        puntosObras[22].estatus === 'DOCUMENTO CON INCUMPLIMIENTO' ? 'IN' : '',
        puntosObras[22].estatus === 'DOCUMENTO NO APLICABLE'
          ? 'N/A'
          : puntosObras[22].estatus ===
            'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
          ? 'NA/T'
          : '',
        puntosObras[65].type,
        66,
        puntosObras[65].bullet1,
        '',
        puntosObras[65].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
        puntosObras[65].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
        puntosObras[65].estatus === 'DOCUMENTO CON INCUMPLIMIENTO' ? 'IN' : '',
        puntosObras[65].estatus === 'DOCUMENTO NO APLICABLE'
          ? 'N/A'
          : puntosObras[65].estatus ===
            'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
          ? 'NA/T'
          : '',
      ],
      [
        '',
        puntosObras[23].type,
        24,
        puntosObras[23].bullet1,
        '',
        puntosObras[23].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
        puntosObras[23].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
        puntosObras[23].estatus === 'DOCUMENTO CON INCUMPLIMIENTO' ? 'IN' : '',
        puntosObras[23].estatus === 'DOCUMENTO NO APLICABLE'
          ? 'N/A'
          : puntosObras[23].estatus ===
            'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
          ? 'NA/T'
          : '',
        puntosObras[66].type,
        67,
        puntosObras[66].bullet1,
        '',
        puntosObras[66].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
        puntosObras[66].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
        puntosObras[66].estatus === 'DOCUMENTO CON INCUMPLIMIENTO' ? 'IN' : '',
        puntosObras[66].estatus === 'DOCUMENTO NO APLICABLE'
          ? 'N/A'
          : puntosObras[66].estatus ===
            'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
          ? 'NA/T'
          : '',
      ],
      [
        '',
        puntosObras[24].type,
        25,
        puntosObras[24].bullet1,
        '',
        puntosObras[24].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
        puntosObras[24].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
        puntosObras[24].estatus === 'DOCUMENTO CON INCUMPLIMIENTO' ? 'IN' : '',
        puntosObras[24].estatus === 'DOCUMENTO NO APLICABLE'
          ? 'N/A'
          : puntosObras[24].estatus ===
            'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
          ? 'NA/T'
          : '',
        puntosObras[67].type,
        68,
        puntosObras[67].bullet1,
        '',
        puntosObras[67].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
        puntosObras[67].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
        puntosObras[67].estatus === 'DOCUMENTO CON INCUMPLIMIENTO' ? 'IN' : '',
        puntosObras[67].estatus === 'DOCUMENTO NO APLICABLE'
          ? 'N/A'
          : puntosObras[67].estatus ===
            'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
          ? 'NA/T'
          : '',
      ],
      [
        '',
        puntosObras[25].type,
        26,
        puntosObras[25].bullet1,
        '',
        puntosObras[25].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
        puntosObras[25].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
        puntosObras[25].estatus === 'DOCUMENTO CON INCUMPLIMIENTO' ? 'IN' : '',
        puntosObras[25].estatus === 'DOCUMENTO NO APLICABLE'
          ? 'N/A'
          : puntosObras[25].estatus ===
            'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
          ? 'NA/T'
          : '',
        puntosObras[68].type,
        69,
        puntosObras[68].bullet1,
        '',
        puntosObras[68].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
        puntosObras[68].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
        puntosObras[68].estatus === 'DOCUMENTO CON INCUMPLIMIENTO' ? 'IN' : '',
        puntosObras[68].estatus === 'DOCUMENTO NO APLICABLE'
          ? 'N/A'
          : puntosObras[68].estatus ===
            'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
          ? 'NA/T'
          : '',
      ],
      [
        '',
        puntosObras[26].type,
        27,
        puntosObras[26].bullet1,
        '',
        puntosObras[26].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
        puntosObras[26].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
        puntosObras[26].estatus === 'DOCUMENTO CON INCUMPLIMIENTO' ? 'IN' : '',
        puntosObras[26].estatus === 'DOCUMENTO NO APLICABLE'
          ? 'N/A'
          : puntosObras[26].estatus ===
            'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
          ? 'NA/T'
          : '',
        puntosObras[69].type,
        70,
        puntosObras[69].bullet1,
        '',
        puntosObras[69].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
        puntosObras[69].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
        puntosObras[69].estatus === 'DOCUMENTO CON INCUMPLIMIENTO' ? 'IN' : '',
        puntosObras[69].estatus === 'DOCUMENTO NO APLICABLE'
          ? 'N/A'
          : puntosObras[69].estatus ===
            'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
          ? 'NA/T'
          : '',
      ],
      [
        '',
        puntosObras[27].type,
        28,
        puntosObras[27].bullet1,
        '',
        puntosObras[27].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
        puntosObras[27].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
        puntosObras[27].estatus === 'DOCUMENTO CON INCUMPLIMIENTO' ? 'IN' : '',
        puntosObras[27].estatus === 'DOCUMENTO NO APLICABLE'
          ? 'N/A'
          : puntosObras[27].estatus ===
            'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
          ? 'NA/T'
          : '',
        puntosObras[70].type,
        71,
        puntosObras[70].bullet1,
        '',
        puntosObras[70].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
        puntosObras[70].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
        puntosObras[70].estatus === 'DOCUMENTO CON INCUMPLIMIENTO' ? 'IN' : '',
        puntosObras[70].estatus === 'DOCUMENTO NO APLICABLE'
          ? 'N/A'
          : puntosObras[70].estatus ===
            'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
          ? 'NA/T'
          : '',
      ],
      [
        '',
        puntosObras[28].type,
        29,
        puntosObras[28].bullet1,
        '',
        puntosObras[28].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
        puntosObras[28].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
        puntosObras[28].estatus === 'DOCUMENTO CON INCUMPLIMIENTO' ? 'IN' : '',
        puntosObras[28].estatus === 'DOCUMENTO NO APLICABLE'
          ? 'N/A'
          : puntosObras[28].estatus ===
            'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
          ? 'NA/T'
          : '',
        puntosObras[71].type,
        72,
        puntosObras[71].bullet1,
        '',
        puntosObras[71].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
        puntosObras[71].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
        puntosObras[71].estatus === 'DOCUMENTO CON INCUMPLIMIENTO' ? 'IN' : '',
        puntosObras[71].estatus === 'DOCUMENTO NO APLICABLE'
          ? 'N/A'
          : puntosObras[71].estatus ===
            'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
          ? 'NA/T'
          : '',
      ],
      [
        '',
        puntosObras[29].type,
        30,
        puntosObras[29].bullet1,
        '',
        puntosObras[29].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
        puntosObras[29].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
        puntosObras[29].estatus === 'DOCUMENTO CON INCUMPLIMIENTO' ? 'IN' : '',
        puntosObras[29].estatus === 'DOCUMENTO NO APLICABLE'
          ? 'N/A'
          : puntosObras[29].estatus ===
            'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
          ? 'NA/T'
          : '',
        puntosObras[72].type,
        73,
        puntosObras[72].bullet1,
        '',
        puntosObras[72].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
        puntosObras[72].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
        puntosObras[72].estatus === 'DOCUMENTO CON INCUMPLIMIENTO' ? 'IN' : '',
        puntosObras[72].estatus === 'DOCUMENTO NO APLICABLE'
          ? 'N/A'
          : puntosObras[72].estatus ===
            'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
          ? 'NA/T'
          : '',
      ],
      [
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        puntosObras[73].type,
        74,
        puntosObras[73].bullet1,
        '',
        puntosObras[73].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
        puntosObras[73].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
        puntosObras[73].estatus === 'DOCUMENTO CON INCUMPLIMIENTO' ? 'IN' : '',
        puntosObras[73].estatus === 'DOCUMENTO NO APLICABLE'
          ? 'N/A'
          : puntosObras[73].estatus ===
            'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
          ? 'NA/T'
          : '',
      ],
      [
        '',
        puntosObras[30].type,
        31,
        puntosObras[30].bullet1,
        '',
        puntosObras[30].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
        puntosObras[30].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
        puntosObras[30].estatus === 'DOCUMENTO CON INCUMPLIMIENTO' ? 'IN' : '',
        puntosObras[30].estatus === 'DOCUMENTO NO APLICABLE'
          ? 'N/A'
          : puntosObras[30].estatus ===
            'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
          ? 'NA/T'
          : '',
        puntosObras[74].type,
        75,
        puntosObras[74].bullet1,
        '',
        puntosObras[74].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
        puntosObras[74].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
        puntosObras[74].estatus === 'DOCUMENTO CON INCUMPLIMIENTO' ? 'IN' : '',
        puntosObras[74].estatus === 'DOCUMENTO NO APLICABLE'
          ? 'N/A'
          : puntosObras[74].estatus ===
            'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
          ? 'NA/T'
          : '',
      ],
      [
        '',
        puntosObras[31].type,
        32,
        puntosObras[31].bullet1,
        '',
        puntosObras[31].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
        puntosObras[31].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
        puntosObras[31].estatus === 'DOCUMENTO CON INCUMPLIMIENTO' ? 'IN' : '',
        puntosObras[31].estatus === 'DOCUMENTO NO APLICABLE'
          ? 'N/A'
          : puntosObras[31].estatus ===
            'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
          ? 'NA/T'
          : '',
        puntosObras[75].type,
        76,
        puntosObras[75].bullet1,
        '',
        puntosObras[75].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
        puntosObras[75].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
        puntosObras[75].estatus === 'DOCUMENTO CON INCUMPLIMIENTO' ? 'IN' : '',
        puntosObras[75].estatus === 'DOCUMENTO NO APLICABLE'
          ? 'N/A'
          : puntosObras[75].estatus ===
            'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
          ? 'NA/T'
          : '',
      ],
      [
        '',
        puntosObras[32].type,
        33,
        puntosObras[32].bullet1,
        '',
        puntosObras[32].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
        puntosObras[32].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
        puntosObras[32].estatus === 'DOCUMENTO CON INCUMPLIMIENTO' ? 'IN' : '',
        puntosObras[32].estatus === 'DOCUMENTO NO APLICABLE'
          ? 'N/A'
          : puntosObras[32].estatus ===
            'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
          ? 'NA/T'
          : '',
        puntosObras[76].type,
        77,
        puntosObras[76].bullet1,
        '',
        puntosObras[76].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
        puntosObras[76].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
        puntosObras[76].estatus === 'DOCUMENTO CON INCUMPLIMIENTO' ? 'IN' : '',
        puntosObras[76].estatus === 'DOCUMENTO NO APLICABLE'
          ? 'N/A'
          : puntosObras[76].estatus ===
            'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
          ? 'NA/T'
          : '',
      ],
      [
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        puntosObras[77].type,
        78,
        puntosObras[77].bullet1,
        '',
        puntosObras[77].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
        puntosObras[77].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
        puntosObras[77].estatus === 'DOCUMENTO CON INCUMPLIMIENTO' ? 'IN' : '',
        puntosObras[77].estatus === 'DOCUMENTO NO APLICABLE'
          ? 'N/A'
          : puntosObras[77].estatus ===
            'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
          ? 'NA/T'
          : '',
      ],
      [
        '',
        puntosObras[33].type,
        34,
        puntosObras[33].bullet1,
        '',
        puntosObras[33].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
        puntosObras[33].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
        puntosObras[33].estatus === 'DOCUMENTO CON INCUMPLIMIENTO' ? 'IN' : '',
        puntosObras[33].estatus === 'DOCUMENTO NO APLICABLE'
          ? 'N/A'
          : puntosObras[33].estatus ===
            'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
          ? 'NA/T'
          : '',
        puntosObras[78].type,
        79,
        puntosObras[78].bullet1,
        '',
        puntosObras[78].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
        puntosObras[78].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
        puntosObras[78].estatus === 'DOCUMENTO CON INCUMPLIMIENTO' ? 'IN' : '',
        puntosObras[78].estatus === 'DOCUMENTO NO APLICABLE'
          ? 'N/A'
          : puntosObras[78].estatus ===
            'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
          ? 'NA/T'
          : '',
      ],
      [
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        puntosObras[79].type,
        80,
        puntosObras[79].bullet1,
        '',
        puntosObras[79].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
        puntosObras[79].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
        puntosObras[79].estatus === 'DOCUMENTO CON INCUMPLIMIENTO' ? 'IN' : '',
        puntosObras[79].estatus === 'DOCUMENTO NO APLICABLE'
          ? 'N/A'
          : puntosObras[79].estatus ===
            'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
          ? 'NA/T'
          : '',
      ],
      [
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        puntosObras[80].type,
        81,
        puntosObras[80].bullet1,
        '',
        puntosObras[80].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
        puntosObras[80].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
        puntosObras[80].estatus === 'DOCUMENTO CON INCUMPLIMIENTO' ? 'IN' : '',
        puntosObras[80].estatus === 'DOCUMENTO NO APLICABLE'
          ? 'N/A'
          : puntosObras[80].estatus ===
            'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
          ? 'NA/T'
          : '',
      ],
      [
        '',
        puntosObras[34].type,
        35,
        puntosObras[34].bullet1,
        '',
        puntosObras[34].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
        puntosObras[34].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
        puntosObras[34].estatus === 'DOCUMENTO CON INCUMPLIMIENTO' ? 'IN' : '',
        puntosObras[34].estatus === 'DOCUMENTO NO APLICABLE'
          ? 'N/A'
          : puntosObras[34].estatus ===
            'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
          ? 'NA/T'
          : '',
        puntosObras[81].type,
        82,
        puntosObras[81].bullet1,
        '',
        puntosObras[81].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
        puntosObras[81].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
        puntosObras[81].estatus === 'DOCUMENTO CON INCUMPLIMIENTO' ? 'IN' : '',
        puntosObras[81].estatus === 'DOCUMENTO NO APLICABLE'
          ? 'N/A'
          : puntosObras[81].estatus ===
            'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
          ? 'NA/T'
          : '',
      ],
      [
        '',
        puntosObras[35].type,
        36,
        puntosObras[35].bullet1,
        '',
        puntosObras[35].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
        puntosObras[35].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
        puntosObras[35].estatus === 'DOCUMENTO CON INCUMPLIMIENTO' ? 'IN' : '',
        puntosObras[35].estatus === 'DOCUMENTO NO APLICABLE'
          ? 'N/A'
          : puntosObras[35].estatus ===
            'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
          ? 'NA/T'
          : '',
        puntosObras[82].type,
        83,
        puntosObras[82].bullet1,
        '',
        puntosObras[82].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
        puntosObras[82].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
        puntosObras[82].estatus === 'DOCUMENTO CON INCUMPLIMIENTO' ? 'IN' : '',
        puntosObras[82].estatus === 'DOCUMENTO NO APLICABLE'
          ? 'N/A'
          : puntosObras[82].estatus ===
            'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
          ? 'NA/T'
          : '',
      ],
      [
        '',
        puntosObras[36].type,
        37,
        puntosObras[36].bullet1,
        '',
        puntosObras[36].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
        puntosObras[36].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
        puntosObras[36].estatus === 'DOCUMENTO CON INCUMPLIMIENTO' ? 'IN' : '',
        puntosObras[36].estatus === 'DOCUMENTO NO APLICABLE'
          ? 'N/A'
          : puntosObras[36].estatus ===
            'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
          ? 'NA/T'
          : '',
        puntosObras[83].type,
        84,
        puntosObras[83].bullet1,
        '',
        puntosObras[83].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
        puntosObras[83].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
        puntosObras[83].estatus === 'DOCUMENTO CON INCUMPLIMIENTO' ? 'IN' : '',
        puntosObras[83].estatus === 'DOCUMENTO NO APLICABLE'
          ? 'N/A'
          : puntosObras[83].estatus ===
            'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
          ? 'NA/T'
          : '',
      ],
      [
        '',
        puntosObras[37].type,
        38,
        puntosObras[37].bullet1,
        '',
        puntosObras[37].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
        puntosObras[37].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
        puntosObras[37].estatus === 'DOCUMENTO CON INCUMPLIMIENTO' ? 'IN' : '',
        puntosObras[37].estatus === 'DOCUMENTO NO APLICABLE'
          ? 'N/A'
          : puntosObras[37].estatus ===
            'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
          ? 'NA/T'
          : '',
        puntosObras[84].type,
        85,
        puntosObras[84].bullet1,
        '',
        puntosObras[84].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
        puntosObras[84].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
        puntosObras[84].estatus === 'DOCUMENTO CON INCUMPLIMIENTO' ? 'IN' : '',
        puntosObras[84].estatus === 'DOCUMENTO NO APLICABLE'
          ? 'N/A'
          : puntosObras[84].estatus ===
            'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
          ? 'NA/T'
          : '',
      ],
      [
        '',
        puntosObras[38].type,
        39,
        puntosObras[38].bullet1,
        '',
        puntosObras[38].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
        puntosObras[38].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
        puntosObras[38].estatus === 'DOCUMENTO CON INCUMPLIMIENTO' ? 'IN' : '',
        puntosObras[38].estatus === 'DOCUMENTO NO APLICABLE'
          ? 'N/A'
          : puntosObras[38].estatus ===
            'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
          ? 'NA/T'
          : '',
        puntosObras[85].type,
        86,
        puntosObras[85].bullet1,
        '',
        puntosObras[85].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
        puntosObras[85].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
        puntosObras[85].estatus === 'DOCUMENTO CON INCUMPLIMIENTO' ? 'IN' : '',
        puntosObras[85].estatus === 'DOCUMENTO NO APLICABLE'
          ? 'N/A'
          : puntosObras[85].estatus ===
            'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
          ? 'NA/T'
          : '',
      ],
      [
        '',
        puntosObras[39].type,
        40,
        puntosObras[39].bullet1,
        '',
        puntosObras[39].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
        puntosObras[39].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
        puntosObras[39].estatus === 'DOCUMENTO CON INCUMPLIMIENTO' ? 'IN' : '',
        puntosObras[39].estatus === 'DOCUMENTO NO APLICABLE'
          ? 'N/A'
          : puntosObras[39].estatus ===
            'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
          ? 'NA/T'
          : '',
        puntosObras[86].type,
        87,
        puntosObras[86].bullet1,
        '',
        puntosObras[86].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
        puntosObras[86].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
        puntosObras[86].estatus === 'DOCUMENTO CON INCUMPLIMIENTO' ? 'IN' : '',
        puntosObras[86].estatus === 'DOCUMENTO NO APLICABLE'
          ? 'N/A'
          : puntosObras[86].estatus ===
            'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
          ? 'NA/T'
          : '',
      ],
      [
        '',
        puntosObras[40].type,
        41,
        puntosObras[40].bullet1,
        '',
        puntosObras[40].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
        puntosObras[40].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
        puntosObras[40].estatus === 'DOCUMENTO CON INCUMPLIMIENTO' ? 'IN' : '',
        puntosObras[40].estatus === 'DOCUMENTO NO APLICABLE'
          ? 'N/A'
          : puntosObras[40].estatus ===
            'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
          ? 'NA/T'
          : '',
        puntosObras[87].type,
        88,
        puntosObras[87].bullet1,
        '',
        puntosObras[87].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
        puntosObras[87].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
        puntosObras[87].estatus === 'DOCUMENTO CON INCUMPLIMIENTO' ? 'IN' : '',
        puntosObras[87].estatus === 'DOCUMENTO NO APLICABLE'
          ? 'N/A'
          : puntosObras[87].estatus ===
            'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
          ? 'NA/T'
          : '',
      ],
      [
        '',
        puntosObras[41].type,
        42,
        puntosObras[41].bullet1,
        '',
        puntosObras[41].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
        puntosObras[41].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
        puntosObras[41].estatus === 'DOCUMENTO CON INCUMPLIMIENTO' ? 'IN' : '',
        puntosObras[41].estatus === 'DOCUMENTO NO APLICABLE'
          ? 'N/A'
          : puntosObras[41].estatus ===
            'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
          ? 'NA/T'
          : '',
        puntosObras[88].type,
        89,
        puntosObras[88].bullet1,
        '',
        puntosObras[88].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
        puntosObras[88].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
        puntosObras[88].estatus === 'DOCUMENTO CON INCUMPLIMIENTO' ? 'IN' : '',
        puntosObras[88].estatus === 'DOCUMENTO NO APLICABLE'
          ? 'N/A'
          : puntosObras[88].estatus ===
            'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
          ? 'NA/T'
          : '',
      ],
      [
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        puntosObras[89].type,
        90,
        puntosObras[89].bullet1,
        '',
        puntosObras[89].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
        puntosObras[89].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
        puntosObras[89].estatus === 'DOCUMENTO CON INCUMPLIMIENTO' ? 'IN' : '',
        puntosObras[89].estatus === 'DOCUMENTO NO APLICABLE'
          ? 'N/A'
          : puntosObras[89].estatus ===
            'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
          ? 'NA/T'
          : '',
      ],
      [
        '',
        puntosObras[42].type,
        43,
        puntosObras[42].bullet1,
        '',
        puntosObras[42].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
        puntosObras[42].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
        puntosObras[42].estatus === 'DOCUMENTO CON INCUMPLIMIENTO' ? 'IN' : '',
        puntosObras[42].estatus === 'DOCUMENTO NO APLICABLE'
          ? 'N/A'
          : puntosObras[42].estatus ===
            'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
          ? 'NA/T'
          : '',
        puntosObras[90].type,
        91,
        puntosObras[90].bullet1,
        '',
        puntosObras[90].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
        puntosObras[90].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
        puntosObras[90].estatus === 'DOCUMENTO CON INCUMPLIMIENTO' ? 'IN' : '',
        puntosObras[90].estatus === 'DOCUMENTO NO APLICABLE'
          ? 'N/A'
          : puntosObras[90].estatus ===
            'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
          ? 'NA/T'
          : '',
      ],
      [
        '',
        puntosObras[43].type,
        44,
        puntosObras[43].bullet1,
        '',
        puntosObras[43].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
        puntosObras[43].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
        puntosObras[43].estatus === 'DOCUMENTO CON INCUMPLIMIENTO' ? 'IN' : '',
        puntosObras[43].estatus === 'DOCUMENTO NO APLICABLE'
          ? 'N/A'
          : puntosObras[43].estatus ===
            'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
          ? 'NA/T'
          : '',
        puntosObras[91].type,
        92,
        puntosObras[91].bullet1,
        '',
        puntosObras[91].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
        puntosObras[91].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
        puntosObras[91].estatus === 'DOCUMENTO CON INCUMPLIMIENTO' ? 'IN' : '',
        puntosObras[91].estatus === 'DOCUMENTO NO APLICABLE'
          ? 'N/A'
          : puntosObras[91].estatus ===
            'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
          ? 'NA/T'
          : '',
      ],
      [
        '',
        puntosObras[44].type,
        45,
        puntosObras[44].bullet1,
        '',
        puntosObras[44].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
        puntosObras[44].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
        puntosObras[44].estatus === 'DOCUMENTO CON INCUMPLIMIENTO' ? 'IN' : '',
        puntosObras[44].estatus === 'DOCUMENTO NO APLICABLE'
          ? 'N/A'
          : puntosObras[44].estatus ===
            'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
          ? 'NA/T'
          : '',
        'COMENTARIOS Y OBSERVACIONES',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
      ],
      [
        '',
        puntosObras[45].type,
        46,
        puntosObras[45].bullet1,
        '',
        puntosObras[45].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
        puntosObras[45].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
        puntosObras[45].estatus === 'DOCUMENTO CON INCUMPLIMIENTO' ? 'IN' : '',
        puntosObras[45].estatus === 'DOCUMENTO NO APLICABLE'
          ? 'N/A'
          : puntosObras[45].estatus ===
            'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
          ? 'NA/T'
          : '',
        row.observaciones,
        '',
        '',
        '',
        '',
        '',
        '',
        '',
      ],
      [
        '',
        puntosObras[46].type,
        47,
        puntosObras[46].bullet1,
        '',
        puntosObras[46].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
        puntosObras[46].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
        puntosObras[46].estatus === 'DOCUMENTO CON INCUMPLIMIENTO' ? 'IN' : '',
        puntosObras[46].estatus === 'DOCUMENTO NO APLICABLE'
          ? 'N/A'
          : puntosObras[46].estatus ===
            'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
          ? 'NA/T'
          : '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
      ],
      [
        '',
        puntosObras[47].type,
        48,
        puntosObras[47].bullet1,
        '',
        puntosObras[47].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
        puntosObras[47].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
        puntosObras[47].estatus === 'DOCUMENTO CON INCUMPLIMIENTO' ? 'IN' : '',
        puntosObras[47].estatus === 'DOCUMENTO NO APLICABLE'
          ? 'N/A'
          : puntosObras[47].estatus ===
            'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
          ? 'NA/T'
          : '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
      ],
    ];
    const title = 'INSTITUTO MEXICANO DEL SEGURO SOCIAL';
    const subtitle = 'FICHA DE INFORMACIÓN DOCUMENTAL-O';
    const subtitle1 = 'GENERALES';
    const subtitle2 = 'N° DE OBRA';
    const subtitle3 = 'FONDO';
    const subtitle4 = 'EJERCICIO';
    const subtitle5 = 'TIPO DE ADJUDICACIÓN';
    const subtitle6 = 'ÁREA REQUIRENTE Y/O RESPONSABLE';
    const subtitle7 = 'N° DE CONTRATO';
    const subtitle8 = 'CONTRATISTA O PROVEEDOR';
    const subtitle9 = 'VIGENCIA';
    const subtitle10 = 'MONTO';
    const subtitle11 = 'NOMBRE DE LA OBRA';
    const subtitle12 = 'COMENTARIOS Y OBSERVACIONES';
    const header = [
      '',
      'ETAPA',
      'No',
      'DOCUMENTO',
      '',
      'SI',
      'NO',
      'INCUMPLE',
      'NA',
      'ETAPA',
      'No',
      'DOCUMENTO',
      '',
      'SI',
      'NO',
      'INCUMPLE',
      'NA',
    ];

    const workbook = new Workbook();
    const worksheet = workbook.addWorksheet('FID-O');
    const titleRow = worksheet.addRow(['', title]);
    titleRow.font = {
      name: 'Calibri',
      size: 12,
      underline: 'none',
      bold: true,
      color: { argb: 'ffffff' },
    };
    titleRow.alignment = { horizontal: 'center', vertical: 'middle' };
    titleRow.height = 34.5;
    ['B1'].map((key) => {
      worksheet.getCell(key).fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: '6FAE45' },
      };
      worksheet.getCell(key).border = {
        top: { style: 'medium', color: { argb: '000000' } },
        left: { style: 'medium', color: { argb: '000000' } },
        bottom: { style: 'medium', color: { argb: '000000' } },
        right: { style: 'medium', color: { argb: '000000' } },
      };
    });
    worksheet.mergeCells('B1:Q1');

    const subtitleRow = worksheet.addRow(['', subtitle]);
    subtitleRow.font = {
      name: 'Calibri',
      size: 12,
      underline: 'none',
      bold: true,
      color: { argb: 'ffffff' },
    };
    subtitleRow.alignment = { horizontal: 'center', vertical: 'middle' };
    subtitleRow.height = 39;
    ['B2'].map((key) => {
      worksheet.getCell(key).fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: '6FAE45' },
      };
      worksheet.getCell(key).border = {
        top: { style: 'medium', color: { argb: '000000' } },
        left: { style: 'medium', color: { argb: '000000' } },
        bottom: { style: 'medium', color: { argb: '000000' } },
        right: { style: 'medium', color: { argb: '000000' } },
      };
    });
    worksheet.mergeCells('B2:Q2');

    const generalRow = worksheet.addRow([
      '',
      subtitle1,
      '',
      subtitle2,
      '',
      row.noObra,
    ]);
    generalRow.font = {
      name: 'Calibri',
      size: 12,
      underline: 'none',
      bold: true,
      color: { argb: 'ffffff' },
    };
    generalRow.alignment = { horizontal: 'center', vertical: 'middle' };
    generalRow.height = 45;
    ['B3'].map((key) => {
      worksheet.getCell(key).fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: '6FAE45' },
      };
      worksheet.getCell(key).border = {
        top: { style: 'medium', color: { argb: '000000' } },
        left: { style: 'medium', color: { argb: '000000' } },
        bottom: { style: 'medium', color: { argb: '000000' } },
        right: { style: 'medium', color: { argb: '000000' } },
      };
    });
    ['D3'].map((key) => {
      worksheet.getCell(key).fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: '6FAE45' },
      };
      worksheet.getCell(key).border = {
        top: { style: 'medium', color: { argb: '000000' } },
        left: { style: 'medium', color: { argb: '000000' } },
        bottom: { style: 'medium', color: { argb: '000000' } },
        right: { style: 'medium', color: { argb: '000000' } },
      };
    });
    const texto1 = generalRow.getCell(6);
    texto1.font = {
      name: 'Calibri',
      size: 12,
      underline: 'none',
    };
    texto1.alignment = {
      horizontal: 'center',
      vertical: 'middle',
      wrapText: true,
    };
    texto1.border = {
      top: { style: 'medium' },
      left: { style: 'medium' },
      bottom: { style: 'medium' },
      right: { style: 'medium' },
    };

    const campoRow = worksheet.addRow(['', '', '', subtitle3, '', row.fondo]);
    campoRow.font = {
      name: 'Calibri',
      size: 12,
      underline: 'none',
      bold: true,
      color: { argb: 'ffffff' },
    };
    campoRow.alignment = { horizontal: 'center', vertical: 'middle' };

    ['D4'].map((key) => {
      worksheet.getCell(key).fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: '6FAE45' },
      };
      worksheet.getCell(key).border = {
        top: { style: 'medium', color: { argb: '000000' } },
        left: { style: 'medium', color: { argb: '000000' } },
        bottom: { style: 'medium', color: { argb: '000000' } },
        right: { style: 'medium', color: { argb: '000000' } },
      };
    });

    const texto2 = campoRow.getCell(6);
    texto2.font = {
      name: 'Calibri',
      size: 12,
      underline: 'none',
    };
    texto2.alignment = {
      horizontal: 'center',
      vertical: 'middle',
      wrapText: true,
    };
    texto2.border = {
      top: { style: 'medium' },
      left: { style: 'medium' },
      bottom: { style: 'medium' },
      right: { style: 'medium' },
    };

    const campoRow2 = worksheet.addRow([
      '',
      '',
      '',
      subtitle4,
      '',
      row.ejercicio,
    ]);
    campoRow2.font = {
      name: 'Calibri',
      size: 12,
      underline: 'none',
      bold: true,
      color: { argb: 'ffffff' },
    };
    campoRow2.alignment = { horizontal: 'center', vertical: 'middle' };

    ['D5'].map((key) => {
      worksheet.getCell(key).fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: '6FAE45' },
      };
      worksheet.getCell(key).border = {
        top: { style: 'medium', color: { argb: '000000' } },
        left: { style: 'medium', color: { argb: '000000' } },
        bottom: { style: 'medium', color: { argb: '000000' } },
        right: { style: 'medium', color: { argb: '000000' } },
      };
    });

    const texto3 = campoRow2.getCell(6);
    texto3.font = {
      name: 'Calibri',
      size: 12,
      underline: 'none',
    };
    texto3.alignment = {
      horizontal: 'center',
      vertical: 'middle',
      wrapText: true,
    };
    texto3.border = {
      top: { style: 'medium' },
      left: { style: 'medium' },
      bottom: { style: 'medium' },
      right: { style: 'medium' },
    };

    const campoRow3 = worksheet.addRow([
      '',
      '',
      '',
      subtitle5,
      '',
      row.tipoAdjudicacion,
    ]);
    campoRow3.font = {
      name: 'Calibri',
      size: 12,
      underline: 'none',
      bold: true,
      color: { argb: 'ffffff' },
    };
    campoRow3.alignment = { horizontal: 'center', vertical: 'middle' };

    ['D6'].map((key) => {
      worksheet.getCell(key).fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: '6FAE45' },
      };
      worksheet.getCell(key).border = {
        top: { style: 'medium', color: { argb: '000000' } },
        left: { style: 'medium', color: { argb: '000000' } },
        bottom: { style: 'medium', color: { argb: '000000' } },
        right: { style: 'medium', color: { argb: '000000' } },
      };
    });

    const texto4 = campoRow3.getCell(6);
    texto4.font = {
      name: 'Calibri',
      size: 12,
      underline: 'none',
    };
    texto4.alignment = {
      horizontal: 'center',
      vertical: 'middle',
      wrapText: true,
    };
    texto4.border = {
      top: { style: 'medium' },
      left: { style: 'medium' },
      bottom: { style: 'medium' },
      right: { style: 'medium' },
    };

    const campoRow4 = worksheet.addRow([
      '',
      '',
      '',
      subtitle6,
      '',
      row.areaRequirente,
    ]);
    campoRow4.font = {
      name: 'Calibri',
      size: 12,
      underline: 'none',
      bold: true,
      color: { argb: 'ffffff' },
    };
    campoRow4.alignment = { horizontal: 'center', vertical: 'middle' };

    ['D7'].map((key) => {
      worksheet.getCell(key).fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: '6FAE45' },
      };
      worksheet.getCell(key).border = {
        top: { style: 'medium', color: { argb: '000000' } },
        left: { style: 'medium', color: { argb: '000000' } },
        bottom: { style: 'medium', color: { argb: '000000' } },
        right: { style: 'medium', color: { argb: '000000' } },
      };
    });

    const texto5 = campoRow4.getCell(6);
    texto5.font = {
      name: 'Calibri',
      size: 12,
      underline: 'none',
    };
    texto5.alignment = {
      horizontal: 'center',
      vertical: 'middle',
      wrapText: true,
    };
    texto5.border = {
      top: { style: 'medium' },
      left: { style: 'medium' },
      bottom: { style: 'medium' },
      right: { style: 'medium' },
    };

    const campoRow5 = worksheet.addRow([
      '',
      '',
      '',
      subtitle7,
      '',
      row.noContrato,
    ]);
    campoRow5.font = {
      name: 'Calibri',
      size: 12,
      underline: 'none',
      bold: true,
      color: { argb: 'ffffff' },
    };
    campoRow5.alignment = { horizontal: 'center', vertical: 'middle' };

    ['D8'].map((key) => {
      worksheet.getCell(key).fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: '6FAE45' },
      };
      worksheet.getCell(key).border = {
        top: { style: 'medium', color: { argb: '000000' } },
        left: { style: 'medium', color: { argb: '000000' } },
        bottom: { style: 'medium', color: { argb: '000000' } },
        right: { style: 'medium', color: { argb: '000000' } },
      };
    });

    const texto6 = campoRow5.getCell(6);
    texto6.font = {
      name: 'Calibri',
      size: 12,
      underline: 'none',
    };
    texto6.alignment = {
      horizontal: 'center',
      vertical: 'middle',
      wrapText: true,
    };
    texto6.border = {
      top: { style: 'medium' },
      left: { style: 'medium' },
      bottom: { style: 'medium' },
      right: { style: 'medium' },
    };

    const campoRow6 = worksheet.addRow([
      '',
      '',
      '',
      subtitle8,
      '',
      row.proveedor,
    ]);
    campoRow6.font = {
      name: 'Calibri',
      size: 12,
      underline: 'none',
      bold: true,
      color: { argb: 'ffffff' },
    };
    campoRow6.alignment = { horizontal: 'center', vertical: 'middle' };

    ['D9'].map((key) => {
      worksheet.getCell(key).fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: '6FAE45' },
      };
      worksheet.getCell(key).border = {
        top: { style: 'medium', color: { argb: '000000' } },
        left: { style: 'medium', color: { argb: '000000' } },
        bottom: { style: 'medium', color: { argb: '000000' } },
        right: { style: 'medium', color: { argb: '000000' } },
      };
    });

    const texto7 = campoRow6.getCell(6);
    texto7.font = {
      name: 'Calibri',
      size: 12,
      underline: 'none',
    };
    texto7.alignment = {
      horizontal: 'center',
      vertical: 'middle',
      wrapText: true,
    };
    texto7.border = {
      top: { style: 'medium' },
      left: { style: 'medium' },
      bottom: { style: 'medium' },
      right: { style: 'medium' },
    };

    let fechaI: any = '';
    let fechaF: any = '';

    if (row.vigenciaInicio !== undefined && row.vigenciaInicio !== '') {
      fechaI = this.filterSvc.formatDate(
        new Date(row.vigenciaInicio.seconds * 1000),
        'only_date'
      );
    }
    if (row.vigenciaFin !== undefined && row.vigenciaFin !== '') {
      fechaF = this.filterSvc.formatDate(
        new Date(row.vigenciaFin.seconds * 1000),
        'only_date'
      );
    }

    const campoRow7 = worksheet.addRow([
      '',
      '',
      '',
      subtitle9,
      '',
      `${fechaI} - ${fechaF}`,
    ]);
    campoRow7.font = {
      name: 'Calibri',
      size: 12,
      underline: 'none',
      bold: true,
      color: { argb: 'ffffff' },
    };
    campoRow7.alignment = { horizontal: 'center', vertical: 'middle' };

    ['D10'].map((key) => {
      worksheet.getCell(key).fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: '6FAE45' },
      };
      worksheet.getCell(key).border = {
        top: { style: 'medium', color: { argb: '000000' } },
        left: { style: 'medium', color: { argb: '000000' } },
        bottom: { style: 'medium', color: { argb: '000000' } },
        right: { style: 'medium', color: { argb: '000000' } },
      };
    });

    const texto8 = campoRow7.getCell(6);
    texto8.font = {
      name: 'Calibri',
      size: 12,
      underline: 'none',
    };
    texto8.alignment = {
      horizontal: 'center',
      vertical: 'middle',
      wrapText: true,
    };
    texto8.border = {
      top: { style: 'medium' },
      left: { style: 'medium' },
      bottom: { style: 'medium' },
      right: { style: 'medium' },
    };

    const campoRow8 = worksheet.addRow(['', '', '', subtitle10, '', row.monto]);
    campoRow8.font = {
      name: 'Calibri',
      size: 12,
      underline: 'none',
      bold: true,
      color: { argb: 'ffffff' },
    };
    campoRow8.alignment = { horizontal: 'center', vertical: 'middle' };

    ['D11'].map((key) => {
      worksheet.getCell(key).fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: '6FAE45' },
      };
      worksheet.getCell(key).border = {
        top: { style: 'medium', color: { argb: '000000' } },
        left: { style: 'medium', color: { argb: '000000' } },
        bottom: { style: 'medium', color: { argb: '000000' } },
        right: { style: 'medium', color: { argb: '000000' } },
      };
    });

    const texto9 = campoRow8.getCell(6);
    texto9.font = {
      name: 'Calibri',
      size: 12,
      underline: 'none',
    };
    texto9.alignment = {
      horizontal: 'center',
      vertical: 'middle',
      wrapText: true,
    };
    texto9.border = {
      top: { style: 'medium' },
      left: { style: 'medium' },
      bottom: { style: 'medium' },
      right: { style: 'medium' },
    };

    const campoRow9 = worksheet.addRow([
      '',
      '',
      '',
      subtitle11,
      '',
      row.nombreObra,
    ]);
    campoRow9.font = {
      name: 'Calibri',
      size: 12,
      underline: 'none',
      bold: true,
      color: { argb: 'ffffff' },
    };
    campoRow9.alignment = { horizontal: 'center', vertical: 'middle' };

    ['D12'].map((key) => {
      worksheet.getCell(key).fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: '6FAE45' },
      };
      worksheet.getCell(key).border = {
        top: { style: 'medium', color: { argb: '000000' } },
        left: { style: 'medium', color: { argb: '000000' } },
        bottom: { style: 'medium', color: { argb: '000000' } },
        right: { style: 'medium', color: { argb: '000000' } },
      };
    });

    const texto10 = campoRow9.getCell(6);
    texto10.font = {
      name: 'Calibri',
      size: 12,
      underline: 'none',
    };
    texto10.alignment = {
      horizontal: 'center',
      vertical: 'middle',
      wrapText: true,
    };
    texto10.border = {
      top: { style: 'medium' },
      left: { style: 'medium' },
      bottom: { style: 'medium' },
      right: { style: 'medium' },
    };

    worksheet.mergeCells('B3:C12');
    worksheet.mergeCells('D3:E3');
    worksheet.mergeCells('F3:Q3');
    worksheet.mergeCells('F4:Q4');
    worksheet.mergeCells('F5:Q5');
    worksheet.mergeCells('F6:Q6');
    worksheet.mergeCells('F7:Q7');
    worksheet.mergeCells('F8:Q8');
    worksheet.mergeCells('F9:Q9');
    worksheet.mergeCells('F10:Q10');
    worksheet.mergeCells('F11:Q11');
    worksheet.mergeCells('F12:Q12');
    worksheet.mergeCells('D4:E4');
    worksheet.mergeCells('D5:E5');
    worksheet.mergeCells('D6:E6');
    worksheet.mergeCells('D7:E7');
    worksheet.mergeCells('D8:E8');
    worksheet.mergeCells('D9:E9');
    worksheet.mergeCells('D10:E10');
    worksheet.mergeCells('D11:E11');
    worksheet.mergeCells('D12:E12');

    const headerRow = worksheet.addRow(header);

    headerRow.eachCell((cell, number) => {
      if (number !== 1) {
        cell.font = {
          name: 'Calibri',
          size: 12,
          underline: 'none',
          bold: true,
          color: { argb: 'ffffff' },
        };
        cell.alignment = { horizontal: 'center', vertical: 'middle' };
        cell.fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: { argb: '6FAE45' },
          bgColor: { argb: '6FAE45' },
        };
        cell.border = {
          top: { style: 'medium' },
          left: { style: 'medium' },
          bottom: { style: 'medium' },
          right: { style: 'medium' },
        };
      }
    });
    worksheet.mergeCells('D13:E13');
    worksheet.mergeCells('L13:M13');

    data.forEach((d) => {
      const row = worksheet.addRow(d);

      row.font = {
        name: 'Calibri',
        size: 12,
        underline: 'none',
      };
      row.alignment = {
        horizontal: 'center',
        vertical: 'middle',
        wrapText: true,
      };
      row.border = {
        top: { style: 'thin' },
        left: { style: 'thin' },
        bottom: { style: 'thin' },
        right: { style: 'thin' },
      };
      if (
        row.number !== 43 &&
        row.number !== 44 &&
        row.number !== 47 &&
        row.number !== 48 &&
        row.number !== 49 &&
        row.number !== 50 &&
        row.number !== 51 &&
        row.number !== 59 &&
        row.number !== 60
      ) {
        worksheet.mergeCells(`D${String(row.number)}:E${String(row.number)}`);
      }
      if (
        row.number !== 14 &&
        row.number !== 15 &&
        row.number !== 16 &&
        row.number !== 28 &&
        row.number !== 29 &&
        row.number !== 30 &&
        row.number !== 31 &&
        row.number !== 32 &&
        row.number !== 33 &&
        row.number !== 63 &&
        row.number !== 64 &&
        row.number !== 65 &&
        row.number !== 66
      ) {
        worksheet.mergeCells(`L${String(row.number)}:M${String(row.number)}`);
      }
      const qty0 = row.getCell(1);
      const qty = row.getCell(2);
      const qty1 = row.getCell(10);
      const qty2 = row.getCell(17);

      if (
        row.number !== 63 &&
        row.number !== 64 &&
        row.number !== 65 &&
        row.number !== 66
      ) {
        qty.font = {
          name: 'Calibri',
          size: 12,
          underline: 'none',
          bold: true,
          color: { argb: 'ffffff' },
        };
        qty.alignment = {
          horizontal: 'center',
          vertical: 'middle',
          wrapText: true,
          textRotation: 90,
        };
        qty.fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: { argb: '6FAE45' },
          bgColor: { argb: '6FAE45' },
        };
        qty.border = {
          top: { style: 'medium' },
          left: { style: 'medium' },
          bottom: { style: 'medium' },
          right: { style: 'medium' },
        };
        qty1.font = {
          name: 'Calibri',
          size: 12,
          underline: 'none',
          bold: true,
          color: { argb: 'ffffff' },
        };
        qty1.alignment = {
          horizontal: 'center',
          vertical: 'middle',
          wrapText: true,
          textRotation: 90,
        };
        qty1.fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: { argb: '6FAE45' },
          bgColor: { argb: '6FAE45' },
        };
        qty1.border = {
          top: { style: 'medium' },
          left: { style: 'medium' },
          bottom: { style: 'medium' },
          right: { style: 'medium' },
        };
        qty0.font = {
          name: 'Calibri',
          size: 12,
          underline: 'none',
          bold: true,
          color: { argb: 'ffffff' },
        };
        qty0.alignment = {
          horizontal: 'center',
          vertical: 'middle',
          wrapText: true,
          textRotation: 90,
        };
        qty0.fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: { argb: 'ffffff' },
          bgColor: { argb: 'ffffff' },
        };
        qty0.border = {
          right: { style: 'medium' },
        };
        qty2.border = {
          top: { style: 'medium' },
          left: { style: 'medium' },
          bottom: { style: 'medium' },
          right: { style: 'medium' },
        };
        row.getCell(3).border = {
          top: { style: 'medium' },
          left: { style: 'medium' },
          bottom: { style: 'medium' },
          right: { style: 'medium' },
        };
        row.getCell(4).border = {
          top: { style: 'medium' },
          left: { style: 'medium' },
          bottom: { style: 'medium' },
          right: { style: 'medium' },
        };
        row.getCell(5).border = {
          top: { style: 'medium' },
          left: { style: 'medium' },
          bottom: { style: 'medium' },
          right: { style: 'medium' },
        };
        row.getCell(6).border = {
          top: { style: 'medium' },
          left: { style: 'medium' },
          bottom: { style: 'medium' },
          right: { style: 'medium' },
        };
        if (row.getCell(6).text === 'P') {
          row.getCell(6).font = {
            name: 'Calibri',
            size: 12,
            underline: 'none',
            bold: true,
          };
          row.getCell(6).fill = {
            type: 'pattern',
            pattern: 'solid',
            fgColor: { argb: '92d14f' },
            bgColor: { argb: '92d14f' },
          };
        }
        row.getCell(7).border = {
          top: { style: 'medium' },
          left: { style: 'medium' },
          bottom: { style: 'medium' },
          right: { style: 'medium' },
        };
        if (row.getCell(7).text === 'O') {
          row.getCell(7).font = {
            name: 'Calibri',
            size: 12,
            underline: 'none',
            bold: true,
          };
          row.getCell(7).fill = {
            type: 'pattern',
            pattern: 'solid',
            fgColor: { argb: 'fe0000' },
            bgColor: { argb: 'fe0000' },
          };
        }
        row.getCell(8).border = {
          top: { style: 'medium' },
          left: { style: 'medium' },
          bottom: { style: 'medium' },
          right: { style: 'medium' },
        };
        if (row.getCell(8).text === 'IN') {
          row.getCell(8).font = {
            name: 'Calibri',
            size: 12,
            underline: 'none',
            bold: true,
          };
          row.getCell(8).fill = {
            type: 'pattern',
            pattern: 'solid',
            fgColor: { argb: 'ffff01' },
            bgColor: { argb: 'ffff01' },
          };
        }
        row.getCell(9).border = {
          top: { style: 'medium' },
          left: { style: 'medium' },
          bottom: { style: 'medium' },
          right: { style: 'medium' },
        };
        if (row.getCell(9).text === 'N/A' || row.getCell(9).text === 'NA/T') {
          row.getCell(9).font = {
            name: 'Calibri',
            size: 12,
            underline: 'none',
            bold: true,
          };
          if (row.getCell(9).text === 'N/A') {
            row.getCell(9).fill = {
              type: 'pattern',
              pattern: 'solid',
              fgColor: { argb: 'a5a5a5' },
              bgColor: { argb: 'a5a5a5' },
            };
          } else {
            row.getCell(9).fill = {
              type: 'pattern',
              pattern: 'solid',
              fgColor: { argb: '5a9bd5' },
              bgColor: { argb: '5a9bd5' },
            };
          }
        }
        row.getCell(11).border = {
          top: { style: 'medium' },
          left: { style: 'medium' },
          bottom: { style: 'medium' },
          right: { style: 'medium' },
        };
        row.getCell(12).border = {
          top: { style: 'medium' },
          left: { style: 'medium' },
          bottom: { style: 'medium' },
          right: { style: 'medium' },
        };
        row.getCell(13).border = {
          top: { style: 'medium' },
          left: { style: 'medium' },
          bottom: { style: 'medium' },
          right: { style: 'medium' },
        };
        row.getCell(14).border = {
          top: { style: 'medium' },
          left: { style: 'medium' },
          bottom: { style: 'medium' },
          right: { style: 'medium' },
        };
        if (row.getCell(14).text === 'P') {
          row.getCell(14).font = {
            name: 'Calibri',
            size: 12,
            underline: 'none',
            bold: true,
          };
          row.getCell(14).fill = {
            type: 'pattern',
            pattern: 'solid',
            fgColor: { argb: '92d14f' },
            bgColor: { argb: '92d14f' },
          };
        }
        row.getCell(15).border = {
          top: { style: 'medium' },
          left: { style: 'medium' },
          bottom: { style: 'medium' },
          right: { style: 'medium' },
        };
        if (row.getCell(15).text === 'O') {
          row.getCell(15).font = {
            name: 'Calibri',
            size: 12,
            underline: 'none',
            bold: true,
          };
          row.getCell(15).fill = {
            type: 'pattern',
            pattern: 'solid',
            fgColor: { argb: 'fe0000' },
            bgColor: { argb: 'fe0000' },
          };
        }
        row.getCell(16).border = {
          top: { style: 'medium' },
          left: { style: 'medium' },
          bottom: { style: 'medium' },
          right: { style: 'medium' },
        };
        if (row.getCell(16).text === 'IN') {
          row.getCell(16).font = {
            name: 'Calibri',
            size: 12,
            underline: 'none',
            bold: true,
          };
          row.getCell(16).fill = {
            type: 'pattern',
            pattern: 'solid',
            fgColor: { argb: 'ffff01' },
            bgColor: { argb: 'ffff01' },
          };
        }
        if (row.getCell(17).text === 'N/A' || row.getCell(17).text === 'NA/T') {
          row.getCell(17).font = {
            name: 'Calibri',
            size: 12,
            underline: 'none',
            bold: true,
          };
          if (row.getCell(17).text === 'N/A') {
            row.getCell(17).fill = {
              type: 'pattern',
              pattern: 'solid',
              fgColor: { argb: 'a5a5a5' },
              bgColor: { argb: 'a5a5a5' },
            };
          } else {
            row.getCell(17).fill = {
              type: 'pattern',
              pattern: 'solid',
              fgColor: { argb: '5a9bd5' },
              bgColor: { argb: '5a9bd5' },
            };
          }
        }
      }
      if (row.number === 63) {
        row.getCell(1).border = {
          top: { style: 'thin' },
          left: { style: 'thin' },
          bottom: { style: 'thin' },
          right: { style: 'thin' },
        };
        row.getCell(3).border = {
          top: { style: 'medium' },
          left: { style: 'medium' },
          bottom: { style: 'medium' },
          right: { style: 'medium' },
        };
        row.getCell(4).border = {
          top: { style: 'medium' },
          left: { style: 'medium' },
          bottom: { style: 'medium' },
          right: { style: 'medium' },
        };
        row.getCell(6).border = {
          top: { style: 'medium' },
          left: { style: 'medium' },
          bottom: { style: 'medium' },
          right: { style: 'medium' },
        };
        row.getCell(7).border = {
          top: { style: 'medium' },
          left: { style: 'medium' },
          bottom: { style: 'medium' },
          right: { style: 'medium' },
        };
        row.getCell(8).border = {
          top: { style: 'medium' },
          left: { style: 'medium' },
          bottom: { style: 'medium' },
          right: { style: 'medium' },
        };
        row.getCell(9).border = {
          top: { style: 'medium' },
          left: { style: 'medium' },
          bottom: { style: 'medium' },
          right: { style: 'medium' },
        };
        qty1.font = {
          name: 'Calibri',
          size: 12,
          underline: 'none',
          bold: true,
          color: { argb: 'ffffff' },
        };
        qty1.fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: { argb: 'ffffff' },
          bgColor: { argb: 'ffffff' },
        };
        qty1.border = {
          top: { style: 'medium' },
          left: { style: 'medium' },
          bottom: { style: 'medium' },
          right: { style: 'medium' },
        };
      }
      if (row.number === 64) {
        row.getCell(1).border = {
          top: { style: 'thin' },
          left: { style: 'thin' },
          bottom: { style: 'thin' },
          right: { style: 'thin' },
        };
        row.getCell(3).border = {
          top: { style: 'medium' },
          left: { style: 'medium' },
          bottom: { style: 'medium' },
          right: { style: 'medium' },
        };
        row.getCell(4).border = {
          top: { style: 'medium' },
          left: { style: 'medium' },
          bottom: { style: 'medium' },
          right: { style: 'medium' },
        };
        row.getCell(6).border = {
          top: { style: 'medium' },
          left: { style: 'medium' },
          bottom: { style: 'medium' },
          right: { style: 'medium' },
        };
        row.getCell(7).border = {
          top: { style: 'medium' },
          left: { style: 'medium' },
          bottom: { style: 'medium' },
          right: { style: 'medium' },
        };
        row.getCell(8).border = {
          top: { style: 'medium' },
          left: { style: 'medium' },
          bottom: { style: 'medium' },
          right: { style: 'medium' },
        };
        row.getCell(9).border = {
          top: { style: 'medium' },
          left: { style: 'medium' },
          bottom: { style: 'medium' },
          right: { style: 'medium' },
        };
        qty1.font = {
          name: 'Calibri',
          size: 12,
          underline: 'none',
          bold: false,
          color: { argb: '000000' },
        };
        qty1.border = {
          top: { style: 'medium' },
          left: { style: 'medium' },
          bottom: { style: 'medium' },
          right: { style: 'medium' },
        };
      }
      if (row.number === 65) {
        row.getCell(3).border = {
          top: { style: 'medium' },
          left: { style: 'medium' },
          bottom: { style: 'medium' },
          right: { style: 'medium' },
        };
        row.getCell(4).border = {
          top: { style: 'medium' },
          left: { style: 'medium' },
          bottom: { style: 'medium' },
          right: { style: 'medium' },
        };
        row.getCell(6).border = {
          top: { style: 'medium' },
          left: { style: 'medium' },
          bottom: { style: 'medium' },
          right: { style: 'medium' },
        };
        row.getCell(7).border = {
          top: { style: 'medium' },
          left: { style: 'medium' },
          bottom: { style: 'medium' },
          right: { style: 'medium' },
        };
        row.getCell(8).border = {
          top: { style: 'medium' },
          left: { style: 'medium' },
          bottom: { style: 'medium' },
          right: { style: 'medium' },
        };
        row.getCell(9).border = {
          top: { style: 'medium' },
          left: { style: 'medium' },
          bottom: { style: 'medium' },
          right: { style: 'medium' },
        };
      }
      if (row.number === 66) {
        row.getCell(3).border = {
          top: { style: 'medium' },
          left: { style: 'medium' },
          bottom: { style: 'medium' },
          right: { style: 'medium' },
        };
        row.getCell(4).border = {
          top: { style: 'medium' },
          left: { style: 'medium' },
          bottom: { style: 'medium' },
          right: { style: 'medium' },
        };
        row.getCell(6).border = {
          top: { style: 'medium' },
          left: { style: 'medium' },
          bottom: { style: 'medium' },
          right: { style: 'medium' },
        };
        row.getCell(7).border = {
          top: { style: 'medium' },
          left: { style: 'medium' },
          bottom: { style: 'medium' },
          right: { style: 'medium' },
        };
        row.getCell(8).border = {
          top: { style: 'medium' },
          left: { style: 'medium' },
          bottom: { style: 'medium' },
          right: { style: 'medium' },
        };
        row.getCell(9).border = {
          top: { style: 'medium' },
          left: { style: 'medium' },
          bottom: { style: 'medium' },
          right: { style: 'medium' },
        };
      }
    });

    worksheet.mergeCells('L14:M16');
    worksheet.mergeCells('L28:M29');
    worksheet.mergeCells('L30:M31');
    worksheet.mergeCells('L32:M33');
    worksheet.mergeCells('D43:E44');
    worksheet.mergeCells('D47:E48');
    worksheet.mergeCells('D49:E51');
    worksheet.mergeCells('D59:E60');
    worksheet.mergeCells('B14:B21');
    worksheet.mergeCells('B22:B26');
    worksheet.mergeCells('B27:B29');
    worksheet.mergeCells('B30:B48');
    worksheet.mergeCells('B49:B60');
    worksheet.mergeCells('B61:B66');
    worksheet.mergeCells('J14:J27');
    worksheet.mergeCells('J28:J33');
    worksheet.mergeCells('J34:J42');
    worksheet.mergeCells('J43:J50');
    worksheet.mergeCells('J51:J61');
    worksheet.mergeCells('C43:C44');
    worksheet.mergeCells('C47:C48');
    worksheet.mergeCells('C49:C51');
    worksheet.mergeCells('C59:C60');
    worksheet.mergeCells('K14:K16');
    worksheet.mergeCells('K28:K29');
    worksheet.mergeCells('K30:K31');
    worksheet.mergeCells('K32:K33');
    worksheet.mergeCells('J63:Q63');
    worksheet.mergeCells('J64:Q66');

    ['B67'].map((key) => {
      worksheet.getCell(key).border = {
        top: { style: 'medium', color: { argb: '000000' } },
      };
    });
    worksheet.mergeCells('B67:Q67');

    const nomeclatura = worksheet.addRow([
      '',
      'NOMENCLATURA',
      '',
      '',
      '',
      'TOTAL DE DOCUMENTOS',
      '',
      '',
      row.siRealizado,
      '',
      '',
      '',
      'Responsable de la información:',
      '',
      '',
    ]);
    nomeclatura.getCell(2).font = {
      name: 'Calibri',
      size: 10,
      underline: 'none',
      bold: true,
      color: { argb: 'ffffff' },
    };
    nomeclatura.getCell(6).font = {
      name: 'Calibri',
      size: 10,
      underline: 'none',
      bold: true,
      color: { argb: 'ffffff' },
    };
    nomeclatura.getCell(9).font = {
      name: 'Calibri',
      size: 12,
      underline: 'none',
      bold: false,
    };
    nomeclatura.getCell(13).font = {
      name: 'Calibri',
      size: 12,
      underline: 'none',
      bold: false,
    };
    nomeclatura.getCell(15).font = {
      name: 'Calibri',
      size: 12,
      underline: 'none',
      bold: false,
    };
    nomeclatura.alignment = {
      horizontal: 'center',
      vertical: 'middle',
      wrapText: true,
    };

    ['B68'].map((key) => {
      worksheet.getCell(key).fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: '6FAE45' },
      };
      worksheet.getCell(key).border = {
        top: { style: 'medium', color: { argb: '000000' } },
        left: { style: 'medium', color: { argb: '000000' } },
        bottom: { style: 'medium', color: { argb: '000000' } },
        right: { style: 'medium', color: { argb: '000000' } },
      };
    });

    ['F68'].map((key) => {
      worksheet.getCell(key).fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: '6FAE45' },
      };
      worksheet.getCell(key).border = {
        top: { style: 'medium', color: { argb: '000000' } },
        left: { style: 'medium', color: { argb: '000000' } },
        bottom: { style: 'medium', color: { argb: '000000' } },
        right: { style: 'medium', color: { argb: '000000' } },
      };
    });

    ['I68'].map((key) => {
      worksheet.getCell(key).border = {
        top: { style: 'medium', color: { argb: '000000' } },
        left: { style: 'medium', color: { argb: '000000' } },
        bottom: { style: 'medium', color: { argb: '000000' } },
        right: { style: 'medium', color: { argb: '000000' } },
      };
    });

    ['M68'].map((key) => {
      worksheet.getCell(key).border = {
        top: { style: 'medium', color: { argb: '000000' } },
        left: { style: 'medium', color: { argb: '000000' } },
        bottom: { style: 'medium', color: { argb: '000000' } },
        right: { style: 'medium', color: { argb: '000000' } },
      };
    });

    ['O68'].map((key) => {
      worksheet.getCell(key).border = {
        top: { style: 'medium', color: { argb: '000000' } },
        left: { style: 'medium', color: { argb: '000000' } },
        bottom: { style: 'medium', color: { argb: '000000' } },
        right: { style: 'medium', color: { argb: '000000' } },
      };
    });

    const documentoI = worksheet.addRow([
      '',
      'P',
      'DOCUMENTO INTEGRADO',
      '',
      '',
      'TOTAL DE DOCUMENTOS INTEGRADOS',
      '',
      '',
      row.totalIntegrado,
      '',
      '',
      '',
      '',
      '',
      '',
    ]);
    documentoI.getCell(2).font = {
      name: 'Calibri',
      size: 10,
      underline: 'none',
      bold: false,
    };
    documentoI.getCell(3).font = {
      name: 'Calibri',
      size: 10,
      underline: 'none',
      bold: false,
    };
    documentoI.getCell(6).font = {
      name: 'Calibri',
      size: 10,
      underline: 'none',
      bold: true,
      color: { argb: 'ffffff' },
    };
    documentoI.getCell(9).font = {
      name: 'Calibri',
      size: 12,
      underline: 'none',
      bold: false,
    };
    documentoI.getCell(13).font = {
      name: 'Calibri',
      size: 12,
      underline: 'none',
      bold: false,
    };
    documentoI.getCell(15).font = {
      name: 'Calibri',
      size: 12,
      underline: 'none',
      bold: false,
    };
    documentoI.alignment = {
      horizontal: 'center',
      vertical: 'middle',
      wrapText: true,
    };

    ['B69'].map((key) => {
      worksheet.getCell(key).fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: '92d14f' },
      };
      worksheet.getCell(key).border = {
        top: { style: 'medium', color: { argb: '000000' } },
        left: { style: 'medium', color: { argb: '000000' } },
        bottom: { style: 'medium', color: { argb: '000000' } },
        right: { style: 'medium', color: { argb: '000000' } },
      };
    });

    ['C69'].map((key) => {
      worksheet.getCell(key).fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: 'ffffff' },
      };
      worksheet.getCell(key).border = {
        top: { style: 'medium', color: { argb: '000000' } },
        left: { style: 'medium', color: { argb: '000000' } },
        bottom: { style: 'medium', color: { argb: '000000' } },
        right: { style: 'medium', color: { argb: '000000' } },
      };
    });

    ['F69'].map((key) => {
      worksheet.getCell(key).fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: '6FAE45' },
      };
      worksheet.getCell(key).border = {
        top: { style: 'medium', color: { argb: '000000' } },
        left: { style: 'medium', color: { argb: '000000' } },
        bottom: { style: 'medium', color: { argb: '000000' } },
        right: { style: 'medium', color: { argb: '000000' } },
      };
    });

    ['I69'].map((key) => {
      worksheet.getCell(key).border = {
        top: { style: 'medium', color: { argb: '000000' } },
        left: { style: 'medium', color: { argb: '000000' } },
        bottom: { style: 'medium', color: { argb: '000000' } },
        right: { style: 'medium', color: { argb: '000000' } },
      };
    });

    const documentoNoI = worksheet.addRow([
      '',
      'O',
      'DOCUMENTO NO INTEGRADO',
      '',
      '',
      'TOTAL DE DOCUMENTOS NO INTEGRADOS',
      '',
      '',
      row.totalNoIntegrado,
      '',
      '',
      '',
      'Fecha compromiso de entrega:',
      '',
      '',
    ]);
    documentoNoI.getCell(2).font = {
      name: 'Calibri',
      size: 10,
      underline: 'none',
      bold: false,
    };
    documentoNoI.getCell(3).font = {
      name: 'Calibri',
      size: 10,
      underline: 'none',
      bold: false,
    };
    documentoNoI.getCell(6).font = {
      name: 'Calibri',
      size: 10,
      underline: 'none',
      bold: true,
      color: { argb: 'ffffff' },
    };
    documentoNoI.getCell(9).font = {
      name: 'Calibri',
      size: 12,
      underline: 'none',
      bold: false,
    };
    documentoNoI.getCell(13).font = {
      name: 'Calibri',
      size: 12,
      underline: 'none',
      bold: false,
    };
    documentoNoI.getCell(15).font = {
      name: 'Calibri',
      size: 12,
      underline: 'none',
      bold: false,
    };
    documentoNoI.alignment = {
      horizontal: 'center',
      vertical: 'middle',
      wrapText: true,
    };

    ['B70'].map((key) => {
      worksheet.getCell(key).fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: 'fe0000' },
      };
      worksheet.getCell(key).border = {
        top: { style: 'medium', color: { argb: '000000' } },
        left: { style: 'medium', color: { argb: '000000' } },
        bottom: { style: 'medium', color: { argb: '000000' } },
        right: { style: 'medium', color: { argb: '000000' } },
      };
    });

    ['C70'].map((key) => {
      worksheet.getCell(key).fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: 'ffffff' },
      };
      worksheet.getCell(key).border = {
        top: { style: 'medium', color: { argb: '000000' } },
        left: { style: 'medium', color: { argb: '000000' } },
        bottom: { style: 'medium', color: { argb: '000000' } },
        right: { style: 'medium', color: { argb: '000000' } },
      };
    });

    ['F70'].map((key) => {
      worksheet.getCell(key).fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: '6FAE45' },
      };
      worksheet.getCell(key).border = {
        top: { style: 'medium', color: { argb: '000000' } },
        left: { style: 'medium', color: { argb: '000000' } },
        bottom: { style: 'medium', color: { argb: '000000' } },
        right: { style: 'medium', color: { argb: '000000' } },
      };
    });

    ['I70'].map((key) => {
      worksheet.getCell(key).border = {
        top: { style: 'medium', color: { argb: '000000' } },
        left: { style: 'medium', color: { argb: '000000' } },
        bottom: { style: 'medium', color: { argb: '000000' } },
        right: { style: 'medium', color: { argb: '000000' } },
      };
    });

    ['M70'].map((key) => {
      worksheet.getCell(key).border = {
        top: { style: 'medium', color: { argb: '000000' } },
        left: { style: 'medium', color: { argb: '000000' } },
        bottom: { style: 'medium', color: { argb: '000000' } },
        right: { style: 'medium', color: { argb: '000000' } },
      };
    });

    ['O70'].map((key) => {
      worksheet.getCell(key).border = {
        top: { style: 'medium', color: { argb: '000000' } },
        left: { style: 'medium', color: { argb: '000000' } },
        bottom: { style: 'medium', color: { argb: '000000' } },
        right: { style: 'medium', color: { argb: '000000' } },
      };
    });

    const documentoIN = worksheet.addRow([
      '',
      'IN',
      'DOCUMENTO CON INCUMPLIMIENTO',
      '',
      '',
      'TOTAL DE DOCUMENTOS CON INCUMPLIMIENTO',
      '',
      '',
      row.totalIncumplimiento,
      '',
      '',
      '',
      '',
      '',
      '',
    ]);
    documentoIN.getCell(2).font = {
      name: 'Calibri',
      size: 10,
      underline: 'none',
      bold: false,
    };
    documentoIN.getCell(3).font = {
      name: 'Calibri',
      size: 10,
      underline: 'none',
      bold: false,
    };
    documentoIN.getCell(6).font = {
      name: 'Calibri',
      size: 10,
      underline: 'none',
      bold: true,
      color: { argb: 'ffffff' },
    };
    documentoIN.getCell(9).font = {
      name: 'Calibri',
      size: 12,
      underline: 'none',
      bold: false,
    };
    documentoIN.getCell(13).font = {
      name: 'Calibri',
      size: 12,
      underline: 'none',
      bold: false,
    };
    documentoIN.getCell(15).font = {
      name: 'Calibri',
      size: 12,
      underline: 'none',
      bold: false,
    };
    documentoIN.alignment = {
      horizontal: 'center',
      vertical: 'middle',
      wrapText: true,
    };

    ['B71'].map((key) => {
      worksheet.getCell(key).fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: 'ffff01' },
      };
      worksheet.getCell(key).border = {
        top: { style: 'medium', color: { argb: '000000' } },
        left: { style: 'medium', color: { argb: '000000' } },
        bottom: { style: 'medium', color: { argb: '000000' } },
        right: { style: 'medium', color: { argb: '000000' } },
      };
    });

    ['C71'].map((key) => {
      worksheet.getCell(key).fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: 'ffffff' },
      };
      worksheet.getCell(key).border = {
        top: { style: 'medium', color: { argb: '000000' } },
        left: { style: 'medium', color: { argb: '000000' } },
        bottom: { style: 'medium', color: { argb: '000000' } },
        right: { style: 'medium', color: { argb: '000000' } },
      };
    });

    ['F71'].map((key) => {
      worksheet.getCell(key).fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: '6FAE45' },
      };
      worksheet.getCell(key).border = {
        top: { style: 'medium', color: { argb: '000000' } },
        left: { style: 'medium', color: { argb: '000000' } },
        bottom: { style: 'medium', color: { argb: '000000' } },
        right: { style: 'medium', color: { argb: '000000' } },
      };
    });

    ['I71'].map((key) => {
      worksheet.getCell(key).border = {
        top: { style: 'medium', color: { argb: '000000' } },
        left: { style: 'medium', color: { argb: '000000' } },
        bottom: { style: 'medium', color: { argb: '000000' } },
        right: { style: 'medium', color: { argb: '000000' } },
      };
    });

    const documentoNA = worksheet.addRow([
      '',
      'N/A',
      'DOCUMENTO NO APLICABLE',
      '',
      '',
      'TOTAL DE DOCUMENTOS  NO APLICABLES',
      '',
      '',
      row.totalNA,
      '',
      '',
      '',
      'Revisó:',
      '',
      row.responsable,
    ]);
    documentoNA.getCell(2).font = {
      name: 'Calibri',
      size: 10,
      underline: 'none',
      bold: false,
    };
    documentoNA.getCell(3).font = {
      name: 'Calibri',
      size: 10,
      underline: 'none',
      bold: false,
    };
    documentoNA.getCell(6).font = {
      name: 'Calibri',
      size: 10,
      underline: 'none',
      bold: true,
      color: { argb: 'ffffff' },
    };
    documentoNA.getCell(9).font = {
      name: 'Calibri',
      size: 12,
      underline: 'none',
      bold: false,
    };
    documentoNA.getCell(13).font = {
      name: 'Calibri',
      size: 12,
      underline: 'none',
      bold: false,
    };
    documentoNA.getCell(15).font = {
      name: 'Calibri',
      size: 12,
      underline: 'none',
      bold: false,
    };
    documentoNA.alignment = {
      horizontal: 'center',
      vertical: 'middle',
      wrapText: true,
    };

    ['B72'].map((key) => {
      worksheet.getCell(key).fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: 'a5a5a5' },
      };
      worksheet.getCell(key).border = {
        top: { style: 'medium', color: { argb: '000000' } },
        left: { style: 'medium', color: { argb: '000000' } },
        bottom: { style: 'medium', color: { argb: '000000' } },
        right: { style: 'medium', color: { argb: '000000' } },
      };
    });

    ['C72'].map((key) => {
      worksheet.getCell(key).fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: 'ffffff' },
      };
      worksheet.getCell(key).border = {
        top: { style: 'medium', color: { argb: '000000' } },
        left: { style: 'medium', color: { argb: '000000' } },
        bottom: { style: 'medium', color: { argb: '000000' } },
        right: { style: 'medium', color: { argb: '000000' } },
      };
    });

    ['F72'].map((key) => {
      worksheet.getCell(key).fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: '6FAE45' },
      };
      worksheet.getCell(key).border = {
        top: { style: 'medium', color: { argb: '000000' } },
        left: { style: 'medium', color: { argb: '000000' } },
        bottom: { style: 'medium', color: { argb: '000000' } },
        right: { style: 'medium', color: { argb: '000000' } },
      };
    });

    ['I72'].map((key) => {
      worksheet.getCell(key).border = {
        top: { style: 'medium', color: { argb: '000000' } },
        left: { style: 'medium', color: { argb: '000000' } },
        bottom: { style: 'medium', color: { argb: '000000' } },
        right: { style: 'medium', color: { argb: '000000' } },
      };
    });

    ['M72'].map((key) => {
      worksheet.getCell(key).border = {
        top: { style: 'medium', color: { argb: '000000' } },
        left: { style: 'medium', color: { argb: '000000' } },
        bottom: { style: 'medium', color: { argb: '000000' } },
        right: { style: 'medium', color: { argb: '000000' } },
      };
    });

    ['O72'].map((key) => {
      worksheet.getCell(key).border = {
        top: { style: 'medium', color: { argb: '000000' } },
        left: { style: 'medium', color: { argb: '000000' } },
        bottom: { style: 'medium', color: { argb: '000000' } },
        right: { style: 'medium', color: { argb: '000000' } },
      };
    });

    const documentoNAT = worksheet.addRow([
      '',
      'NA/T',
      'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN',
      '',
      '',
      'TOTAL DE DOCUMENTOS  NO APLICABLES POR ESTAR EN TIEMPO DE INTEGRACIÓN',
      '',
      '',
      row.totalNAT,
      '',
      '',
      '',
      '',
      '',
      '',
    ]);
    documentoNAT.getCell(2).font = {
      name: 'Calibri',
      size: 10,
      underline: 'none',
      bold: false,
    };
    documentoNAT.getCell(3).font = {
      name: 'Calibri',
      size: 10,
      underline: 'none',
      bold: false,
    };
    documentoNAT.getCell(6).font = {
      name: 'Calibri',
      size: 10,
      underline: 'none',
      bold: true,
      color: { argb: 'ffffff' },
    };
    documentoNAT.getCell(9).font = {
      name: 'Calibri',
      size: 12,
      underline: 'none',
      bold: false,
    };
    documentoNAT.getCell(13).font = {
      name: 'Calibri',
      size: 12,
      underline: 'none',
      bold: false,
    };
    documentoNAT.getCell(15).font = {
      name: 'Calibri',
      size: 12,
      underline: 'none',
      bold: false,
    };
    documentoNAT.alignment = {
      horizontal: 'center',
      vertical: 'middle',
      wrapText: true,
    };

    ['B73'].map((key) => {
      worksheet.getCell(key).fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: '5a9bd5' },
      };
      worksheet.getCell(key).border = {
        top: { style: 'medium', color: { argb: '000000' } },
        left: { style: 'medium', color: { argb: '000000' } },
        bottom: { style: 'medium', color: { argb: '000000' } },
        right: { style: 'medium', color: { argb: '000000' } },
      };
    });

    ['C73'].map((key) => {
      worksheet.getCell(key).fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: 'ffffff' },
      };
      worksheet.getCell(key).border = {
        top: { style: 'medium', color: { argb: '000000' } },
        left: { style: 'medium', color: { argb: '000000' } },
        bottom: { style: 'medium', color: { argb: '000000' } },
        right: { style: 'medium', color: { argb: '000000' } },
      };
    });

    ['F73'].map((key) => {
      worksheet.getCell(key).fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: '6FAE45' },
      };
      worksheet.getCell(key).border = {
        top: { style: 'medium', color: { argb: '000000' } },
        left: { style: 'medium', color: { argb: '000000' } },
        bottom: { style: 'medium', color: { argb: '000000' } },
        right: { style: 'medium', color: { argb: '000000' } },
      };
    });

    ['I73'].map((key) => {
      worksheet.getCell(key).border = {
        top: { style: 'medium', color: { argb: '000000' } },
        left: { style: 'medium', color: { argb: '000000' } },
        bottom: { style: 'medium', color: { argb: '000000' } },
        right: { style: 'medium', color: { argb: '000000' } },
      };
    });

    const porcentaje = worksheet.addRow([
      '',
      '',
      '',
      '',
      '',
      'PORCENTAJE DE INTEGRACIÓN',
      '',
      '',
      `${row.porcentajeTotal.toFixed(2)}%`,
      '',
      '',
      '',
      '',
      '',
      '',
    ]);
    porcentaje.getCell(6).font = {
      name: 'Calibri',
      size: 10,
      underline: 'none',
      bold: true,
      color: { argb: 'ffffff' },
    };
    porcentaje.getCell(9).font = {
      name: 'Calibri',
      size: 12,
      underline: 'none',
      bold: false,
    };
    porcentaje.alignment = {
      horizontal: 'center',
      vertical: 'middle',
      wrapText: true,
    };

    ['F74'].map((key) => {
      worksheet.getCell(key).fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: '6FAE45' },
      };
      worksheet.getCell(key).border = {
        top: { style: 'medium', color: { argb: '000000' } },
        left: { style: 'medium', color: { argb: '000000' } },
        bottom: { style: 'medium', color: { argb: '000000' } },
        right: { style: 'medium', color: { argb: '000000' } },
      };
    });

    ['I74'].map((key) => {
      worksheet.getCell(key).border = {
        top: { style: 'medium', color: { argb: '000000' } },
        left: { style: 'medium', color: { argb: '000000' } },
        bottom: { style: 'medium', color: { argb: '000000' } },
        right: { style: 'medium', color: { argb: '000000' } },
      };
    });

    worksheet.mergeCells('B68:D68');
    worksheet.mergeCells('F68:H68');
    worksheet.mergeCells('I68:K68');
    worksheet.mergeCells('M68:N68');
    worksheet.mergeCells('O68:P68');

    worksheet.mergeCells('C69:D69');
    worksheet.mergeCells('F69:H69');
    worksheet.mergeCells('I69:K69');

    worksheet.mergeCells('C70:D70');
    worksheet.mergeCells('F70:H70');
    worksheet.mergeCells('I70:K70');
    worksheet.mergeCells('M70:N70');
    worksheet.mergeCells('O70:P70');

    worksheet.mergeCells('C71:D71');
    worksheet.mergeCells('F71:H71');
    worksheet.mergeCells('I71:K71');

    worksheet.mergeCells('C72:D72');
    worksheet.mergeCells('F72:H72');
    worksheet.mergeCells('I72:K72');
    worksheet.mergeCells('M72:N72');
    worksheet.mergeCells('O72:P72');

    worksheet.mergeCells('C73:D73');
    worksheet.mergeCells('F73:H73');
    worksheet.mergeCells('I73:K73');

    worksheet.mergeCells('F74:H74');
    worksheet.mergeCells('I74:K74');

    worksheet.getRow(4).height = 24;
    worksheet.getRow(5).height = 24;
    worksheet.getRow(6).height = 24;
    worksheet.getRow(7).height = 22.5;
    worksheet.getRow(8).height = 22.5;
    worksheet.getRow(8).height = 22.5;
    worksheet.getRow(9).height = 21;
    worksheet.getRow(10).height = 22.5;
    worksheet.getRow(11).height = 22.5;
    worksheet.getRow(12).height = 54;
    worksheet.getRow(13).height = 54;
    worksheet.getRow(14).height = 99;
    worksheet.getRow(15).height = 76.5;
    worksheet.getRow(16).height = 56.25;
    worksheet.getRow(17).height = 95.25;
    worksheet.getRow(18).height = 96;
    worksheet.getRow(19).height = 51.75;
    worksheet.getRow(20).height = 87;
    worksheet.getRow(21).height = 104.25;
    worksheet.getRow(22).height = 75.75;
    worksheet.getRow(23).height = 83.25;
    worksheet.getRow(24).height = 79.5;
    worksheet.getRow(25).height = 55.5;
    worksheet.getRow(26).height = 103.5;
    worksheet.getRow(27).height = 99;
    worksheet.getRow(28).height = 48.75;
    worksheet.getRow(29).height = 129.75;
    worksheet.getRow(30).height = 56.25;
    worksheet.getRow(31).height = 100.5;
    worksheet.getRow(32).height = 94.5;
    worksheet.getRow(33).height = 120.75;
    worksheet.getRow(34).height = 120.75;
    worksheet.getRow(35).height = 177.75;
    worksheet.getRow(36).height = 66;
    worksheet.getRow(37).height = 95.25;
    worksheet.getRow(38).height = 122.25;
    worksheet.getRow(39).height = 70.5;
    worksheet.getRow(40).height = 101.25;
    worksheet.getRow(41).height = 120.75;
    worksheet.getRow(42).height = 96.75;
    worksheet.getRow(43).height = 65.25;
    worksheet.getRow(44).height = 65.25;
    worksheet.getRow(45).height = 71.25;
    worksheet.getRow(46).height = 61.5;
    worksheet.getRow(47).height = 75;
    worksheet.getRow(48).height = 68.25;
    worksheet.getRow(49).height = 132.25;
    worksheet.getRow(50).height = 132.25;
    worksheet.getRow(51).height = 132.25;
    worksheet.getRow(52).height = 98.25;
    worksheet.getRow(53).height = 98.25;
    worksheet.getRow(54).height = 48.75;
    worksheet.getRow(55).height = 93;
    worksheet.getRow(56).height = 123.75;
    worksheet.getRow(57).height = 101.25;
    worksheet.getRow(58).height = 99;
    worksheet.getRow(59).height = 99.75;
    worksheet.getRow(60).height = 84;
    worksheet.getRow(61).height = 84;
    worksheet.getRow(62).height = 84;
    worksheet.getRow(63).height = 63.75;
    worksheet.getRow(64).height = 53.25;
    worksheet.getRow(65).height = 33;
    worksheet.getRow(66).height = 60.75;
    worksheet.getRow(67).height = 15.75;
    worksheet.getRow(68).height = 48;
    worksheet.getRow(69).height = 45.75;
    worksheet.getRow(70).height = 48.75;
    worksheet.getRow(71).height = 47.25;
    worksheet.getRow(72).height = 53.25;
    worksheet.getRow(73).height = 63.75;
    worksheet.getRow(74).height = 51;

    worksheet.getColumn(1).width = 10;
    worksheet.getColumn(2).width = 11.29;
    worksheet.getColumn(3).width = 7.29;
    worksheet.getColumn(4).width = 11;
    worksheet.getColumn(5).width = 38.86;
    worksheet.getColumn(6).width = 4.43;
    worksheet.getColumn(7).width = 5;
    worksheet.getColumn(8).width = 15.29;
    worksheet.getColumn(9).width = 5;
    worksheet.getColumn(10).width = 11;
    worksheet.getColumn(11).width = 4.71;
    worksheet.getColumn(12).width = 22.71;
    worksheet.getColumn(13).width = 22.71;
    worksheet.getColumn(14).width = 4.43;
    worksheet.getColumn(15).width = 5;
    worksheet.getColumn(16).width = 15.86;
    worksheet.getColumn(17).width = 5.29;
    worksheet.getColumn(18).width = 0.5;

    // Generate Excel File with given name
    workbook.xlsx.writeBuffer().then((data: any) => {
      const blob = new Blob([data], {
        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      });
      fs.saveAs(blob, 'Ficha de Información Documental Obras.xlsx');
    });
  }

  async generateExcelA1(row: any, titulo: string) {
    const workbook = new Workbook();

    for (let i = 0; i < row.length; i++) {
      const worksheet = workbook.addWorksheet(
        row[i].noContrato + '-' + (i + 1)
      );
      let puntosAdquisiciones: any = await this.agruparDatosA(row[i].puntos);
      puntosAdquisiciones[37] = {
        documentos: [],
        fechaRealizacion: {
          seconds: 1723063394,
          nanoseconds: 502000000,
        },
        semaforo: '',
        comentario: '',
        bullet: '',
        number: 0,
        nombres: [],
        type: '',
        puntos: [],
        estatus: 'E',
        grado: '',
        id: '',
        bullet1: '',
      };
      puntosAdquisiciones[38] = {
        documentos: [],
        fechaRealizacion: {
          seconds: 1723063394,
          nanoseconds: 502000000,
        },
        semaforo: '',
        comentario: '',
        bullet: '',
        number: 0,
        nombres: [],
        type: '',
        puntos: [],
        estatus: 'E',
        grado: '',
        id: '',
        bullet1: '',
      };
      puntosAdquisiciones[39] = {
        documentos: [],
        fechaRealizacion: {
          seconds: 1723063394,
          nanoseconds: 502000000,
        },
        semaforo: '',
        comentario: '',
        bullet: '',
        number: 0,
        nombres: [],
        type: '',
        puntos: [],
        estatus: 'E',
        grado: '',
        id: '',
        bullet1: '',
      };
      puntosAdquisiciones[40] = {
        documentos: [],
        fechaRealizacion: {
          seconds: 1723063394,
          nanoseconds: 502000000,
        },
        semaforo: '',
        comentario: '',
        bullet: '',
        number: 0,
        nombres: [],
        type: '',
        puntos: [],
        estatus: 'E',
        grado: '',
        id: '',
        bullet1: '',
      };
      puntosAdquisiciones[41] = {
        documentos: [],
        fechaRealizacion: {
          seconds: 1723063394,
          nanoseconds: 502000000,
        },
        semaforo: '',
        comentario: '',
        bullet: '',
        number: 0,
        nombres: [],
        type: '',
        puntos: [],
        estatus: 'E',
        grado: '',
        id: '',
        bullet1: '',
      };
      puntosAdquisiciones[42] = {
        documentos: [],
        fechaRealizacion: {
          seconds: 1723063394,
          nanoseconds: 502000000,
        },
        semaforo: '',
        comentario: '',
        bullet: '',
        number: 0,
        nombres: [],
        type: '',
        puntos: [],
        estatus: 'E',
        grado: '',
        id: '',
        bullet1: '',
      };
      puntosAdquisiciones[43] = {
        documentos: [],
        fechaRealizacion: {
          seconds: 1723063394,
          nanoseconds: 502000000,
        },
        semaforo: '',
        comentario: '',
        bullet: '',
        number: 0,
        nombres: [],
        type: '',
        puntos: [],
        estatus: 'E',
        grado: '',
        id: '',
        bullet1: '',
      };
      puntosAdquisiciones[44] = {
        documentos: [],
        fechaRealizacion: {
          seconds: 1723063394,
          nanoseconds: 502000000,
        },
        semaforo: '',
        comentario: '',
        bullet: '',
        number: 0,
        nombres: [],
        type: '',
        puntos: [],
        estatus: 'E',
        grado: '',
        id: '',
        bullet1: '',
      };
      puntosAdquisiciones[45] = {
        documentos: [],
        fechaRealizacion: {
          seconds: 1723063394,
          nanoseconds: 502000000,
        },
        semaforo: '',
        comentario: '',
        bullet: '',
        number: 0,
        nombres: [],
        type: '',
        puntos: [],
        estatus: 'E',
        grado: '',
        id: '',
        bullet1: '',
      };
      puntosAdquisiciones[46] = {
        documentos: [],
        fechaRealizacion: {
          seconds: 1723063394,
          nanoseconds: 502000000,
        },
        semaforo: '',
        comentario: '',
        bullet: '',
        number: 0,
        nombres: [],
        type: '',
        puntos: [],
        estatus: 'E',
        grado: '',
        id: '',
        bullet1: '',
      };
      puntosAdquisiciones[47] = {
        documentos: [],
        fechaRealizacion: {
          seconds: 1723063394,
          nanoseconds: 502000000,
        },
        semaforo: '',
        comentario: '',
        bullet: '',
        number: 0,
        nombres: [],
        type: '',
        puntos: [],
        estatus: 'E',
        grado: '',
        id: '',
        bullet1: '',
      };

      const data = [
        [
          '',
          puntosAdquisiciones[0].type,
          1,
          puntosAdquisiciones[0].bullet1,
          '',
          puntosAdquisiciones[0].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
          puntosAdquisiciones[0].estatus === 'DOCUMENTO NO INTEGRADO'
            ? 'O'
            : '',
          puntosAdquisiciones[0].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
            ? 'IN'
            : '',
          puntosAdquisiciones[0].estatus === 'DOCUMENTO NO APLICABLE'
            ? 'N/A'
            : puntosAdquisiciones[0].estatus ===
              'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
            ? 'NA/T'
            : '',
          puntosAdquisiciones[25].type,
          26,
          puntosAdquisiciones[25].bullet1,
          '',
          puntosAdquisiciones[25].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
          puntosAdquisiciones[25].estatus === 'DOCUMENTO NO INTEGRADO'
            ? 'O'
            : '',
          puntosAdquisiciones[25].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
            ? 'IN'
            : '',
          puntosAdquisiciones[25].estatus === 'DOCUMENTO NO APLICABLE'
            ? 'N/A'
            : puntosAdquisiciones[25].estatus ===
              'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
            ? 'NA/T'
            : '',
        ],
        [
          '',
          puntosAdquisiciones[1].type,
          2,
          puntosAdquisiciones[1].bullet1,
          '',
          puntosAdquisiciones[1].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
          puntosAdquisiciones[1].estatus === 'DOCUMENTO NO INTEGRADO'
            ? 'O'
            : '',
          puntosAdquisiciones[1].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
            ? 'IN'
            : '',
          puntosAdquisiciones[1].estatus === 'DOCUMENTO NO APLICABLE'
            ? 'N/A'
            : puntosAdquisiciones[1].estatus ===
              'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
            ? 'NA/T'
            : '',
          puntosAdquisiciones[26].type,
          27,
          puntosAdquisiciones[26].bullet1,
          '',
          puntosAdquisiciones[26].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
          puntosAdquisiciones[26].estatus === 'DOCUMENTO NO INTEGRADO'
            ? 'O'
            : '',
          puntosAdquisiciones[26].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
            ? 'IN'
            : '',
          puntosAdquisiciones[26].estatus === 'DOCUMENTO NO APLICABLE'
            ? 'N/A'
            : puntosAdquisiciones[26].estatus ===
              'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
            ? 'NA/T'
            : '',
        ],
        [
          '',
          puntosAdquisiciones[2].type,
          3,
          puntosAdquisiciones[2].bullet1,
          '',
          puntosAdquisiciones[2].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
          puntosAdquisiciones[2].estatus === 'DOCUMENTO NO INTEGRADO'
            ? 'O'
            : '',
          puntosAdquisiciones[2].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
            ? 'IN'
            : '',
          puntosAdquisiciones[2].estatus === 'DOCUMENTO NO APLICABLE'
            ? 'N/A'
            : puntosAdquisiciones[2].estatus ===
              'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
            ? 'NA/T'
            : '',
          puntosAdquisiciones[27].type,
          28,
          puntosAdquisiciones[27].bullet1,
          '',
          puntosAdquisiciones[27].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
          puntosAdquisiciones[27].estatus === 'DOCUMENTO NO INTEGRADO'
            ? 'O'
            : '',
          puntosAdquisiciones[27].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
            ? 'IN'
            : '',
          puntosAdquisiciones[27].estatus === 'DOCUMENTO NO APLICABLE'
            ? 'N/A'
            : puntosAdquisiciones[27].estatus ===
              'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
            ? 'NA/T'
            : '',
        ],
        [
          '',
          puntosAdquisiciones[3].type,
          4,
          puntosAdquisiciones[3].bullet1,
          '',
          puntosAdquisiciones[3].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
          puntosAdquisiciones[3].estatus === 'DOCUMENTO NO INTEGRADO'
            ? 'O'
            : '',
          puntosAdquisiciones[3].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
            ? 'IN'
            : '',
          puntosAdquisiciones[3].estatus === 'DOCUMENTO NO APLICABLE'
            ? 'N/A'
            : puntosAdquisiciones[3].estatus ===
              'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
            ? 'NA/T'
            : '',
          puntosAdquisiciones[28].type,
          29,
          puntosAdquisiciones[28].bullet1,
          '',
          puntosAdquisiciones[28].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
          puntosAdquisiciones[28].estatus === 'DOCUMENTO NO INTEGRADO'
            ? 'O'
            : '',
          puntosAdquisiciones[28].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
            ? 'IN'
            : '',
          puntosAdquisiciones[28].estatus === 'DOCUMENTO NO APLICABLE'
            ? 'N/A'
            : puntosAdquisiciones[28].estatus ===
              'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
            ? 'NA/T'
            : '',
        ],
        [
          '',
          puntosAdquisiciones[4].type,
          5,
          puntosAdquisiciones[4].bullet1,
          '',
          puntosAdquisiciones[4].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
          puntosAdquisiciones[4].estatus === 'DOCUMENTO NO INTEGRADO'
            ? 'O'
            : '',
          puntosAdquisiciones[4].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
            ? 'IN'
            : '',
          puntosAdquisiciones[4].estatus === 'DOCUMENTO NO APLICABLE'
            ? 'N/A'
            : puntosAdquisiciones[4].estatus ===
              'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
            ? 'NA/T'
            : '',
          puntosAdquisiciones[29].type,
          30,
          puntosAdquisiciones[29].bullet1,
          '',
          puntosAdquisiciones[29].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
          puntosAdquisiciones[29].estatus === 'DOCUMENTO NO INTEGRADO'
            ? 'O'
            : '',
          puntosAdquisiciones[29].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
            ? 'IN'
            : '',
          puntosAdquisiciones[29].estatus === 'DOCUMENTO NO APLICABLE'
            ? 'N/A'
            : puntosAdquisiciones[29].estatus ===
              'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
            ? 'NA/T'
            : '',
        ],
        [
          '',
          puntosAdquisiciones[5].type,
          6,
          puntosAdquisiciones[5].bullet1,
          '',
          puntosAdquisiciones[5].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
          puntosAdquisiciones[5].estatus === 'DOCUMENTO NO INTEGRADO'
            ? 'O'
            : '',
          puntosAdquisiciones[5].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
            ? 'IN'
            : '',
          puntosAdquisiciones[5].estatus === 'DOCUMENTO NO APLICABLE'
            ? 'N/A'
            : puntosAdquisiciones[5].estatus ===
              'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
            ? 'NA/T'
            : '',
          puntosAdquisiciones[30].type,
          31,
          puntosAdquisiciones[30].bullet1,
          '',
          puntosAdquisiciones[30].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
          puntosAdquisiciones[30].estatus === 'DOCUMENTO NO INTEGRADO'
            ? 'O'
            : '',
          puntosAdquisiciones[30].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
            ? 'IN'
            : '',
          puntosAdquisiciones[30].estatus === 'DOCUMENTO NO APLICABLE'
            ? 'N/A'
            : puntosAdquisiciones[30].estatus ===
              'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
            ? 'NA/T'
            : '',
        ],
        [
          '',
          puntosAdquisiciones[6].type,
          7,
          puntosAdquisiciones[6].bullet1,
          '',
          puntosAdquisiciones[6].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
          puntosAdquisiciones[6].estatus === 'DOCUMENTO NO INTEGRADO'
            ? 'O'
            : '',
          puntosAdquisiciones[6].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
            ? 'IN'
            : '',
          puntosAdquisiciones[6].estatus === 'DOCUMENTO NO APLICABLE'
            ? 'N/A'
            : puntosAdquisiciones[6].estatus ===
              'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
            ? 'NA/T'
            : '',
          puntosAdquisiciones[31].type,
          32,
          puntosAdquisiciones[31].bullet1,
          '',
          puntosAdquisiciones[31].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
          puntosAdquisiciones[31].estatus === 'DOCUMENTO NO INTEGRADO'
            ? 'O'
            : '',
          puntosAdquisiciones[31].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
            ? 'IN'
            : '',
          puntosAdquisiciones[31].estatus === 'DOCUMENTO NO APLICABLE'
            ? 'N/A'
            : puntosAdquisiciones[31].estatus ===
              'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
            ? 'NA/T'
            : '',
        ],
        [
          '',
          puntosAdquisiciones[7].type,
          8,
          puntosAdquisiciones[7].bullet1,
          '',
          puntosAdquisiciones[7].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
          puntosAdquisiciones[7].estatus === 'DOCUMENTO NO INTEGRADO'
            ? 'O'
            : '',
          puntosAdquisiciones[7].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
            ? 'IN'
            : '',
          puntosAdquisiciones[7].estatus === 'DOCUMENTO NO APLICABLE'
            ? 'N/A'
            : puntosAdquisiciones[7].estatus ===
              'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
            ? 'NA/T'
            : '',
          puntosAdquisiciones[32].type,
          33,
          puntosAdquisiciones[32].bullet1,
          '',
          puntosAdquisiciones[32].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
          puntosAdquisiciones[32].estatus === 'DOCUMENTO NO INTEGRADO'
            ? 'O'
            : '',
          puntosAdquisiciones[32].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
            ? 'IN'
            : '',
          puntosAdquisiciones[32].estatus === 'DOCUMENTO NO APLICABLE'
            ? 'N/A'
            : puntosAdquisiciones[32].estatus ===
              'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
            ? 'NA/T'
            : '',
        ],
        [
          '',
          '',
          '',
          '',
          '',
          ' ',
          '',
          '',
          '',
          puntosAdquisiciones[33].type,
          34,
          puntosAdquisiciones[33].bullet1,
          '',
          puntosAdquisiciones[33].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
          puntosAdquisiciones[33].estatus === 'DOCUMENTO NO INTEGRADO'
            ? 'O'
            : '',
          puntosAdquisiciones[33].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
            ? 'IN'
            : '',
          puntosAdquisiciones[33].estatus === 'DOCUMENTO NO APLICABLE'
            ? 'N/A'
            : puntosAdquisiciones[33].estatus ===
              'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
            ? 'NA/T'
            : '',
        ],
        [
          '',
          puntosAdquisiciones[8].type,
          9,
          puntosAdquisiciones[8].bullet1,
          '',
          puntosAdquisiciones[8].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
          puntosAdquisiciones[8].estatus === 'DOCUMENTO NO INTEGRADO'
            ? 'O'
            : '',
          puntosAdquisiciones[8].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
            ? 'IN'
            : '',
          puntosAdquisiciones[8].estatus === 'DOCUMENTO NO APLICABLE'
            ? 'N/A'
            : puntosAdquisiciones[8].estatus ===
              'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
            ? 'NA/T'
            : '',
          puntosAdquisiciones[34].type,
          35,
          puntosAdquisiciones[34].bullet1,
          '',
          puntosAdquisiciones[34].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
          puntosAdquisiciones[34].estatus === 'DOCUMENTO NO INTEGRADO'
            ? 'O'
            : '',
          puntosAdquisiciones[34].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
            ? 'IN'
            : '',
          puntosAdquisiciones[34].estatus === 'DOCUMENTO NO APLICABLE'
            ? 'N/A'
            : puntosAdquisiciones[34].estatus ===
              'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
            ? 'NA/T'
            : '',
        ],
        [
          '',
          puntosAdquisiciones[9].type,
          10,
          puntosAdquisiciones[9].bullet1,
          '',
          puntosAdquisiciones[9].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
          puntosAdquisiciones[9].estatus === 'DOCUMENTO NO INTEGRADO'
            ? 'O'
            : '',
          puntosAdquisiciones[9].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
            ? 'IN'
            : '',
          puntosAdquisiciones[9].estatus === 'DOCUMENTO NO APLICABLE'
            ? 'N/A'
            : puntosAdquisiciones[9].estatus ===
              'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
            ? 'NA/T'
            : '',
          puntosAdquisiciones[35].type,
          36,
          puntosAdquisiciones[35].bullet1,
          '',
          puntosAdquisiciones[35].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
          puntosAdquisiciones[35].estatus === 'DOCUMENTO NO INTEGRADO'
            ? 'O'
            : '',
          puntosAdquisiciones[35].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
            ? 'IN'
            : '',
          puntosAdquisiciones[35].estatus === 'DOCUMENTO NO APLICABLE'
            ? 'N/A'
            : puntosAdquisiciones[35].estatus ===
              'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
            ? 'NA/T'
            : '',
        ],
        [
          '',
          puntosAdquisiciones[10].type,
          11,
          puntosAdquisiciones[10].bullet1,
          '',
          puntosAdquisiciones[10].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
          puntosAdquisiciones[10].estatus === 'DOCUMENTO NO INTEGRADO'
            ? 'O'
            : '',
          puntosAdquisiciones[10].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
            ? 'IN'
            : '',
          puntosAdquisiciones[10].estatus === 'DOCUMENTO NO APLICABLE'
            ? 'N/A'
            : puntosAdquisiciones[10].estatus ===
              'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
            ? 'NA/T'
            : '',
          puntosAdquisiciones[36].type,
          37,
          puntosAdquisiciones[36].bullet1,
          '',
          puntosAdquisiciones[36].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
          puntosAdquisiciones[36].estatus === 'DOCUMENTO NO INTEGRADO'
            ? 'O'
            : '',
          puntosAdquisiciones[36].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
            ? 'IN'
            : '',
          puntosAdquisiciones[36].estatus === 'DOCUMENTO NO APLICABLE'
            ? 'N/A'
            : puntosAdquisiciones[36].estatus ===
              'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
            ? 'NA/T'
            : '',
        ],
        [
          '',
          puntosAdquisiciones[11].type,
          12,
          puntosAdquisiciones[11].bullet1,
          '',
          puntosAdquisiciones[11].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
          puntosAdquisiciones[11].estatus === 'DOCUMENTO NO INTEGRADO'
            ? 'O'
            : '',
          puntosAdquisiciones[11].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
            ? 'IN'
            : '',
          puntosAdquisiciones[11].estatus === 'DOCUMENTO NO APLICABLE'
            ? 'N/A'
            : puntosAdquisiciones[11].estatus ===
              'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
            ? 'NA/T'
            : '',
          puntosAdquisiciones[37].type,
          38,
          puntosAdquisiciones[37].bullet1,
          '',
          puntosAdquisiciones[37].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
          puntosAdquisiciones[37].estatus === 'DOCUMENTO NO INTEGRADO'
            ? 'O'
            : '',
          puntosAdquisiciones[37].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
            ? 'IN'
            : '',
          puntosAdquisiciones[37].estatus === 'DOCUMENTO NO APLICABLE'
            ? 'N/A'
            : puntosAdquisiciones[37].estatus ===
              'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
            ? 'NA/T'
            : '',
        ],
        [
          '',
          puntosAdquisiciones[12].type,
          13,
          puntosAdquisiciones[12].bullet1,
          '',
          puntosAdquisiciones[12].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
          puntosAdquisiciones[12].estatus === 'DOCUMENTO NO INTEGRADO'
            ? 'O'
            : '',
          puntosAdquisiciones[12].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
            ? 'IN'
            : '',
          puntosAdquisiciones[12].estatus === 'DOCUMENTO NO APLICABLE'
            ? 'N/A'
            : puntosAdquisiciones[12].estatus ===
              'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
            ? 'NA/T'
            : '',
          puntosAdquisiciones[38].type,
          39,
          puntosAdquisiciones[38].bullet1,
          '',
          puntosAdquisiciones[38].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
          puntosAdquisiciones[38].estatus === 'DOCUMENTO NO INTEGRADO'
            ? 'O'
            : '',
          puntosAdquisiciones[38].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
            ? 'IN'
            : '',
          puntosAdquisiciones[38].estatus === 'DOCUMENTO NO APLICABLE'
            ? 'N/A'
            : puntosAdquisiciones[38].estatus ===
              'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
            ? 'NA/T'
            : '',
        ],
        [
          '',
          puntosAdquisiciones[13].type,
          14,
          puntosAdquisiciones[13].bullet1,
          '',
          puntosAdquisiciones[13].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
          puntosAdquisiciones[13].estatus === 'DOCUMENTO NO INTEGRADO'
            ? 'O'
            : '',
          puntosAdquisiciones[13].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
            ? 'IN'
            : '',
          puntosAdquisiciones[13].estatus === 'DOCUMENTO NO APLICABLE'
            ? 'N/A'
            : puntosAdquisiciones[13].estatus ===
              'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
            ? 'NA/T'
            : '',
          puntosAdquisiciones[39].type,
          40,
          puntosAdquisiciones[39].bullet1,
          '',
          puntosAdquisiciones[39].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
          puntosAdquisiciones[39].estatus === 'DOCUMENTO NO INTEGRADO'
            ? 'O'
            : '',
          puntosAdquisiciones[39].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
            ? 'IN'
            : '',
          puntosAdquisiciones[39].estatus === 'DOCUMENTO NO APLICABLE'
            ? 'N/A'
            : puntosAdquisiciones[39].estatus ===
              'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
            ? 'NA/T'
            : '',
        ],
        [
          '',
          puntosAdquisiciones[14].type,
          15,
          puntosAdquisiciones[14].bullet1,
          '',
          puntosAdquisiciones[14].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
          puntosAdquisiciones[14].estatus === 'DOCUMENTO NO INTEGRADO'
            ? 'O'
            : '',
          puntosAdquisiciones[14].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
            ? 'IN'
            : '',
          puntosAdquisiciones[14].estatus === 'DOCUMENTO NO APLICABLE'
            ? 'N/A'
            : puntosAdquisiciones[14].estatus ===
              'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
            ? 'NA/T'
            : '',
          puntosAdquisiciones[40].type,
          41,
          puntosAdquisiciones[40].bullet1,
          '',
          puntosAdquisiciones[40].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
          puntosAdquisiciones[40].estatus === 'DOCUMENTO NO INTEGRADO'
            ? 'O'
            : '',
          puntosAdquisiciones[40].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
            ? 'IN'
            : '',
          puntosAdquisiciones[40].estatus === 'DOCUMENTO NO APLICABLE'
            ? 'N/A'
            : puntosAdquisiciones[40].estatus ===
              'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
            ? 'NA/T'
            : '',
        ],
        [
          '',
          puntosAdquisiciones[15].type,
          16,
          puntosAdquisiciones[15].bullet1,
          '',
          puntosAdquisiciones[15].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
          puntosAdquisiciones[15].estatus === 'DOCUMENTO NO INTEGRADO'
            ? 'O'
            : '',
          puntosAdquisiciones[15].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
            ? 'IN'
            : '',
          puntosAdquisiciones[15].estatus === 'DOCUMENTO NO APLICABLE'
            ? 'N/A'
            : puntosAdquisiciones[15].estatus ===
              'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
            ? 'NA/T'
            : '',
          puntosAdquisiciones[41].type,
          42,
          puntosAdquisiciones[41].bullet1,
          '',
          puntosAdquisiciones[41].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
          puntosAdquisiciones[41].estatus === 'DOCUMENTO NO INTEGRADO'
            ? 'O'
            : '',
          puntosAdquisiciones[41].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
            ? 'IN'
            : '',
          puntosAdquisiciones[41].estatus === 'DOCUMENTO NO APLICABLE'
            ? 'N/A'
            : puntosAdquisiciones[41].estatus ===
              'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
            ? 'NA/T'
            : '',
        ],
        [
          '',
          puntosAdquisiciones[16].type,
          17,
          puntosAdquisiciones[16].bullet1,
          '',
          puntosAdquisiciones[16].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
          puntosAdquisiciones[16].estatus === 'DOCUMENTO NO INTEGRADO'
            ? 'O'
            : '',
          puntosAdquisiciones[16].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
            ? 'IN'
            : '',
          puntosAdquisiciones[16].estatus === 'DOCUMENTO NO APLICABLE'
            ? 'N/A'
            : puntosAdquisiciones[16].estatus ===
              'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
            ? 'NA/T'
            : '',
          puntosAdquisiciones[42].type,
          43,
          puntosAdquisiciones[42].bullet1,
          '',
          puntosAdquisiciones[42].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
          puntosAdquisiciones[42].estatus === 'DOCUMENTO NO INTEGRADO'
            ? 'O'
            : '',
          puntosAdquisiciones[42].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
            ? 'IN'
            : '',
          puntosAdquisiciones[42].estatus === 'DOCUMENTO NO APLICABLE'
            ? 'N/A'
            : puntosAdquisiciones[42].estatus ===
              'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
            ? 'NA/T'
            : '',
        ],
        [
          '',
          puntosAdquisiciones[17].type,
          18,
          puntosAdquisiciones[17].bullet1,
          '',
          puntosAdquisiciones[17].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
          puntosAdquisiciones[17].estatus === 'DOCUMENTO NO INTEGRADO'
            ? 'O'
            : '',
          puntosAdquisiciones[17].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
            ? 'IN'
            : '',
          puntosAdquisiciones[17].estatus === 'DOCUMENTO NO APLICABLE'
            ? 'N/A'
            : puntosAdquisiciones[17].estatus ===
              'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
            ? 'NA/T'
            : '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
        ],
        [
          '',
          puntosAdquisiciones[18].type,
          19,
          puntosAdquisiciones[18].bullet1,
          '',
          puntosAdquisiciones[18].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
          puntosAdquisiciones[18].estatus === 'DOCUMENTO NO INTEGRADO'
            ? 'O'
            : '',
          puntosAdquisiciones[18].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
            ? 'IN'
            : '',
          puntosAdquisiciones[18].estatus === 'DOCUMENTO NO APLICABLE'
            ? 'N/A'
            : puntosAdquisiciones[18].estatus ===
              'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
            ? 'NA/T'
            : '',
          puntosAdquisiciones[43].type,
          44,
          puntosAdquisiciones[43].bullet1,
          '',
          puntosAdquisiciones[43].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
          puntosAdquisiciones[43].estatus === 'DOCUMENTO NO INTEGRADO'
            ? 'O'
            : '',
          puntosAdquisiciones[43].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
            ? 'IN'
            : '',
          puntosAdquisiciones[43].estatus === 'DOCUMENTO NO APLICABLE'
            ? 'N/A'
            : puntosAdquisiciones[43].estatus ===
              'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
            ? 'NA/T'
            : '',
        ],
        [
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          puntosAdquisiciones[44].type,
          45,
          puntosAdquisiciones[44].bullet1,
          '',
          puntosAdquisiciones[44].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
          puntosAdquisiciones[44].estatus === 'DOCUMENTO NO INTEGRADO'
            ? 'O'
            : '',
          puntosAdquisiciones[44].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
            ? 'IN'
            : '',
          puntosAdquisiciones[44].estatus === 'DOCUMENTO NO APLICABLE'
            ? 'N/A'
            : puntosAdquisiciones[44].estatus ===
              'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
            ? 'NA/T'
            : '',
        ],
        [
          '',
          puntosAdquisiciones[19].type,
          20,
          puntosAdquisiciones[19].bullet1,
          '',
          puntosAdquisiciones[19].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
          puntosAdquisiciones[19].estatus === 'DOCUMENTO NO INTEGRADO'
            ? 'O'
            : '',
          puntosAdquisiciones[19].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
            ? 'IN'
            : '',
          puntosAdquisiciones[19].estatus === 'DOCUMENTO NO APLICABLE'
            ? 'N/A'
            : puntosAdquisiciones[19].estatus ===
              'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
            ? 'NA/T'
            : '',
          puntosAdquisiciones[45].type,
          46,
          puntosAdquisiciones[45].bullet1,
          '',
          puntosAdquisiciones[45].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
          puntosAdquisiciones[45].estatus === 'DOCUMENTO NO INTEGRADO'
            ? 'O'
            : '',
          puntosAdquisiciones[45].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
            ? 'IN'
            : '',
          puntosAdquisiciones[45].estatus === 'DOCUMENTO NO APLICABLE'
            ? 'N/A'
            : puntosAdquisiciones[45].estatus ===
              'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
            ? 'NA/T'
            : '',
        ],
        [
          '',
          puntosAdquisiciones[20].type,
          21,
          puntosAdquisiciones[20].bullet1,
          '',
          puntosAdquisiciones[20].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
          puntosAdquisiciones[20].estatus === 'DOCUMENTO NO INTEGRADO'
            ? 'O'
            : '',
          puntosAdquisiciones[20].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
            ? 'IN'
            : '',
          puntosAdquisiciones[20].estatus === 'DOCUMENTO NO APLICABLE'
            ? 'N/A'
            : puntosAdquisiciones[20].estatus ===
              'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
            ? 'NA/T'
            : '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
        ],
        [
          '',
          puntosAdquisiciones[21].type,
          22,
          puntosAdquisiciones[21].bullet1,
          '',
          puntosAdquisiciones[21].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
          puntosAdquisiciones[21].estatus === 'DOCUMENTO NO INTEGRADO'
            ? 'O'
            : '',
          puntosAdquisiciones[21].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
            ? 'IN'
            : '',
          puntosAdquisiciones[21].estatus === 'DOCUMENTO NO APLICABLE'
            ? 'N/A'
            : puntosAdquisiciones[21].estatus ===
              'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
            ? 'NA/T'
            : '',
          puntosAdquisiciones[46].type,
          47,
          puntosAdquisiciones[46].bullet1,
          '',
          puntosAdquisiciones[46].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
          puntosAdquisiciones[46].estatus === 'DOCUMENTO NO INTEGRADO'
            ? 'O'
            : '',
          puntosAdquisiciones[46].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
            ? 'IN'
            : '',
          puntosAdquisiciones[46].estatus === 'DOCUMENTO NO APLICABLE'
            ? 'N/A'
            : puntosAdquisiciones[46].estatus ===
              'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
            ? 'NA/T'
            : '',
        ],
        [
          '',
          puntosAdquisiciones[22].type,
          23,
          puntosAdquisiciones[22].bullet1,
          '',
          puntosAdquisiciones[22].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
          puntosAdquisiciones[22].estatus === 'DOCUMENTO NO INTEGRADO'
            ? 'O'
            : '',
          puntosAdquisiciones[22].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
            ? 'IN'
            : '',
          puntosAdquisiciones[22].estatus === 'DOCUMENTO NO APLICABLE'
            ? 'N/A'
            : puntosAdquisiciones[22].estatus ===
              'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
            ? 'NA/T'
            : '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
        ],
        [
          '',
          puntosAdquisiciones[23].type,
          24,
          puntosAdquisiciones[23].bullet1,
          '',
          puntosAdquisiciones[23].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
          puntosAdquisiciones[23].estatus === 'DOCUMENTO NO INTEGRADO'
            ? 'O'
            : '',
          puntosAdquisiciones[23].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
            ? 'IN'
            : '',
          puntosAdquisiciones[23].estatus === 'DOCUMENTO NO APLICABLE'
            ? 'N/A'
            : puntosAdquisiciones[23].estatus ===
              'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
            ? 'NA/T'
            : '',
          puntosAdquisiciones[47].type,
          48,
          puntosAdquisiciones[47].bullet1,
          '',
          puntosAdquisiciones[47].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
          puntosAdquisiciones[47].estatus === 'DOCUMENTO NO INTEGRADO'
            ? 'O'
            : '',
          puntosAdquisiciones[47].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
            ? 'IN'
            : '',
          puntosAdquisiciones[47].estatus === 'DOCUMENTO NO APLICABLE'
            ? 'N/A'
            : puntosAdquisiciones[47].estatus ===
              'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
            ? 'NA/T'
            : '',
        ],
        [
          '',
          puntosAdquisiciones[24].type,
          25,
          puntosAdquisiciones[24].bullet1,
          '',
          puntosAdquisiciones[24].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
          puntosAdquisiciones[24].estatus === 'DOCUMENTO NO INTEGRADO'
            ? 'O'
            : '',
          puntosAdquisiciones[24].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
            ? 'IN'
            : '',
          puntosAdquisiciones[24].estatus === 'DOCUMENTO NO APLICABLE'
            ? 'N/A'
            : puntosAdquisiciones[24].estatus ===
              'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
            ? 'NA/T'
            : '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
        ],
      ];
      const title = 'INSTITUTO MEXICANO DEL SEGURO SOCIAL';
      const subtitle = titulo;
      const subtitle1 = 'GENERALES';
      const subtitle2 = 'ÁREA REQUIRENTE Y/O RESPONSABLE';
      const subtitle3 = 'EJERCICIO';
      const subtitle4 = 'N° DE CONTRATO';
      const subtitle5 = 'N° DE ADJUDICACIÓN';
      const subtitle6 = 'TIPO DE ADJUDICACIÓN';
      const subtitle7 = 'FONDO Y PARTIDA PRESUPUESTAL';
      const subtitle8 = 'PROVEEDOR';
      const subtitle9 = 'VIGENCIA';
      const subtitle10 = 'MONTO';
      const subtitle11 = 'OBJETO DEL CONTRATO';
      const header = [
        '',
        'ETAPA',
        'No',
        'DOCUMENTO',
        '',
        'SI',
        'NO',
        'INCUMPLE',
        'NA',
        'ETAPA',
        'No',
        'DOCUMENTO',
        '',
        'SI',
        'NO',
        'INCUMPLE',
        'NA',
      ];
      const titleRow = worksheet.addRow(['', title]);
      titleRow.font = {
        name: 'Calibri',
        size: 12,
        underline: 'none',
        bold: true,
        color: { argb: 'ffffff' },
      };
      titleRow.alignment = { horizontal: 'center', vertical: 'middle' };
      titleRow.height = 34.5;
      ['B1'].map((key) => {
        worksheet.getCell(key).fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: { argb: '6FAE45' },
        };
        worksheet.getCell(key).border = {
          top: { style: 'medium', color: { argb: '000000' } },
          left: { style: 'medium', color: { argb: '000000' } },
          bottom: { style: 'medium', color: { argb: '000000' } },
          right: { style: 'medium', color: { argb: '000000' } },
        };
      });
      worksheet.mergeCells('B1:Q1');

      const subtitleRow = worksheet.addRow(['', subtitle]);
      subtitleRow.font = {
        name: 'Calibri',
        size: 12,
        underline: 'none',
        bold: true,
        color: { argb: 'ffffff' },
      };
      subtitleRow.alignment = { horizontal: 'center', vertical: 'middle' };
      subtitleRow.height = 39;
      ['B2'].map((key) => {
        worksheet.getCell(key).fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: { argb: '6FAE45' },
        };
        worksheet.getCell(key).border = {
          top: { style: 'medium', color: { argb: '000000' } },
          left: { style: 'medium', color: { argb: '000000' } },
          bottom: { style: 'medium', color: { argb: '000000' } },
          right: { style: 'medium', color: { argb: '000000' } },
        };
      });
      worksheet.mergeCells('B2:Q2');

      const generalRow = worksheet.addRow([
        '',
        subtitle1,
        '',
        subtitle2,
        '',
        row[i].areaRequirente,
      ]);
      generalRow.font = {
        name: 'Calibri',
        size: 12,
        underline: 'none',
        bold: true,
        color: { argb: 'ffffff' },
      };
      generalRow.alignment = { horizontal: 'center', vertical: 'middle' };
      generalRow.height = 45;
      ['B3'].map((key) => {
        worksheet.getCell(key).fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: { argb: '6FAE45' },
        };
        worksheet.getCell(key).border = {
          top: { style: 'medium', color: { argb: '000000' } },
          left: { style: 'medium', color: { argb: '000000' } },
          bottom: { style: 'medium', color: { argb: '000000' } },
          right: { style: 'medium', color: { argb: '000000' } },
        };
      });
      ['D3'].map((key) => {
        worksheet.getCell(key).fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: { argb: '6FAE45' },
        };
        worksheet.getCell(key).border = {
          top: { style: 'medium', color: { argb: '000000' } },
          left: { style: 'medium', color: { argb: '000000' } },
          bottom: { style: 'medium', color: { argb: '000000' } },
          right: { style: 'medium', color: { argb: '000000' } },
        };
      });
      const texto1 = generalRow.getCell(6);
      texto1.font = {
        name: 'Calibri',
        size: 12,
        underline: 'none',
      };
      texto1.alignment = {
        horizontal: 'center',
        vertical: 'middle',
        wrapText: true,
      };
      texto1.border = {
        top: { style: 'medium' },
        left: { style: 'medium' },
        bottom: { style: 'medium' },
        right: { style: 'medium' },
      };

      const campoRow = worksheet.addRow([
        '',
        '',
        '',
        subtitle3,
        '',
        row[i].ejercicio,
      ]);
      campoRow.font = {
        name: 'Calibri',
        size: 12,
        underline: 'none',
        bold: true,
        color: { argb: 'ffffff' },
      };
      campoRow.alignment = { horizontal: 'center', vertical: 'middle' };

      ['D4'].map((key) => {
        worksheet.getCell(key).fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: { argb: '6FAE45' },
        };
        worksheet.getCell(key).border = {
          top: { style: 'medium', color: { argb: '000000' } },
          left: { style: 'medium', color: { argb: '000000' } },
          bottom: { style: 'medium', color: { argb: '000000' } },
          right: { style: 'medium', color: { argb: '000000' } },
        };
      });

      const texto2 = campoRow.getCell(6);
      texto2.font = {
        name: 'Calibri',
        size: 12,
        underline: 'none',
      };
      texto2.alignment = {
        horizontal: 'center',
        vertical: 'middle',
        wrapText: true,
      };
      texto2.border = {
        top: { style: 'medium' },
        left: { style: 'medium' },
        bottom: { style: 'medium' },
        right: { style: 'medium' },
      };

      const campoRow2 = worksheet.addRow([
        '',
        '',
        '',
        subtitle4,
        '',
        row[i].noContrato,
      ]);
      campoRow2.font = {
        name: 'Calibri',
        size: 12,
        underline: 'none',
        bold: true,
        color: { argb: 'ffffff' },
      };
      campoRow2.alignment = { horizontal: 'center', vertical: 'middle' };

      ['D5'].map((key) => {
        worksheet.getCell(key).fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: { argb: '6FAE45' },
        };
        worksheet.getCell(key).border = {
          top: { style: 'medium', color: { argb: '000000' } },
          left: { style: 'medium', color: { argb: '000000' } },
          bottom: { style: 'medium', color: { argb: '000000' } },
          right: { style: 'medium', color: { argb: '000000' } },
        };
      });

      const texto3 = campoRow2.getCell(6);
      texto3.font = {
        name: 'Calibri',
        size: 12,
        underline: 'none',
      };
      texto3.alignment = {
        horizontal: 'center',
        vertical: 'middle',
        wrapText: true,
      };
      texto3.border = {
        top: { style: 'medium' },
        left: { style: 'medium' },
        bottom: { style: 'medium' },
        right: { style: 'medium' },
      };

      const campoRow3 = worksheet.addRow([
        '',
        '',
        '',
        subtitle5,
        '',
        row[i].noAdjudicacion,
      ]);
      campoRow3.font = {
        name: 'Calibri',
        size: 12,
        underline: 'none',
        bold: true,
        color: { argb: 'ffffff' },
      };
      campoRow3.alignment = { horizontal: 'center', vertical: 'middle' };

      ['D6'].map((key) => {
        worksheet.getCell(key).fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: { argb: '6FAE45' },
        };
        worksheet.getCell(key).border = {
          top: { style: 'medium', color: { argb: '000000' } },
          left: { style: 'medium', color: { argb: '000000' } },
          bottom: { style: 'medium', color: { argb: '000000' } },
          right: { style: 'medium', color: { argb: '000000' } },
        };
      });

      const texto4 = campoRow3.getCell(6);
      texto4.font = {
        name: 'Calibri',
        size: 12,
        underline: 'none',
      };
      texto4.alignment = {
        horizontal: 'center',
        vertical: 'middle',
        wrapText: true,
      };
      texto4.border = {
        top: { style: 'medium' },
        left: { style: 'medium' },
        bottom: { style: 'medium' },
        right: { style: 'medium' },
      };

      const campoRow4 = worksheet.addRow([
        '',
        '',
        '',
        subtitle6,
        '',
        row[i].tipoAdjudicacion,
      ]);
      campoRow4.font = {
        name: 'Calibri',
        size: 12,
        underline: 'none',
        bold: true,
        color: { argb: 'ffffff' },
      };
      campoRow4.alignment = { horizontal: 'center', vertical: 'middle' };

      ['D7'].map((key) => {
        worksheet.getCell(key).fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: { argb: '6FAE45' },
        };
        worksheet.getCell(key).border = {
          top: { style: 'medium', color: { argb: '000000' } },
          left: { style: 'medium', color: { argb: '000000' } },
          bottom: { style: 'medium', color: { argb: '000000' } },
          right: { style: 'medium', color: { argb: '000000' } },
        };
      });

      const texto5 = campoRow4.getCell(6);
      texto5.font = {
        name: 'Calibri',
        size: 12,
        underline: 'none',
      };
      texto5.alignment = {
        horizontal: 'center',
        vertical: 'middle',
        wrapText: true,
      };
      texto5.border = {
        top: { style: 'medium' },
        left: { style: 'medium' },
        bottom: { style: 'medium' },
        right: { style: 'medium' },
      };

      const campoRow5 = worksheet.addRow([
        '',
        '',
        '',
        subtitle7,
        '',
        row[i].fondo,
      ]);
      campoRow5.font = {
        name: 'Calibri',
        size: 12,
        underline: 'none',
        bold: true,
        color: { argb: 'ffffff' },
      };
      campoRow5.alignment = { horizontal: 'center', vertical: 'middle' };

      ['D8'].map((key) => {
        worksheet.getCell(key).fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: { argb: '6FAE45' },
        };
        worksheet.getCell(key).border = {
          top: { style: 'medium', color: { argb: '000000' } },
          left: { style: 'medium', color: { argb: '000000' } },
          bottom: { style: 'medium', color: { argb: '000000' } },
          right: { style: 'medium', color: { argb: '000000' } },
        };
      });

      const texto6 = campoRow5.getCell(6);
      texto6.font = {
        name: 'Calibri',
        size: 12,
        underline: 'none',
      };
      texto6.alignment = {
        horizontal: 'center',
        vertical: 'middle',
        wrapText: true,
      };
      texto6.border = {
        top: { style: 'medium' },
        left: { style: 'medium' },
        bottom: { style: 'medium' },
        right: { style: 'medium' },
      };

      const campoRow6 = worksheet.addRow([
        '',
        '',
        '',
        subtitle8,
        '',
        row[i].proveedor,
      ]);
      campoRow6.font = {
        name: 'Calibri',
        size: 12,
        underline: 'none',
        bold: true,
        color: { argb: 'ffffff' },
      };
      campoRow6.alignment = { horizontal: 'center', vertical: 'middle' };

      ['D9'].map((key) => {
        worksheet.getCell(key).fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: { argb: '6FAE45' },
        };
        worksheet.getCell(key).border = {
          top: { style: 'medium', color: { argb: '000000' } },
          left: { style: 'medium', color: { argb: '000000' } },
          bottom: { style: 'medium', color: { argb: '000000' } },
          right: { style: 'medium', color: { argb: '000000' } },
        };
      });

      const texto7 = campoRow6.getCell(6);
      texto7.font = {
        name: 'Calibri',
        size: 12,
        underline: 'none',
      };
      texto7.alignment = {
        horizontal: 'center',
        vertical: 'middle',
        wrapText: true,
      };
      texto7.border = {
        top: { style: 'medium' },
        left: { style: 'medium' },
        bottom: { style: 'medium' },
        right: { style: 'medium' },
      };

      let fechaI: any = '';
      let fechaF: any = '';

      if (row[i].vigenciaInicio !== undefined && row[i].vigenciaInicio !== '') {
        fechaI = this.filterSvc.formatDate(
          new Date(row[i].vigenciaInicio.seconds * 1000),
          'only_date'
        );
      }
      if (row[i].vigenciaFin !== undefined && row[i].vigenciaFin !== '') {
        fechaF = this.filterSvc.formatDate(
          new Date(row[i].vigenciaFin.seconds * 1000),
          'only_date'
        );
      }

      const campoRow7 = worksheet.addRow([
        '',
        '',
        '',
        subtitle9,
        '',
        `${fechaI} - ${fechaF}`,
      ]);
      campoRow7.font = {
        name: 'Calibri',
        size: 12,
        underline: 'none',
        bold: true,
        color: { argb: 'ffffff' },
      };
      campoRow7.alignment = { horizontal: 'center', vertical: 'middle' };

      ['D10'].map((key) => {
        worksheet.getCell(key).fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: { argb: '6FAE45' },
        };
        worksheet.getCell(key).border = {
          top: { style: 'medium', color: { argb: '000000' } },
          left: { style: 'medium', color: { argb: '000000' } },
          bottom: { style: 'medium', color: { argb: '000000' } },
          right: { style: 'medium', color: { argb: '000000' } },
        };
      });

      const texto8 = campoRow7.getCell(6);
      texto8.font = {
        name: 'Calibri',
        size: 12,
        underline: 'none',
      };
      texto8.alignment = {
        horizontal: 'center',
        vertical: 'middle',
        wrapText: true,
      };
      texto8.border = {
        top: { style: 'medium' },
        left: { style: 'medium' },
        bottom: { style: 'medium' },
        right: { style: 'medium' },
      };

      const campoRow8 = worksheet.addRow([
        '',
        '',
        '',
        subtitle10,
        '',
        row[i].monto,
      ]);
      campoRow8.font = {
        name: 'Calibri',
        size: 12,
        underline: 'none',
        bold: true,
        color: { argb: 'ffffff' },
      };
      campoRow8.alignment = { horizontal: 'center', vertical: 'middle' };

      ['D11'].map((key) => {
        worksheet.getCell(key).fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: { argb: '6FAE45' },
        };
        worksheet.getCell(key).border = {
          top: { style: 'medium', color: { argb: '000000' } },
          left: { style: 'medium', color: { argb: '000000' } },
          bottom: { style: 'medium', color: { argb: '000000' } },
          right: { style: 'medium', color: { argb: '000000' } },
        };
      });

      const texto9 = campoRow8.getCell(6);
      texto9.font = {
        name: 'Calibri',
        size: 12,
        underline: 'none',
      };
      texto9.alignment = {
        horizontal: 'center',
        vertical: 'middle',
        wrapText: true,
      };
      texto9.border = {
        top: { style: 'medium' },
        left: { style: 'medium' },
        bottom: { style: 'medium' },
        right: { style: 'medium' },
      };

      const campoRow9 = worksheet.addRow([
        '',
        '',
        '',
        subtitle11,
        '',
        row[i].objetivo,
      ]);
      campoRow9.font = {
        name: 'Calibri',
        size: 12,
        underline: 'none',
        bold: true,
        color: { argb: 'ffffff' },
      };
      campoRow9.alignment = { horizontal: 'center', vertical: 'middle' };

      ['D12'].map((key) => {
        worksheet.getCell(key).fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: { argb: '6FAE45' },
        };
        worksheet.getCell(key).border = {
          top: { style: 'medium', color: { argb: '000000' } },
          left: { style: 'medium', color: { argb: '000000' } },
          bottom: { style: 'medium', color: { argb: '000000' } },
          right: { style: 'medium', color: { argb: '000000' } },
        };
      });

      const texto10 = campoRow9.getCell(6);
      texto10.font = {
        name: 'Calibri',
        size: 12,
        underline: 'none',
      };
      texto10.alignment = {
        horizontal: 'center',
        vertical: 'middle',
        wrapText: true,
      };
      texto10.border = {
        top: { style: 'medium' },
        left: { style: 'medium' },
        bottom: { style: 'medium' },
        right: { style: 'medium' },
      };

      worksheet.mergeCells('B3:C12');
      worksheet.mergeCells('D3:E3');
      worksheet.mergeCells('F3:Q3');
      worksheet.mergeCells('F4:Q4');
      worksheet.mergeCells('F5:Q5');
      worksheet.mergeCells('F6:Q6');
      worksheet.mergeCells('F7:Q7');
      worksheet.mergeCells('F8:Q8');
      worksheet.mergeCells('F9:Q9');
      worksheet.mergeCells('F10:Q10');
      worksheet.mergeCells('F11:Q11');
      worksheet.mergeCells('F12:Q12');
      worksheet.mergeCells('D4:E4');
      worksheet.mergeCells('D5:E5');
      worksheet.mergeCells('D6:E6');
      worksheet.mergeCells('D7:E7');
      worksheet.mergeCells('D8:E8');
      worksheet.mergeCells('D9:E9');
      worksheet.mergeCells('D10:E10');
      worksheet.mergeCells('D11:E11');
      worksheet.mergeCells('D12:E12');

      const headerRow = worksheet.addRow(header);

      headerRow.eachCell((cell, number) => {
        if (number !== 1) {
          cell.font = {
            name: 'Calibri',
            size: 12,
            underline: 'none',
            bold: true,
            color: { argb: 'ffffff' },
          };
          cell.alignment = { horizontal: 'center', vertical: 'middle' };
          cell.fill = {
            type: 'pattern',
            pattern: 'solid',
            fgColor: { argb: '6FAE45' },
            bgColor: { argb: '6FAE45' },
          };
          cell.border = {
            top: { style: 'medium' },
            left: { style: 'medium' },
            bottom: { style: 'medium' },
            right: { style: 'medium' },
          };
        }
      });
      worksheet.mergeCells('D13:E13');
      worksheet.mergeCells('L13:M13');

      data.forEach((d) => {
        const row = worksheet.addRow(d);

        row.font = {
          name: 'Calibri',
          size: 12,
          underline: 'none',
        };
        row.alignment = {
          horizontal: 'center',
          vertical: 'middle',
          wrapText: true,
        };
        row.border = {
          top: { style: 'thin' },
          left: { style: 'thin' },
          bottom: { style: 'thin' },
          right: { style: 'thin' },
        };
        if (
          row.number !== 21 &&
          row.number !== 22 &&
          row.number !== 33 &&
          row.number !== 34
        ) {
          worksheet.mergeCells(`D${String(row.number)}:E${String(row.number)}`);
        }
        if (
          row.number !== 31 &&
          row.number !== 32 &&
          row.number !== 35 &&
          row.number !== 36 &&
          row.number !== 37 &&
          row.number !== 38 &&
          row.number !== 39 &&
          row.number !== 40
        ) {
          worksheet.mergeCells(`L${String(row.number)}:M${String(row.number)}`);
        }
        const qty0 = row.getCell(1);
        const qty = row.getCell(2);
        const qty1 = row.getCell(10);
        const qty2 = row.getCell(17);

        qty.font = {
          name: 'Calibri',
          size: 12,
          underline: 'none',
          bold: true,
          color: { argb: 'ffffff' },
        };
        qty.alignment = {
          horizontal: 'center',
          vertical: 'middle',
          wrapText: true,
          textRotation: 90,
        };
        qty.fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: { argb: '6FAE45' },
          bgColor: { argb: '6FAE45' },
        };
        qty.border = {
          top: { style: 'medium' },
          left: { style: 'medium' },
          bottom: { style: 'medium' },
          right: { style: 'medium' },
        };
        qty1.font = {
          name: 'Calibri',
          size: 12,
          underline: 'none',
          bold: true,
          color: { argb: 'ffffff' },
        };
        qty1.alignment = {
          horizontal: 'center',
          vertical: 'middle',
          wrapText: true,
          textRotation: 90,
        };
        qty1.fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: { argb: '6FAE45' },
          bgColor: { argb: '6FAE45' },
        };
        qty1.border = {
          top: { style: 'medium' },
          left: { style: 'medium' },
          bottom: { style: 'medium' },
          right: { style: 'medium' },
        };
        qty0.font = {
          name: 'Calibri',
          size: 12,
          underline: 'none',
          bold: true,
          color: { argb: 'ffffff' },
        };
        qty0.alignment = {
          horizontal: 'center',
          vertical: 'middle',
          wrapText: true,
          textRotation: 90,
        };
        qty0.fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: { argb: 'ffffff' },
          bgColor: { argb: 'ffffff' },
        };
        qty0.border = {
          right: { style: 'medium' },
        };
        qty2.border = {
          top: { style: 'medium' },
          left: { style: 'medium' },
          bottom: { style: 'medium' },
          right: { style: 'medium' },
        };
        row.getCell(3).border = {
          top: { style: 'medium' },
          left: { style: 'medium' },
          bottom: { style: 'medium' },
          right: { style: 'medium' },
        };
        row.getCell(4).border = {
          top: { style: 'medium' },
          left: { style: 'medium' },
          bottom: { style: 'medium' },
          right: { style: 'medium' },
        };
        row.getCell(5).border = {
          top: { style: 'medium' },
          left: { style: 'medium' },
          bottom: { style: 'medium' },
          right: { style: 'medium' },
        };
        row.getCell(6).border = {
          top: { style: 'medium' },
          left: { style: 'medium' },
          bottom: { style: 'medium' },
          right: { style: 'medium' },
        };
        if (row.getCell(6).text === 'P') {
          row.getCell(6).font = {
            name: 'Calibri',
            size: 12,
            underline: 'none',
            bold: true,
          };
          row.getCell(6).fill = {
            type: 'pattern',
            pattern: 'solid',
            fgColor: { argb: '92d14f' },
            bgColor: { argb: '92d14f' },
          };
        }
        row.getCell(7).border = {
          top: { style: 'medium' },
          left: { style: 'medium' },
          bottom: { style: 'medium' },
          right: { style: 'medium' },
        };
        if (row.getCell(7).text === 'O') {
          row.getCell(7).font = {
            name: 'Calibri',
            size: 12,
            underline: 'none',
            bold: true,
          };
          row.getCell(7).fill = {
            type: 'pattern',
            pattern: 'solid',
            fgColor: { argb: 'fe0000' },
            bgColor: { argb: 'fe0000' },
          };
        }
        row.getCell(8).border = {
          top: { style: 'medium' },
          left: { style: 'medium' },
          bottom: { style: 'medium' },
          right: { style: 'medium' },
        };
        if (row.getCell(8).text === 'IN') {
          row.getCell(8).font = {
            name: 'Calibri',
            size: 12,
            underline: 'none',
            bold: true,
          };
          row.getCell(8).fill = {
            type: 'pattern',
            pattern: 'solid',
            fgColor: { argb: 'ffff01' },
            bgColor: { argb: 'ffff01' },
          };
        }
        row.getCell(9).border = {
          top: { style: 'medium' },
          left: { style: 'medium' },
          bottom: { style: 'medium' },
          right: { style: 'medium' },
        };
        if (row.getCell(9).text === 'N/A' || row.getCell(9).text === 'NA/T') {
          row.getCell(9).font = {
            name: 'Calibri',
            size: 12,
            underline: 'none',
            bold: true,
          };
          if (row.getCell(9).text === 'N/A') {
            row.getCell(9).fill = {
              type: 'pattern',
              pattern: 'solid',
              fgColor: { argb: 'a5a5a5' },
              bgColor: { argb: 'a5a5a5' },
            };
          } else {
            row.getCell(9).fill = {
              type: 'pattern',
              pattern: 'solid',
              fgColor: { argb: '5a9bd5' },
              bgColor: { argb: '5a9bd5' },
            };
          }
        }
        row.getCell(11).border = {
          top: { style: 'medium' },
          left: { style: 'medium' },
          bottom: { style: 'medium' },
          right: { style: 'medium' },
        };
        row.getCell(12).border = {
          top: { style: 'medium' },
          left: { style: 'medium' },
          bottom: { style: 'medium' },
          right: { style: 'medium' },
        };
        row.getCell(13).border = {
          top: { style: 'medium' },
          left: { style: 'medium' },
          bottom: { style: 'medium' },
          right: { style: 'medium' },
        };
        row.getCell(14).border = {
          top: { style: 'medium' },
          left: { style: 'medium' },
          bottom: { style: 'medium' },
          right: { style: 'medium' },
        };
        if (row.getCell(14).text === 'P') {
          row.getCell(14).font = {
            name: 'Calibri',
            size: 12,
            underline: 'none',
            bold: true,
          };
          row.getCell(14).fill = {
            type: 'pattern',
            pattern: 'solid',
            fgColor: { argb: '92d14f' },
            bgColor: { argb: '92d14f' },
          };
        }
        row.getCell(15).border = {
          top: { style: 'medium' },
          left: { style: 'medium' },
          bottom: { style: 'medium' },
          right: { style: 'medium' },
        };
        if (row.getCell(15).text === 'O') {
          row.getCell(15).font = {
            name: 'Calibri',
            size: 12,
            underline: 'none',
            bold: true,
          };
          row.getCell(15).fill = {
            type: 'pattern',
            pattern: 'solid',
            fgColor: { argb: 'fe0000' },
            bgColor: { argb: 'fe0000' },
          };
        }
        row.getCell(16).border = {
          top: { style: 'medium' },
          left: { style: 'medium' },
          bottom: { style: 'medium' },
          right: { style: 'medium' },
        };
        if (row.getCell(16).text === 'IN') {
          row.getCell(16).font = {
            name: 'Calibri',
            size: 12,
            underline: 'none',
            bold: true,
          };
          row.getCell(16).fill = {
            type: 'pattern',
            pattern: 'solid',
            fgColor: { argb: 'ffff01' },
            bgColor: { argb: 'ffff01' },
          };
        }
        if (row.getCell(17).text === 'N/A' || row.getCell(17).text === 'NA/T') {
          row.getCell(17).font = {
            name: 'Calibri',
            size: 12,
            underline: 'none',
            bold: true,
          };
          if (row.getCell(17).text === 'N/A') {
            row.getCell(17).fill = {
              type: 'pattern',
              pattern: 'solid',
              fgColor: { argb: 'a5a5a5' },
              bgColor: { argb: 'a5a5a5' },
            };
          } else {
            row.getCell(17).fill = {
              type: 'pattern',
              pattern: 'solid',
              fgColor: { argb: '5a9bd5' },
              bgColor: { argb: '5a9bd5' },
            };
          }
        }
      });

      worksheet.mergeCells('D21:E22');
      worksheet.mergeCells('D33:E34');
      worksheet.mergeCells('F33:F34');
      worksheet.mergeCells('G33:G34');
      worksheet.mergeCells('H33:H34');
      worksheet.mergeCells('I33:I34');
      worksheet.mergeCells('N31:N32');
      worksheet.mergeCells('O31:O32');
      worksheet.mergeCells('P31:P32');
      worksheet.mergeCells('Q31:Q32');
      worksheet.mergeCells('N35:N36');
      worksheet.mergeCells('O35:O36');
      worksheet.mergeCells('P35:P36');
      worksheet.mergeCells('Q35:Q36');
      worksheet.mergeCells('N37:N38');
      worksheet.mergeCells('O37:O38');
      worksheet.mergeCells('P37:P38');
      worksheet.mergeCells('Q37:Q38');
      worksheet.mergeCells('N39:N40');
      worksheet.mergeCells('O39:O40');
      worksheet.mergeCells('P39:P40');
      worksheet.mergeCells('Q39:Q40');
      worksheet.mergeCells('L31:M32');
      worksheet.mergeCells('L35:M36');
      worksheet.mergeCells('L37:M38');
      worksheet.mergeCells('L39:M40');
      worksheet.mergeCells('B14:B17');
      worksheet.mergeCells('B18:B34');
      worksheet.mergeCells('B35:B38');
      worksheet.mergeCells('B39:B40');
      worksheet.mergeCells('C21:C22');
      worksheet.mergeCells('C33:C34');
      worksheet.mergeCells('K31:K32');
      worksheet.mergeCells('K35:K36');
      worksheet.mergeCells('K37:K38');
      worksheet.mergeCells('K39:K40');
      worksheet.mergeCells('F21:F22');
      worksheet.mergeCells('G21:G22');
      worksheet.mergeCells('H21:H22');
      worksheet.mergeCells('I21:I22');
      worksheet.mergeCells('J14:J26');
      worksheet.mergeCells('J27:J30');
      worksheet.mergeCells('J31:J40');

      worksheet.addRow(['']);

      ['B41'].map((key) => {
        worksheet.getCell(key).border = {
          top: { style: 'medium', color: { argb: '000000' } },
        };
      });
      worksheet.mergeCells('B41:Q41');

      const nomeclatura = worksheet.addRow([
        '',
        'NOMENCLATURA',
        '',
        '',
        '',
        '',
        '',
        '',
        'TOTAL DE DOCUMENTOS',
        '',
        '',
        '',
        '',
        '',
        row[i].siRealizado,
        '',
      ]);
      nomeclatura.getCell(2).font = {
        name: 'Calibri',
        size: 10,
        underline: 'none',
        bold: true,
        color: { argb: 'ffffff' },
      };
      nomeclatura.getCell(9).font = {
        name: 'Calibri',
        size: 10,
        underline: 'none',
        bold: true,
        color: { argb: 'ffffff' },
      };
      nomeclatura.getCell(15).font = {
        name: 'Calibri',
        size: 12,
        underline: 'none',
        bold: false,
      };
      nomeclatura.alignment = {
        horizontal: 'center',
        vertical: 'middle',
        wrapText: true,
      };

      ['B42'].map((key) => {
        worksheet.getCell(key).fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: { argb: '6FAE45' },
        };
        worksheet.getCell(key).border = {
          top: { style: 'medium', color: { argb: '000000' } },
          left: { style: 'medium', color: { argb: '000000' } },
          bottom: { style: 'medium', color: { argb: '000000' } },
          right: { style: 'medium', color: { argb: '000000' } },
        };
      });

      ['I42'].map((key) => {
        worksheet.getCell(key).fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: { argb: '6FAE45' },
        };
        worksheet.getCell(key).border = {
          top: { style: 'medium', color: { argb: '000000' } },
          left: { style: 'medium', color: { argb: '000000' } },
          bottom: { style: 'medium', color: { argb: '000000' } },
          right: { style: 'medium', color: { argb: '000000' } },
        };
      });

      ['O42'].map((key) => {
        worksheet.getCell(key).border = {
          top: { style: 'medium', color: { argb: '000000' } },
          left: { style: 'medium', color: { argb: '000000' } },
          bottom: { style: 'medium', color: { argb: '000000' } },
          right: { style: 'medium', color: { argb: '000000' } },
        };
      });

      const documentoI = worksheet.addRow([
        '',
        'P',
        'DOCUMENTO INTEGRADO',
        '',
        '',
        '',
        '',
        '',
        'TOTAL DE DOCUMENTOS INTEGRADOS',
        '',
        '',
        '',
        '',
        '',
        row[i].totalIntegrado,
        '',
      ]);
      documentoI.getCell(2).font = {
        name: 'Calibri',
        size: 10,
        underline: 'none',
        bold: false,
      };
      documentoI.getCell(3).font = {
        name: 'Calibri',
        size: 10,
        underline: 'none',
        bold: false,
      };
      documentoI.getCell(9).font = {
        name: 'Calibri',
        size: 10,
        underline: 'none',
        bold: true,
        color: { argb: 'ffffff' },
      };
      documentoI.getCell(15).font = {
        name: 'Calibri',
        size: 12,
        underline: 'none',
        bold: false,
      };
      documentoI.alignment = {
        horizontal: 'center',
        vertical: 'middle',
        wrapText: true,
      };

      ['B43'].map((key) => {
        worksheet.getCell(key).fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: { argb: '92d14f' },
        };
        worksheet.getCell(key).border = {
          top: { style: 'medium', color: { argb: '000000' } },
          left: { style: 'medium', color: { argb: '000000' } },
          bottom: { style: 'medium', color: { argb: '000000' } },
          right: { style: 'medium', color: { argb: '000000' } },
        };
      });

      ['C43'].map((key) => {
        worksheet.getCell(key).fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: { argb: 'ffffff' },
        };
        worksheet.getCell(key).border = {
          top: { style: 'medium', color: { argb: '000000' } },
          left: { style: 'medium', color: { argb: '000000' } },
          bottom: { style: 'medium', color: { argb: '000000' } },
          right: { style: 'medium', color: { argb: '000000' } },
        };
      });

      ['I43'].map((key) => {
        worksheet.getCell(key).fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: { argb: '6FAE45' },
        };
        worksheet.getCell(key).border = {
          top: { style: 'medium', color: { argb: '000000' } },
          left: { style: 'medium', color: { argb: '000000' } },
          bottom: { style: 'medium', color: { argb: '000000' } },
          right: { style: 'medium', color: { argb: '000000' } },
        };
      });

      ['O43'].map((key) => {
        worksheet.getCell(key).border = {
          top: { style: 'medium', color: { argb: '000000' } },
          left: { style: 'medium', color: { argb: '000000' } },
          bottom: { style: 'medium', color: { argb: '000000' } },
          right: { style: 'medium', color: { argb: '000000' } },
        };
      });

      const documentoNoI = worksheet.addRow([
        '',
        'O',
        'DOCUMENTO NO INTEGRADO',
        '',
        '',
        '',
        '',
        '',
        'TOTAL DE DOCUMENTOS NO INTEGRADOS',
        '',
        '',
        '',
        '',
        '',
        row[i].totalNoIntegrado,
        '',
      ]);
      documentoNoI.getCell(2).font = {
        name: 'Calibri',
        size: 10,
        underline: 'none',
        bold: false,
      };
      documentoNoI.getCell(3).font = {
        name: 'Calibri',
        size: 10,
        underline: 'none',
        bold: false,
      };
      documentoNoI.getCell(9).font = {
        name: 'Calibri',
        size: 10,
        underline: 'none',
        bold: true,
        color: { argb: 'ffffff' },
      };
      documentoNoI.getCell(15).font = {
        name: 'Calibri',
        size: 12,
        underline: 'none',
        bold: false,
      };
      documentoNoI.alignment = {
        horizontal: 'center',
        vertical: 'middle',
        wrapText: true,
      };

      ['B44'].map((key) => {
        worksheet.getCell(key).fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: { argb: 'fe0000' },
        };
        worksheet.getCell(key).border = {
          top: { style: 'medium', color: { argb: '000000' } },
          left: { style: 'medium', color: { argb: '000000' } },
          bottom: { style: 'medium', color: { argb: '000000' } },
          right: { style: 'medium', color: { argb: '000000' } },
        };
      });

      ['C44'].map((key) => {
        worksheet.getCell(key).fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: { argb: 'ffffff' },
        };
        worksheet.getCell(key).border = {
          top: { style: 'medium', color: { argb: '000000' } },
          left: { style: 'medium', color: { argb: '000000' } },
          bottom: { style: 'medium', color: { argb: '000000' } },
          right: { style: 'medium', color: { argb: '000000' } },
        };
      });

      ['I44'].map((key) => {
        worksheet.getCell(key).fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: { argb: '6FAE45' },
        };
        worksheet.getCell(key).border = {
          top: { style: 'medium', color: { argb: '000000' } },
          left: { style: 'medium', color: { argb: '000000' } },
          bottom: { style: 'medium', color: { argb: '000000' } },
          right: { style: 'medium', color: { argb: '000000' } },
        };
      });

      ['O44'].map((key) => {
        worksheet.getCell(key).border = {
          top: { style: 'medium', color: { argb: '000000' } },
          left: { style: 'medium', color: { argb: '000000' } },
          bottom: { style: 'medium', color: { argb: '000000' } },
          right: { style: 'medium', color: { argb: '000000' } },
        };
      });

      const documentoIN = worksheet.addRow([
        '',
        'IN',
        'DOCUMENTO CON INCUMPLIMIENTO',
        '',
        '',
        '',
        '',
        '',
        'TOTAL DE DOCUMENTOS CON INCUMPLIMIENTO',
        '',
        '',
        '',
        '',
        '',
        row[i].totalIncumplimiento,
        '',
      ]);
      documentoIN.getCell(2).font = {
        name: 'Calibri',
        size: 10,
        underline: 'none',
        bold: false,
      };
      documentoIN.getCell(3).font = {
        name: 'Calibri',
        size: 10,
        underline: 'none',
        bold: false,
      };
      documentoIN.getCell(9).font = {
        name: 'Calibri',
        size: 10,
        underline: 'none',
        bold: true,
        color: { argb: 'ffffff' },
      };
      documentoIN.getCell(15).font = {
        name: 'Calibri',
        size: 12,
        underline: 'none',
        bold: false,
      };
      documentoIN.alignment = {
        horizontal: 'center',
        vertical: 'middle',
        wrapText: true,
      };

      ['B45'].map((key) => {
        worksheet.getCell(key).fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: { argb: 'ffff01' },
        };
        worksheet.getCell(key).border = {
          top: { style: 'medium', color: { argb: '000000' } },
          left: { style: 'medium', color: { argb: '000000' } },
          bottom: { style: 'medium', color: { argb: '000000' } },
          right: { style: 'medium', color: { argb: '000000' } },
        };
      });

      ['C45'].map((key) => {
        worksheet.getCell(key).fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: { argb: 'ffffff' },
        };
        worksheet.getCell(key).border = {
          top: { style: 'medium', color: { argb: '000000' } },
          left: { style: 'medium', color: { argb: '000000' } },
          bottom: { style: 'medium', color: { argb: '000000' } },
          right: { style: 'medium', color: { argb: '000000' } },
        };
      });

      ['I45'].map((key) => {
        worksheet.getCell(key).fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: { argb: '6FAE45' },
        };
        worksheet.getCell(key).border = {
          top: { style: 'medium', color: { argb: '000000' } },
          left: { style: 'medium', color: { argb: '000000' } },
          bottom: { style: 'medium', color: { argb: '000000' } },
          right: { style: 'medium', color: { argb: '000000' } },
        };
      });

      ['O45'].map((key) => {
        worksheet.getCell(key).border = {
          top: { style: 'medium', color: { argb: '000000' } },
          left: { style: 'medium', color: { argb: '000000' } },
          bottom: { style: 'medium', color: { argb: '000000' } },
          right: { style: 'medium', color: { argb: '000000' } },
        };
      });

      const documentoNA = worksheet.addRow([
        '',
        'N/A',
        'DOCUMENTO NO APLICABLE',
        '',
        '',
        '',
        '',
        '',
        'TOTAL DE DOCUMENTOS  NO APLICABLES',
        '',
        '',
        '',
        '',
        '',
        row[i].totalNA,
        '',
      ]);
      documentoNA.getCell(2).font = {
        name: 'Calibri',
        size: 10,
        underline: 'none',
        bold: false,
      };
      documentoNA.getCell(3).font = {
        name: 'Calibri',
        size: 10,
        underline: 'none',
        bold: false,
      };
      documentoNA.getCell(9).font = {
        name: 'Calibri',
        size: 10,
        underline: 'none',
        bold: true,
        color: { argb: 'ffffff' },
      };
      documentoNA.getCell(15).font = {
        name: 'Calibri',
        size: 12,
        underline: 'none',
        bold: false,
      };
      documentoNA.alignment = {
        horizontal: 'center',
        vertical: 'middle',
        wrapText: true,
      };

      ['B46'].map((key) => {
        worksheet.getCell(key).fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: { argb: 'a5a5a5' },
        };
        worksheet.getCell(key).border = {
          top: { style: 'medium', color: { argb: '000000' } },
          left: { style: 'medium', color: { argb: '000000' } },
          bottom: { style: 'medium', color: { argb: '000000' } },
          right: { style: 'medium', color: { argb: '000000' } },
        };
      });

      ['C46'].map((key) => {
        worksheet.getCell(key).fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: { argb: 'ffffff' },
        };
        worksheet.getCell(key).border = {
          top: { style: 'medium', color: { argb: '000000' } },
          left: { style: 'medium', color: { argb: '000000' } },
          bottom: { style: 'medium', color: { argb: '000000' } },
          right: { style: 'medium', color: { argb: '000000' } },
        };
      });

      ['I46'].map((key) => {
        worksheet.getCell(key).fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: { argb: '6FAE45' },
        };
        worksheet.getCell(key).border = {
          top: { style: 'medium', color: { argb: '000000' } },
          left: { style: 'medium', color: { argb: '000000' } },
          bottom: { style: 'medium', color: { argb: '000000' } },
          right: { style: 'medium', color: { argb: '000000' } },
        };
      });

      ['O46'].map((key) => {
        worksheet.getCell(key).border = {
          top: { style: 'medium', color: { argb: '000000' } },
          left: { style: 'medium', color: { argb: '000000' } },
          bottom: { style: 'medium', color: { argb: '000000' } },
          right: { style: 'medium', color: { argb: '000000' } },
        };
      });

      const documentoNAT = worksheet.addRow([
        '',
        'NA/T',
        'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN',
        '',
        '',
        '',
        '',
        '',
        'TOTAL DE DOCUMENTOS  NO APLICABLES POR ESTAR EN TIEMPO DE INTEGRACIÓN',
        '',
        '',
        '',
        '',
        '',
        row[i].totalNAT,
        '',
      ]);
      documentoNAT.getCell(2).font = {
        name: 'Calibri',
        size: 10,
        underline: 'none',
        bold: false,
      };
      documentoNAT.getCell(3).font = {
        name: 'Calibri',
        size: 10,
        underline: 'none',
        bold: false,
      };
      documentoNAT.getCell(9).font = {
        name: 'Calibri',
        size: 10,
        underline: 'none',
        bold: true,
        color: { argb: 'ffffff' },
      };
      documentoNAT.getCell(15).font = {
        name: 'Calibri',
        size: 12,
        underline: 'none',
        bold: false,
      };
      documentoNAT.alignment = {
        horizontal: 'center',
        vertical: 'middle',
        wrapText: true,
      };

      ['B47'].map((key) => {
        worksheet.getCell(key).fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: { argb: '5a9bd5' },
        };
        worksheet.getCell(key).border = {
          top: { style: 'medium', color: { argb: '000000' } },
          left: { style: 'medium', color: { argb: '000000' } },
          bottom: { style: 'medium', color: { argb: '000000' } },
          right: { style: 'medium', color: { argb: '000000' } },
        };
      });

      ['C47'].map((key) => {
        worksheet.getCell(key).fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: { argb: 'ffffff' },
        };
        worksheet.getCell(key).border = {
          top: { style: 'medium', color: { argb: '000000' } },
          left: { style: 'medium', color: { argb: '000000' } },
          bottom: { style: 'medium', color: { argb: '000000' } },
          right: { style: 'medium', color: { argb: '000000' } },
        };
      });

      ['I47'].map((key) => {
        worksheet.getCell(key).fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: { argb: '6FAE45' },
        };
        worksheet.getCell(key).border = {
          top: { style: 'medium', color: { argb: '000000' } },
          left: { style: 'medium', color: { argb: '000000' } },
          bottom: { style: 'medium', color: { argb: '000000' } },
          right: { style: 'medium', color: { argb: '000000' } },
        };
      });

      ['O47'].map((key) => {
        worksheet.getCell(key).border = {
          top: { style: 'medium', color: { argb: '000000' } },
          left: { style: 'medium', color: { argb: '000000' } },
          bottom: { style: 'medium', color: { argb: '000000' } },
          right: { style: 'medium', color: { argb: '000000' } },
        };
      });

      const porcentaje = worksheet.addRow([
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        'PORCENTAJE DE INTEGRACIÓN',
        '',
        '',
        '',
        '',
        '',
        `${row[i].porcentajeTotal.toFixed(2)}%`,
        '',
      ]);
      porcentaje.getCell(9).font = {
        name: 'Calibri',
        size: 10,
        underline: 'none',
        bold: true,
        color: { argb: 'ffffff' },
      };
      porcentaje.getCell(15).font = {
        name: 'Calibri',
        size: 12,
        underline: 'none',
        bold: false,
      };
      porcentaje.alignment = {
        horizontal: 'center',
        vertical: 'middle',
        wrapText: true,
      };

      ['I48'].map((key) => {
        worksheet.getCell(key).fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: { argb: '6FAE45' },
        };
        worksheet.getCell(key).border = {
          top: { style: 'medium', color: { argb: '000000' } },
          left: { style: 'medium', color: { argb: '000000' } },
          bottom: { style: 'medium', color: { argb: '000000' } },
          right: { style: 'medium', color: { argb: '000000' } },
        };
      });

      ['O48'].map((key) => {
        worksheet.getCell(key).border = {
          top: { style: 'medium', color: { argb: '000000' } },
          left: { style: 'medium', color: { argb: '000000' } },
          bottom: { style: 'medium', color: { argb: '000000' } },
          right: { style: 'medium', color: { argb: '000000' } },
        };
      });

      worksheet.mergeCells('B42:E42');
      worksheet.mergeCells('I42:N42');
      worksheet.mergeCells('O42:P42');

      worksheet.mergeCells('C43:E43');
      worksheet.mergeCells('I43:N43');
      worksheet.mergeCells('O43:P43');

      worksheet.mergeCells('C44:E44');
      worksheet.mergeCells('I44:N44');
      worksheet.mergeCells('O44:P44');

      worksheet.mergeCells('C45:E45');
      worksheet.mergeCells('I45:N45');
      worksheet.mergeCells('O45:P45');

      worksheet.mergeCells('C46:E46');
      worksheet.mergeCells('I46:N46');
      worksheet.mergeCells('O46:P46');

      worksheet.mergeCells('C47:E47');
      worksheet.mergeCells('I47:N47');
      worksheet.mergeCells('O47:P47');

      worksheet.mergeCells('I48:N48');
      worksheet.mergeCells('O48:P48');

      worksheet.getRow(4).height = 24;
      worksheet.getRow(5).height = 24;
      worksheet.getRow(6).height = 24;
      worksheet.getRow(7).height = 22.5;
      worksheet.getRow(8).height = 22.5;
      worksheet.getRow(8).height = 22.5;
      worksheet.getRow(9).height = 21;
      worksheet.getRow(10).height = 22.5;
      worksheet.getRow(11).height = 22.5;
      worksheet.getRow(12).height = 54;
      worksheet.getRow(13).height = 54;
      worksheet.getRow(14).height = 52.5;
      worksheet.getRow(15).height = 57;
      worksheet.getRow(16).height = 58.5;
      worksheet.getRow(17).height = 49.5;
      worksheet.getRow(18).height = 79.5;
      worksheet.getRow(19).height = 64.5;
      worksheet.getRow(20).height = 36;
      worksheet.getRow(21).height = 108;
      worksheet.getRow(22).height = 100.5;
      worksheet.getRow(23).height = 135;
      worksheet.getRow(24).height = 69;
      worksheet.getRow(25).height = 66;
      worksheet.getRow(26).height = 85.5;
      worksheet.getRow(27).height = 76.5;
      worksheet.getRow(28).height = 138;
      worksheet.getRow(29).height = 138;
      worksheet.getRow(30).height = 93;
      worksheet.getRow(31).height = 58.5;
      worksheet.getRow(32).height = 63;
      worksheet.getRow(33).height = 57;
      worksheet.getRow(34).height = 46.5;
      worksheet.getRow(35).height = 28.5;
      worksheet.getRow(36).height = 28.5;
      worksheet.getRow(37).height = 28.5;
      worksheet.getRow(38).height = 39;
      worksheet.getRow(39).height = 37.5;
      worksheet.getRow(40).height = 48;
      worksheet.getRow(41).height = 27;
      worksheet.getRow(42).height = 48;
      worksheet.getRow(43).height = 45.75;
      worksheet.getRow(44).height = 48.75;
      worksheet.getRow(45).height = 47.25;
      worksheet.getRow(46).height = 53.25;
      worksheet.getRow(47).height = 63.75;
      worksheet.getRow(48).height = 51;
      worksheet.getRow(49).height = 30;

      worksheet.getColumn(1).width = 10;
      worksheet.getColumn(2).width = 11.29;
      worksheet.getColumn(3).width = 7.29;
      worksheet.getColumn(4).width = 11;
      worksheet.getColumn(5).width = 38.86;
      worksheet.getColumn(6).width = 4.43;
      worksheet.getColumn(7).width = 5;
      worksheet.getColumn(8).width = 15.29;
      worksheet.getColumn(9).width = 5;
      worksheet.getColumn(10).width = 11;
      worksheet.getColumn(11).width = 4.71;
      worksheet.getColumn(12).width = 22.71;
      worksheet.getColumn(13).width = 22.71;
      worksheet.getColumn(14).width = 4.43;
      worksheet.getColumn(15).width = 5;
      worksheet.getColumn(16).width = 15.86;
      worksheet.getColumn(17).width = 5.29;
      worksheet.getColumn(18).width = 0.5;
    }

    // Generate Excel File with given name
    workbook.xlsx.writeBuffer().then((data: any) => {
      const blob = new Blob([data], {
        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      });
      fs.saveAs(blob, 'expedientes-de-adquisiciones-filtrados.xlsx');
    });
  }

  async generateExcelO1(row: any, titulo: string) {
    const workbook = new Workbook();
    const title = 'INSTITUTO MEXICANO DEL SEGURO SOCIAL';
    const subtitle = titulo;
    const subtitle1 = 'GENERALES';
    const subtitle2 = 'N° DE OBRA';
    const subtitle3 = 'FONDO';
    const subtitle4 = 'EJERCICIO';
    const subtitle5 = 'TIPO DE ADJUDICACIÓN';
    const subtitle6 = 'ÁREA REQUIRENTE Y/O RESPONSABLE';
    const subtitle7 = 'N° DE CONTRATO';
    const subtitle8 = 'CONTRATISTA O PROVEEDOR';
    const subtitle9 = 'VIGENCIA';
    const subtitle10 = 'MONTO';
    const subtitle11 = 'NOMBRE DE LA OBRA';
    const subtitle12 = 'COMENTARIOS Y OBSERVACIONES';
    const header = [
      '',
      'ETAPA',
      'No',
      'DOCUMENTO',
      '',
      'SI',
      'NO',
      'INCUMPLE',
      'NA',
      'ETAPA',
      'No',
      'DOCUMENTO',
      '',
      'SI',
      'NO',
      'INCUMPLE',
      'NA',
    ];

    for (let i = 0; i < row.length; i++) {
      const worksheet = workbook.addWorksheet(`${row[i].noObra}-${i + 1}`);

      let puntosObras: any = await this.agruparDatosO(row[i].puntos);
      const data = [
        [
          '',
          puntosObras[0].type,
          1,
          puntosObras[0].bullet1,
          '',
          puntosObras[0].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
          puntosObras[0].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
          puntosObras[0].estatus === 'DOCUMENTO CON INCUMPLIMIENTO' ? 'IN' : '',
          puntosObras[0].estatus === 'DOCUMENTO NO APLICABLE'
            ? 'N/A'
            : puntosObras[0].estatus ===
              'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
            ? 'NA/T'
            : '',
          puntosObras[48].type,
          49,
          puntosObras[48].bullet1,
          '',
          puntosObras[48].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
          puntosObras[48].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
          puntosObras[48].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
            ? 'IN'
            : '',
          puntosObras[48].estatus === 'DOCUMENTO NO APLICABLE'
            ? 'N/A'
            : puntosObras[48].estatus ===
              'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
            ? 'NA/T'
            : '',
        ],
        [
          '',
          puntosObras[1].type,
          2,
          puntosObras[1].bullet1,
          '',
          puntosObras[1].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
          puntosObras[1].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
          puntosObras[1].estatus === 'DOCUMENTO CON INCUMPLIMIENTO' ? 'IN' : '',
          puntosObras[1].estatus === 'DOCUMENTO NO APLICABLE'
            ? 'N/A'
            : puntosObras[1].estatus ===
              'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
            ? 'NA/T'
            : '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
        ],
        [
          '',
          puntosObras[2].type,
          3,
          puntosObras[2].bullet1,
          '',
          puntosObras[2].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
          puntosObras[2].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
          puntosObras[2].estatus === 'DOCUMENTO CON INCUMPLIMIENTO' ? 'IN' : '',
          puntosObras[2].estatus === 'DOCUMENTO NO APLICABLE'
            ? 'N/A'
            : puntosObras[2].estatus ===
              'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
            ? 'NA/T'
            : '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
        ],
        [
          '',
          puntosObras[3].type,
          4,
          puntosObras[3].bullet1,
          '',
          puntosObras[3].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
          puntosObras[3].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
          puntosObras[3].estatus === 'DOCUMENTO CON INCUMPLIMIENTO' ? 'IN' : '',
          puntosObras[3].estatus === 'DOCUMENTO NO APLICABLE'
            ? 'N/A'
            : puntosObras[3].estatus ===
              'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
            ? 'NA/T'
            : '',
          puntosObras[49].type,
          50,
          puntosObras[49].bullet1,
          '',
          puntosObras[49].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
          puntosObras[49].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
          puntosObras[49].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
            ? 'IN'
            : '',
          puntosObras[49].estatus === 'DOCUMENTO NO APLICABLE'
            ? 'N/A'
            : puntosObras[49].estatus ===
              'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
            ? 'NA/T'
            : '',
        ],
        [
          '',
          puntosObras[4].type,
          5,
          puntosObras[4].bullet1,
          '',
          puntosObras[4].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
          puntosObras[4].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
          puntosObras[4].estatus === 'DOCUMENTO CON INCUMPLIMIENTO' ? 'IN' : '',
          puntosObras[4].estatus === 'DOCUMENTO NO APLICABLE'
            ? 'N/A'
            : puntosObras[4].estatus ===
              'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
            ? 'NA/T'
            : '',
          puntosObras[50].type,
          51,
          puntosObras[50].bullet1,
          '',
          puntosObras[50].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
          puntosObras[50].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
          puntosObras[50].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
            ? 'IN'
            : '',
          puntosObras[50].estatus === 'DOCUMENTO NO APLICABLE'
            ? 'N/A'
            : puntosObras[50].estatus ===
              'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
            ? 'NA/T'
            : '',
        ],
        [
          '',
          puntosObras[5].type,
          6,
          puntosObras[5].bullet1,
          '',
          puntosObras[5].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
          puntosObras[5].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
          puntosObras[5].estatus === 'DOCUMENTO CON INCUMPLIMIENTO' ? 'IN' : '',
          puntosObras[5].estatus === 'DOCUMENTO NO APLICABLE'
            ? 'N/A'
            : puntosObras[5].estatus ===
              'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
            ? 'NA/T'
            : '',
          puntosObras[51].type,
          52,
          puntosObras[51].bullet1,
          '',
          puntosObras[51].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
          puntosObras[51].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
          puntosObras[51].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
            ? 'IN'
            : '',
          puntosObras[51].estatus === 'DOCUMENTO NO APLICABLE'
            ? 'N/A'
            : puntosObras[51].estatus ===
              'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
            ? 'NA/T'
            : '',
        ],
        [
          '',
          puntosObras[6].type,
          7,
          puntosObras[6].bullet1,
          '',
          puntosObras[6].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
          puntosObras[6].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
          puntosObras[6].estatus === 'DOCUMENTO CON INCUMPLIMIENTO' ? 'IN' : '',
          puntosObras[6].estatus === 'DOCUMENTO NO APLICABLE'
            ? 'N/A'
            : puntosObras[6].estatus ===
              'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
            ? 'NA/T'
            : '',
          puntosObras[52].type,
          53,
          puntosObras[52].bullet1,
          '',
          puntosObras[52].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
          puntosObras[52].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
          puntosObras[52].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
            ? 'IN'
            : '',
          puntosObras[52].estatus === 'DOCUMENTO NO APLICABLE'
            ? 'N/A'
            : puntosObras[52].estatus ===
              'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
            ? 'NA/T'
            : '',
        ],
        [
          '',
          puntosObras[7].type,
          8,
          puntosObras[7].bullet1,
          '',
          puntosObras[7].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
          puntosObras[7].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
          puntosObras[7].estatus === 'DOCUMENTO CON INCUMPLIMIENTO' ? 'IN' : '',
          puntosObras[7].estatus === 'DOCUMENTO NO APLICABLE'
            ? 'N/A'
            : puntosObras[7].estatus ===
              'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
            ? 'NA/T'
            : '',
          puntosObras[53].type,
          54,
          puntosObras[53].bullet1,
          '',
          puntosObras[53].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
          puntosObras[53].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
          puntosObras[53].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
            ? 'IN'
            : '',
          puntosObras[53].estatus === 'DOCUMENTO NO APLICABLE'
            ? 'N/A'
            : puntosObras[53].estatus ===
              'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
            ? 'NA/T'
            : '',
        ],
        [
          '',
          puntosObras[8].type,
          9,
          puntosObras[8].bullet1,
          '',
          puntosObras[8].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
          puntosObras[8].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
          puntosObras[8].estatus === 'DOCUMENTO CON INCUMPLIMIENTO' ? 'IN' : '',
          puntosObras[8].estatus === 'DOCUMENTO NO APLICABLE'
            ? 'N/A'
            : puntosObras[8].estatus ===
              'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
            ? 'NA/T'
            : '',
          puntosObras[54].type,
          55,
          puntosObras[54].bullet1,
          '',
          puntosObras[54].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
          puntosObras[54].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
          puntosObras[54].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
            ? 'IN'
            : '',
          puntosObras[54].estatus === 'DOCUMENTO NO APLICABLE'
            ? 'N/A'
            : puntosObras[54].estatus ===
              'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
            ? 'NA/T'
            : '',
        ],
        [
          '',
          puntosObras[9].type,
          10,
          puntosObras[9].bullet1,
          '',
          puntosObras[9].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
          puntosObras[9].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
          puntosObras[9].estatus === 'DOCUMENTO CON INCUMPLIMIENTO' ? 'IN' : '',
          puntosObras[9].estatus === 'DOCUMENTO NO APLICABLE'
            ? 'N/A'
            : puntosObras[9].estatus ===
              'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
            ? 'NA/T'
            : '',
          puntosObras[55].type,
          56,
          puntosObras[55].bullet1,
          '',
          puntosObras[55].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
          puntosObras[55].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
          puntosObras[55].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
            ? 'IN'
            : '',
          puntosObras[55].estatus === 'DOCUMENTO NO APLICABLE'
            ? 'N/A'
            : puntosObras[55].estatus ===
              'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
            ? 'NA/T'
            : '',
        ],
        [
          '',
          puntosObras[10].type,
          11,
          puntosObras[10].bullet1,
          '',
          puntosObras[10].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
          puntosObras[10].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
          puntosObras[10].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
            ? 'IN'
            : '',
          puntosObras[10].estatus === 'DOCUMENTO NO APLICABLE'
            ? 'N/A'
            : puntosObras[10].estatus ===
              'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
            ? 'NA/T'
            : '',
          puntosObras[56].type,
          57,
          puntosObras[56].bullet1,
          '',
          puntosObras[56].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
          puntosObras[56].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
          puntosObras[56].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
            ? 'IN'
            : '',
          puntosObras[56].estatus === 'DOCUMENTO NO APLICABLE'
            ? 'N/A'
            : puntosObras[56].estatus ===
              'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
            ? 'NA/T'
            : '',
        ],
        [
          '',
          puntosObras[11].type,
          12,
          puntosObras[11].bullet1,
          '',
          puntosObras[11].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
          puntosObras[11].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
          puntosObras[11].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
            ? 'IN'
            : '',
          puntosObras[11].estatus === 'DOCUMENTO NO APLICABLE'
            ? 'N/A'
            : puntosObras[11].estatus ===
              'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
            ? 'NA/T'
            : '',
          puntosObras[57].type,
          58,
          puntosObras[57].bullet1,
          '',
          puntosObras[57].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
          puntosObras[57].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
          puntosObras[57].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
            ? 'IN'
            : '',
          puntosObras[57].estatus === 'DOCUMENTO NO APLICABLE'
            ? 'N/A'
            : puntosObras[57].estatus ===
              'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
            ? 'NA/T'
            : '',
        ],
        [
          '',
          puntosObras[12].type,
          13,
          puntosObras[12].bullet1,
          '',
          puntosObras[12].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
          puntosObras[12].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
          puntosObras[12].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
            ? 'IN'
            : '',
          puntosObras[12].estatus === 'DOCUMENTO NO APLICABLE'
            ? 'N/A'
            : puntosObras[12].estatus ===
              'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
            ? 'NA/T'
            : '',
          puntosObras[58].type,
          59,
          puntosObras[58].bullet1,
          '',
          puntosObras[58].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
          puntosObras[58].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
          puntosObras[58].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
            ? 'IN'
            : '',
          puntosObras[58].estatus === 'DOCUMENTO NO APLICABLE'
            ? 'N/A'
            : puntosObras[58].estatus ===
              'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
            ? 'NA/T'
            : '',
        ],
        [
          '',
          puntosObras[13].type,
          14,
          puntosObras[13].bullet1,
          '',
          puntosObras[13].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
          puntosObras[13].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
          puntosObras[13].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
            ? 'IN'
            : '',
          puntosObras[13].estatus === 'DOCUMENTO NO APLICABLE'
            ? 'N/A'
            : puntosObras[13].estatus ===
              'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
            ? 'NA/T'
            : '',
          puntosObras[59].type,
          60,
          puntosObras[59].bullet1,
          '',
          puntosObras[59].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
          puntosObras[59].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
          puntosObras[59].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
            ? 'IN'
            : '',
          puntosObras[59].estatus === 'DOCUMENTO NO APLICABLE'
            ? 'N/A'
            : puntosObras[59].estatus ===
              'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
            ? 'NA/T'
            : '',
        ],
        [
          '',
          puntosObras[14].type,
          15,
          puntosObras[14].bullet1,
          '',
          puntosObras[14].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
          puntosObras[14].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
          puntosObras[14].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
            ? 'IN'
            : '',
          puntosObras[14].estatus === 'DOCUMENTO NO APLICABLE'
            ? 'N/A'
            : puntosObras[14].estatus ===
              'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
            ? 'NA/T'
            : '',
          puntosObras[60].type,
          61,
          puntosObras[60].bullet1,
          '',
          puntosObras[60].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
          puntosObras[60].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
          puntosObras[60].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
            ? 'IN'
            : '',
          puntosObras[60].estatus === 'DOCUMENTO NO APLICABLE'
            ? 'N/A'
            : puntosObras[60].estatus ===
              'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
            ? 'NA/T'
            : '',
        ],
        [
          '',
          puntosObras[15].type,
          16,
          puntosObras[15].bullet1,
          '',
          puntosObras[15].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
          puntosObras[15].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
          puntosObras[15].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
            ? 'IN'
            : '',
          puntosObras[15].estatus === 'DOCUMENTO NO APLICABLE'
            ? 'N/A'
            : puntosObras[15].estatus ===
              'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
            ? 'NA/T'
            : '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
        ],
        [
          '',
          puntosObras[16].type,
          17,
          puntosObras[16].bullet1,
          '',
          puntosObras[16].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
          puntosObras[16].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
          puntosObras[16].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
            ? 'IN'
            : '',
          puntosObras[16].estatus === 'DOCUMENTO NO APLICABLE'
            ? 'N/A'
            : puntosObras[16].estatus ===
              'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
            ? 'NA/T'
            : '',
          puntosObras[61].type,
          62,
          puntosObras[61].bullet1,
          '',
          puntosObras[61].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
          puntosObras[61].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
          puntosObras[61].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
            ? 'IN'
            : '',
          puntosObras[61].estatus === 'DOCUMENTO NO APLICABLE'
            ? 'N/A'
            : puntosObras[61].estatus ===
              'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
            ? 'NA/T'
            : '',
        ],
        [
          '',
          puntosObras[17].type,
          18,
          puntosObras[17].bullet1,
          '',
          puntosObras[17].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
          puntosObras[17].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
          puntosObras[17].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
            ? 'IN'
            : '',
          puntosObras[17].estatus === 'DOCUMENTO NO APLICABLE'
            ? 'N/A'
            : puntosObras[17].estatus ===
              'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
            ? 'NA/T'
            : '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
        ],
        [
          '',
          puntosObras[18].type,
          19,
          puntosObras[18].bullet1,
          '',
          puntosObras[18].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
          puntosObras[18].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
          puntosObras[18].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
            ? 'IN'
            : '',
          puntosObras[18].estatus === 'DOCUMENTO NO APLICABLE'
            ? 'N/A'
            : puntosObras[18].estatus ===
              'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
            ? 'NA/T'
            : '',
          puntosObras[62].type,
          63,
          puntosObras[62].bullet1,
          '',
          puntosObras[62].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
          puntosObras[62].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
          puntosObras[62].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
            ? 'IN'
            : '',
          puntosObras[62].estatus === 'DOCUMENTO NO APLICABLE'
            ? 'N/A'
            : puntosObras[62].estatus ===
              'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
            ? 'NA/T'
            : '',
        ],
        [
          '',
          puntosObras[19].type,
          20,
          puntosObras[19].bullet1,
          '',
          puntosObras[19].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
          puntosObras[19].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
          puntosObras[19].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
            ? 'IN'
            : '',
          puntosObras[19].estatus === 'DOCUMENTO NO APLICABLE'
            ? 'N/A'
            : puntosObras[19].estatus ===
              'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
            ? 'NA/T'
            : '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
        ],
        [
          '',
          puntosObras[20].type,
          21,
          puntosObras[20].bullet1,
          '',
          puntosObras[20].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
          puntosObras[20].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
          puntosObras[20].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
            ? 'IN'
            : '',
          puntosObras[20].estatus === 'DOCUMENTO NO APLICABLE'
            ? 'N/A'
            : puntosObras[20].estatus ===
              'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
            ? 'NA/T'
            : '',
          puntosObras[63].type,
          64,
          puntosObras[63].bullet1,
          '',
          puntosObras[63].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
          puntosObras[63].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
          puntosObras[63].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
            ? 'IN'
            : '',
          puntosObras[63].estatus === 'DOCUMENTO NO APLICABLE'
            ? 'N/A'
            : puntosObras[63].estatus ===
              'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
            ? 'NA/T'
            : '',
        ],
        [
          '',
          puntosObras[21].type,
          22,
          puntosObras[21].bullet1,
          '',
          puntosObras[21].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
          puntosObras[21].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
          puntosObras[21].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
            ? 'IN'
            : '',
          puntosObras[21].estatus === 'DOCUMENTO NO APLICABLE'
            ? 'N/A'
            : puntosObras[21].estatus ===
              'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
            ? 'NA/T'
            : '',
          puntosObras[64].type,
          65,
          puntosObras[64].bullet1,
          '',
          puntosObras[64].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
          puntosObras[64].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
          puntosObras[64].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
            ? 'IN'
            : '',
          puntosObras[64].estatus === 'DOCUMENTO NO APLICABLE'
            ? 'N/A'
            : puntosObras[64].estatus ===
              'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
            ? 'NA/T'
            : '',
        ],
        [
          '',
          puntosObras[22].type,
          23,
          puntosObras[22].bullet1,
          '',
          puntosObras[22].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
          puntosObras[22].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
          puntosObras[22].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
            ? 'IN'
            : '',
          puntosObras[22].estatus === 'DOCUMENTO NO APLICABLE'
            ? 'N/A'
            : puntosObras[22].estatus ===
              'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
            ? 'NA/T'
            : '',
          puntosObras[65].type,
          66,
          puntosObras[65].bullet1,
          '',
          puntosObras[65].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
          puntosObras[65].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
          puntosObras[65].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
            ? 'IN'
            : '',
          puntosObras[65].estatus === 'DOCUMENTO NO APLICABLE'
            ? 'N/A'
            : puntosObras[65].estatus ===
              'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
            ? 'NA/T'
            : '',
        ],
        [
          '',
          puntosObras[23].type,
          24,
          puntosObras[23].bullet1,
          '',
          puntosObras[23].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
          puntosObras[23].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
          puntosObras[23].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
            ? 'IN'
            : '',
          puntosObras[23].estatus === 'DOCUMENTO NO APLICABLE'
            ? 'N/A'
            : puntosObras[23].estatus ===
              'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
            ? 'NA/T'
            : '',
          puntosObras[66].type,
          67,
          puntosObras[66].bullet1,
          '',
          puntosObras[66].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
          puntosObras[66].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
          puntosObras[66].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
            ? 'IN'
            : '',
          puntosObras[66].estatus === 'DOCUMENTO NO APLICABLE'
            ? 'N/A'
            : puntosObras[66].estatus ===
              'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
            ? 'NA/T'
            : '',
        ],
        [
          '',
          puntosObras[24].type,
          25,
          puntosObras[24].bullet1,
          '',
          puntosObras[24].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
          puntosObras[24].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
          puntosObras[24].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
            ? 'IN'
            : '',
          puntosObras[24].estatus === 'DOCUMENTO NO APLICABLE'
            ? 'N/A'
            : puntosObras[24].estatus ===
              'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
            ? 'NA/T'
            : '',
          puntosObras[67].type,
          68,
          puntosObras[67].bullet1,
          '',
          puntosObras[67].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
          puntosObras[67].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
          puntosObras[67].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
            ? 'IN'
            : '',
          puntosObras[67].estatus === 'DOCUMENTO NO APLICABLE'
            ? 'N/A'
            : puntosObras[67].estatus ===
              'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
            ? 'NA/T'
            : '',
        ],
        [
          '',
          puntosObras[25].type,
          26,
          puntosObras[25].bullet1,
          '',
          puntosObras[25].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
          puntosObras[25].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
          puntosObras[25].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
            ? 'IN'
            : '',
          puntosObras[25].estatus === 'DOCUMENTO NO APLICABLE'
            ? 'N/A'
            : puntosObras[25].estatus ===
              'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
            ? 'NA/T'
            : '',
          puntosObras[68].type,
          69,
          puntosObras[68].bullet1,
          '',
          puntosObras[68].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
          puntosObras[68].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
          puntosObras[68].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
            ? 'IN'
            : '',
          puntosObras[68].estatus === 'DOCUMENTO NO APLICABLE'
            ? 'N/A'
            : puntosObras[68].estatus ===
              'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
            ? 'NA/T'
            : '',
        ],
        [
          '',
          puntosObras[26].type,
          27,
          puntosObras[26].bullet1,
          '',
          puntosObras[26].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
          puntosObras[26].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
          puntosObras[26].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
            ? 'IN'
            : '',
          puntosObras[26].estatus === 'DOCUMENTO NO APLICABLE'
            ? 'N/A'
            : puntosObras[26].estatus ===
              'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
            ? 'NA/T'
            : '',
          puntosObras[69].type,
          70,
          puntosObras[69].bullet1,
          '',
          puntosObras[69].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
          puntosObras[69].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
          puntosObras[69].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
            ? 'IN'
            : '',
          puntosObras[69].estatus === 'DOCUMENTO NO APLICABLE'
            ? 'N/A'
            : puntosObras[69].estatus ===
              'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
            ? 'NA/T'
            : '',
        ],
        [
          '',
          puntosObras[27].type,
          28,
          puntosObras[27].bullet1,
          '',
          puntosObras[27].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
          puntosObras[27].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
          puntosObras[27].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
            ? 'IN'
            : '',
          puntosObras[27].estatus === 'DOCUMENTO NO APLICABLE'
            ? 'N/A'
            : puntosObras[27].estatus ===
              'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
            ? 'NA/T'
            : '',
          puntosObras[70].type,
          71,
          puntosObras[70].bullet1,
          '',
          puntosObras[70].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
          puntosObras[70].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
          puntosObras[70].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
            ? 'IN'
            : '',
          puntosObras[70].estatus === 'DOCUMENTO NO APLICABLE'
            ? 'N/A'
            : puntosObras[70].estatus ===
              'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
            ? 'NA/T'
            : '',
        ],
        [
          '',
          puntosObras[28].type,
          29,
          puntosObras[28].bullet1,
          '',
          puntosObras[28].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
          puntosObras[28].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
          puntosObras[28].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
            ? 'IN'
            : '',
          puntosObras[28].estatus === 'DOCUMENTO NO APLICABLE'
            ? 'N/A'
            : puntosObras[28].estatus ===
              'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
            ? 'NA/T'
            : '',
          puntosObras[71].type,
          72,
          puntosObras[71].bullet1,
          '',
          puntosObras[71].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
          puntosObras[71].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
          puntosObras[71].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
            ? 'IN'
            : '',
          puntosObras[71].estatus === 'DOCUMENTO NO APLICABLE'
            ? 'N/A'
            : puntosObras[71].estatus ===
              'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
            ? 'NA/T'
            : '',
        ],
        [
          '',
          puntosObras[29].type,
          30,
          puntosObras[29].bullet1,
          '',
          puntosObras[29].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
          puntosObras[29].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
          puntosObras[29].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
            ? 'IN'
            : '',
          puntosObras[29].estatus === 'DOCUMENTO NO APLICABLE'
            ? 'N/A'
            : puntosObras[29].estatus ===
              'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
            ? 'NA/T'
            : '',
          puntosObras[72].type,
          73,
          puntosObras[72].bullet1,
          '',
          puntosObras[72].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
          puntosObras[72].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
          puntosObras[72].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
            ? 'IN'
            : '',
          puntosObras[72].estatus === 'DOCUMENTO NO APLICABLE'
            ? 'N/A'
            : puntosObras[72].estatus ===
              'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
            ? 'NA/T'
            : '',
        ],
        [
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          puntosObras[73].type,
          74,
          puntosObras[73].bullet1,
          '',
          puntosObras[73].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
          puntosObras[73].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
          puntosObras[73].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
            ? 'IN'
            : '',
          puntosObras[73].estatus === 'DOCUMENTO NO APLICABLE'
            ? 'N/A'
            : puntosObras[73].estatus ===
              'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
            ? 'NA/T'
            : '',
        ],
        [
          '',
          puntosObras[30].type,
          31,
          puntosObras[30].bullet1,
          '',
          puntosObras[30].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
          puntosObras[30].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
          puntosObras[30].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
            ? 'IN'
            : '',
          puntosObras[30].estatus === 'DOCUMENTO NO APLICABLE'
            ? 'N/A'
            : puntosObras[30].estatus ===
              'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
            ? 'NA/T'
            : '',
          puntosObras[74].type,
          75,
          puntosObras[74].bullet1,
          '',
          puntosObras[74].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
          puntosObras[74].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
          puntosObras[74].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
            ? 'IN'
            : '',
          puntosObras[74].estatus === 'DOCUMENTO NO APLICABLE'
            ? 'N/A'
            : puntosObras[74].estatus ===
              'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
            ? 'NA/T'
            : '',
        ],
        [
          '',
          puntosObras[31].type,
          32,
          puntosObras[31].bullet1,
          '',
          puntosObras[31].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
          puntosObras[31].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
          puntosObras[31].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
            ? 'IN'
            : '',
          puntosObras[31].estatus === 'DOCUMENTO NO APLICABLE'
            ? 'N/A'
            : puntosObras[31].estatus ===
              'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
            ? 'NA/T'
            : '',
          puntosObras[75].type,
          76,
          puntosObras[75].bullet1,
          '',
          puntosObras[75].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
          puntosObras[75].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
          puntosObras[75].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
            ? 'IN'
            : '',
          puntosObras[75].estatus === 'DOCUMENTO NO APLICABLE'
            ? 'N/A'
            : puntosObras[75].estatus ===
              'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
            ? 'NA/T'
            : '',
        ],
        [
          '',
          puntosObras[32].type,
          33,
          puntosObras[32].bullet1,
          '',
          puntosObras[32].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
          puntosObras[32].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
          puntosObras[32].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
            ? 'IN'
            : '',
          puntosObras[32].estatus === 'DOCUMENTO NO APLICABLE'
            ? 'N/A'
            : puntosObras[32].estatus ===
              'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
            ? 'NA/T'
            : '',
          puntosObras[76].type,
          77,
          puntosObras[76].bullet1,
          '',
          puntosObras[76].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
          puntosObras[76].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
          puntosObras[76].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
            ? 'IN'
            : '',
          puntosObras[76].estatus === 'DOCUMENTO NO APLICABLE'
            ? 'N/A'
            : puntosObras[76].estatus ===
              'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
            ? 'NA/T'
            : '',
        ],
        [
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          puntosObras[77].type,
          78,
          puntosObras[77].bullet1,
          '',
          puntosObras[77].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
          puntosObras[77].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
          puntosObras[77].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
            ? 'IN'
            : '',
          puntosObras[77].estatus === 'DOCUMENTO NO APLICABLE'
            ? 'N/A'
            : puntosObras[77].estatus ===
              'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
            ? 'NA/T'
            : '',
        ],
        [
          '',
          puntosObras[33].type,
          34,
          puntosObras[33].bullet1,
          '',
          puntosObras[33].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
          puntosObras[33].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
          puntosObras[33].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
            ? 'IN'
            : '',
          puntosObras[33].estatus === 'DOCUMENTO NO APLICABLE'
            ? 'N/A'
            : puntosObras[33].estatus ===
              'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
            ? 'NA/T'
            : '',
          puntosObras[78].type,
          79,
          puntosObras[78].bullet1,
          '',
          puntosObras[78].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
          puntosObras[78].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
          puntosObras[78].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
            ? 'IN'
            : '',
          puntosObras[78].estatus === 'DOCUMENTO NO APLICABLE'
            ? 'N/A'
            : puntosObras[78].estatus ===
              'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
            ? 'NA/T'
            : '',
        ],
        [
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          puntosObras[79].type,
          80,
          puntosObras[79].bullet1,
          '',
          puntosObras[79].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
          puntosObras[79].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
          puntosObras[79].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
            ? 'IN'
            : '',
          puntosObras[79].estatus === 'DOCUMENTO NO APLICABLE'
            ? 'N/A'
            : puntosObras[79].estatus ===
              'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
            ? 'NA/T'
            : '',
        ],
        [
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          puntosObras[80].type,
          81,
          puntosObras[80].bullet1,
          '',
          puntosObras[80].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
          puntosObras[80].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
          puntosObras[80].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
            ? 'IN'
            : '',
          puntosObras[80].estatus === 'DOCUMENTO NO APLICABLE'
            ? 'N/A'
            : puntosObras[80].estatus ===
              'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
            ? 'NA/T'
            : '',
        ],
        [
          '',
          puntosObras[34].type,
          35,
          puntosObras[34].bullet1,
          '',
          puntosObras[34].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
          puntosObras[34].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
          puntosObras[34].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
            ? 'IN'
            : '',
          puntosObras[34].estatus === 'DOCUMENTO NO APLICABLE'
            ? 'N/A'
            : puntosObras[34].estatus ===
              'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
            ? 'NA/T'
            : '',
          puntosObras[81].type,
          82,
          puntosObras[81].bullet1,
          '',
          puntosObras[81].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
          puntosObras[81].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
          puntosObras[81].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
            ? 'IN'
            : '',
          puntosObras[81].estatus === 'DOCUMENTO NO APLICABLE'
            ? 'N/A'
            : puntosObras[81].estatus ===
              'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
            ? 'NA/T'
            : '',
        ],
        [
          '',
          puntosObras[35].type,
          36,
          puntosObras[35].bullet1,
          '',
          puntosObras[35].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
          puntosObras[35].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
          puntosObras[35].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
            ? 'IN'
            : '',
          puntosObras[35].estatus === 'DOCUMENTO NO APLICABLE'
            ? 'N/A'
            : puntosObras[35].estatus ===
              'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
            ? 'NA/T'
            : '',
          puntosObras[82].type,
          83,
          puntosObras[82].bullet1,
          '',
          puntosObras[82].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
          puntosObras[82].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
          puntosObras[82].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
            ? 'IN'
            : '',
          puntosObras[82].estatus === 'DOCUMENTO NO APLICABLE'
            ? 'N/A'
            : puntosObras[82].estatus ===
              'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
            ? 'NA/T'
            : '',
        ],
        [
          '',
          puntosObras[36].type,
          37,
          puntosObras[36].bullet1,
          '',
          puntosObras[36].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
          puntosObras[36].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
          puntosObras[36].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
            ? 'IN'
            : '',
          puntosObras[36].estatus === 'DOCUMENTO NO APLICABLE'
            ? 'N/A'
            : puntosObras[36].estatus ===
              'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
            ? 'NA/T'
            : '',
          puntosObras[83].type,
          84,
          puntosObras[83].bullet1,
          '',
          puntosObras[83].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
          puntosObras[83].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
          puntosObras[83].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
            ? 'IN'
            : '',
          puntosObras[83].estatus === 'DOCUMENTO NO APLICABLE'
            ? 'N/A'
            : puntosObras[83].estatus ===
              'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
            ? 'NA/T'
            : '',
        ],
        [
          '',
          puntosObras[37].type,
          38,
          puntosObras[37].bullet1,
          '',
          puntosObras[37].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
          puntosObras[37].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
          puntosObras[37].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
            ? 'IN'
            : '',
          puntosObras[37].estatus === 'DOCUMENTO NO APLICABLE'
            ? 'N/A'
            : puntosObras[37].estatus ===
              'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
            ? 'NA/T'
            : '',
          puntosObras[84].type,
          85,
          puntosObras[84].bullet1,
          '',
          puntosObras[84].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
          puntosObras[84].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
          puntosObras[84].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
            ? 'IN'
            : '',
          puntosObras[84].estatus === 'DOCUMENTO NO APLICABLE'
            ? 'N/A'
            : puntosObras[84].estatus ===
              'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
            ? 'NA/T'
            : '',
        ],
        [
          '',
          puntosObras[38].type,
          39,
          puntosObras[38].bullet1,
          '',
          puntosObras[38].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
          puntosObras[38].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
          puntosObras[38].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
            ? 'IN'
            : '',
          puntosObras[38].estatus === 'DOCUMENTO NO APLICABLE'
            ? 'N/A'
            : puntosObras[38].estatus ===
              'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
            ? 'NA/T'
            : '',
          puntosObras[85].type,
          86,
          puntosObras[85].bullet1,
          '',
          puntosObras[85].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
          puntosObras[85].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
          puntosObras[85].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
            ? 'IN'
            : '',
          puntosObras[85].estatus === 'DOCUMENTO NO APLICABLE'
            ? 'N/A'
            : puntosObras[85].estatus ===
              'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
            ? 'NA/T'
            : '',
        ],
        [
          '',
          puntosObras[39].type,
          40,
          puntosObras[39].bullet1,
          '',
          puntosObras[39].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
          puntosObras[39].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
          puntosObras[39].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
            ? 'IN'
            : '',
          puntosObras[39].estatus === 'DOCUMENTO NO APLICABLE'
            ? 'N/A'
            : puntosObras[39].estatus ===
              'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
            ? 'NA/T'
            : '',
          puntosObras[86].type,
          87,
          puntosObras[86].bullet1,
          '',
          puntosObras[86].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
          puntosObras[86].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
          puntosObras[86].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
            ? 'IN'
            : '',
          puntosObras[86].estatus === 'DOCUMENTO NO APLICABLE'
            ? 'N/A'
            : puntosObras[86].estatus ===
              'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
            ? 'NA/T'
            : '',
        ],
        [
          '',
          puntosObras[40].type,
          41,
          puntosObras[40].bullet1,
          '',
          puntosObras[40].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
          puntosObras[40].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
          puntosObras[40].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
            ? 'IN'
            : '',
          puntosObras[40].estatus === 'DOCUMENTO NO APLICABLE'
            ? 'N/A'
            : puntosObras[40].estatus ===
              'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
            ? 'NA/T'
            : '',
          puntosObras[87].type,
          88,
          puntosObras[87].bullet1,
          '',
          puntosObras[87].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
          puntosObras[87].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
          puntosObras[87].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
            ? 'IN'
            : '',
          puntosObras[87].estatus === 'DOCUMENTO NO APLICABLE'
            ? 'N/A'
            : puntosObras[87].estatus ===
              'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
            ? 'NA/T'
            : '',
        ],
        [
          '',
          puntosObras[41].type,
          42,
          puntosObras[41].bullet1,
          '',
          puntosObras[41].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
          puntosObras[41].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
          puntosObras[41].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
            ? 'IN'
            : '',
          puntosObras[41].estatus === 'DOCUMENTO NO APLICABLE'
            ? 'N/A'
            : puntosObras[41].estatus ===
              'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
            ? 'NA/T'
            : '',
          puntosObras[88].type,
          89,
          puntosObras[88].bullet1,
          '',
          puntosObras[88].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
          puntosObras[88].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
          puntosObras[88].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
            ? 'IN'
            : '',
          puntosObras[88].estatus === 'DOCUMENTO NO APLICABLE'
            ? 'N/A'
            : puntosObras[88].estatus ===
              'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
            ? 'NA/T'
            : '',
        ],
        [
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          puntosObras[89].type,
          90,
          puntosObras[89].bullet1,
          '',
          puntosObras[89].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
          puntosObras[89].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
          puntosObras[89].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
            ? 'IN'
            : '',
          puntosObras[89].estatus === 'DOCUMENTO NO APLICABLE'
            ? 'N/A'
            : puntosObras[89].estatus ===
              'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
            ? 'NA/T'
            : '',
        ],
        [
          '',
          puntosObras[42].type,
          43,
          puntosObras[42].bullet1,
          '',
          puntosObras[42].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
          puntosObras[42].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
          puntosObras[42].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
            ? 'IN'
            : '',
          puntosObras[42].estatus === 'DOCUMENTO NO APLICABLE'
            ? 'N/A'
            : puntosObras[42].estatus ===
              'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
            ? 'NA/T'
            : '',
          puntosObras[90].type,
          91,
          puntosObras[90].bullet1,
          '',
          puntosObras[90].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
          puntosObras[90].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
          puntosObras[90].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
            ? 'IN'
            : '',
          puntosObras[90].estatus === 'DOCUMENTO NO APLICABLE'
            ? 'N/A'
            : puntosObras[90].estatus ===
              'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
            ? 'NA/T'
            : '',
        ],
        [
          '',
          puntosObras[43].type,
          44,
          puntosObras[43].bullet1,
          '',
          puntosObras[43].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
          puntosObras[43].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
          puntosObras[43].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
            ? 'IN'
            : '',
          puntosObras[43].estatus === 'DOCUMENTO NO APLICABLE'
            ? 'N/A'
            : puntosObras[43].estatus ===
              'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
            ? 'NA/T'
            : '',
          puntosObras[91].type,
          92,
          puntosObras[91].bullet1,
          '',
          puntosObras[91].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
          puntosObras[91].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
          puntosObras[91].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
            ? 'IN'
            : '',
          puntosObras[91].estatus === 'DOCUMENTO NO APLICABLE'
            ? 'N/A'
            : puntosObras[91].estatus ===
              'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
            ? 'NA/T'
            : '',
        ],
        [
          '',
          puntosObras[44].type,
          45,
          puntosObras[44].bullet1,
          '',
          puntosObras[44].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
          puntosObras[44].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
          puntosObras[44].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
            ? 'IN'
            : '',
          puntosObras[44].estatus === 'DOCUMENTO NO APLICABLE'
            ? 'N/A'
            : puntosObras[44].estatus ===
              'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
            ? 'NA/T'
            : '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
        ],
        [
          '',
          puntosObras[45].type,
          46,
          puntosObras[45].bullet1,
          '',
          puntosObras[45].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
          puntosObras[45].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
          puntosObras[45].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
            ? 'IN'
            : '',
          puntosObras[45].estatus === 'DOCUMENTO NO APLICABLE'
            ? 'N/A'
            : puntosObras[45].estatus ===
              'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
            ? 'NA/T'
            : '',
          row[i].observaciones,
          '',
          '',
          '',
          '',
          '',
          '',
          '',
        ],
        [
          '',
          puntosObras[46].type,
          47,
          puntosObras[46].bullet1,
          '',
          puntosObras[46].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
          puntosObras[46].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
          puntosObras[46].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
            ? 'IN'
            : '',
          puntosObras[46].estatus === 'DOCUMENTO NO APLICABLE'
            ? 'N/A'
            : puntosObras[46].estatus ===
              'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
            ? 'NA/T'
            : '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
        ],
        [
          '',
          puntosObras[47].type,
          48,
          puntosObras[47].bullet1,
          '',
          puntosObras[47].estatus === 'DOCUMENTO INTEGRADO' ? 'P' : '',
          puntosObras[47].estatus === 'DOCUMENTO NO INTEGRADO' ? 'O' : '',
          puntosObras[47].estatus === 'DOCUMENTO CON INCUMPLIMIENTO'
            ? 'IN'
            : '',
          puntosObras[47].estatus === 'DOCUMENTO NO APLICABLE'
            ? 'N/A'
            : puntosObras[47].estatus ===
              'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN'
            ? 'NA/T'
            : '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
        ],
      ];
      const titleRow = worksheet.addRow(['', title]);
      titleRow.font = {
        name: 'Calibri',
        size: 12,
        underline: 'none',
        bold: true,
        color: { argb: 'ffffff' },
      };
      titleRow.alignment = { horizontal: 'center', vertical: 'middle' };
      titleRow.height = 34.5;
      ['B1'].map((key) => {
        worksheet.getCell(key).fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: { argb: '6FAE45' },
        };
        worksheet.getCell(key).border = {
          top: { style: 'medium', color: { argb: '000000' } },
          left: { style: 'medium', color: { argb: '000000' } },
          bottom: { style: 'medium', color: { argb: '000000' } },
          right: { style: 'medium', color: { argb: '000000' } },
        };
      });
      worksheet.mergeCells('B1:Q1');

      const subtitleRow = worksheet.addRow(['', subtitle]);
      subtitleRow.font = {
        name: 'Calibri',
        size: 12,
        underline: 'none',
        bold: true,
        color: { argb: 'ffffff' },
      };
      subtitleRow.alignment = { horizontal: 'center', vertical: 'middle' };
      subtitleRow.height = 39;
      ['B2'].map((key) => {
        worksheet.getCell(key).fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: { argb: '6FAE45' },
        };
        worksheet.getCell(key).border = {
          top: { style: 'medium', color: { argb: '000000' } },
          left: { style: 'medium', color: { argb: '000000' } },
          bottom: { style: 'medium', color: { argb: '000000' } },
          right: { style: 'medium', color: { argb: '000000' } },
        };
      });
      worksheet.mergeCells('B2:Q2');

      const generalRow = worksheet.addRow([
        '',
        subtitle1,
        '',
        subtitle2,
        '',
        row[i].noObra,
      ]);
      generalRow.font = {
        name: 'Calibri',
        size: 12,
        underline: 'none',
        bold: true,
        color: { argb: 'ffffff' },
      };
      generalRow.alignment = { horizontal: 'center', vertical: 'middle' };
      generalRow.height = 45;
      ['B3'].map((key) => {
        worksheet.getCell(key).fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: { argb: '6FAE45' },
        };
        worksheet.getCell(key).border = {
          top: { style: 'medium', color: { argb: '000000' } },
          left: { style: 'medium', color: { argb: '000000' } },
          bottom: { style: 'medium', color: { argb: '000000' } },
          right: { style: 'medium', color: { argb: '000000' } },
        };
      });
      ['D3'].map((key) => {
        worksheet.getCell(key).fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: { argb: '6FAE45' },
        };
        worksheet.getCell(key).border = {
          top: { style: 'medium', color: { argb: '000000' } },
          left: { style: 'medium', color: { argb: '000000' } },
          bottom: { style: 'medium', color: { argb: '000000' } },
          right: { style: 'medium', color: { argb: '000000' } },
        };
      });
      const texto1 = generalRow.getCell(6);
      texto1.font = {
        name: 'Calibri',
        size: 12,
        underline: 'none',
      };
      texto1.alignment = {
        horizontal: 'center',
        vertical: 'middle',
        wrapText: true,
      };
      texto1.border = {
        top: { style: 'medium' },
        left: { style: 'medium' },
        bottom: { style: 'medium' },
        right: { style: 'medium' },
      };

      const campoRow = worksheet.addRow(['', '', '', subtitle3, '', row.fondo]);
      campoRow.font = {
        name: 'Calibri',
        size: 12,
        underline: 'none',
        bold: true,
        color: { argb: 'ffffff' },
      };
      campoRow.alignment = { horizontal: 'center', vertical: 'middle' };

      ['D4'].map((key) => {
        worksheet.getCell(key).fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: { argb: '6FAE45' },
        };
        worksheet.getCell(key).border = {
          top: { style: 'medium', color: { argb: '000000' } },
          left: { style: 'medium', color: { argb: '000000' } },
          bottom: { style: 'medium', color: { argb: '000000' } },
          right: { style: 'medium', color: { argb: '000000' } },
        };
      });

      const texto2 = campoRow.getCell(6);
      texto2.font = {
        name: 'Calibri',
        size: 12,
        underline: 'none',
      };
      texto2.alignment = {
        horizontal: 'center',
        vertical: 'middle',
        wrapText: true,
      };
      texto2.border = {
        top: { style: 'medium' },
        left: { style: 'medium' },
        bottom: { style: 'medium' },
        right: { style: 'medium' },
      };

      const campoRow2 = worksheet.addRow([
        '',
        '',
        '',
        subtitle4,
        '',
        row[i].ejercicio,
      ]);
      campoRow2.font = {
        name: 'Calibri',
        size: 12,
        underline: 'none',
        bold: true,
        color: { argb: 'ffffff' },
      };
      campoRow2.alignment = { horizontal: 'center', vertical: 'middle' };

      ['D5'].map((key) => {
        worksheet.getCell(key).fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: { argb: '6FAE45' },
        };
        worksheet.getCell(key).border = {
          top: { style: 'medium', color: { argb: '000000' } },
          left: { style: 'medium', color: { argb: '000000' } },
          bottom: { style: 'medium', color: { argb: '000000' } },
          right: { style: 'medium', color: { argb: '000000' } },
        };
      });

      const texto3 = campoRow2.getCell(6);
      texto3.font = {
        name: 'Calibri',
        size: 12,
        underline: 'none',
      };
      texto3.alignment = {
        horizontal: 'center',
        vertical: 'middle',
        wrapText: true,
      };
      texto3.border = {
        top: { style: 'medium' },
        left: { style: 'medium' },
        bottom: { style: 'medium' },
        right: { style: 'medium' },
      };

      const campoRow3 = worksheet.addRow([
        '',
        '',
        '',
        subtitle5,
        '',
        row[i].tipoAdjudicacion,
      ]);
      campoRow3.font = {
        name: 'Calibri',
        size: 12,
        underline: 'none',
        bold: true,
        color: { argb: 'ffffff' },
      };
      campoRow3.alignment = { horizontal: 'center', vertical: 'middle' };

      ['D6'].map((key) => {
        worksheet.getCell(key).fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: { argb: '6FAE45' },
        };
        worksheet.getCell(key).border = {
          top: { style: 'medium', color: { argb: '000000' } },
          left: { style: 'medium', color: { argb: '000000' } },
          bottom: { style: 'medium', color: { argb: '000000' } },
          right: { style: 'medium', color: { argb: '000000' } },
        };
      });

      const texto4 = campoRow3.getCell(6);
      texto4.font = {
        name: 'Calibri',
        size: 12,
        underline: 'none',
      };
      texto4.alignment = {
        horizontal: 'center',
        vertical: 'middle',
        wrapText: true,
      };
      texto4.border = {
        top: { style: 'medium' },
        left: { style: 'medium' },
        bottom: { style: 'medium' },
        right: { style: 'medium' },
      };

      const campoRow4 = worksheet.addRow([
        '',
        '',
        '',
        subtitle6,
        '',
        row[i].areaRequirente,
      ]);
      campoRow4.font = {
        name: 'Calibri',
        size: 12,
        underline: 'none',
        bold: true,
        color: { argb: 'ffffff' },
      };
      campoRow4.alignment = { horizontal: 'center', vertical: 'middle' };

      ['D7'].map((key) => {
        worksheet.getCell(key).fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: { argb: '6FAE45' },
        };
        worksheet.getCell(key).border = {
          top: { style: 'medium', color: { argb: '000000' } },
          left: { style: 'medium', color: { argb: '000000' } },
          bottom: { style: 'medium', color: { argb: '000000' } },
          right: { style: 'medium', color: { argb: '000000' } },
        };
      });

      const texto5 = campoRow4.getCell(6);
      texto5.font = {
        name: 'Calibri',
        size: 12,
        underline: 'none',
      };
      texto5.alignment = {
        horizontal: 'center',
        vertical: 'middle',
        wrapText: true,
      };
      texto5.border = {
        top: { style: 'medium' },
        left: { style: 'medium' },
        bottom: { style: 'medium' },
        right: { style: 'medium' },
      };

      const campoRow5 = worksheet.addRow([
        '',
        '',
        '',
        subtitle7,
        '',
        row[i].noContrato,
      ]);
      campoRow5.font = {
        name: 'Calibri',
        size: 12,
        underline: 'none',
        bold: true,
        color: { argb: 'ffffff' },
      };
      campoRow5.alignment = { horizontal: 'center', vertical: 'middle' };

      ['D8'].map((key) => {
        worksheet.getCell(key).fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: { argb: '6FAE45' },
        };
        worksheet.getCell(key).border = {
          top: { style: 'medium', color: { argb: '000000' } },
          left: { style: 'medium', color: { argb: '000000' } },
          bottom: { style: 'medium', color: { argb: '000000' } },
          right: { style: 'medium', color: { argb: '000000' } },
        };
      });

      const texto6 = campoRow5.getCell(6);
      texto6.font = {
        name: 'Calibri',
        size: 12,
        underline: 'none',
      };
      texto6.alignment = {
        horizontal: 'center',
        vertical: 'middle',
        wrapText: true,
      };
      texto6.border = {
        top: { style: 'medium' },
        left: { style: 'medium' },
        bottom: { style: 'medium' },
        right: { style: 'medium' },
      };

      const campoRow6 = worksheet.addRow([
        '',
        '',
        '',
        subtitle8,
        '',
        row[i].proveedor,
      ]);
      campoRow6.font = {
        name: 'Calibri',
        size: 12,
        underline: 'none',
        bold: true,
        color: { argb: 'ffffff' },
      };
      campoRow6.alignment = { horizontal: 'center', vertical: 'middle' };

      ['D9'].map((key) => {
        worksheet.getCell(key).fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: { argb: '6FAE45' },
        };
        worksheet.getCell(key).border = {
          top: { style: 'medium', color: { argb: '000000' } },
          left: { style: 'medium', color: { argb: '000000' } },
          bottom: { style: 'medium', color: { argb: '000000' } },
          right: { style: 'medium', color: { argb: '000000' } },
        };
      });

      const texto7 = campoRow6.getCell(6);
      texto7.font = {
        name: 'Calibri',
        size: 12,
        underline: 'none',
      };
      texto7.alignment = {
        horizontal: 'center',
        vertical: 'middle',
        wrapText: true,
      };
      texto7.border = {
        top: { style: 'medium' },
        left: { style: 'medium' },
        bottom: { style: 'medium' },
        right: { style: 'medium' },
      };

      let fechaI: any = '';
      let fechaF: any = '';

      if (row[i].vigenciaInicio !== undefined && row[i].vigenciaInicio !== '') {
        fechaI = this.filterSvc.formatDate(
          new Date(row[i].vigenciaInicio.seconds * 1000),
          'only_date'
        );
      }
      if (row[i].vigenciaFin !== undefined && row[i].vigenciaFin !== '') {
        fechaF = this.filterSvc.formatDate(
          new Date(row[i].vigenciaFin.seconds * 1000),
          'only_date'
        );
      }

      const campoRow7 = worksheet.addRow([
        '',
        '',
        '',
        subtitle9,
        '',
        `${fechaI} - ${fechaF}`,
      ]);
      campoRow7.font = {
        name: 'Calibri',
        size: 12,
        underline: 'none',
        bold: true,
        color: { argb: 'ffffff' },
      };
      campoRow7.alignment = { horizontal: 'center', vertical: 'middle' };

      ['D10'].map((key) => {
        worksheet.getCell(key).fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: { argb: '6FAE45' },
        };
        worksheet.getCell(key).border = {
          top: { style: 'medium', color: { argb: '000000' } },
          left: { style: 'medium', color: { argb: '000000' } },
          bottom: { style: 'medium', color: { argb: '000000' } },
          right: { style: 'medium', color: { argb: '000000' } },
        };
      });

      const texto8 = campoRow7.getCell(6);
      texto8.font = {
        name: 'Calibri',
        size: 12,
        underline: 'none',
      };
      texto8.alignment = {
        horizontal: 'center',
        vertical: 'middle',
        wrapText: true,
      };
      texto8.border = {
        top: { style: 'medium' },
        left: { style: 'medium' },
        bottom: { style: 'medium' },
        right: { style: 'medium' },
      };

      const campoRow8 = worksheet.addRow([
        '',
        '',
        '',
        subtitle10,
        '',
        row[i].monto,
      ]);
      campoRow8.font = {
        name: 'Calibri',
        size: 12,
        underline: 'none',
        bold: true,
        color: { argb: 'ffffff' },
      };
      campoRow8.alignment = { horizontal: 'center', vertical: 'middle' };

      ['D11'].map((key) => {
        worksheet.getCell(key).fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: { argb: '6FAE45' },
        };
        worksheet.getCell(key).border = {
          top: { style: 'medium', color: { argb: '000000' } },
          left: { style: 'medium', color: { argb: '000000' } },
          bottom: { style: 'medium', color: { argb: '000000' } },
          right: { style: 'medium', color: { argb: '000000' } },
        };
      });

      const texto9 = campoRow8.getCell(6);
      texto9.font = {
        name: 'Calibri',
        size: 12,
        underline: 'none',
      };
      texto9.alignment = {
        horizontal: 'center',
        vertical: 'middle',
        wrapText: true,
      };
      texto9.border = {
        top: { style: 'medium' },
        left: { style: 'medium' },
        bottom: { style: 'medium' },
        right: { style: 'medium' },
      };

      const campoRow9 = worksheet.addRow([
        '',
        '',
        '',
        subtitle11,
        '',
        row[i].nombreObra,
      ]);
      campoRow9.font = {
        name: 'Calibri',
        size: 12,
        underline: 'none',
        bold: true,
        color: { argb: 'ffffff' },
      };
      campoRow9.alignment = { horizontal: 'center', vertical: 'middle' };

      ['D12'].map((key) => {
        worksheet.getCell(key).fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: { argb: '6FAE45' },
        };
        worksheet.getCell(key).border = {
          top: { style: 'medium', color: { argb: '000000' } },
          left: { style: 'medium', color: { argb: '000000' } },
          bottom: { style: 'medium', color: { argb: '000000' } },
          right: { style: 'medium', color: { argb: '000000' } },
        };
      });

      const texto10 = campoRow9.getCell(6);
      texto10.font = {
        name: 'Calibri',
        size: 12,
        underline: 'none',
      };
      texto10.alignment = {
        horizontal: 'center',
        vertical: 'middle',
        wrapText: true,
      };
      texto10.border = {
        top: { style: 'medium' },
        left: { style: 'medium' },
        bottom: { style: 'medium' },
        right: { style: 'medium' },
      };

      worksheet.mergeCells('B3:C12');
      worksheet.mergeCells('D3:E3');
      worksheet.mergeCells('F3:Q3');
      worksheet.mergeCells('F4:Q4');
      worksheet.mergeCells('F5:Q5');
      worksheet.mergeCells('F6:Q6');
      worksheet.mergeCells('F7:Q7');
      worksheet.mergeCells('F8:Q8');
      worksheet.mergeCells('F9:Q9');
      worksheet.mergeCells('F10:Q10');
      worksheet.mergeCells('F11:Q11');
      worksheet.mergeCells('F12:Q12');
      worksheet.mergeCells('D4:E4');
      worksheet.mergeCells('D5:E5');
      worksheet.mergeCells('D6:E6');
      worksheet.mergeCells('D7:E7');
      worksheet.mergeCells('D8:E8');
      worksheet.mergeCells('D9:E9');
      worksheet.mergeCells('D10:E10');
      worksheet.mergeCells('D11:E11');
      worksheet.mergeCells('D12:E12');

      const headerRow = worksheet.addRow(header);

      headerRow.eachCell((cell, number) => {
        if (number !== 1) {
          cell.font = {
            name: 'Calibri',
            size: 12,
            underline: 'none',
            bold: true,
            color: { argb: 'ffffff' },
          };
          cell.alignment = { horizontal: 'center', vertical: 'middle' };
          cell.fill = {
            type: 'pattern',
            pattern: 'solid',
            fgColor: { argb: '6FAE45' },
            bgColor: { argb: '6FAE45' },
          };
          cell.border = {
            top: { style: 'medium' },
            left: { style: 'medium' },
            bottom: { style: 'medium' },
            right: { style: 'medium' },
          };
        }
      });
      worksheet.mergeCells('D13:E13');
      worksheet.mergeCells('L13:M13');

      data.forEach((d) => {
        const row = worksheet.addRow(d);

        row.font = {
          name: 'Calibri',
          size: 12,
          underline: 'none',
        };
        row.alignment = {
          horizontal: 'center',
          vertical: 'middle',
          wrapText: true,
        };
        row.border = {
          top: { style: 'thin' },
          left: { style: 'thin' },
          bottom: { style: 'thin' },
          right: { style: 'thin' },
        };
        if (
          row.number !== 43 &&
          row.number !== 44 &&
          row.number !== 47 &&
          row.number !== 48 &&
          row.number !== 49 &&
          row.number !== 50 &&
          row.number !== 51 &&
          row.number !== 59 &&
          row.number !== 60
        ) {
          worksheet.mergeCells(`D${String(row.number)}:E${String(row.number)}`);
        }
        if (
          row.number !== 14 &&
          row.number !== 15 &&
          row.number !== 16 &&
          row.number !== 28 &&
          row.number !== 29 &&
          row.number !== 30 &&
          row.number !== 31 &&
          row.number !== 32 &&
          row.number !== 33 &&
          row.number !== 63 &&
          row.number !== 64 &&
          row.number !== 65 &&
          row.number !== 66
        ) {
          worksheet.mergeCells(`L${String(row.number)}:M${String(row.number)}`);
        }
        const qty0 = row.getCell(1);
        const qty = row.getCell(2);
        const qty1 = row.getCell(10);
        const qty2 = row.getCell(17);

        if (
          row.number !== 63 &&
          row.number !== 64 &&
          row.number !== 65 &&
          row.number !== 66
        ) {
          qty.font = {
            name: 'Calibri',
            size: 12,
            underline: 'none',
            bold: true,
            color: { argb: 'ffffff' },
          };
          qty.alignment = {
            horizontal: 'center',
            vertical: 'middle',
            wrapText: true,
            textRotation: 90,
          };
          qty.fill = {
            type: 'pattern',
            pattern: 'solid',
            fgColor: { argb: '6FAE45' },
            bgColor: { argb: '6FAE45' },
          };
          qty.border = {
            top: { style: 'medium' },
            left: { style: 'medium' },
            bottom: { style: 'medium' },
            right: { style: 'medium' },
          };
          qty1.font = {
            name: 'Calibri',
            size: 12,
            underline: 'none',
            bold: true,
            color: { argb: 'ffffff' },
          };
          qty1.alignment = {
            horizontal: 'center',
            vertical: 'middle',
            wrapText: true,
            textRotation: 90,
          };
          qty1.fill = {
            type: 'pattern',
            pattern: 'solid',
            fgColor: { argb: '6FAE45' },
            bgColor: { argb: '6FAE45' },
          };
          qty1.border = {
            top: { style: 'medium' },
            left: { style: 'medium' },
            bottom: { style: 'medium' },
            right: { style: 'medium' },
          };
          qty0.font = {
            name: 'Calibri',
            size: 12,
            underline: 'none',
            bold: true,
            color: { argb: 'ffffff' },
          };
          qty0.alignment = {
            horizontal: 'center',
            vertical: 'middle',
            wrapText: true,
            textRotation: 90,
          };
          qty0.fill = {
            type: 'pattern',
            pattern: 'solid',
            fgColor: { argb: 'ffffff' },
            bgColor: { argb: 'ffffff' },
          };
          qty0.border = {
            right: { style: 'medium' },
          };
          qty2.border = {
            top: { style: 'medium' },
            left: { style: 'medium' },
            bottom: { style: 'medium' },
            right: { style: 'medium' },
          };
          row.getCell(3).border = {
            top: { style: 'medium' },
            left: { style: 'medium' },
            bottom: { style: 'medium' },
            right: { style: 'medium' },
          };
          row.getCell(4).border = {
            top: { style: 'medium' },
            left: { style: 'medium' },
            bottom: { style: 'medium' },
            right: { style: 'medium' },
          };
          row.getCell(5).border = {
            top: { style: 'medium' },
            left: { style: 'medium' },
            bottom: { style: 'medium' },
            right: { style: 'medium' },
          };
          row.getCell(6).border = {
            top: { style: 'medium' },
            left: { style: 'medium' },
            bottom: { style: 'medium' },
            right: { style: 'medium' },
          };
          if (row.getCell(6).text === 'P') {
            row.getCell(6).font = {
              name: 'Calibri',
              size: 12,
              underline: 'none',
              bold: true,
            };
            row.getCell(6).fill = {
              type: 'pattern',
              pattern: 'solid',
              fgColor: { argb: '92d14f' },
              bgColor: { argb: '92d14f' },
            };
          }
          row.getCell(7).border = {
            top: { style: 'medium' },
            left: { style: 'medium' },
            bottom: { style: 'medium' },
            right: { style: 'medium' },
          };
          if (row.getCell(7).text === 'O') {
            row.getCell(7).font = {
              name: 'Calibri',
              size: 12,
              underline: 'none',
              bold: true,
            };
            row.getCell(7).fill = {
              type: 'pattern',
              pattern: 'solid',
              fgColor: { argb: 'fe0000' },
              bgColor: { argb: 'fe0000' },
            };
          }
          row.getCell(8).border = {
            top: { style: 'medium' },
            left: { style: 'medium' },
            bottom: { style: 'medium' },
            right: { style: 'medium' },
          };
          if (row.getCell(8).text === 'IN') {
            row.getCell(8).font = {
              name: 'Calibri',
              size: 12,
              underline: 'none',
              bold: true,
            };
            row.getCell(8).fill = {
              type: 'pattern',
              pattern: 'solid',
              fgColor: { argb: 'ffff01' },
              bgColor: { argb: 'ffff01' },
            };
          }
          row.getCell(9).border = {
            top: { style: 'medium' },
            left: { style: 'medium' },
            bottom: { style: 'medium' },
            right: { style: 'medium' },
          };
          if (row.getCell(9).text === 'N/A' || row.getCell(9).text === 'NA/T') {
            row.getCell(9).font = {
              name: 'Calibri',
              size: 12,
              underline: 'none',
              bold: true,
            };
            if (row.getCell(9).text === 'N/A') {
              row.getCell(9).fill = {
                type: 'pattern',
                pattern: 'solid',
                fgColor: { argb: 'a5a5a5' },
                bgColor: { argb: 'a5a5a5' },
              };
            } else {
              row.getCell(9).fill = {
                type: 'pattern',
                pattern: 'solid',
                fgColor: { argb: '5a9bd5' },
                bgColor: { argb: '5a9bd5' },
              };
            }
          }
          row.getCell(11).border = {
            top: { style: 'medium' },
            left: { style: 'medium' },
            bottom: { style: 'medium' },
            right: { style: 'medium' },
          };
          row.getCell(12).border = {
            top: { style: 'medium' },
            left: { style: 'medium' },
            bottom: { style: 'medium' },
            right: { style: 'medium' },
          };
          row.getCell(13).border = {
            top: { style: 'medium' },
            left: { style: 'medium' },
            bottom: { style: 'medium' },
            right: { style: 'medium' },
          };
          row.getCell(14).border = {
            top: { style: 'medium' },
            left: { style: 'medium' },
            bottom: { style: 'medium' },
            right: { style: 'medium' },
          };
          if (row.getCell(14).text === 'P') {
            row.getCell(14).font = {
              name: 'Calibri',
              size: 12,
              underline: 'none',
              bold: true,
            };
            row.getCell(14).fill = {
              type: 'pattern',
              pattern: 'solid',
              fgColor: { argb: '92d14f' },
              bgColor: { argb: '92d14f' },
            };
          }
          row.getCell(15).border = {
            top: { style: 'medium' },
            left: { style: 'medium' },
            bottom: { style: 'medium' },
            right: { style: 'medium' },
          };
          if (row.getCell(15).text === 'O') {
            row.getCell(15).font = {
              name: 'Calibri',
              size: 12,
              underline: 'none',
              bold: true,
            };
            row.getCell(15).fill = {
              type: 'pattern',
              pattern: 'solid',
              fgColor: { argb: 'fe0000' },
              bgColor: { argb: 'fe0000' },
            };
          }
          row.getCell(16).border = {
            top: { style: 'medium' },
            left: { style: 'medium' },
            bottom: { style: 'medium' },
            right: { style: 'medium' },
          };
          if (row.getCell(16).text === 'IN') {
            row.getCell(16).font = {
              name: 'Calibri',
              size: 12,
              underline: 'none',
              bold: true,
            };
            row.getCell(16).fill = {
              type: 'pattern',
              pattern: 'solid',
              fgColor: { argb: 'ffff01' },
              bgColor: { argb: 'ffff01' },
            };
          }
          if (
            row.getCell(17).text === 'N/A' ||
            row.getCell(17).text === 'NA/T'
          ) {
            row.getCell(17).font = {
              name: 'Calibri',
              size: 12,
              underline: 'none',
              bold: true,
            };
            if (row.getCell(17).text === 'N/A') {
              row.getCell(17).fill = {
                type: 'pattern',
                pattern: 'solid',
                fgColor: { argb: 'a5a5a5' },
                bgColor: { argb: 'a5a5a5' },
              };
            } else {
              row.getCell(17).fill = {
                type: 'pattern',
                pattern: 'solid',
                fgColor: { argb: '5a9bd5' },
                bgColor: { argb: '5a9bd5' },
              };
            }
          }
        }
        if (row.number === 63) {
          row.getCell(1).border = {
            top: { style: 'thin' },
            left: { style: 'thin' },
            bottom: { style: 'thin' },
            right: { style: 'thin' },
          };
          row.getCell(3).border = {
            top: { style: 'medium' },
            left: { style: 'medium' },
            bottom: { style: 'medium' },
            right: { style: 'medium' },
          };
          row.getCell(4).border = {
            top: { style: 'medium' },
            left: { style: 'medium' },
            bottom: { style: 'medium' },
            right: { style: 'medium' },
          };
          row.getCell(6).border = {
            top: { style: 'medium' },
            left: { style: 'medium' },
            bottom: { style: 'medium' },
            right: { style: 'medium' },
          };
          row.getCell(7).border = {
            top: { style: 'medium' },
            left: { style: 'medium' },
            bottom: { style: 'medium' },
            right: { style: 'medium' },
          };
          row.getCell(8).border = {
            top: { style: 'medium' },
            left: { style: 'medium' },
            bottom: { style: 'medium' },
            right: { style: 'medium' },
          };
          row.getCell(9).border = {
            top: { style: 'medium' },
            left: { style: 'medium' },
            bottom: { style: 'medium' },
            right: { style: 'medium' },
          };
          qty1.font = {
            name: 'Calibri',
            size: 12,
            underline: 'none',
            bold: true,
            color: { argb: 'ffffff' },
          };
          qty1.fill = {
            type: 'pattern',
            pattern: 'solid',
            fgColor: { argb: 'ffffff' },
            bgColor: { argb: 'ffffff' },
          };
          qty1.border = {
            top: { style: 'medium' },
            left: { style: 'medium' },
            bottom: { style: 'medium' },
            right: { style: 'medium' },
          };
        }
        if (row.number === 64) {
          row.getCell(1).border = {
            top: { style: 'thin' },
            left: { style: 'thin' },
            bottom: { style: 'thin' },
            right: { style: 'thin' },
          };
          row.getCell(3).border = {
            top: { style: 'medium' },
            left: { style: 'medium' },
            bottom: { style: 'medium' },
            right: { style: 'medium' },
          };
          row.getCell(4).border = {
            top: { style: 'medium' },
            left: { style: 'medium' },
            bottom: { style: 'medium' },
            right: { style: 'medium' },
          };
          row.getCell(6).border = {
            top: { style: 'medium' },
            left: { style: 'medium' },
            bottom: { style: 'medium' },
            right: { style: 'medium' },
          };
          row.getCell(7).border = {
            top: { style: 'medium' },
            left: { style: 'medium' },
            bottom: { style: 'medium' },
            right: { style: 'medium' },
          };
          row.getCell(8).border = {
            top: { style: 'medium' },
            left: { style: 'medium' },
            bottom: { style: 'medium' },
            right: { style: 'medium' },
          };
          row.getCell(9).border = {
            top: { style: 'medium' },
            left: { style: 'medium' },
            bottom: { style: 'medium' },
            right: { style: 'medium' },
          };
          qty1.font = {
            name: 'Calibri',
            size: 12,
            underline: 'none',
            bold: false,
            color: { argb: '000000' },
          };
          qty1.border = {
            top: { style: 'medium' },
            left: { style: 'medium' },
            bottom: { style: 'medium' },
            right: { style: 'medium' },
          };
        }
        if (row.number === 65) {
          row.getCell(3).border = {
            top: { style: 'medium' },
            left: { style: 'medium' },
            bottom: { style: 'medium' },
            right: { style: 'medium' },
          };
          row.getCell(4).border = {
            top: { style: 'medium' },
            left: { style: 'medium' },
            bottom: { style: 'medium' },
            right: { style: 'medium' },
          };
          row.getCell(6).border = {
            top: { style: 'medium' },
            left: { style: 'medium' },
            bottom: { style: 'medium' },
            right: { style: 'medium' },
          };
          row.getCell(7).border = {
            top: { style: 'medium' },
            left: { style: 'medium' },
            bottom: { style: 'medium' },
            right: { style: 'medium' },
          };
          row.getCell(8).border = {
            top: { style: 'medium' },
            left: { style: 'medium' },
            bottom: { style: 'medium' },
            right: { style: 'medium' },
          };
          row.getCell(9).border = {
            top: { style: 'medium' },
            left: { style: 'medium' },
            bottom: { style: 'medium' },
            right: { style: 'medium' },
          };
        }
        if (row.number === 66) {
          row.getCell(3).border = {
            top: { style: 'medium' },
            left: { style: 'medium' },
            bottom: { style: 'medium' },
            right: { style: 'medium' },
          };
          row.getCell(4).border = {
            top: { style: 'medium' },
            left: { style: 'medium' },
            bottom: { style: 'medium' },
            right: { style: 'medium' },
          };
          row.getCell(6).border = {
            top: { style: 'medium' },
            left: { style: 'medium' },
            bottom: { style: 'medium' },
            right: { style: 'medium' },
          };
          row.getCell(7).border = {
            top: { style: 'medium' },
            left: { style: 'medium' },
            bottom: { style: 'medium' },
            right: { style: 'medium' },
          };
          row.getCell(8).border = {
            top: { style: 'medium' },
            left: { style: 'medium' },
            bottom: { style: 'medium' },
            right: { style: 'medium' },
          };
          row.getCell(9).border = {
            top: { style: 'medium' },
            left: { style: 'medium' },
            bottom: { style: 'medium' },
            right: { style: 'medium' },
          };
        }
      });

      worksheet.mergeCells('L14:M16');
      worksheet.mergeCells('L28:M29');
      worksheet.mergeCells('L30:M31');
      worksheet.mergeCells('L32:M33');
      worksheet.mergeCells('D43:E44');
      worksheet.mergeCells('D47:E48');
      worksheet.mergeCells('D49:E51');
      worksheet.mergeCells('D59:E60');
      worksheet.mergeCells('B14:B21');
      worksheet.mergeCells('B22:B26');
      worksheet.mergeCells('B27:B29');
      worksheet.mergeCells('B30:B48');
      worksheet.mergeCells('B49:B60');
      worksheet.mergeCells('B61:B66');
      worksheet.mergeCells('J14:J27');
      worksheet.mergeCells('J28:J33');
      worksheet.mergeCells('J34:J42');
      worksheet.mergeCells('J43:J50');
      worksheet.mergeCells('J51:J61');
      worksheet.mergeCells('C43:C44');
      worksheet.mergeCells('C47:C48');
      worksheet.mergeCells('C49:C51');
      worksheet.mergeCells('C59:C60');
      worksheet.mergeCells('K14:K16');
      worksheet.mergeCells('K28:K29');
      worksheet.mergeCells('K30:K31');
      worksheet.mergeCells('K32:K33');
      worksheet.mergeCells('J63:Q66');

      ['B67'].map((key) => {
        worksheet.getCell(key).border = {
          top: { style: 'medium', color: { argb: '000000' } },
        };
      });
      worksheet.mergeCells('B67:Q67');

      const nomeclatura = worksheet.addRow([
        '',
        'NOMENCLATURA',
        '',
        '',
        '',
        '',
        '',
        '',
        'TOTAL DE DOCUMENTOS',
        '',
        '',
        '',
        '',
        '',
        row[i].siRealizado,
        '',
      ]);
      nomeclatura.getCell(2).font = {
        name: 'Calibri',
        size: 10,
        underline: 'none',
        bold: true,
        color: { argb: 'ffffff' },
      };
      nomeclatura.getCell(9).font = {
        name: 'Calibri',
        size: 10,
        underline: 'none',
        bold: true,
        color: { argb: 'ffffff' },
      };
      nomeclatura.getCell(15).font = {
        name: 'Calibri',
        size: 12,
        underline: 'none',
        bold: false,
      };
      nomeclatura.alignment = {
        horizontal: 'center',
        vertical: 'middle',
        wrapText: true,
      };

      ['B68'].map((key) => {
        worksheet.getCell(key).fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: { argb: '6FAE45' },
        };
        worksheet.getCell(key).border = {
          top: { style: 'medium', color: { argb: '000000' } },
          left: { style: 'medium', color: { argb: '000000' } },
          bottom: { style: 'medium', color: { argb: '000000' } },
          right: { style: 'medium', color: { argb: '000000' } },
        };
      });

      ['I68'].map((key) => {
        worksheet.getCell(key).fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: { argb: '6FAE45' },
        };
        worksheet.getCell(key).border = {
          top: { style: 'medium', color: { argb: '000000' } },
          left: { style: 'medium', color: { argb: '000000' } },
          bottom: { style: 'medium', color: { argb: '000000' } },
          right: { style: 'medium', color: { argb: '000000' } },
        };
      });

      ['O68'].map((key) => {
        worksheet.getCell(key).border = {
          top: { style: 'medium', color: { argb: '000000' } },
          left: { style: 'medium', color: { argb: '000000' } },
          bottom: { style: 'medium', color: { argb: '000000' } },
          right: { style: 'medium', color: { argb: '000000' } },
        };
      });

      const documentoI = worksheet.addRow([
        '',
        'P',
        'DOCUMENTO INTEGRADO',
        '',
        '',
        '',
        '',
        '',
        'TOTAL DE DOCUMENTOS INTEGRADOS',
        '',
        '',
        '',
        '',
        '',
        row[i].totalIntegrado,
        '',
      ]);
      documentoI.getCell(2).font = {
        name: 'Calibri',
        size: 10,
        underline: 'none',
        bold: false,
      };
      documentoI.getCell(3).font = {
        name: 'Calibri',
        size: 10,
        underline: 'none',
        bold: false,
      };
      documentoI.getCell(9).font = {
        name: 'Calibri',
        size: 10,
        underline: 'none',
        bold: true,
        color: { argb: 'ffffff' },
      };
      documentoI.getCell(15).font = {
        name: 'Calibri',
        size: 12,
        underline: 'none',
        bold: false,
      };
      documentoI.alignment = {
        horizontal: 'center',
        vertical: 'middle',
        wrapText: true,
      };

      ['B69'].map((key) => {
        worksheet.getCell(key).fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: { argb: '92d14f' },
        };
        worksheet.getCell(key).border = {
          top: { style: 'medium', color: { argb: '000000' } },
          left: { style: 'medium', color: { argb: '000000' } },
          bottom: { style: 'medium', color: { argb: '000000' } },
          right: { style: 'medium', color: { argb: '000000' } },
        };
      });

      ['C69'].map((key) => {
        worksheet.getCell(key).fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: { argb: 'ffffff' },
        };
        worksheet.getCell(key).border = {
          top: { style: 'medium', color: { argb: '000000' } },
          left: { style: 'medium', color: { argb: '000000' } },
          bottom: { style: 'medium', color: { argb: '000000' } },
          right: { style: 'medium', color: { argb: '000000' } },
        };
      });

      ['I69'].map((key) => {
        worksheet.getCell(key).fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: { argb: '6FAE45' },
        };
        worksheet.getCell(key).border = {
          top: { style: 'medium', color: { argb: '000000' } },
          left: { style: 'medium', color: { argb: '000000' } },
          bottom: { style: 'medium', color: { argb: '000000' } },
          right: { style: 'medium', color: { argb: '000000' } },
        };
      });

      ['O69'].map((key) => {
        worksheet.getCell(key).border = {
          top: { style: 'medium', color: { argb: '000000' } },
          left: { style: 'medium', color: { argb: '000000' } },
          bottom: { style: 'medium', color: { argb: '000000' } },
          right: { style: 'medium', color: { argb: '000000' } },
        };
      });

      const documentoNoI = worksheet.addRow([
        '',
        'O',
        'DOCUMENTO NO INTEGRADO',
        '',
        '',
        '',
        '',
        '',
        'TOTAL DE DOCUMENTOS NO INTEGRADOS',
        '',
        '',
        '',
        '',
        '',
        row[i].totalNoIntegrado,
        '',
      ]);
      documentoNoI.getCell(2).font = {
        name: 'Calibri',
        size: 10,
        underline: 'none',
        bold: false,
      };
      documentoNoI.getCell(3).font = {
        name: 'Calibri',
        size: 10,
        underline: 'none',
        bold: false,
      };
      documentoNoI.getCell(9).font = {
        name: 'Calibri',
        size: 10,
        underline: 'none',
        bold: true,
        color: { argb: 'ffffff' },
      };
      documentoNoI.getCell(15).font = {
        name: 'Calibri',
        size: 12,
        underline: 'none',
        bold: false,
      };
      documentoNoI.alignment = {
        horizontal: 'center',
        vertical: 'middle',
        wrapText: true,
      };

      ['B70'].map((key) => {
        worksheet.getCell(key).fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: { argb: 'fe0000' },
        };
        worksheet.getCell(key).border = {
          top: { style: 'medium', color: { argb: '000000' } },
          left: { style: 'medium', color: { argb: '000000' } },
          bottom: { style: 'medium', color: { argb: '000000' } },
          right: { style: 'medium', color: { argb: '000000' } },
        };
      });

      ['C70'].map((key) => {
        worksheet.getCell(key).fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: { argb: 'ffffff' },
        };
        worksheet.getCell(key).border = {
          top: { style: 'medium', color: { argb: '000000' } },
          left: { style: 'medium', color: { argb: '000000' } },
          bottom: { style: 'medium', color: { argb: '000000' } },
          right: { style: 'medium', color: { argb: '000000' } },
        };
      });

      ['I70'].map((key) => {
        worksheet.getCell(key).fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: { argb: '6FAE45' },
        };
        worksheet.getCell(key).border = {
          top: { style: 'medium', color: { argb: '000000' } },
          left: { style: 'medium', color: { argb: '000000' } },
          bottom: { style: 'medium', color: { argb: '000000' } },
          right: { style: 'medium', color: { argb: '000000' } },
        };
      });

      ['O70'].map((key) => {
        worksheet.getCell(key).border = {
          top: { style: 'medium', color: { argb: '000000' } },
          left: { style: 'medium', color: { argb: '000000' } },
          bottom: { style: 'medium', color: { argb: '000000' } },
          right: { style: 'medium', color: { argb: '000000' } },
        };
      });

      const documentoIN = worksheet.addRow([
        '',
        'IN',
        'DOCUMENTO CON INCUMPLIMIENTO',
        '',
        '',
        '',
        '',
        '',
        'TOTAL DE DOCUMENTOS CON INCUMPLIMIENTO',
        '',
        '',
        '',
        '',
        '',
        row[i].totalIncumplimiento,
        '',
      ]);
      documentoIN.getCell(2).font = {
        name: 'Calibri',
        size: 10,
        underline: 'none',
        bold: false,
      };
      documentoIN.getCell(3).font = {
        name: 'Calibri',
        size: 10,
        underline: 'none',
        bold: false,
      };
      documentoIN.getCell(9).font = {
        name: 'Calibri',
        size: 10,
        underline: 'none',
        bold: true,
        color: { argb: 'ffffff' },
      };
      documentoIN.getCell(15).font = {
        name: 'Calibri',
        size: 12,
        underline: 'none',
        bold: false,
      };
      documentoIN.alignment = {
        horizontal: 'center',
        vertical: 'middle',
        wrapText: true,
      };

      ['B71'].map((key) => {
        worksheet.getCell(key).fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: { argb: 'ffff01' },
        };
        worksheet.getCell(key).border = {
          top: { style: 'medium', color: { argb: '000000' } },
          left: { style: 'medium', color: { argb: '000000' } },
          bottom: { style: 'medium', color: { argb: '000000' } },
          right: { style: 'medium', color: { argb: '000000' } },
        };
      });

      ['C71'].map((key) => {
        worksheet.getCell(key).fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: { argb: 'ffffff' },
        };
        worksheet.getCell(key).border = {
          top: { style: 'medium', color: { argb: '000000' } },
          left: { style: 'medium', color: { argb: '000000' } },
          bottom: { style: 'medium', color: { argb: '000000' } },
          right: { style: 'medium', color: { argb: '000000' } },
        };
      });

      ['I71'].map((key) => {
        worksheet.getCell(key).fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: { argb: '6FAE45' },
        };
        worksheet.getCell(key).border = {
          top: { style: 'medium', color: { argb: '000000' } },
          left: { style: 'medium', color: { argb: '000000' } },
          bottom: { style: 'medium', color: { argb: '000000' } },
          right: { style: 'medium', color: { argb: '000000' } },
        };
      });

      ['O71'].map((key) => {
        worksheet.getCell(key).border = {
          top: { style: 'medium', color: { argb: '000000' } },
          left: { style: 'medium', color: { argb: '000000' } },
          bottom: { style: 'medium', color: { argb: '000000' } },
          right: { style: 'medium', color: { argb: '000000' } },
        };
      });

      const documentoNA = worksheet.addRow([
        '',
        'N/A',
        'DOCUMENTO NO APLICABLE',
        '',
        '',
        '',
        '',
        '',
        'TOTAL DE DOCUMENTOS  NO APLICABLES',
        '',
        '',
        '',
        '',
        '',
        row[i].totalNA,
        '',
      ]);
      documentoNA.getCell(2).font = {
        name: 'Calibri',
        size: 10,
        underline: 'none',
        bold: false,
      };
      documentoNA.getCell(3).font = {
        name: 'Calibri',
        size: 10,
        underline: 'none',
        bold: false,
      };
      documentoNA.getCell(9).font = {
        name: 'Calibri',
        size: 10,
        underline: 'none',
        bold: true,
        color: { argb: 'ffffff' },
      };
      documentoNA.getCell(15).font = {
        name: 'Calibri',
        size: 12,
        underline: 'none',
        bold: false,
      };
      documentoNA.alignment = {
        horizontal: 'center',
        vertical: 'middle',
        wrapText: true,
      };

      ['B72'].map((key) => {
        worksheet.getCell(key).fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: { argb: 'a5a5a5' },
        };
        worksheet.getCell(key).border = {
          top: { style: 'medium', color: { argb: '000000' } },
          left: { style: 'medium', color: { argb: '000000' } },
          bottom: { style: 'medium', color: { argb: '000000' } },
          right: { style: 'medium', color: { argb: '000000' } },
        };
      });

      ['C72'].map((key) => {
        worksheet.getCell(key).fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: { argb: 'ffffff' },
        };
        worksheet.getCell(key).border = {
          top: { style: 'medium', color: { argb: '000000' } },
          left: { style: 'medium', color: { argb: '000000' } },
          bottom: { style: 'medium', color: { argb: '000000' } },
          right: { style: 'medium', color: { argb: '000000' } },
        };
      });

      ['I72'].map((key) => {
        worksheet.getCell(key).fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: { argb: '6FAE45' },
        };
        worksheet.getCell(key).border = {
          top: { style: 'medium', color: { argb: '000000' } },
          left: { style: 'medium', color: { argb: '000000' } },
          bottom: { style: 'medium', color: { argb: '000000' } },
          right: { style: 'medium', color: { argb: '000000' } },
        };
      });

      ['O72'].map((key) => {
        worksheet.getCell(key).border = {
          top: { style: 'medium', color: { argb: '000000' } },
          left: { style: 'medium', color: { argb: '000000' } },
          bottom: { style: 'medium', color: { argb: '000000' } },
          right: { style: 'medium', color: { argb: '000000' } },
        };
      });

      const documentoNAT = worksheet.addRow([
        '',
        'NA/T',
        'DOCUMENTO INAPLICABLE POR ESTAR EN TIEMPO DE INTEGRACIÓN',
        '',
        '',
        '',
        '',
        '',
        'TOTAL DE DOCUMENTOS  NO APLICABLES POR ESTAR EN TIEMPO DE INTEGRACIÓN',
        '',
        '',
        '',
        '',
        '',
        row[i].totalNAT,
        '',
      ]);
      documentoNAT.getCell(2).font = {
        name: 'Calibri',
        size: 10,
        underline: 'none',
        bold: false,
      };
      documentoNAT.getCell(3).font = {
        name: 'Calibri',
        size: 10,
        underline: 'none',
        bold: false,
      };
      documentoNAT.getCell(9).font = {
        name: 'Calibri',
        size: 10,
        underline: 'none',
        bold: true,
        color: { argb: 'ffffff' },
      };
      documentoNAT.getCell(15).font = {
        name: 'Calibri',
        size: 12,
        underline: 'none',
        bold: false,
      };
      documentoNAT.alignment = {
        horizontal: 'center',
        vertical: 'middle',
        wrapText: true,
      };

      ['B73'].map((key) => {
        worksheet.getCell(key).fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: { argb: '5a9bd5' },
        };
        worksheet.getCell(key).border = {
          top: { style: 'medium', color: { argb: '000000' } },
          left: { style: 'medium', color: { argb: '000000' } },
          bottom: { style: 'medium', color: { argb: '000000' } },
          right: { style: 'medium', color: { argb: '000000' } },
        };
      });

      ['C73'].map((key) => {
        worksheet.getCell(key).fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: { argb: 'ffffff' },
        };
        worksheet.getCell(key).border = {
          top: { style: 'medium', color: { argb: '000000' } },
          left: { style: 'medium', color: { argb: '000000' } },
          bottom: { style: 'medium', color: { argb: '000000' } },
          right: { style: 'medium', color: { argb: '000000' } },
        };
      });

      ['I73'].map((key) => {
        worksheet.getCell(key).fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: { argb: '6FAE45' },
        };
        worksheet.getCell(key).border = {
          top: { style: 'medium', color: { argb: '000000' } },
          left: { style: 'medium', color: { argb: '000000' } },
          bottom: { style: 'medium', color: { argb: '000000' } },
          right: { style: 'medium', color: { argb: '000000' } },
        };
      });

      ['O73'].map((key) => {
        worksheet.getCell(key).border = {
          top: { style: 'medium', color: { argb: '000000' } },
          left: { style: 'medium', color: { argb: '000000' } },
          bottom: { style: 'medium', color: { argb: '000000' } },
          right: { style: 'medium', color: { argb: '000000' } },
        };
      });

      const porcentaje = worksheet.addRow([
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        'PORCENTAJE DE INTEGRACIÓN',
        '',
        '',
        '',
        '',
        '',
        `${row[i].porcentajeTotal.toFixed(2)}%`,
        '',
      ]);
      porcentaje.getCell(9).font = {
        name: 'Calibri',
        size: 10,
        underline: 'none',
        bold: true,
        color: { argb: 'ffffff' },
      };
      porcentaje.getCell(15).font = {
        name: 'Calibri',
        size: 12,
        underline: 'none',
        bold: false,
      };
      porcentaje.alignment = {
        horizontal: 'center',
        vertical: 'middle',
        wrapText: true,
      };

      ['I74'].map((key) => {
        worksheet.getCell(key).fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: { argb: '6FAE45' },
        };
        worksheet.getCell(key).border = {
          top: { style: 'medium', color: { argb: '000000' } },
          left: { style: 'medium', color: { argb: '000000' } },
          bottom: { style: 'medium', color: { argb: '000000' } },
          right: { style: 'medium', color: { argb: '000000' } },
        };
      });

      ['O74'].map((key) => {
        worksheet.getCell(key).border = {
          top: { style: 'medium', color: { argb: '000000' } },
          left: { style: 'medium', color: { argb: '000000' } },
          bottom: { style: 'medium', color: { argb: '000000' } },
          right: { style: 'medium', color: { argb: '000000' } },
        };
      });

      worksheet.mergeCells('B68:E68');
      worksheet.mergeCells('I68:N68');
      worksheet.mergeCells('O68:P68');

      worksheet.mergeCells('C69:E69');
      worksheet.mergeCells('I69:N69');
      worksheet.mergeCells('O69:P69');

      worksheet.mergeCells('C70:E70');
      worksheet.mergeCells('I70:N70');
      worksheet.mergeCells('O70:P70');

      worksheet.mergeCells('C71:E71');
      worksheet.mergeCells('I71:N71');
      worksheet.mergeCells('O71:P71');

      worksheet.mergeCells('C72:E72');
      worksheet.mergeCells('I72:N72');
      worksheet.mergeCells('O72:P72');

      worksheet.mergeCells('C73:E73');
      worksheet.mergeCells('I73:N73');
      worksheet.mergeCells('O73:P73');

      worksheet.mergeCells('I74:N74');
      worksheet.mergeCells('O74:P74');

      worksheet.getRow(4).height = 24;
      worksheet.getRow(5).height = 24;
      worksheet.getRow(6).height = 24;
      worksheet.getRow(7).height = 22.5;
      worksheet.getRow(8).height = 22.5;
      worksheet.getRow(8).height = 22.5;
      worksheet.getRow(9).height = 21;
      worksheet.getRow(10).height = 22.5;
      worksheet.getRow(11).height = 22.5;
      worksheet.getRow(12).height = 54;
      worksheet.getRow(13).height = 54;
      worksheet.getRow(14).height = 99;
      worksheet.getRow(15).height = 76.5;
      worksheet.getRow(16).height = 56.25;
      worksheet.getRow(17).height = 95.25;
      worksheet.getRow(18).height = 96;
      worksheet.getRow(19).height = 51.75;
      worksheet.getRow(20).height = 87;
      worksheet.getRow(21).height = 104.25;
      worksheet.getRow(22).height = 75.75;
      worksheet.getRow(23).height = 83.25;
      worksheet.getRow(24).height = 79.5;
      worksheet.getRow(25).height = 55.5;
      worksheet.getRow(26).height = 103.5;
      worksheet.getRow(27).height = 99;
      worksheet.getRow(28).height = 48.75;
      worksheet.getRow(29).height = 129.75;
      worksheet.getRow(30).height = 56.25;
      worksheet.getRow(31).height = 100.5;
      worksheet.getRow(32).height = 94.5;
      worksheet.getRow(33).height = 120.75;
      worksheet.getRow(34).height = 120.75;
      worksheet.getRow(35).height = 177.75;
      worksheet.getRow(36).height = 66;
      worksheet.getRow(37).height = 95.25;
      worksheet.getRow(38).height = 122.25;
      worksheet.getRow(39).height = 70.5;
      worksheet.getRow(40).height = 101.25;
      worksheet.getRow(41).height = 120.75;
      worksheet.getRow(42).height = 96.75;
      worksheet.getRow(43).height = 65.25;
      worksheet.getRow(44).height = 65.25;
      worksheet.getRow(45).height = 71.25;
      worksheet.getRow(46).height = 61.5;
      worksheet.getRow(47).height = 75;
      worksheet.getRow(48).height = 68.25;
      worksheet.getRow(49).height = 132.25;
      worksheet.getRow(50).height = 132.25;
      worksheet.getRow(51).height = 132.25;
      worksheet.getRow(52).height = 98.25;
      worksheet.getRow(53).height = 98.25;
      worksheet.getRow(54).height = 48.75;
      worksheet.getRow(55).height = 93;
      worksheet.getRow(56).height = 123.75;
      worksheet.getRow(57).height = 101.25;
      worksheet.getRow(58).height = 99;
      worksheet.getRow(59).height = 99.75;
      worksheet.getRow(60).height = 84;
      worksheet.getRow(61).height = 84;
      worksheet.getRow(62).height = 84;
      worksheet.getRow(63).height = 63.75;
      worksheet.getRow(64).height = 53.25;
      worksheet.getRow(65).height = 33;
      worksheet.getRow(66).height = 60.75;
      worksheet.getRow(67).height = 15.75;
      worksheet.getRow(68).height = 48;
      worksheet.getRow(69).height = 45.75;
      worksheet.getRow(70).height = 48.75;
      worksheet.getRow(71).height = 47.25;
      worksheet.getRow(72).height = 53.25;
      worksheet.getRow(73).height = 63.75;
      worksheet.getRow(74).height = 51;

      worksheet.getColumn(1).width = 10;
      worksheet.getColumn(2).width = 11.29;
      worksheet.getColumn(3).width = 7.29;
      worksheet.getColumn(4).width = 11;
      worksheet.getColumn(5).width = 38.86;
      worksheet.getColumn(6).width = 4.43;
      worksheet.getColumn(7).width = 5;
      worksheet.getColumn(8).width = 15.29;
      worksheet.getColumn(9).width = 5;
      worksheet.getColumn(10).width = 11;
      worksheet.getColumn(11).width = 4.71;
      worksheet.getColumn(12).width = 22.71;
      worksheet.getColumn(13).width = 22.71;
      worksheet.getColumn(14).width = 4.43;
      worksheet.getColumn(15).width = 5;
      worksheet.getColumn(16).width = 15.86;
      worksheet.getColumn(17).width = 5.29;
      worksheet.getColumn(18).width = 0.5;
    }
    // Generate Excel File with given name
    workbook.xlsx.writeBuffer().then((data: any) => {
      const blob = new Blob([data], {
        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      });
      fs.saveAs(blob, 'expedientes-de-obra-publica-filtradoss.xlsx');
    });
  }

  agruparDatosA(row: any) {
    let dataFinal: any = [];

    for (let j = 0; j < this.clasificacionesA.length; j++) {
      let dataEncontrada: any = row.filter(
        (res: any) => res.type === this.clasificacionesA[j]
      );
      dataEncontrada = dataEncontrada.sort(
        (x: any, y: any) => x.number - y.number
      );
      for (let k = 0; k < dataEncontrada.length; k++) {
        dataFinal.push(dataEncontrada[k]);
      }
    }
    return dataFinal;
  }

  agruparDatosO(row: any) {
    let dataFinal: any = [];

    for (let j = 0; j < this.clasificacionesO.length; j++) {
      let dataEncontrada: any = row.filter(
        (res: any) => res.type === this.clasificacionesO[j]
      );
      dataEncontrada = dataEncontrada.sort(
        (x: any, y: any) => x.number - y.number
      );
      for (let k = 0; k < dataEncontrada.length; k++) {
        dataFinal.push(dataEncontrada[k]);
      }
    }
    return dataFinal;
  }
}
