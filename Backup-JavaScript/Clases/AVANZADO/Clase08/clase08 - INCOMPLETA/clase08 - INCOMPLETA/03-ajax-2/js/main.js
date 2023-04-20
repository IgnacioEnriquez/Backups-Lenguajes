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
console.log('xhr.readyState:', xhr.readyState); // 0

xhr.addEventListener('readystatechange', e => {
    // console.log(e.target.readyState);
    // console.log('Cambió el valor de xhr.readyState:', xhr.readyState);         // De 1 a 4
    console.log('Cambió el valor de e.target.readyState:', e.target.readyState);  // De 1 a 4
});


// Se configura el método de conexión y el recurso a pedir al servidor
xhr.open('get', 'texto.txt');

// Se realiza la petición al servidor
xhr.send(); // <-- Código asincrónico
