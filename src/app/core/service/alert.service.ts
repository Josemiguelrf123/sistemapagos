import { Injectable } from "@angular/core";
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from "@angular/material/snack-bar";
import Swal, { SweetAlertIcon } from "sweetalert2";

@Injectable({
  providedIn: "root",
})
export class AlertService {

  constructor(
    private _snackBar: MatSnackBar
  ) {
  }

  alertConf: any = {
    allowOutsideClick: false,
  };

  alertAloneConfirm: any = {
    showCancelButton: false,
    icon: "warning",
    confirmButtonColor: "#faa623",
    allowOutsideClick: false,
  };

  alertLoading(title: string, msg: string): void {
    Swal.fire({
      title: title,
      text: msg,
      allowOutsideClick: false,
    });

    Swal.showLoading();
  }

  alert(title: string, msg = "", icon: SweetAlertIcon = "success"): void {
    Swal.close();
    Swal.fire({
      title,
      html: msg,
      icon,
      confirmButtonText: "Aceptar",
    });
  }

  loanding(title: string): void {
    Swal.fire({
      title,
      html: "Espere un momento por favor",
      allowOutsideClick: false,
      showCancelButton: false,
      showConfirmButton: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });
  }

  alertClose(): void {
    Swal.close();
  }

  alertConfirm(
    mensaje: string,
    title = '',
    confirmButtonText = '¡Sí, confirmar!',
    cancelButtonText = '¡No, cancelar!',
  ): Promise<import('sweetalert2').SweetAlertResult<any>> {
    return Swal.fire({
      title,
      text: mensaje,
      showCancelButton: true,
      confirmButtonText,
      cancelButtonText,
      icon: "warning",
      ...this.alertConf,
    });
  }

  alertCancelar(
    title: string,
    confirmButtonText = "Sí, Confirmar",
    cancelButtonText = "Cancelar"
  ) {
    return Swal.fire({
      title,
      showCancelButton: true,
      input: "textarea",
      inputAttributes: {
        autocapitalize: "off",
      },
      confirmButtonText,
      cancelButtonText,
      showLoaderOnConfirm: true,
      preConfirm: (text) => {
        if (text === "") {
          Swal.showValidationMessage(`El campo es requrido`);
        }
      },
      ...this.alertConf,
    });
  }

  alertnuevo(
    title: string,
    confirmButtonText = "Sí, crear",
    cancelButtonText = "Cancelar"
  ) {
    return Swal.fire({
      customClass: {
        confirmButton: "mx-2 btn-principal",
        cancelButton: "mx-2 btn-cancelar",
      },
      buttonsStyling: false,
      title,
      showCancelButton: true,
      input: "text",
      inputAttributes: {
        autocapitalize: "off",
      },
      confirmButtonText,
      cancelButtonText,
      showLoaderOnConfirm: true,
      preConfirm: (text) => {
        if (text === "") {
          Swal.showValidationMessage(`El campo es requrido`);
        }
      },
      ...this.alertConf,
    });
  }

  alertSelect(
  ) {
    return Swal.fire({
      customClass: {
        cancelButton: "mx-2 btn-cancelar",
        confirmButton: "mx-2 btn-principal",
      },
      buttonsStyling: false,
      title: 'Selecciona que datos de acceso quieres cambiar',
      showCancelButton: true,
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Continuar',
      icon: "warning",
      input: 'select',
      inputOptions: {
        correo: 'Correo electrónico',
        pass: 'Contraseña'
      },
      inputPlaceholder: 'Selecciona una opción',
      preConfirm: (value) => {
        if (value === '') {
          return Swal.showValidationMessage(`El campo es requrido`);
        }
      },
      ...this.alertConf,
    });
  }

  alertCorreo(
    title: string,
    confirmButtonText = "Cambiar correo electrónico",
    cancelButtonText = "Cancelar"
  ) {
    return Swal.fire({
      customClass: {
        confirmButton: "mx-2 btn-principal",
        cancelButton: "mx-2 btn-cancelar",
      },
      buttonsStyling: false,
      title,
      showCancelButton: true,
      input: "text",
      inputAttributes: {
        autocapitalize: "off",
      },
      inputPlaceholder: 'Ingresa el correo electrónico',
      confirmButtonText,
      cancelButtonText,
      showLoaderOnConfirm: true,
      preConfirm: (text) => {
        var validEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;/\S+@\S+\.\S+/;
        if (text === "") {
          Swal.showValidationMessage(`El campo es requrido`);
        }
        if (!validEmail.test(text)) {
          Swal.showValidationMessage(`El correo electrónico no es valido`);
        }
      },
      ...this.alertConf,
    });
  }

  alertPass(
    title: string,
    confirmButtonText = "Cambiar contraseña",
    cancelButtonText = "Cancelar"
  ) {
    return Swal.fire({
      customClass: {
        confirmButton: "mx-2 btn-principal",
        cancelButton: "mx-2 btn-cancelar",
      },
      buttonsStyling: false,
      title,
      showCancelButton: true,
      input: "text",
      inputAttributes: {
        autocapitalize: "off",
      },
      inputPlaceholder: 'Ingresa la nueva contraseña',
      confirmButtonText,
      cancelButtonText,
      showLoaderOnConfirm: true,
      preConfirm: (text) => {
        if (text === "") {
          Swal.showValidationMessage(`El campo es requrido`);
        }
      },
      ...this.alertConf,
    });
  }

  toast(
    msg:any,
    panelClass = 'row-green',
    Vposition: MatSnackBarVerticalPosition = 'top',
    Hposition: MatSnackBarHorizontalPosition = 'right'
  ): void {
    this._snackBar.open(msg, '', {
      horizontalPosition: Hposition,
      verticalPosition: Vposition,
      duration: 5000,
      panelClass: [panelClass],
    });
  }
}
