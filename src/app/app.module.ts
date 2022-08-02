import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './pagina_base/app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { PoliticasPrivacidadComponent } from './componentes/politicas-privacidad/politicas-privacidad.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { VistaProyectosUsuarioComponent } from './componentes/usuario/vista-proyectos-usuario/vista-proyectos-usuario.component';
import { BusquedasComponent } from './componentes/busquedas/busquedas.component';
import { ContrasenaComponent } from './componentes/contrasena/contrasena.component';
import { AdicionarComponent } from './componentes/usuario/adicionar/adicionar.component';
import { VistaGestUsrComponent } from './componentes/administrador/vista-gest-usr/vista-gest-usr.component';
import { VistaGestProyComponent } from './componentes/administrador/vista-gest-proy/vista-gest-proy.component';


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
    AdicionarComponent,
    VistaGestUsrComponent,
    VistaGestProyComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],  
  bootstrap: [AppComponent]
})
export class AppModule { }
