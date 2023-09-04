import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioActualService } from 'src/app/services/usuario-actual.service';
import { addDoc, collection, Firestore, getDoc, getDocs, updateDoc } from '@angular/fire/firestore';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  
  email : string = "";
  contrasenia : string = "";

  constructor(private serviceUser:UsuarioActualService, private router : Router, private firestore : Firestore) 
  {
    
  }

  login()
  {    

    let usuario_json = JSON.stringify({
      email : this.email,
      password : this.contrasenia
    });

    this.serviceUser.login(usuario_json)
    .then(()=>
    {           
      this.guardarLogUsuarios(); 

      Swal.fire(
        'Tu Inicio De Sesion fue Realizado!',
        "Tu Inicio De Sesion fue realizado correctamente",
        'success'
      )  
      
      this.router.navigate(['home'])       
    })
    .catch((e)=>{ 
      
      Swal.fire(
        'Tu Inicio de Sesion fue Rechazado!',
        e.message,
        'error'
      )

      this.router.navigate(['/home'])     
    } );

  //   for (let i = 0; i < localStorage.length; i++) 
  //   {

  //     let usuario_string : string | null = localStorage.getItem("usuario" + i);
      
  //     if(usuario_string != null)
  //     {
  //       let usuario_obj = JSON.parse(usuario_string);

  //       if(usuario_obj.email === this.email &&  usuario_obj.contrasenia === this.contrasenia )
  //       {  
  //         this.serviceUser.usuarioActivo = this.email;    

  //         Swal.fire(
  //           'Tu Inicio de sesion fue exitoso!',
  //           'En instantes seras redirigido!',
  //           'success'
  //         )
          
  //         break        
  //       }
  //     }                
  //   }   
  // 
  }

  login_rapido()
  {
    this.serviceUser.login(JSON.stringify({email : "admin@gmail.com", password : "0043777893"}))
    .then(()=>
    {           
      this.guardarLogUsuarios(); 

      Swal.fire(
        'Tu Inicio De Sesion fue Realizado!',
        "Tu Inicio De Sesion fue realizado correctamente",
        'success'
      )  
      
      this.router.navigate(['home'])       
    })
    .catch((e)=>{ 
      
      Swal.fire(
        'Tu Inicio de Sesion fue Rechazado!',
        e.message,
        'error'
      )

      this.router.navigate(['/home'])     
    } );

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

