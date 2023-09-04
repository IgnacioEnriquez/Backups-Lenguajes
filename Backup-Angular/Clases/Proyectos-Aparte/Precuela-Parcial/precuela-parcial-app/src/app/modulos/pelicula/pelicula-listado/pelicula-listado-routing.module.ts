import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeliculasAltaComponent } from 'src/app/components/peliculas/alta/alta.component';
import { PeliculasListadoComponent } from 'src/app/components/peliculas/listado/listado.component';

const routes: Routes = [
  {
    path: '',
    component: PeliculasListadoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeliculaListadoRoutingModule { }
