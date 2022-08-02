import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PoliticasPrivacidadComponent } from './componentes/politicas-privacidad/politicas-privacidad.component'
import { LoginComponent } from './componentes/login/login.component';
import { BusquedasComponent } from './componentes/busquedas/busquedas.component';
import { VistaProyectosUsuarioComponent } from './componentes/vista-proyectos-usuario/vista-proyectos-usuario.component';
import { ContrasenaComponent } from './componentes/contrasena/contrasena.component';
import { AdicionarComponent } from './componentes/adicionar/adicionar.component';

const routes: Routes = [

  { path: 'inicio', component: LoginComponent },
  { path: 'politicas_privacidad', component: PoliticasPrivacidadComponent },
  { path: 'proyectos_usuario', component: VistaProyectosUsuarioComponent },
  { path: 'busquedas', component: BusquedasComponent },
  { path: 'contrasena', component: ContrasenaComponent },
  { path: 'adicionar', component: AdicionarComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'inicio' },
  { path: '', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
