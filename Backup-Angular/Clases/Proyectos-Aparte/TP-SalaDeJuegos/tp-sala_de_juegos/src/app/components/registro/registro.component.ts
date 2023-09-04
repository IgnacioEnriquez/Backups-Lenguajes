import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioActualService } from 'src/app/services/usuario-actual.service';
import { addDoc, collection, Firestore, getDoc, getDocs, updateDoc } from '@angular/fire/firestore';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

   email : string = "";
   contrasenia : string = "";
   contador : number = 0;

  
   constructor(private serviceUser : UsuarioActualService, private router : Router, private firestore : Firestore) {    
    
   }

   registrar()
   {

    let usuario_json = JSON.stringify({
      email : this.email,
      password : this.contrasenia
    });

    this.serviceUser.register(usuario_json)
    .then(()=>
    { 
      Swal.fire(
        'Tu Registro fue Realizado!',
        "Tu registro fue realizado correctamente",
        'success'
      )  
      
      let usuario_json = JSON.stringify({
        email : this.email,
        password : this.contrasenia
      });
  
      this.serviceUser.login(usuario_json)
      .then(()=>
      {           
        this.guardarLogUsuarios();        
        
        this.router.navigate(['home'])       
      })
      .catch((e)=>{             
        console.log(e);
        this.router.navigate(['/home'])     
      } );             
       
    })
    .catch((e)=>{

      let mensaje_obj = e.message

      if(e.message === "Firebase: Error (auth/email-already-in-use).")
      {
        mensaje_obj = "El email ya se encuentra en registrado"
      }
      
     Swal.fire(
      'Tu Registro fue Rechazado!',
      mensaje_obj,
      'error'
    )
      console.log(e.message)
      this.router.navigate(['/home'])     
    } );   

    // let obj_usuario  = {
    //   email : this.email,
    //   contrasenia : this.contrasenia
    // }

    // localStorage.setItem('usuario' + this.contador, JSON.stringify(obj_usuario));    
    // this.contador++;
    
    // Swal.fire(
    //   'Tu Registro fue exitoso!',
    //   'Ya puedes iniciar sesion!',
    //   'success'
    // )
   }

   guardarLogUsuarios()
{
  let fecha_actual = new Date();
   
  let usuario_log = {
    usuario : this.email,
    fecha_ingreso : fecha_actual.toLocaleString().toString()
  }

  const col = collection(this.firestore,'usuarios-log');
  addDoc(col,usuario_log); 
}

}
