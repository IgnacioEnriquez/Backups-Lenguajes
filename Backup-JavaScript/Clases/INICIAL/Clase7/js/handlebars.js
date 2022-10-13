/* Maneja y crea plantillas e interfaces, parametriza interfaces, reutilizacion de codigo */
/* Toma un texto y lo tranforma en funcion*/

const app = document.getElementById("datos");

//Compilar el template
var template = Handlebars.compile("<h3> Bienvenido {{nombre}} </h3>");

//Ejecutar la varia ble template compilada y mostrar el resultado
app.innerHTML = template({nombre: "Emily"});

var template = Handlebars.compile("<h2>Nombre {{nombre}} </h2> {{#if enviogratis}}  <spam> Con Envio Gratis <spam>{{else}} <spam>Sin Envio<spam> {{/if}} ")

app.innerHTML = template({nombre: "Celular Samsung", enviogratis:true})


