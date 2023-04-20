
const inputTexto = document.querySelector('.texto');
const formulario = document.querySelector('form');
const btnEnviar = document.querySelector('.btn-enviar');

// // (1) Evento click del botón
// // Con el evento click del botón, no se muestra el cartel por defecto de errores de HTML 5
// // (del estilo "Completa este campo") al utilizar el método preventDefault()
// btnEnviar.addEventListener('click', e => {
//     e.preventDefault();
// 
//     if (inputTexto.checkValidity()) {
//         console.log('Evento click. Validado ok. Value: ' + inputTexto.value);
//     } else {
//         console.error('Este campo es obligatorio');
//     }
// 
// });

// (2) Evento submit del formulario
// Si el formulario tiene incorporadas validaciones de HTML 5 (required, minlength, etc),
// el evento "submit" del formulario no se dispara.
// formulario.addEventListener('submit', e => {
//     e.preventDefault();
//     console.log('Evento submit');
// 
//     if (inputTexto.value) {
//         console.log('Value: ' + inputTexto.value);
//     }
// });




function validateInput(value) {

    const valueLength = value.length;
    let mensaje = '';

    if (valueLength === 0) {
        mensaje = 'Este campo es obligatorio';
    } else if (valueLength < 3) {
        mensaje = 'Este campo debe contener al menos 3 caracteres';
    } else if (valueLength > 20) {
        mensaje = 'Este campo debe contener 20 caracteres como máximo';
    }
    
    // Si se produjo algún error de validación
    if (mensaje) {
        console.error(mensaje);
        return null;                // no validó
    }

    return value;
}

formulario.addEventListener('submit', e => {
    e.preventDefault();

    let value = validateInput(inputTexto.value);

    if (value) {
        console.log('Value: ' + value);
    }
});

