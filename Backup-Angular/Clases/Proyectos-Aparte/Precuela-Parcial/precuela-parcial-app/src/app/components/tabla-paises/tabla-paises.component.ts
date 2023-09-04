import { Component, EventEmitter, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { PaisesService } from 'src/app/servicios/paises.service';

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.css']
})
export class TablaPaisesComponent {

  array_paises !: any[];
  bandera_pred = "../../../assets/paises/Orden-Jedi-Flah.jpg";
  @Output() selectCambio_event : EventEmitter<any> = new EventEmitter<any>();   
  select_paises : string = "OrdenJedi";

  constructor(private paises_service : PaisesService){}

  ngOnInit()
  {
    this.traerPaises();      
  }  

  traerPaises()
  {
    this.paises_service.getPaises().subscribe({
      next: (response)=> {
        this.array_paises = response
        this.array_paises.sort((a,b)=>{
          if(a.name.common === b.name.common)
          {
          return 0;
          }
          else if(a.name.common < b.name.common)
          {
          return -1
          }
          else
          {
          return 1
          }
        })
        console.log(this.array_paises)
      },
      error:(e) => console.log(e),  
    });    
  }

  selectCambio()
  {
    if(this.select_paises != "OrdenJedi")
    {
      this.array_paises.forEach(pais => 
        {
          if(pais.name.common === this.select_paises)
          {
            this.bandera_pred = pais.flags.svg
          }
        });
    }
    else
    {
      this.bandera_pred = "../../../assets/paises/Orden-Jedi-Flah.jpg"
      this.select_paises = "OrdenJedi"
    }

    this.selectCambio_event.emit(this.select_paises);
    
  }
 

}
