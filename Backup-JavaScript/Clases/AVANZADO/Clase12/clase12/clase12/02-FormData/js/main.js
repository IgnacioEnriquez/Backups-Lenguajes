console.warn(document.querySelector('title').innerText)

function repreContenidoFormData(data) {

    console.log('Representando valores en el FormData')
    //console.log(data)

    let keys = data.keys()
    let values = data.values()
    //
    //    // console.log(keys)
    //    // console.log(values)
    //    
    //    let proximoKey = keys.next()
    //    let proximoValue = values.next()
    //
    //    // console.log('proximoKey:', proximoKey)
    //    // console.log('proximoValue:', proximoValue)
    //    console.log(proximoKey.value)
    //    console.log(proximoValue.value)
    //
    //    proximoKey = keys.next()
    //    proximoValue = values.next()
    //    // console.log('proximoKey:', proximoKey)
    //    // console.log('proximoValue:', proximoValue)
    //    console.log(proximoKey.value)
    //    console.log(proximoValue.value)
    //
    //
    //    proximoKey = keys.next()
    //    proximoValue = values.next()
    //    // console.log('proximoKey:', proximoKey)
    //    // console.log('proximoValue:', proximoValue)
    //    console.log(proximoKey.value)
    //    console.log(proximoValue.value)
    //    
    //    
    //    proximoKey = keys.next()
    //    proximoValue = values.next()
    //    // console.log('proximoKey:', proximoKey)
    //    // console.log('proximoValue:', proximoValue)
    //    console.log(proximoKey.value)
    //    console.log(proximoValue.value)
    
    
    /* console.log(keys)
    console.log(keys.next())
    console.log(keys.next())
    console.log(keys.next()) */




    /* console.log(values)
    console.log(values.next())
    console.log(values.next())
    console.log(values.next()) */

    do {
        let clave = keys.next()
        let valor = values.next()
        if (clave.done || valor.done) {
            break
        } 
        console.log(clave.value, valor.value)
    } while(true)
}


/* ------------------------------------------------------------ */
/*   Uso de FormData con formularios (modo automático de carga) */
/* ------------------------------------------------------------ */
const forms = document.querySelectorAll('form')

// ---- Formulario para enviar datos al servidor utilizando FormData ----
forms[0].addEventListener('submit', e => {
    e.preventDefault()
    
    console.log('form 1')
    
    // creo el objeto FormData y lo cargo con los datos del formulario
    let data = new FormData(forms[0])

    //Represento la información acumulada en FormData
    repreContenidoFormData(data)
})
// 
/* ------------------------------------------------------------ */
/*          Uso de FormData con carga manual de datos           */
/* ------------------------------------------------------------ */
