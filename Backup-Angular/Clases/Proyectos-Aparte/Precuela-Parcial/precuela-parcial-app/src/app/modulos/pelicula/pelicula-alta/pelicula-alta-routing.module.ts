import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeliculasAltaComponent } from 'src/app/components/peliculas/alta/alta.component';

const routes: Routes = [
  {
    path: '',
    component: PeliculasAltaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeliculaAltaRoutingModule { }
