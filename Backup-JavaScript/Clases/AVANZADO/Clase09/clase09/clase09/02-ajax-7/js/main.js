const parrafoInfo = document.getElementById('info');
const html = document.querySelector('html');

document.querySelector('button').addEventListener('click', e => {
    initAJAX();
});

function setWaitCursor() {
    html.classList.add('wait');
}

function unsetWaitCursor() {
    html.classList.remove('wait');
}

function initAJAX() {

    console.log('Inicio de initAJAX');
    parrafoInfo.innerHTML = 'Cargando...';
    setWaitCursor();

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

        // if (e.target.readyState === 4) {
        //     // console.log('e.target.status:', e.target.status);
        //     if (e.target.status === 200) {
        //         console.log(e.target.responseText);
        //     } else {
        //         console.error('Se produjo un error en la comunicación');
        //     }
        // }
    });

    xhr.addEventListener('abort', e => {
        parrafoInfo.innerHTML = 'Error de carga (conexión abortada)';
        console.error('La comunicación fue abortada.');
        unsetWaitCursor();
    });
    
    xhr.addEventListener('timeout', e => {
        parrafoInfo.innerHTML = 'Error de carga (tiempo máximo de espera excedido)';
        console.error('Se excedió el tiempo máximo de espera.');
        unsetWaitCursor();
    });

    xhr.addEventListener('load', e => {
        if (e.target.status === 200) {
            console.log(e.target.responseText);
            parrafoInfo.innerHTML = 'Carga ok';
            unsetWaitCursor();
        } else {
            console.error('Se produjo un error en la comunicación');
        }
    });

    // Se configura el método de conexión y el recurso a pedir al servidor
    xhr.open('get', 'texto.txt');

    // Tiempo máximo de espera para que el servidor responda
    // 0: para deshabilitarlo
    // xhr.timeout = 2;    // 2ms, prácticamente instantáneo, es poco tiempo...

    // Se realiza la petición al servidor
    xhr.send(); // <-- Código asincrónico

    console.log('Fin de initAJAX');

}
