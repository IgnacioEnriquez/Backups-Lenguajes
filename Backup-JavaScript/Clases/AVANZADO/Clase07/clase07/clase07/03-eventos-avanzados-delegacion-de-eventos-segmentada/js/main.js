document.querySelector('.paragraphs-container').addEventListener('click', e => {
    if (e.target.tagName === 'P') {
        e.target.innerHTML += ' ###';
    }
});

document.querySelector('.list').addEventListener('click', e => {
    console.log('Lista clickeada');
    if (e.target.tagName === 'LI') {
        console.warn('Item de la lista clickeado');
    }
});

document.getElementById('productos').addEventListener('click', e => {
    console.log(e.target);
    if (e.target.classList.contains('destacado')) {
        e.target.classList.add('bg-red');
    } else {
        console.error('Tal vez se hizo click en un elemento descendiente de destacado');
    }
});

