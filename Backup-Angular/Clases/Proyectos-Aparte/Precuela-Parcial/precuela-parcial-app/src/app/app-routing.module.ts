import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'bienvenido',
    pathMatch: 'full'
  },
  {
    path: 'bienvenido',
    loadChildren: () => import('./modulos/bienvenido/bienvenido.module').then(m => m.BienvenidoModule)
  },
  {
    path: 'pelicula/listado',
    loadChildren: () => import('./modulos/pelicula/pelicula-listado/pelicula-listado.module').then(m => m.PeliculaListadoModule)
  },
  {
    path: 'pelicula/alta',
    loadChildren: () => import('./modulos/pelicula/pelicula-alta/pelicula-alta.module').then(m => m.PeliculaAltaModule)
  },
  {
    path: 'actor/alta',
    loadChildren: () => import('./modulos/actor/actor-alta/actor-alta.module').then(m => m.ActorAltaModule)
  },
  {
    path: 'actor/listado',
    loadChildren: () => import('./modulos/actor/actor-listado/actor-listado.module').then(m => m.ActorListadoModule)
  },
  {
    path: 'actor/pelicula',
    loadChildren: () => import('./modulos/actor/actor-pelicula/actor-pelicula.module').then(m => m.ActorPeliculaModule)
  },
  {
    path: 'busqueda',
    loadChildren: () => import('./modulos/busqueda/busqueda.module').then(m => m.BusquedaModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
