// createElement
console.log(document.title + '\n---------------------------')


const _container = document.getElementById('container');

let nuevoContenidoHTML = '';

nuevoContenidoHTML += '<p id="parrafo2" title="Este es el título del párrafo #2">DOS: Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, saepe?</p>';
nuevoContenidoHTML += '<p style="text-align: center; font-weight: bold; color: darkslateblue;">TRES: Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, saepe?</p>';
nuevoContenidoHTML += '<p class="destacado">CUATRO: Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, saepe?</p>';
nuevoContenidoHTML += '<p onclick="console.log(\'Clickeaste el párrafo #5\')">CINCO: Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, saepe?</p>';

_container.innerHTML += nuevoContenidoHTML;

const _parrafo0 = document.getElementById('parrafo0');
_parrafo0.addEventListener('click', () => {
    console.log('Clickeaste el párrafo #0');
});

document.getElementById('parrafo2').addEventListener('click', () => {
    console.log('Clickeaste el párrafo #2');
});



// const todosLosP = document.getElementsByTagName('p');
// console.log(todosLosP);
// todosLosP[2].classList.add('borde');
// todosLosP[3].classList.add('borde', 'destacado');
// todosLosP[4].classList.add('borde');
// todosLosP[5].classList.remove('clase1', 'clase2', 'clase3');


const nuevoParrafo = document.createElement('p');

nuevoParrafo.innerHTML = 'Contenido del nuevo párrafo';
nuevoParrafo.title = 'Título del nuevo párrafo';
nuevoParrafo.id = 'nuevo-parrafo';
nuevoParrafo.style.fontSize = '20px';
nuevoParrafo.style.fontWeight = 'bold';
nuevoParrafo.style.borderLeftStyle = 'double';
nuevoParrafo.style.borderLeftColor = '#48a';
nuevoParrafo.style.borderLeftWidth = '15px';
nuevoParrafo.classList.add('destacado');
nuevoParrafo.addEventListener('click', () => {
    console.log('Clickeaste el nuevo párarfo');
});

// console.log('nuevoParrafo:', nuevoParrafo);


// _container.appendChild(nuevoParrafo);

// https://developer.mozilla.org/es/docs/Web/API/Element/insertAdjacentElement

// _container.insertAdjacentElement('beforebegin', nuevoParrafo);
// _container.insertAdjacentElement('afterbegin', nuevoParrafo);
// _container.insertAdjacentElement('beforeend', nuevoParrafo);
_container.insertAdjacentElement('afterend', nuevoParrafo);

// 'beforebegin': Antes del elementoObjetivo.
// 'afterbegin': Dentro del elementoObjetivo, antes de su primer hijo.
// 'beforeend': Dentro del elementoObjetivo, después de su último hijo.
// 'afterend': Después del elementoObjetivo.

