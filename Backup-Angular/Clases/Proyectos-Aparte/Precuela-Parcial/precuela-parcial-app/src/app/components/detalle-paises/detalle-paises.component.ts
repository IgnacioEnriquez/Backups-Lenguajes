import { Component, Input } from '@angular/core';
import { PaisesService } from 'src/app/servicios/paises.service';

@Component({
  selector: 'app-detalle-paises',
  templateUrl: './detalle-paises.component.html',
  styleUrls: ['./detalle-paises.component.css']
})
export class DetallePaisesComponent {
  
  @Input() datos_nacionalidad: any;

  constructor(private paises_service : PaisesService) {      
  }
}
