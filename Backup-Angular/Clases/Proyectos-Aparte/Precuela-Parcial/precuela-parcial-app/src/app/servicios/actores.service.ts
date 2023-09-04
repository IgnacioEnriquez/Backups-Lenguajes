import { Injectable } from '@angular/core';
import { Actor } from '../components/actor/actor';

@Injectable({
  providedIn: 'root'
})
export class ActoresService {

  array_actores : Actor[];

  constructor() 
  {
    this.array_actores = [
      new Actor("Ricardo","Darin",66,"Masculino",1113,"Argentina"),
      new Actor("Leonardo","Sbaraglia",52,"Masculino",1112,"Argentina"),
      new Actor("Leonardo","DiCaprio",48,"Masculino",1111,"United States")]
  }

  agregarActor(actor : Actor)
  {
    if(actor)
    this.array_actores.push(actor);
  }

  traerListado()
  {
    return this.array_actores;
  }


}
