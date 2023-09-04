import { Component, EventEmitter, Output } from '@angular/core';
import { Actor } from '../actor';
import { ActoresService } from 'src/app/servicios/actores.service';
import { PeliculasService } from 'src/app/servicios/peliculas.service';

@Component({
  selector: 'app-actorListado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ActorListadoComponent {

  array_actores : Actor[];
  @Output() enviarDetalleActor : EventEmitter<any> = new EventEmitter<any>();



  constructor(private actores_service : ActoresService, private peliculas_service : PeliculasService) 
  {
    this.array_actores = [];
  }

  ngOnInit()
  {
    this.array_actores = this.actores_service.array_actores;   
  }

  enviarDetalle(actor_actual:any)
  {
    this.enviarDetalleActor.emit(actor_actual);      
  }

  obtenerPeliculaID(id : number)
  {
    let retorno = "Ninguno";

    if(id !== 1)
    {
      let obj_pelicula = this.peliculas_service.traerPorID(id);   

      if(obj_pelicula)
      {
        retorno = obj_pelicula.nombre;
      }
    }  
    
    return retorno;     
  }

}
