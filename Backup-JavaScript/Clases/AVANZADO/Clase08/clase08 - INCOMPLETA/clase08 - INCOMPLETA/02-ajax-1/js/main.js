/**
 * xhr.readyState
 *  0:  La instancia está creada
 *  1:  La instancia está configurada
 *  2:  Intercambio de headers entre el cliente y servidor
 *  3:  Transferencia de información
 *  4:  Fin de comunicación (por éxito o por error)
 */

// Se crea una nueva instancia de comunicación asincrónica
let xhr = new XMLHttpRequest();
// console.log(xhr);
console.log('xhr.readyState:', xhr.readyState); // 0

// Se configura el método de conexión y el recurso a pedir al servidor
xhr.open('get', 'texto.txt');
console.log('xhr.readyState:', xhr.readyState); // 1

// Se realiza la petición al servidor
xhr.send(); // <-- Código asincrónico
// console.log('xhr.readyState:', xhr.readyState);     // 1    <-- Atención!
// console.log('xhr.responseText:', xhr.responseText); // ''   <-- Atención!

setTimeout(() => {
    console.log('xhr.readyState:', xhr.readyState);     // 4
    console.log('xhr.responseText:', xhr.responseText); // 'Hola mundo'
}, 500);
