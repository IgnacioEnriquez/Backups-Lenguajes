console.warn(document.querySelector('title').textContent)

let url = 'https://jsonplaceholder.typicode.com/posts/'


function opcionesPeticionAjax(id) {
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

}

opcionesPeticionAjax(7)