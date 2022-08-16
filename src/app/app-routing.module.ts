import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PoliticasPrivacidadComponent } from './componentes/vista-politicas-privacidad/politicas-privacidad.component'
import { LoginComponent } from './componentes/vista-login/login.component';
import { BusquedasComponent } from './componentes/vista-busquedas/busquedas.component';
import { VistaProyectosUsuarioComponent } from './componentes/usuario/vista-proyectos-usuario/vista-proyectos-usuario.component';
import { ContrasenaComponent } from './componentes/vista-rec-contrasena/contrasena.component';
import { AdicionarComponent } from './componentes/usuario/adicionar/adicionar.component';
import { VistaGestUsrComponent } from "./componentes/administrador/vista-gest-usr/vista-gest-usr.component";
import { VistaAggUsuarioComponent } from "./componentes/administrador/vista-agg-usuario/vista-agg-usuario.component"
import { CerrarSesionComponent } from './componentes/cerrar-sesion/cerrar-sesion.component';

const routes: Routes = [

  { path: 'inicio', component: LoginComponent },
  { path: 'politicas_privacidad', component: PoliticasPrivacidadComponent },
  { path: 'proyectos_usuario', component: VistaProyectosUsuarioComponent },
  { path: 'busquedas', component: BusquedasComponent },
  { path: 'contrasena', component: ContrasenaComponent },
  { path: 'gestionar_usuarios', component: VistaGestUsrComponent },
  { path: 'adicionar_proyecto', component: AdicionarComponent },
  { path: 'agregar_usuario', component: VistaAggUsuarioComponent },
  { path: 'cerrar_sesion', component: CerrarSesionComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'inicio' },
  { path: '', component: LoginComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
