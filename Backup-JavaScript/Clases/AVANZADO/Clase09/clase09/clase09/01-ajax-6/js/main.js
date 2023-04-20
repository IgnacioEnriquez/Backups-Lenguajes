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
// console.log(xhr.readyState);    // 0

xhr.addEventListener('readystatechange', e => {
//    console.log(e.target.readyState);
//    if (e.target.readyState === 1) {
//        console.log('readyState vale 1: ya está configurado...');
//        return;
//    }
//    
//    if (e.target.readyState === 2) {
//        console.log('readyState vale 2: ya hay intercambio de headers entre el cliente y servidor configurado...');
//        return;
//    }
//
//    if (e.target.readyState === 3) {
//        console.log('readyState vale 3: ya hay transferencia de información...');
//        return;
//    }
//
//    if (e.target.readyState === 4) {
//        console.log('readyState vale 4: fin de comunicación (por éxito o por error)...');
//        return;
//    }



    if (e.target.readyState === 2) {
        const headers = e.target.getAllResponseHeaders();
        // console.log('headers:', headers);
        const contentType = e.target.getResponseHeader('content-type');
        // console.log('contentType:', contentType);
        if (!contentType.includes('text/plain')) {
            console.error('El tipo de contenido recibido no es del tipo esperado');
            e.target.abort();
        }
    }

    if (e.target.readyState === 4) {
       // console.log('e.target.status:', e.target.status);
        if (e.target.status === 200) {
            console.log(e.target.responseText);
        } else {
            console.error('Se produjo un error en la comunicación');
        }
    }
});

xhr.addEventListener('abort', e => {
    console.error('La comunicación fue abortada.');
});

xhr.addEventListener('timeout', e => {
    console.error('Se excedió el tiempo máximo de espera.');
});


// Se configura el método de conexión y el recurso a pedir al servidor
xhr.open('get', 'texto.txt');
// xhr.open('get', 'texto.html');
// console.log(xhr.readyState);    // 1

// Tiempo máximo de espera para que el servidor responda
// 0: para deshabilitarlo
xhr.timeout = 2;    // 2ms, prácticamente instantáneo, es poco tiempo...

// Se realiza la petición al servidor
// console.log('estamos POR PROGRAMAR el pedido de conexión');
xhr.send(); // <-- Código asincrónico
// console.log(xhr.readyState);    // 1
// console.log('YA PROGRAMAMOS el pedido de conexión... ahora resta esperar');

// setTimeout(() => {
//     console.log('a ver qué pasó con el pedido (tal vez terminó, tal vez no...)');
//     console.log(xhr.readyState);    // ???
// }, 5);
