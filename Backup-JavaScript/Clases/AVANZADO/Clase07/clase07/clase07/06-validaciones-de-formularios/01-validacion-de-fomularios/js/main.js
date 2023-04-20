
const inputTexto = document.querySelector('.texto');
const formulario = document.querySelector('form');
const btnEnviar = document.querySelector('.btn-enviar');

// (1) Evento click del botón
// Con el evento click del botón, no se muestra el cartel por defecto de errores de HTML 5
// (del estilo "Completa este campo") al utilizar el método preventDefault()
btnEnviar.addEventListener('click', e => {
    e.preventDefault();

    if (inputTexto.checkValidity()) {
        console.log('Evento click. Validado ok. Value: ' + inputTexto.value);
    } else {
        console.error('Este campo es obligatorio');
    }

});

