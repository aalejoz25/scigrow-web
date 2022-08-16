import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './pagina_base/app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { PoliticasPrivacidadComponent } from './componentes/vista-politicas-privacidad/politicas-privacidad.component';
import { LoginComponent } from './componentes/vista-login/login.component';
import { VistaProyectosUsuarioComponent } from './componentes/usuario/vista-proyectos-usuario/vista-proyectos-usuario.component';
import { BusquedasComponent } from './componentes/vista-busquedas/busquedas.component';
import { ContrasenaComponent } from './componentes/vista-rec-contrasena/contrasena.component';
import { AdicionarComponent } from './componentes/usuario/adicionar/adicionar.component';
import { VistaGestUsrComponent } from './componentes/administrador/vista-gest-usr/vista-gest-usr.component';
import { VistaGestProyComponent } from './componentes/administrador/vista-gest-proy/vista-gest-proy.component';
import { VistaAggUsuarioComponent } from './componentes/administrador/vista-agg-usuario/vista-agg-usuario.component';
import { CerrarSesionComponent } from './componentes/cerrar-sesion/cerrar-sesion.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PoliticasPrivacidadComponent,
    LoginComponent,
    VistaProyectosUsuarioComponent,
    BusquedasComponent,
    ContrasenaComponent,
    AdicionarComponent,
    VistaGestUsrComponent,
    VistaGestProyComponent,
    VistaAggUsuarioComponent,
    CerrarSesionComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SweetAlert2Module
  ],
  providers: [],  
  bootstrap: [AppComponent]
})
export class AppModule { }
