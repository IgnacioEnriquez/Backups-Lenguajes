import { Component, Input } from '@angular/core';
import { Actor } from '../actor';
import { ActoresService } from 'src/app/servicios/actores.service';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PeliculasService } from 'src/app/servicios/peliculas.service';

@Component({
  selector: 'app-actor-alta',
  templateUrl: './actor-alta.component.html',
  styleUrls: ['./actor-alta.component.css']
})
export class ActorAltaComponent {   

  public form_actor!: FormGroup;
  selectPeliculaDefault = "Ninguna";
  nacionalidad: string
  array_peliculas : any[];

  public constructor(private actores_service : ActoresService, private peliculas_service : PeliculasService,
  private fb: FormBuilder) {
    this.nacionalidad = "OrdenJedi"
    this.array_peliculas = this.obtenerNombresPeliculas();
    console.log(this.array_peliculas)
  }  
  
  ngOnInit()
  {    
    this.form_actor = this.fb.group({
      'nombre': ['', [Validators.required, this.spacesValidator]],
      'apellido': ['', [Validators.required, this.spacesValidator]],
      'genero': ['', Validators.required],
      'cantidadPublico': ['', [Validators.required, Validators.min(1), Validators.max(10000000)]],
      'edad': ['', [Validators.required, Validators.min(18), Validators.max(100)]],
      'peliculaMasConocida': ['', Validators.required]

    });
  }

  agregarActor()
  {
    let obj_form = this.form_actor.getRawValue();

    if(obj_form)
    { 
      let peliculaID = parseInt(obj_form.peliculaMasConocida)    

      let actor_obj = new Actor(obj_form.nombre,obj_form.apellido,obj_form.edad,obj_form.genero,peliculaID,this.nacionalidad);
      console.log(actor_obj)
      this.actores_service.agregarActor(actor_obj)
    }
  }

  guardar_nacionalidad($event : any)
  {
    this.nacionalidad = $event
  }

  obtenerNombresPeliculas()
  {
    let array_peliculas = this.peliculas_service.traerListado()
    let array_retorno = []

    for(const pelicula of array_peliculas)
    {
      array_retorno.push(
        {
          id : pelicula.id,
          nombre : pelicula.nombre
        }
      )
    }

    return array_retorno
  }

  private spacesValidator(control: AbstractControl): null | object {
    const nombre = <string>control.value;
    const spaces = nombre.includes(' ');

    return spaces
      ? { containsSpaces: true }
      : null; 
  }

}
