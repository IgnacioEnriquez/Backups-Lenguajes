//  Maneja y crea plantillas e interfaces, parametriza interfaces, reutilizacion de codigo 
//  Toma un texto y lo tranforma en funcion

const app = document.getElementById("datos");

// Compilar el template
// var template = Handlebars.compile("<h3> Bienvenido {{nombre}} </h3>");

// Ejecutar la varia ble template compilada y mostrar el resultado
// app.innerHTML = template({nombre: "Emily"});

//SENTENCIA TRUE - FALSE

// var template = Handlebars.compile("<h2>Nombre {{nombre}} </h2> {{#if enviogratis}}  <spam> Con Envio Gratis <spam>{{else}} <spam>Sin Envio<spam> {{/if}} ")

// app.innerHTML = template({nombre: "Celular Samsung", enviogratis:true})


//UTILIZAR UNLESS

// var template = Handlebars.compile("<h2>Nombre {{nombre}} </h2> {{#if enviogratis}}  <spam> Con Envio Gratis <spam>{{else}} <spam>Sin Envio<spam> {{/if}} {{#unless hayStock}} <spam>Sin Stock </spam> {{/unless}}");

// Unless = si la variable es falsa realiza una accion
// app.innerHTML = template({nombre : "Celulares Samsung", enviogratis: false, hayStock : false})


//UTILIZAR #EACH

 var template = Handlebars.compile("{{#each celulares}}<h2>Nombre {{this.nombre}} </h2> {{#if this.enviogratis}}  <spam> Con Envio Gratis <spam>{{else}} <spam>Sin Envio<spam> {{/if}} {{#unless this.hayStock}} <spam>Sin Stock </spam> {{/unless}}{{/each}}");

 app.innerHTML = template({celulares: [{nombre : "Celulares Samsung", enviogratis: false, hayStock : false},{nombre : "Celulares Nokia", enviogratis: true, hayStock : false},{nombre : "Celulares Motorola", enviogratis: true, hayStock : false}]})