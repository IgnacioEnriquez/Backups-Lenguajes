document.getElementById('btn-click').addEventListener('click', e => {
    console.log('::::: ¡Click! ✨ :::::');
});


/****************************************
 * Código sincrónico en JavaScript      *
 * (Código bloqueante)                  *
 ****************************************/

// Registra evento a función con código sincrónico
document.querySelector('.btn-sync').addEventListener('click', startTaskSync);

function delaySync(text) {
    // for (let i = 0; i < 2000000000; i++) { /* nada */ }
    for (let i = 0; i < 2000000000; i++);
    return text;
}

function startTaskSync() {
    console.error('Inicio de tareas sincrónicas');
    console.log('(Se bloquea el resto del código)');
    
    console.warn('Inicia Tarea A');
    console.log(delaySync('Tarea A - Paso 1'));
    console.log(delaySync('Tarea A - Paso 2'));
    console.log(delaySync('Tarea A - Paso 3'));
    console.log(delaySync('Tarea A - Paso 4'));
    console.log(delaySync('Tarea A - Paso 5'));
    console.log('Fin de tarea A');
    
    console.warn('Inicia Tarea B');
    console.log(delaySync('Tarea B - Paso 1'));
    console.log(delaySync('Tarea B - Paso 2'));
    console.log(delaySync('Tarea B - Paso 3'));
    console.log(delaySync('Tarea B - Paso 4'));
    console.log(delaySync('Tarea B - Paso 5'));
    console.log('Fin de tarea B');
}







/****************************************
 * Código asincrónico en JavaScript     *
 * (Código no bloqueante)               *
 ****************************************/

// Registra evento a función con código asincrónico
document.querySelector('.btn-async').addEventListener('click', startTaskAsync);


// function primero() { console.log('PRIMERO'); }
// 
// console.warn('##### Programando callbacks... #####');
// setTimeout(primero, 3000);
// setTimeout(function () { console.log('SEGUNDO'); }, 1000);
// setTimeout(() => { console.log('TERCERO'); }, 4000);
// setTimeout(() => {
//     console.log('::: Inicio de CUARTO :::');
//     setTimeout(() => { console.log('..... Pasaron 400 ms más'); }, 400);
//     setTimeout(() => { console.log('..... Pasaron 1800 ms más'); }, 1800);
//     setTimeout(() => { console.log('..... Pasaron 2100 ms más'); }, 2100);
//     console.log('::: Fin de CUARTO :::');
// }, 2000);
// 
// console.warn('##### Callbacks programados... #####');


function delayAsnc(callback) {
    setTimeout(callback, 2000);
}

function startTaskAsync() {

    console.error('Inicio de tareas asincrónicas');
    console.log('(No se bloquea el resto del código)');
    console.warn('Inicia Tarea A');
    delayAsnc(() => {
        console.log('Tarea A - Paso 1');
        delayAsnc(() => {
            console.log('Tarea A - Paso 2');
            delayAsnc(() => {
                console.log('Tarea A - Paso 3');
                delayAsnc(() => {
                    console.log('Tarea A - Paso 4');
                    delayAsnc(() => {
                        console.log('Fin de tarea A');
                    });
                });
            });
        });
    });

    console.warn('Inicia Tarea B');
    delayAsnc(() => {
        console.log('Tarea B - Paso 1');
        delayAsnc(() => {
            console.log('Tarea B - Paso 2');
            delayAsnc(() => {
                console.log('Tarea B - Paso 3');
                delayAsnc(() => {
                    console.log('Tarea B - Paso 4');
                    delayAsnc(() => {
                        console.log('Fin de tarea B');
                    });
                });
            });
        });
    });

    console.warn('Otras tareas...');

}
