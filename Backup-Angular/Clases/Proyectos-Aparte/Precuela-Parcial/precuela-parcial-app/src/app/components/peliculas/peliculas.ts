import { TipoEnum } from "src/app/enums/tipo-enum";

export class Pelicula {

    public id : number;
    public nombre : string;
    public tipo : TipoEnum;
    public fechaEstreno : Date; 
    public cantidadPublico : number;
    public pathFoto : string;    

   constructor(id : number,nombre : string,tipo : TipoEnum,fechaEstreno : Date, cantidadPublico : number,pathFoto : string) 
   {
    this.id = id;
    this.nombre = nombre;
    this.tipo = tipo;
    this.fechaEstreno = fechaEstreno;
    this.cantidadPublico = cantidadPublico;
    this.pathFoto = pathFoto;       
   }

  


}
