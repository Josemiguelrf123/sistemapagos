export class Pago {
  id: string;
  semana: string;
  noContrato: string;
  trabajo: string;
  tono: string;
  consultorio: string;
  fechaRegistro: any;
  fechaEntrega: any;
  material: string;
  pruebaTerminada: string;
  urgente: string;
  placaBase: string;
  precio: string;
  totalPorCobrar: string;
  pagado: string;
  observaciones: string;
  trabajoAnterior: null | Pago;
  trabajoReferencia: null | Pago;
  partida: string;

  constructor(pago: Pago) {
    {
      this.id = pago.id || '';
      this.semana = pago.semana || '';
      this.noContrato = pago.noContrato || '';
      this.trabajo = pago.trabajo || '';
      this.tono = pago.tono || '';
      this.consultorio = pago.consultorio || '';
      this.fechaRegistro = pago.fechaRegistro || '';
      this.fechaEntrega = pago.fechaEntrega || '';
      this.material = pago.material || '';
      this.pruebaTerminada = pago.pruebaTerminada || '';
      this.urgente = pago.urgente || '';
      this.placaBase = pago.placaBase || '';
      this.precio = pago.precio || '';
      this.totalPorCobrar = pago.totalPorCobrar || '';
      this.pagado = pago.pagado || '';
      this.observaciones = pago.observaciones || '';
      this.trabajoAnterior = pago.trabajoAnterior || null;
      this.trabajoReferencia = pago.trabajoReferencia || null;
      this.partida = pago.partida || '';
    }
  }
}
