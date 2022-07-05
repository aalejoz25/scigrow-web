import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PoliticasPrivacidadComponent } from './componentes/politicas-privacidad/politicas-privacidad.component'
import { LoginComponent } from './componentes/login/login.component';
import { BusquedasComponent } from './componentes/busquedas/busquedas.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { VistaProyectosUsuarioComponent } from './componentes/vista-proyectos-usuario/vista-proyectos-usuario.component';
import { ContrasenaComponent } from './componentes/contrasena/contrasena.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'politicas_privacidad', component: PoliticasPrivacidadComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'proyectos_usuario', component: VistaProyectosUsuarioComponent },
  { path: 'busquedas', component: BusquedasComponent },
  { path: 'contrasena', component: ContrasenaComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'login' },

  //{ path: '', redirectTo: 'inicio' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
