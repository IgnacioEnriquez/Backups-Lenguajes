import { Component } from '@angular/core';

@Component({
  selector: 'app-ejercicio-nombreyapellido',
  templateUrl: './ejercicio-nombreyapellido.component.html',
  styleUrls: ['./ejercicio-nombreyapellido.component.css']
})
export class EjercicioNombreyapellidoComponent {
 
  nombre: string = "";
  apellido: string = "";
  resultado : string = "";
  
concatenar()
{
  this.resultado = this.nombre + this.apellido; 
}

limpiar()
{
  this.nombre = "";
  this.apellido = "";
  this.resultado = "";
}


}
