
let url = 'https://jsonplaceholder.typicode.com/posts/';
// let url = 'https://urlquenoexiste.com/recurso/bla';
// let url = 'https://   URL ROTA';

const comparacionesPeticionesAJAX = async id => {

    ////////////////////////////////////
    //                                //
    //    Opción 1: XMLHttpRequest    //
    //                                //
    ////////////////////////////////////

    console.warn('Iniciando Opción 1: XMLHttpRequest');
    const req = new XMLHttpRequest();
    req.open('get', url + id);
    req.addEventListener('load', e => {
        if (e.target.status === 200) {
            const post = JSON.parse(e.target.responseText);
            console.log(' 👉🏻 XMLHttpRequest, post:', post);
        } else {
            console.error('Error XMLHttpRequest - Error status:', e.target.status);
        }
        console.warn('Finalizando Opción 1: XMLHttpRequest');
    });
    req.addEventListener('error', e => {
        console.error('Error XMLHttpRequest - Error AJAX:', e);
        console.warn('Finalizando Opción 1: XMLHttpRequest');
    });

    req.send();


    ////////////////////////////////////////////
    //                                        //
    //    Opción 2: fetch con then / catch    //
    //                                        //
    ////////////////////////////////////////////

    console.warn('Iniciando Opción 2: fetch con then / catch');
    fetch(url + id)
        // .then(response => {
        //     // console.log('response:', response);
        //     return response.json();
        // })
        .then(response => response.json())
        .then(post => console.log( '👉🏻 fetch con then / catch, post:',  post))
        .catch(error => console.error('Error fetch con then / catch:', error))
        .finally(() => console.warn('Finalizando Opción 2: fetch con then / catch'))
    ;
    
    /////////////////////////////////////////////
    //                                         //
    //    Opción 3: fetch con async / await    //
    //                                         //
    /////////////////////////////////////////////

    console.warn('Iniciando Opción 3: fetch con async / await');
    try {
        const response = await fetch(url + id);
        const post = await response.json();
        console.log( '👉🏻 fetch con async / await, post:',  post);
    } catch (error) {
        console.error('Error fetch con async / await:', error);
    } finally {
        console.warn('Finalizando Opción 3: fetch con async / await');
    }

};

comparacionesPeticionesAJAX(1);
comparacionesPeticionesAJAX(2);
comparacionesPeticionesAJAX(3);
comparacionesPeticionesAJAX(4444);
comparacionesPeticionesAJAX(5);

