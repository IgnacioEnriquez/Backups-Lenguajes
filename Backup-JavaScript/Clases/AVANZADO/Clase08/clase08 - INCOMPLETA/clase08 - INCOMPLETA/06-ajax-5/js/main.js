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

xhr.addEventListener('readystatechange', e => {
    if (e.target.readyState === 2) {
        // const headers = e.target.getAllResponseHeaders();
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

// Se configura el método de conexión y el recurso a pedir al servidor
// xhr.open('get', 'texto.txt');
xhr.open('get', 'texto.html');

// Se realiza la petición al servidor
xhr.send(); // <-- Código asincrónico
