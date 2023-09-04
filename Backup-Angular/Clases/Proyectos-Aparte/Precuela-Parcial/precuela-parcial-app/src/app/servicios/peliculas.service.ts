import { Injectable } from '@angular/core';
import { Pelicula } from '../components/peliculas/peliculas';
import { TipoEnum } from '../enums/tipo-enum';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private lista_peliculas : Pelicula[];
  
  constructor() {

    this.lista_peliculas = [
      new Pelicula(1111,"Titanic",TipoEnum.Drama,new Date(1998,1,5),200000,"../assets/titanic.jpg"),
      new Pelicula(1112,"Corazon Valiente",TipoEnum.Accion,new Date(1998,7,10),500000,"../assets/corazon-valiente.jpg"),
      new Pelicula(1113,"Argentina 1985",TipoEnum.Drama,new Date(1985,7,29),300000,"../assets/argentina-1985.jpg"),  
    ]
    
  }

  agregarPelicula(pelicula : Pelicula)
  {
    if(pelicula)
    this.lista_peliculas.push(pelicula);
  }

  traerPorID(id : number)
  {
    let retorno_obj = null

    for(const pelicula of this.lista_peliculas)
    {
      if(pelicula.id === id)
      {
        retorno_obj = pelicula;
        break       
      }      
    };
    
    return retorno_obj;
  }

  traerListado()
  {
    return this.lista_peliculas;
  } 
}
