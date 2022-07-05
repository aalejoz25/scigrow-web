import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './pagina_base/app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { VistaProyectosUsuarioComponent } from './componentes/vista-proyectos-usuario/vista-proyectos-usuario.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { ContrasenaComponent } from './componentes/contrasena/contrasena.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    InicioComponent,
    LoginComponent,
    RegistroComponent,
    VistaProyectosUsuarioComponent,
    ProyectosComponent,
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
