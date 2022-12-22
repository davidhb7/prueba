import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './determinante/home/home.component';
import { UbicacionGanadoComponent } from './ubicacion-ganado/ubicacion-ganado.component';
import { ZonaAnalisisComponent } from './zona-analisis/zona-analisis.component';

const routes: Routes = [
  //CUANDO NO RECIBA NINGUNA RUTA EN ESPECIFICO, REDIRECCION A HOME
  {path: '',component:HomeComponent},
  //RUTA DE CONSULTA PARA PAGINA DATOS GANADO
  {path: 'ubicacion-g', component: UbicacionGanadoComponent},
  //RUTA DE CONSULTA PAGINA ZONA
  {path: 'zona', component:ZonaAnalisisComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
