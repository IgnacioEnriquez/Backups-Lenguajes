import { Component } from '@angular/core';
import { UsuarioActualService } from 'src/app/services/usuario-actual.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  usuario_registrado : boolean = false;
  nombre_usuario : string | null = null;


  
  constructor(private usuarioService : UsuarioActualService) {     


  }   

  ngOnInit()
  {  
    setInterval(() =>
    {
      console.log(this.usuarioService.usuarioActivo)
      if(this.usuarioService.usuarioActivo)
      {
        this.usuario_registrado = true;
        this.nombre_usuario = this.usuarioService.usuarioActivo;
      }      
      else
      {      
        this.usuario_registrado = false;
      }

    },1000);
  }


  cerrarSesion()
  {
    this.usuarioService.logout().then(()=>
    {
      Swal.fire(
        'Cerrar Sesion',
        "Tu sesion fue cerrada correctamente",
        'success'
      )        

    }
    )
    .catch((e)=>
    {
      Swal.fire(
        'Cerrar Sesion',
        e.message,
        'error'
      )      
    });
  }


  

  
  

}
