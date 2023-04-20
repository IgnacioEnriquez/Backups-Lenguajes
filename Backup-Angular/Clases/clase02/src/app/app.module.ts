import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EjercicioNombreyapellidoComponent } from './componentes/ejercicio-nombreyapellido/ejercicio-nombreyapellido.component';

@NgModule({
  declarations: [
    AppComponent,
    EjercicioNombreyapellidoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
