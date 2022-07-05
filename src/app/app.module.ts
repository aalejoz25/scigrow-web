import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './pagina_base/app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { PoliticasPrivacidadComponent } from './componentes/politicas-privacidad/politicas-privacidad.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { VistaProyectosUsuarioComponent } from './componentes/vista-proyectos-usuario/vista-proyectos-usuario.component';
import { BusquedasComponent } from './componentes/busquedas/busquedas.component';
import { ContrasenaComponent } from './componentes/contrasena/contrasena.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PoliticasPrivacidadComponent,
    LoginComponent,
    RegistroComponent,
    VistaProyectosUsuarioComponent,
    BusquedasComponent,
    ContrasenaComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],  
  bootstrap: [AppComponent]
})
export class AppModule { }
