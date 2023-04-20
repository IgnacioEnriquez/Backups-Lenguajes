const btnGetProducto = document.querySelector('.btn-get-producto');
const productoContainer = document.querySelector('.producto-container');

btnGetProducto.addEventListener('click', e => {
    getProducto();
});

function getProducto() {

    btnGetProducto.disabled = true;

    informarEspera();


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
