
const url = 'https://jsonplaceholder.typicode.com/posts/';

///////////////////////////////////////////////////////////////////
//                                                               //
//    Peticiones asincrónicas por AJAX no anidado -> desorden    //
//                                                               //
///////////////////////////////////////////////////////////////////

function getPost(id) {
    const req = new XMLHttpRequest();
    req.open('get', url + id);
    req.addEventListener('load', e => {
        if (e.target.status === 200) {
            const response = e.target.responseText;
            const post = JSON.parse(response);
            console.log('post:', post);
        }
    });
    req.send();
}

function getPosts() {
    console.log('Inicio de las peticiones');
    getPost(1);
    getPost(2);
    getPost(3);
    getPost(4);
    getPost(5);
    console.log('Fin de las peticiones');
}

// getPosts();


//////////////////////////////////////////////////////////////////////////////////
//                                                                              //
//    Peticiones asincrónicas por AJAX anidado utilizando callbacks -> orden    //
//                                                                              //
//////////////////////////////////////////////////////////////////////////////////


function getPostCb(id, cb) {
    const req = new XMLHttpRequest();
    req.open('get', url + id);
    req.addEventListener('load', e => {
        if (e.target.status === 200) {
            const response = e.target.responseText;
            const post = JSON.parse(response);
            // console.log('post:', post);
            if (typeof cb === 'function') {
                cb(post);
            }
        }
    });
    req.send();
}


function getPostsCb() {
    console.log('Inicio de las peticiones');
    
    // Problema: CALLBACK HELL: Infierno de callbacks / Pyramid of Doom: Pirámide de la perdición
    getPostCb(1, response => {
        console.log(response);
        getPostCb(2, response => {
            console.log(response);
            getPostCb(3, response => {
                console.log(response);
                getPostCb(4, response => {
                    console.log(response);
                    getPostCb(5, response => {
                        console.log(response);
                        console.log('Fin de las peticiones');
                    });
                });
            });
        });
    });
}

// getPostsCb();

/////////////////////////////////////////////////////////////////////////////////
//                                                                             //
//    Peticiones asincrónicas por AJAX anidado utilizando Promises -> orden    //
//                                                                             //
/////////////////////////////////////////////////////////////////////////////////
function getPostPromise(id) {
    return new Promise((resolve, reject) => {
        const req = new XMLHttpRequest();
        req.open('get', url + id);
        req.addEventListener('load', e => {
            if (e.target.status === 200) {
                const response = e.target.responseText;
                const post = JSON.parse(response);
                resolve(post);
            } else {
                const error = {
                    type: 'Error de status',
                    id: id,
                    body: e.target.status
                };
                reject(error);
            }
        });
        req.addEventListener('error', e => {
            const error = {
                type: 'Error de AJAX',
                id: id,
                body: e
            };
            reject(error);
        });
        req.send();
    });
    
}

///////////////////////////////////////////////////////////////////////
//                                                                   //
//    Uso de promesas anidadas con sintaxis then / catch -> orden    //
//                                                                   //
///////////////////////////////////////////////////////////////////////

function getPostsPromiseThenCatch() {

    console.log('Inicio de las peticiones');
    getPostPromise(1)
        .then(response => {
            console.log('response:', response);
            return getPostPromise(2);
        })
        .then(response => {
            console.log('response:', response);
            return getPostPromise(3);
        })
        .then(response => {
            console.log('response:', response);
            return getPostPromise(4444);
        })
        .then(response => {
            console.log('response:', response);
            return getPostPromise(5);
        })
        .then(response => {
            console.log('response:', response);
            console.log('Fin de las peticiones');
        })
        .catch(error => {
            console.error('Algo falló:', error);
        })
    ;

}

// getPostsPromiseThenCatch();


//    Uso de promesas anidadas con sintaxis async / await -> orden    //

async function getPostsPromiseAsyncAwait() {

    console.warn('Inicio de las peticiones');

    try {
        for (let id = 1; id < 6; id++) {
            // let response = await getPostPromise(id);
            let response = await getPostPromise(id === 4 ? 4444 : id);
            console.log(response);
        }
        // let response = await getPostPromise(1);
        // console.log(response);
        // response = await getPostPromise(2);
        // console.log(response);
        // response = await getPostPromise(3);
        // console.log(response);
        // response = await getPostPromise(4444);
        // console.log(response);
        // response = await getPostPromise(5);
        // console.log(response);
        
        
        // Ejemplo ficticio:
        // const id = 100;
        // const persona = await getPersona(id);
        // const cursos = await getCursos(persona.dni);
        // cursos[0].confirmado = true;
        // cursos[1].confirmado = false;
        // const respuesta = await confirmarCursos(cursos);
        // console.log(respuesta);
        
    } catch (error) {
        console.error('Se produjo un error:', error);
    }
    
    console.warn('Fin de las peticiones');

}

console.log('Código ANTES de llamar a getPostsPromiseAsyncAwait()');
getPostsPromiseAsyncAwait();
console.log('Código DESPUÉS de llamar a getPostsPromiseAsyncAwait()');
console.log('Más código...');
console.log('Más código...');
console.log('Más código...');


