import { Injectable } from '@angular/core';
import { Auth, Unsubscribe, User, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class UsuarioActualService {

  usuarioActivo : string | null  = null;
  unsubscribe_auth : Unsubscribe

  constructor(private auth: Auth) {  

    this.unsubscribe_auth = onAuthStateChanged(this.auth,(user) =>
   {
    if(user)
    {
      this.usuarioActivo = user.email;
    }
    else
    {
      this.usuarioActivo = null;
    }

    console.log(this.usuarioActivo)


   })
    
   }

   


   login(usuario: string)
   {
     let retorno_obj = {
      email : "",
      password : ""
     }

     if(usuario != null)
     {         
      let usuario_obj = JSON.parse(usuario);

      retorno_obj.email = usuario_obj.email;
      retorno_obj.password = usuario_obj.password;      
     }    

     return signInWithEmailAndPassword(this.auth,retorno_obj.email,retorno_obj.password);
   }

   register(usuario: string)
   {
    let retorno_obj = {
      email : "nada",
      password : "nada"
     }
     
     if(usuario != null)
     {         
      let usuario_obj = JSON.parse(usuario);

      retorno_obj.email = usuario_obj.email;
      retorno_obj.password = usuario_obj.password;      
     }   
   
    return createUserWithEmailAndPassword(this.auth,retorno_obj.email,retorno_obj.password)
  
   }

   logout()
   {
    return signOut(this.auth)
   }
}
