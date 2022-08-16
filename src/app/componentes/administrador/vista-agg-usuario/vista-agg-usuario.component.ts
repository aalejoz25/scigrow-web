import { Component, OnInit } from '@angular/core';
import { ApiService } from "../../../services/api.service";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import Swal from 'sweetalert2/dist/sweetalert2.js';  

@Component({
  selector: 'app-vista-agg-usuario',
  templateUrl: './vista-agg-usuario.component.html',
  styleUrls: ['./vista-agg-usuario.component.css']
})
export class VistaAggUsuarioComponent implements OnInit {
  formulario: FormGroup;
  error: boolean = false;

  constructor(private apiService: ApiService, private router: Router, private formBuilder: FormBuilder) {
    this.formulario = this.formBuilder.group({
      username: ['', Validators.required],
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      birthdate:[],
      tipoUsuario:[]
    });
  }

  ngOnInit(): void {
  }

  get usernameNoValido() {
    return this.formulario.get('username')?.invalid && this.formulario.get('username')?.touched;
  }

  get lastnameNoValido() {
    return this.formulario.get('lastname')?.invalid && this.formulario.get('lastname')?.touched;
  }


  get emailNoValido() {
    return this.formulario.get('email')?.invalid && this.formulario.get('email')?.touched;
  }
  get passwordNoValido() {
    return this.formulario.get('password')?.invalid && this.formulario.get('password')?.touched;
  }
  get nameNoValido() {
    return this.formulario.get('name')?.invalid && this.formulario.get('name')?.touched;
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
      addeduser: ''
    }

    this.apiService.agregarUsuario(this.formulario.value.username,this.formulario.value.name,this.formulario.value.lastname,this.formulario.value.email,this.formulario.value.password,this.formulario.value.birthdate, this.formulario.value.tipoUsuario).subscribe(
      response => {
        console.log(response);
        data = JSON.parse(JSON.stringify(response));
        console.log(data);
        if (data.addeduser) {
          Swal.fire({   
            icon: 'success',  
            title: 'Se ha agregado el usuario',  
            showConfirmButton: true,   
          }) 
          console.log('se agrego usuario');
          this.formulario.reset();
        } else {
          Swal.fire({  
            icon: 'error',  
            title: 'Error',
            text:'Puede que el usuario ya exista',  
            showConfirmButton: true,  
          }) 
          console.log('ocurrio algun error');
        }
      }
    )
  }
}
