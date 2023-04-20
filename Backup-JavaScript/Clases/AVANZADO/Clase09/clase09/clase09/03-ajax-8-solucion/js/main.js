const btnGetProducto = document.querySelector('.btn-get-producto');
const productoContainer = document.querySelector('.producto-container');

btnGetProducto.addEventListener('click', e => {
    getProducto();
});

function getProducto() {

    btnGetProducto.disabled = true;

    informarEspera();

    let xhr = new XMLHttpRequest();

    xhr.addEventListener('readystatechange', e => {
        if (e.target.readyState === 2) {
            const contentType = e.target.getResponseHeader('content-type');
            if (!contentType.includes('text/html')) {
                console.error('El tipo de contenido recibido no es del tipo esperado');
                e.target.abort();
            }
        }
    });

    xhr.addEventListener('abort', e => {
        informarError('Se canceló la comunicación con el servidor');
        btnGetProducto.disabled = false;
    });

    xhr.addEventListener('timeout', e => {
        informarError('Se excedió el tiempo máximo de espera.');
        btnGetProducto.disabled = false;
    });

    xhr.addEventListener('load', e => {
        if (e.target.status === 200) {
            // console.log(e.target.responseText);
            productoContainer.classList.remove('cargando');
            productoContainer.innerHTML = e.target.responseText;
            btnGetProducto.disabled = false;
        } else {
            console.error('Se produjo un error en la comunicación');
        }
    });

    xhr.timeout = 10000;

    xhr.open('get', 'partials/detalles-producto.html');

    xhr.send();

}

function informarEspera() {
    productoContainer.innerHTML = '(Cargando...)';
    productoContainer.classList.add('visible', 'cargando');
    productoContainer.classList.remove('error');
}

function informarError (error) {
    productoContainer.innerHTML = error;
    productoContainer.classList.add('error');
    productoContainer.classList.remove('cargando');
}
