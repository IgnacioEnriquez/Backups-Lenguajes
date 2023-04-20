const container = document.querySelector('.container');

container.addEventListener('click', e => {
    // console.log('Elemento clickeado:', e.target);
    console.log('id del elemento clickeado:', e.target.id);
});
