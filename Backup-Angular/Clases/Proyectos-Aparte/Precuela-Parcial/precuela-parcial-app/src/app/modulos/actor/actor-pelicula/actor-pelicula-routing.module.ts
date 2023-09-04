import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActorPeliculaModule } from './actor-pelicula.module';
import { ActorPeliculaComponent } from 'src/app/components/actor/actor-pelicula/actor-pelicula.component';

const routes: Routes = [
  {
    path: '',
    component: ActorPeliculaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActorPeliculaRoutingModule { }
