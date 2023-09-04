import { Component } from '@angular/core';
import { TipoEnum } from 'src/app/enums/tipo-enum';
import { PeliculasService } from 'src/app/servicios/peliculas.service';
import { Pelicula } from '../peliculas';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-peliculasAlta',
  templateUrl: './alta.component.html',
  styleUrls: ['./alta.component.css']
})
export class PeliculasAltaComponent {

  id!: number; 
  pathFoto! : string;
  tipoPredeterminado = "" 

  public form_pelicula!: FormGroup;


  constructor(private peliculas_service : PeliculasService, private fb: FormBuilder) {
    this.id= 1114;
  }

  ngOnInit()
  {
    this.form_pelicula = this.fb.group({
      'nombre': ['', [Validators.required, this.spacesValidator]],  
      'tipo': ['', Validators.required],
      'fecha': ['', Validators.required],
      'cantidadPublico': ['', [Validators.required, Validators.min(1), Validators.max(10000000)]],
      'fechaEstreno': ['', Validators.required]
        });
  }

  agregarPelicula()
  {
    // let pelicula_obj = new Pelicula(this.id,this.nombre,this.tipo,this.fecha,this.cantidadPublico,this.pathFoto);
    // this.id++;

    // this.peliculas_service.agregarPelicula(pelicula_obj)
  }

  private spacesValidator(control: AbstractControl): null | object {
    const nombre = <string>control.value;
    const spaces = nombre.includes(' ');

    return spaces
      ? { containsSpaces: true }
      : null; 
  }
}
