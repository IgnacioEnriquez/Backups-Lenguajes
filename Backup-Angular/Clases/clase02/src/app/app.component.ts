import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nombre: string = "";
  apellido: string = "";
  resultado : string = "";
  
concatenar()
{
  this.resultado = `${this.nombre} ${this.apellido}` 
}


limpiar()
{
  this.nombre = "";
  this.apellido = "";
}

}
