console.warn(document.querySelector('title').textContent)

let url = 'https://jsonplaceholder.typicode.com/posts/'


async function opcionesPeticionAjax(id) {
    /* ----------------------------------------- */
    /*         Opción 1 : XMLHttpRequest         */
    /* ----------------------------------------- */
    const xhr = new XMLHttpRequest()
    xhr.open('get', url+id)
    xhr.addEventListener('load', () => {
        if(xhr.status == 200) {
            let respuesta = JSON.parse(xhr.response)
            console.log('XMLHttpRequest', respuesta)
        }
        else {
            console.error('ERROR XMLHttpRequest (status)', xhr.status )
        }
    })
    xhr.addEventListener('error', e => {
        console.error('ERROR XMLHttpRequest (url)', e )
    })
    xhr.send()

    /* ----------------------------------------- */
    /*      Opción 2 : Fetch con then/catch      */
    /* ----------------------------------------- */
    fetch(url+id)
    .then( response => {
        //console.log(response)
        if(!response.ok) throw 'ERROR EN STATUS: ' + response.status
        return response.json() 
    })
    .then( respuesta => console.log('fetch then/catch', respuesta) )
    .catch( error => console.error('ERROR fetch then/catch', error) )

    /* ----------------------------------------- */
    /*      Opción 3 : Fetch con async/await     */
    /* ----------------------------------------- */
    try {
        let response = await fetch(url+id)
        if(!response.ok) throw 'ERROR EN STATUS: ' + response.status
        let respuesta = await response.json()
        console.log('fetch async/await', respuesta)
    }
    catch(error) {
        console.error('ERROR fetch async/await', error)
    }
}

//opcionesPeticionAjax(7)


/* ------------------------------------------------------- */
/*    Peticiones asincrónicas anidadas utilizando Fetch    */
/* ------------------------------------------------------- */

function getPostFetch(id) {
    return fetch(url+id).then( response => {
        //console.log(response)
        if(!response.ok) throw 'ERROR EN STATUS: ' + response.status
        return response.json() 
    })
}

//url = 'https://jsonplaceholder.typicodezzzzzz.com/posts/'         //URL ERROR!


/* ----------------------------------------- */
/*       Fetch anidado con then/catch        */
/* ----------------------------------------- */
function getPostsFetchTC() {
    getPostFetch(1)
    .then( rta => {
        console.log(rta)
        return getPostFetch(2)
    })
    .then( rta => {
        console.log(rta)
        //return getPostFetch(777)              //STATUS ERROR!
        return getPostFetch(3)
    })
    .then( rta => {
        console.log(rta)
        return getPostFetch(4)
    })
    .then( rta => {
        console.log(rta)
        return getPostFetch(5)
    })
    .then( rta => console.log(rta))
    .catch( error => console.error('ERROR EN Fetch anidado:',error))
}

//getPostsFetchTC()


/* ----------------------------------------- */
/*       Fetch anidado con async/await       */
/* ----------------------------------------- */
async function getPostsFetchAA() {
    
    try {

        for(let id = 1; id <= 5; id++) {
            let rta = await getPostFetch(id)
            //let rta = await getPostFetch(id==3? 333 : id)       // ERROR STATUS!
            console.log(rta)
        }

        /*
        let rta = await getPostFetch(1)
        console.log(rta)

        rta = await getPostFetch(2)
        console.log(rta)

        rta = await getPostFetch(3)
        console.log(rta)

        rta = await getPostFetch(4)
        console.log(rta)

        rta = await getPostFetch(5)
        console.log(rta)
        */
    }
    catch(error) {
        console.error('ERROR EN Fetch anidado:',error)
    }
}

getPostsFetchAA()