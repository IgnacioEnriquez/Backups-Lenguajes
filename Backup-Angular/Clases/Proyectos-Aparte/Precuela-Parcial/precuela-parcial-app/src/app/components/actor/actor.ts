export class Actor {
  nombre: string;
  apellido: string;
  edad: number;
  genero: string;
  peliculaMasConocidaID: number;
  nacionalidad : string;

  constructor(nombre: string,apellido: string,edad: number,genero: string,peliculaMasConocidaID: number, nacionalidad:string) 
  {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.genero = genero;
    this.peliculaMasConocidaID = peliculaMasConocidaID;
    this.nacionalidad = nacionalidad;
  }
}
