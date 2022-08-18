
// ----------------------------------------------------------------- AJAX GET BASICO ----------------------------------------------------------------------------------------------------------------------------------

//CREO UNA INSTANCIA DE XMLHTTPREQUEST
let xhttp : XMLHttpRequest = new XMLHttpRequest();

//METODO; URL; ASINCRONICO?
xhttp.open("GET", "BACKEND/ajax_test.php", true);

//ENVIO DE LA PETICION
xhttp.send();

//FUNCION CALLBACK
xhttp.onreadystatechange = () => {
    
    console.log(xhttp.readyState + " - " + xhttp.status);
    
    if (xhttp.readyState == 4 && xhttp.status == 200) {
        alert(xhttp.responseText);
    }
};

// ----------------------------------------------------------------- AJAX GET PARAMETROS ----------------------------------------------------------------------------------------------------------------------------------


//METODO; URL + PARAMETROS; ASINCRONICO?
xhttp.open("GET", "BACKEND/ajax_test.php?valor="+Math.random()*100, true);

//ENVIO DE LA PETICION
xhttp.send();

//FUNCION CALLBACK
xhttp.onreadystatechange = () => {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
        alert(xhttp.responseText);
    }
};	

// ----------------------------------------------------------------- AJAX POST PARAMETROS ----------------------------------------------------------------------------------------------------------------------------------

//METODO; URL; ASINCRONICO?
xhttp.open("POST", "BACKEND/ajax_test.php", true);

//INSTANCIO OBJETO FORMDATA
let form : FormData = new FormData();

//AGREGO PARAMETROS AL FORMDATA:
form.append('valor', (Math.random()*100).toString());

//ENVIO DE LA PETICION CON LOS PARAMETROS FORMDATA
xhttp.send(form);

//FUNCION CALLBACK
xhttp.onreadystatechange = () => {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
        alert(xhttp.responseText);
    }
};

// ----------------------------------------------------------------- AJAX PARAMETROS CON FUNCION EXTERNA ----------------------------------------------------------------------------------------------------------------------------------

export function ActualizarGET():void {
        
    //METODO; URL + PARAMETROS; ASINCRONICO?
    xhttp.open("GET", "BACKEND/ajax_test.php?valor="+Math.random()*100, true);

    //ENVIO DE LA PETICION
    xhttp.send();

    //FUNCION CALLBACK
    xhttp.onreadystatechange = () => {
        AdministrarRespuesta();
    }
}

export function ActualizarPOST():void {

    //METODO; URL; ASINCRONICO?
    xhttp.open("POST", "BACKEND/ajax_test.php", true);
    
    //SETEO EL ENCABEZADO DE LA PETICION	
    xhttp.setRequestHeader("content-type","application/x-www-form-urlencoded");
    
    //ENVIO DE LA PETICION CON LOS PARAMETROS
    xhttp.send("valor="+Math.random()*100);

    //FUNCION CALLBACK
    xhttp.onreadystatechange = () => {
        AdministrarRespuesta();
    };   
}

function AdministrarRespuesta():void {

    if (xhttp.readyState == 4 && xhttp.status == 200) 
    {
        //LA RESPUESTA SE GUARDA EN UN ELEMENTO HTML
        (<HTMLDivElement>document.getElementById("divResultado")).innerHTML = xhttp.responseText;
    }

}
