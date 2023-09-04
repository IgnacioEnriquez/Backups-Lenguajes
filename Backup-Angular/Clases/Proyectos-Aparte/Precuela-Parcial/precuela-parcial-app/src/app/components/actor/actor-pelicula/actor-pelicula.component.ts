import { Component } from '@angular/core';
import { Actor } from '../actor';
import { PaisesService } from 'src/app/servicios/paises.service';
import { Pelicula } from '../../peliculas/peliculas';
import { TipoEnum } from 'src/app/enums/tipo-enum';
import { PeliculasService } from 'src/app/servicios/peliculas.service';

@Component({
  selector: 'app-actor-pelicula',
  templateUrl: './actor-pelicula.component.html',
  styleUrls: ['./actor-pelicula.component.css']
})
export class ActorPeliculaComponent {

  public actor_seleccionado : Actor = new Actor("Nadie Fue seleccionado","Nadie Fue seleccionado",0,"Nadie Fue seleccionado",1,"OrdenJedi");
  public informacion_nacionalidad : any = [{
    name : {common : "OrdenJedi"},
    capital : "Coruscant",
    continents : "Space",
    population : 100000,
    borders : ['Uno','Dos','Tres']
  }];
  public peliculaSelecionada : Pelicula | null = new Pelicula(0,"Ninguna Pelicula Seleccionada",TipoEnum.Desconocido,new Date(0,0,0),0,"")



  constructor(private paises_service : PaisesService,private peliculas_service : PeliculasService) {    
    
  }

  actualizarDetalle($event:any)
  {  
    this.actor_seleccionado = $event;
    if($event.nacionalidad !== "OrdenJedi")
    {
      this.paises_service.getPaisEspecifico($event.nacionalidad).subscribe({
        next: (response)=> {
          this.informacion_nacionalidad = response              
        },
        error:(e) => console.log(e),  
      });
    }
    else
    {
      this.informacion_nacionalidad = [{
        name : {common : "OrdenJedi"},
        capital : "Coruscant",
        continents : "Space",
        population : 100000,
        borders : ['Uno','Dos','Tres']
      }];
    }
    
    this.peliculaSelecionada = this.peliculas_service.traerPorID($event.peliculaMasConocidaID)          
  }

}
