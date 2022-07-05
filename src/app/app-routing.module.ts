import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component'
import { LoginComponent } from './componentes/login/login.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { VistaProyectosUsuarioComponent } from './componentes/vista-proyectos-usuario/vista-proyectos-usuario.component';
import { ContrasenaComponent } from './componentes/contrasena/contrasena.component';
import { AdicionarComponent } from './componentes/adicionar/adicionar.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'registro', component: RegistroComponent },
  {path:'proyectos_usuario', component: VistaProyectosUsuarioComponent},
  {path:'proyectos', component: ProyectosComponent},
  {path:'contrasena', component: ContrasenaComponent},
  {path:'adicionar', component: AdicionarComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'inicio' },
  
  //{ path: '', redirectTo: 'inicio' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
