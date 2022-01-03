import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import Swal from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(
    private _router: Router
  ) { }

  getFieldsError(form, formControlName: string, fieldName: string) {
    const errorMessage = form.get(formControlName).errors;
    const errorType = errorMessage
      ? Object.keys(errorMessage)[0]
      : null;

    let fieldError;
    switch (errorType) {
      case 'required':
        fieldError = `El campo ${fieldName} es requerido`;
        break;
      case 'minlength':
        fieldError = `Se requieren mínimo ${errorMessage.minlength.requiredLength} caracteres para ${fieldName}`;
        break;
      case 'maxlength':
        fieldError = `Se permiten máximo ${errorMessage.maxlength.requiredLength} caracteres para ${fieldName}`;
        break;
      case 'min':
        fieldError = `El valor mínimo para ${fieldName} es ${errorMessage.min.min} `;
        break;
      case 'max':
        fieldError = `El valor máximo para ${fieldName} es ${errorMessage.max.max} `;
        break;
      case 'pattern':
        fieldError = `Los caracteres ingresados no cumplen con el formato del campo ${fieldName}`
    }

    return fieldError;
  }

  getErrorForm() {
    Swal.fire({
      title: 'Atención',
      text: 'Por favor valida que el formulario esté completo y no hayan campos en rojo',
      icon: 'warning',
      timer: 3000,
      allowEnterKey: true,
      allowEscapeKey: true,
      allowOutsideClick: false
    });
  }

  getNewAddMessage() {
    Swal.fire({
      title: '¡Genial!',
      text: 'El usuario ha sido creado exitosamente, ahora puedes crear uno nuevo o editar uno existente',
      icon: 'success',
      allowEnterKey: true,
      allowEscapeKey: true,
      allowOutsideClick: false
    });
  }

  getCreateUserError() {
    Swal.fire({
      title: 'Ups',
      text: 'Ha ocurrido un error, por favor valida que el correo electrónico o el número de celular no se encuentren ya registrados',
      color: '#ffff',
      icon: 'error',
      allowEnterKey: true,
      allowEscapeKey: true,
      allowOutsideClick: false,
      showClass: {
        popup: 'swal2-show',
        backdrop: 'swal2-backdrop-show',
        icon: 'swal2-icon-show'
      },
      background: '#585858'
    });
  }

  loginSuccess() {
    Swal.fire({
      title: '¡Hola!',
      text: 'Bienvenido de nuevo',
      color: '#ffff',
      icon: 'success',
      allowEnterKey: true,
      allowEscapeKey: true,
      allowOutsideClick: false,
      showClass: {
        popup: 'swal2-show',
        backdrop: 'swal2-backdrop-show',
        icon: 'swal2-icon-show'
      },
      background: '#585858'
    }).then(succesfull => {
      this._router.navigate(['createCard'])
    });
  }

  loginError() {
    Swal.fire({
      title: '¡Hola!',
      text: 'Por favor verifica que los datos ingresados sean correctos',
      color: '#ffff',
      icon: 'error',
      allowEnterKey: true,
      allowEscapeKey: true,
      allowOutsideClick: false,
      showClass: {
        popup: 'swal2-show',
        backdrop: 'swal2-backdrop-show',
        icon: 'swal2-icon-show'
      },
      background: '#585858'
    });
  }

  addCardSuccess() {
    Swal.fire({
      title: '¡Genial!',
      text: 'La tarjeta ha sido creada exitosamente, puedes agregar una nueva o editar una existente',
      icon: 'success',
      allowEnterKey: true,
      allowEscapeKey: true,
      allowOutsideClick: false
    }).then(data => {
      window.location.reload();
    });
  }

  addCardError() {
    Swal.fire({
      title: 'Ups',
      text: 'Ha ocurrido un error, por favor valida que el número de tarjeta no esté registrado',
      color: '#ffff',
      icon: 'error',
      allowEnterKey: true,
      allowEscapeKey: true,
      allowOutsideClick: false,
      showClass: {
        popup: 'swal2-show',
        backdrop: 'swal2-backdrop-show',
        icon: 'swal2-icon-show'
      },
      background: '#585858'
    });
  }

  deleteCardSuccess() {
    Swal.fire({
      title: '¡Ok!',
      text: 'La tarjeta ha sido eliminada exitosamente, puedes agregar una nueva o editar una existente',
      icon: 'success',
      allowEnterKey: true,
      allowEscapeKey: true,
      allowOutsideClick: false
    }).then(data => {
      window.location.reload();
    });
  }


}
