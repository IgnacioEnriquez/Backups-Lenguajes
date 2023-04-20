// 
// let btnDinamicoCreado = false;
// 
// document.addEventListener('click', e => {
//     
//     if (e.target.id === 'btn-estatico') {
//         console.log('Soy el botón estático');
//         
//         if (!btnDinamicoCreado) {
//             btnDinamicoCreado = true;
//             const btnDinamico = document.createElement('button');
//             btnDinamico.id = 'btn-dinamico';
//             btnDinamico.textContent = 'Dinámico';
//             document.body.appendChild(btnDinamico);
//         }
//         
//         return;
//     }
//     if (e.target.id === 'btn-dinamico') {
//         console.log('Soy el botón dinámico');
//     }
// });


document.addEventListener('click', e => {
    
    if (e.target.id === 'btn-estatico') {
        console.log('Soy el botón estático');
        e.target.disabled = true;
        
        const btnDinamico = document.createElement('button');
        btnDinamico.id = 'btn-dinamico';
        btnDinamico.textContent = 'Dinámico';
        document.body.appendChild(btnDinamico);
        
        return;
    }
    if (e.target.id === 'btn-dinamico') {
        console.log('Soy el botón dinámico');
    }
});

