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

//btn.onclick = console.log('Click!'); // NO FUNCIONA PORQUE LA PROPIEDAD EVENTO 'onclick' necesita un callback

// btn.onclick = 'hola';
// console.log('btn.onclick:', typeof btn.onclick, btn.onclick);

// btn.onclick = 444;
// console.log('btn.onclick:', typeof btn.onclick, btn.onclick);

btn.onclick = () => { console.log(111); };
// console.log('btn.onclick:', typeof btn.onclick, btn.onclick);

if(typeof btn.onclick === 'function') btn.onclick();
// function click() {
//     console.log('Click!');
// }

// const click = function() {
//     console.log('Click!');
// };

// const click = () => console.log('Click!');

// btn.onclick = () => console.log('Click!');
// btn.onclick = click;

btn.onclick = function() { console.log('Click!'); };
