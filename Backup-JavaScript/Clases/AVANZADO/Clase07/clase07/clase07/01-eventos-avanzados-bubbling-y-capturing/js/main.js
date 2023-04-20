
// bubbling
document.querySelector('.bubbling .box--1').addEventListener('click', e => {
    console.log('Click en 1');
}, false);  // 3er argumento: false (valor por defecto) = BUBBLING   |  true = CAPTURING

document.querySelector('.bubbling .box--2').addEventListener('click', e => {
    console.log('Click en 2');
    e.stopPropagation();
}, false);  // 3er argumento: false (valor por defecto) = BUBBLING   |  true = CAPTURING

document.querySelector('.bubbling .box--3').addEventListener('click', e => {
    console.log('Click en 3');
}, false);  // 3er argumento: false (valor por defecto) = BUBBLING   |  true = CAPTURING


// capturing
document.querySelector('.capturing .box--1').addEventListener('click', e => {
    console.log('Click en 1');
}, true);  // 3er argumento: false (valor por defecto) = BUBBLING   |  true = CAPTURING

document.querySelector('.capturing .box--2').addEventListener('click', e => {
    console.log('Click en 2');
    e.stopPropagation();
}, true);  // 3er argumento: false (valor por defecto) = BUBBLING   |  true = CAPTURING

document.querySelector('.capturing .box--3').addEventListener('click', e => {
    console.log('Click en 3');
}, true);  // 3er argumento: false (valor por defecto) = BUBBLING   |  true = CAPTURING

