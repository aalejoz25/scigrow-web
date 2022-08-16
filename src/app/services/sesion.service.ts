import { Injectable } from '@angular/core';
import { idText } from 'typescript';
import { Usuario } from '../interfaces/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class SesionService {

  public usuario: Usuario = {
    isLogged: '',
    userType: '',
    id: '',
    userName: '',
    pass: '',
    email: '',
    fName: '',
    lName: ''
  }

  constructor() {
    this.leerStorage();
  }

  leerStorage(): void {
    if (sessionStorage.getItem("usuario")) {
      let datos = sessionStorage.getItem("usuario");
      this.usuario = JSON.parse(JSON.stringify(datos));
    }
  }

  getUsuario(): Usuario {
    return this.usuario;
  }

  setUsuario(usuario: Usuario): void {
    this.usuario = usuario;
    this.guardarStorage();
  }

  guardarStorage(): void {
    sessionStorage.setItem("usuario", JSON.stringify(this.usuario))
  }

  resetUsuario(): void {
    this.usuario = {
      isLogged: '',
      userType: '',
      id: '',
      userName: '',
      pass: '',
      email: '',
      fName: '',
      lName: ''
    }
    this.guardarStorage();
  }





}
