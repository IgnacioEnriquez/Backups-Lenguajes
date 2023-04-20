console.warn(document.querySelector('title').innerText);

/* --------------------------------------------------- */
console.log('\n/* EVENTOS */');
/* --------------------------------------------------- */

let uno = () => {
    console.log('Soy la función 1');
};

let dos = () => {
    console.log('Soy la función 2');
};

let btn = document.getElementById('btn');


/* --------------------------------------------------- */
console.log('\n/* EVENTOS CON Callbacks Múltiples */');
/* --------------------------------------------------- */

/*
btn.onclick = uno;
btn.onclick = dos;
*/

/*
btn.onclick = uno;
btn.onclick = dos;
*/

/* Forma 1 */
/* btn.onclick = () => {
    uno();
    dos();
}; */


/* Forma 2 */
/*
btn.addEventListener('click', uno);

btn.addEventListener('click', dos);

btn.addEventListener('click', () => {
    console.log('(Time programado)');
    setTimeout(() => {
        console.warn('Hace 2,5 segundos hiciste click en el botón');
    }, 2500);
});

btn.addEventListener('click', function() {
    console.log('Soy otra función');
});

btn.addEventListener('click', () => {
    console.log('Soy otra función 2');
});
*/


/* --------------------------------------------------- */
console.log('\n/* Objeto Event */');
/* --------------------------------------------------- */
/*
btn.addEventListener('click', function(e) {
    // console.log(e);
    console.log('Elemento que disparó el evento:', e.target);
    // console.log(e.target.innerHTML);
    // console.log(e.target.id);
    // console.log('Tecla CTRL presionada: ', e.ctrlKey);
    // console.log('Tecla ALT presionada: ', e.altKey);
    console.log('Tecla CTRL presionada: ', e.ctrlKey ? '✅' : '❌');
    console.log('Tecla ALT presionada: ', e.altKey ? '✅' : '❌');
});
*/


function procesarEventoClick(e) {
    // console.log(e);
    console.log('Elemento que disparó el evento:', e.target);
    // console.log(e.target.innerHTML);
    // console.log(e.target.id);
    // console.log('Tecla CTRL presionada: ', e.ctrlKey);
    // console.log('Tecla ALT presionada: ', e.altKey);
    console.log('Tecla CTRL presionada: ', e.ctrlKey ? '✅' : '❌');
    console.log('Tecla ALT presionada: ', e.altKey ? '✅' : '❌');
}

btn.addEventListener('click', procesarEventoClick);
