import { Component, OnInit } from '@angular/core';
import { ApiService } from "../../services/api.service";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { response } from 'express';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { SesionService } from 'src/app/services/sesion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formulario: FormGroup;
  error: boolean = false;

  constructor(private apiService: ApiService, private router: Router, private formBuilder: FormBuilder, private sessionService: SesionService) {
    this.formulario = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

  }


  ngOnInit(): void {
  }

  get usernameNoValido() {
    return this.formulario.get('username')?.invalid && this.formulario.get('username')?.touched;
  }

  get passwordNoValido() {
    return this.formulario.get('password')?.invalid && this.formulario.get('password')?.touched;
  }

  verificarDatos(): any {
    if (this.formulario.invalid) {
      Object.values(this.formulario.controls).forEach(control => {
        control.markAllAsTouched();
      })
      return;
    }
    this.error = false;
    let data = {
      isLogged: '',
      userType: '',
      id: '',
      userName: '',
      pass: '',
      email: '',
      fName: '',
      lName: ''
    }

    this.apiService.login(this.formulario.value.username, this.formulario.value.password).subscribe(
      response => {
        data = JSON.parse(JSON.stringify(response));
        if (data.isLogged == 'FALSE') {
          this.error = true;
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Credenciales incorrectas',
            showConfirmButton: true
          }

          )
        } else if (data.isLogged == 'TRUE') {
          this.sessionService.setUsuario(data);
          if (data.userType == '1') {
            this.router.navigate(['/gestionar_usuarios']);
          } else if (data.userType == '2') {
            this.router.navigate(['/proyectos_usuario']);
          }
        }
      }
    )
  }
}
