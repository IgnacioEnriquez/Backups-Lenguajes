import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BienvenidoComponent } from './components/bienvenido/bienvenido.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { PeliculasAltaComponent } from './components/peliculas/alta/alta.component';
import { PeliculasListadoComponent } from './components/peliculas/listado/listado.component';
import { AppRoutingModule } from './app-routing.module';
import { TablaPeliculaComponent } from './components/tabla-pelicula/tabla-pelicula.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetallePeliculaComponent } from './components/detalle-pelicula/detalle-pelicula.component';
import { ActorAltaComponent } from './components/actor/actor-alta/actor-alta.component';
import { TablaPaisesComponent } from './components/tabla-paises/tabla-paises.component';
import { HttpClientModule } from '@angular/common/http';
import { PaisesService } from './servicios/paises.service';
import { CommonModule } from '@angular/common';
import { ActorListadoModule } from './modulos/actor/actor-listado/actor-listado.module';
import { ActorAltaModule } from './modulos/actor/actor-alta/actor-alta.module';
import { ActorListadoComponent } from './components/actor/listado/listado.component';
import { BusquedaModule } from './modulos/busqueda/busqueda.module';
import { BienvenidoModule } from './modulos/bienvenido/bienvenido.module';
import { ActorPeliculaModule } from './modulos/actor/actor-pelicula/actor-pelicula.module';
import { ActorPeliculaComponent } from './components/actor/actor-pelicula/actor-pelicula.component';
import { DetalleActorComponent } from './components/detalle-actor/detalle-actor.component';
import { DetallePaisesComponent } from './components/detalle-paises/detalle-paises.component';

@NgModule({
  declarations: [
    AppComponent,
    BienvenidoComponent,
    BusquedaComponent,
    PeliculasAltaComponent,
    PeliculasListadoComponent,
    TablaPeliculaComponent,
    DetallePeliculaComponent,
    ActorAltaComponent,
    TablaPaisesComponent,
    ActorListadoComponent,
    ActorPeliculaComponent,
    DetalleActorComponent,
    DetallePaisesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    ActorListadoModule,
    ActorAltaModule,
    BusquedaModule,
    BienvenidoModule,
    ActorListadoModule,
    ActorAltaModule,
    ActorPeliculaModule,
    ReactiveFormsModule

  ],
  providers: [PaisesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
