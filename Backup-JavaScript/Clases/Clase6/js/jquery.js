/*Libreria de JQUERY*/
/*Las librerias simplifican el codigo */
/* https://jquery.com/ */

// Afectar a etiquetas del DOM
// $('p').metodo(parametro)

// Afectar a IDS del DOM(#)
// $('#titulo').metodo(parametro)

// Afectar por clase(.)
// $('.parrafos').metodo(parametro)

// Metodo Text : obtiene solo el contenido del texto
// var msg = $('#cuerpo').text();

// Metodo HTML : Obtiene el contenido junto con el html dentro de la etiqueta principal
// var msg2 = $('#cuerpo1').html();

// $('#cuerpo1').html('Ahora el cuerpo de la pagina tiene <em> Itálica </em>')

// Eventos ---------------------------------------------------

// $(document).ready(inicializar);

// function inicializar()
// {
//     $('p').click(alertaclk);
//     $('p').dblclick(alertaclk);
//     $('p').mouseover(alertaclk);
//     $('p').mouseover(alertaclk);
//     $('p').mouseout(alertaclk);
// }

// function alertarclk()
// {     
//     alert("Hiciste click");     
// }

// function alertardblclick()
// {     
//     alert("Hiciste click");     
// }

// function mousearr()
// {     
//     alert("Hiciste click");     
// }

// function mousefr()
// {     
//     alert("Hiciste click");     
// }


 //EFECTOS ---------------------------------------------------

//  function aparecer()
//  {
//      $('div').show();
//  }

//  function desaparecer()
//  {
//      $('div').hide();
//  }

//  function desaparicion()
//  {
//     if(!$('div').hasClass("hide"))
//     {
//         $('div').removeClass("show");
//         $('div').toggleClass("hide");
//         desaparecer();     
//     }
//     else
//     {
//         $('div').removeClass("hide");
//         $('div').toggleClass("show");
//         aparecer();
//     }   

//  }

// $('#desaparecer').click(desaparicion)

// TOGGLE = REALIZA LA ACCION HIDE O SHOW

//  METODO VALUE ---------------------------------------------------
// function obtenervalor()
// {
//     var clave = $('select').val()
//     alert(clave)
// }

// $('select').change(obtenervalor)

//PLUGINS ---------------------------------------------------