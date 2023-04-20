// const buttons = document.querySelectorAll('.btn');
// console.log(buttons[0])
// console.log(buttons[1])

// buttons[0].addEventListener('click', e => {
//     // console.log(e.target);
//     console.log(e.target.innerHTML + ' clickeado.');
//     e.target.disabled = true;
// });
// 
// buttons[1].addEventListener('click', e => {
//     // console.log(e.target);
//     console.log(e.target.innerHTML + ' clickeado.');
//     e.target.disabled = true;
// });
// 
// buttons[2].addEventListener('click', e => {
//     // console.log(e.target);
//     console.log(e.target.innerHTML + ' clickeado.');
//     e.target.disabled = true;
// });
// 
// buttons[3].addEventListener('click', e => {
//     // console.log(e.target);
//     console.log(e.target.innerHTML + ' clickeado.');
//     e.target.disabled = true;
// });
// 
// buttons[4].addEventListener('click', e => {
//     // console.log(e.target);
//     console.log(e.target.innerHTML + ' clickeado.');
//     e.target.disabled = true;
// });


// buttons.forEach(button => {
//     // console.log(button);
//     button.addEventListener('click', e => {
//         console.log(e.target.innerHTML + ' clickeado.');
//         e.target.disabled = true;
//     })
// })


document.addEventListener('click', e => {
    // console.log('Documento clickeado!');
    // console.log('Elemento clickeado:', e.target);
    // console.log(e.target.tagName);
    if (e.target.tagName === 'BUTTON') {
        console.log('Es un elemento button.');
    }
    if (e.target.classList.contains('btn')) {
        // console.log('En elemento con clase "btn".');
        console.log(e.target.innerHTML + ' clickeado.');
        e.target.disabled = true;
    }
    
    if (e.target.tagName === 'P') {
        // console.log('Esto es un párrafo.');
        e.target.innerHTML += ' (clickeado)';
    } else if (e.target.tagName === 'H1') {
        e.target.innerHTML += '... ';
        console.log('Encabezado clickeado');
    }

});
