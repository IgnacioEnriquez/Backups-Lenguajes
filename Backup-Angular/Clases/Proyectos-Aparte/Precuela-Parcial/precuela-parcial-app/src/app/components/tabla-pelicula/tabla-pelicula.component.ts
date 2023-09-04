import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pelicula } from '../peliculas/peliculas';
import { PeliculasService } from 'src/app/servicios/peliculas.service';

@Component({
  selector: 'app-tabla-pelicula',
  templateUrl: './tabla-pelicula.component.html',
  styleUrls: ['./tabla-pelicula.component.css']
})
export class TablaPeliculaComponent {

  public array_peliculas : Pelicula[];

  constructor(private peliculas_service : PeliculasService) {   

    this.array_peliculas = []
  }

  ngOnInit()
  {
    this.array_peliculas = this.peliculas_service.traerListado();
  }
    
  @Output() enviarDetallePelicula : EventEmitter<any> = new EventEmitter<any>();

  enviarDetalle(pelicula_actual:any)
  {
    this.enviarDetallePelicula.emit(pelicula_actual);    
  }


}
