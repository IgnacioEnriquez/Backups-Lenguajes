import { Component } from '@angular/core';
import { Pelicula } from '../peliculas/peliculas';
import { TipoEnum } from 'src/app/enums/tipo-enum';
import { PeliculasService } from 'src/app/servicios/peliculas.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {
 
  public pelicula_seleccionada : Pelicula = new Pelicula(0,"Pelicula Seleccionada",TipoEnum.Desconocido,new Date(0,0,0),0,"");  


  actualizarDetalle($event:any)
  {
    this.pelicula_seleccionada = $event;     
  }
 

}
