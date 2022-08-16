import { Component } from '@angular/core';
import { Usuario } from '../interfaces/usuario.interface';
import { SesionService } from '../services/sesion.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'scigrow-web';

  

  constructor(public sesionService:SesionService){
    this.sesionService.resetUsuario();
  }
}
