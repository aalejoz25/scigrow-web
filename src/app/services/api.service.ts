import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http'
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url: string = "https://scigrow.online/scigrow_api/"

  constructor(private httpClient: HttpClient) { }

  login(username: string, password: string) {
    const peticion = `${this.url}services/service.login.php`
    const usuario: any = {
      username,
      password
    };
    const headers: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json;charset="otf-8"'
    })

    return this.httpClient.post(peticion, usuario, { headers }).pipe(map((data: any) => { return data }))
  }

  agregarUsuario(userName: string, firstName:string, lastName:string, email:string, password: string ,birthDate:any ,userType:any) {
    const peticion = `${this.url}usuarios/services/services.usuario.php`
    const usuario: any = {
      tip:"registrarUsuario",
      userName,
      firstName,
      lastName,
      email,
      password,
      birthDate,
      userType
    };
  
    
    const headers: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json;charset="otf-8"'
    })
    return this.httpClient.post(peticion, usuario, { headers }).pipe(map((data: any) => { return data }))
  }


}
