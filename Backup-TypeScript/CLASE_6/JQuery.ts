/*

// ----------------------------------------------------------------- JQUERY BASICO  ----------------------------------------------------------------------------------------------------------------------------------

/// <reference path="../node_modules/@types/jquery/index.d.ts" /> DESDE NODE

//Ocurre cuando esta construido el DOM

$(function(){
	
    console.log("hola desde node....");
    alert("hola desde node....");
	
});

// ----------------------------------------------------------------- JQUERY CON AJAX ----------------------------------------------------------------------------------------------------------------------------------

// <reference path="../libs/jquery/index.d.ts" /> DESDE LIBRERIA

$(function(){

    JqueryAjaxTraerCds();

});

function JqueryAjaxTraerCds():void {

    let pagina = "BACKEND/POO/nexo.php";
    let datoObjeto = {"op" : "traerListadoCD" };
  
    $("#divResultado").html("");

    $.ajax({
        type: 'POST',
        url: pagina,
        dataType: "text",
        data: datoObjeto,
        async: true
    })
    .done(function (resultado:any) {

        $("#divResultado").html(resultado);

        manejador_click_btn_eliminar();
    })
    .fail(function (jqXHR:any, textStatus:any, errorThrown:any) {
        alert(jqXHR.responseText + "\n" + textStatus + "\n" + errorThrown);
    });    
}

function manejador_click_btn_eliminar(){

    var $btn = $('[data-action="btn_eliminar"]');

    if ($btn) {

        $btn.on('click', function(e:any) {
   
            e.preventDefault();
          
            let obj_cd_string = $(this).attr("data-obj"); 

            let obj_cd:any;

            if(obj_cd_string !== undefined){

                obj_cd = JSON.parse(obj_cd_string);
                let confirma = confirm("\u00BFEliminar: " + obj_cd.titulo + " - " + obj_cd.anio + "?");

                if( ! confirma){ return; }
            }
            else
            { 
                console.log("no se recupero el json");
                return;
            }

            var data = [];
            data.push({name: "id_cd", value: obj_cd.id});
            data.push({name: "op", value: "eliminarCd"});

            $.post("./BACKEND/POO/nexo.php", data, function (rta:any) {

                console.log(rta);

                if(rta.exito){

                    $("#divResultado").empty();

                    JqueryAjaxTraerCds();
                }

            }, "json").fail(function (a:any) {

                console.log(a.responseText);
  
            });
            
        });
    }
}

// ----------------------------------------------------------------- JQUERY FUNCIONES ----------------------------------------------------------------------------------------------------------------------------------

// <reference path="../libs/jquery/index.d.ts" />

namespace Main {
    
    export function ModificarPorId():void {

        //A UN DETERMINADO ELEMENTO LE CAMBIO EL CONTENIDO
        let contenidoAnterior = $("#idP").html();
        alert(contenidoAnterior);

        //A UN DETERMINADO ELEMENTO LE CAMBIO EL CONTENIDO
        $("#idP").html("Establezco un nuevo contenido en el elemento HTML.");

        console.log("para acceder (por id) a un elemento HTML");
        console.log("se coloca como selector el valor de su atributo ID");
        console.log("anteponiendole el simbolo '#'.");    
    }

    export function MostrarDatos():void {

        //OBTENGO LOS DISTINTOS VALORES POR ID DE ELEMENTO
        let nombre = $("#txtNombre").val();
        let opcion = $("#cboSeleccion").val();

        alert("Nombre: " + nombre + "\nOpcion: " + opcion);

        //COLOCO LOS VALORES RECUPERADOS EN UN DIV
        $("#idDiv").html("Nombre: " + nombre + "<br>Opcion: " + opcion);
    }

    export function CambiarDatos():void {

        //ESTABLEZCO NUEVOS VALORES
        alert("Cambia de valor la seleccion ('op2')\ny del nombre ('ROBERTO')");
        
        $("#txtNombre").val("ROBERTO");
        $("#cboSeleccion").val("op2");

    }

    export function JqueryAjaxConParametrosJSON():void {

        let pagina = "BACKEND/recibir_json.php";
        let datoObjeto = {"miPersona" : { "nombre" : "JUAN", "edad" : 52 } };

        //LIMPIO EL CONTENIDO DEL DIV    
        $("#divResultado").html("");

        $.ajax({
            type: 'POST',
            url: pagina,
            dataType: "text",
            data: datoObjeto,
            async: true
        })
        .done(function (resultado:any) {
            //MUESTRO EL RESULTADO DE LA PETICION
            $("#divResultado").html(resultado);
        })
        .fail(function (jqXHR:any, textStatus:any, errorThrown:any) {
            alert(jqXHR.responseText + "\n" + textStatus + "\n" + errorThrown);
        });    
    }

    export function JqueryAjaxRetornoJSON():void {

        let pagina = "BACKEND/enviar_json.php";

        //LIMPIO EL CONTENIDO DEL DIV    
        $("#divResultado").html("");

        $.ajax({
            type: 'POST',
            url: pagina,
            dataType: "json"
        })
        .done(function (objJSON:any) {
            //MUESTRO EL RESULTADO DE LA PETICION
            $("#divResultado").html(objJSON.edad + " - " + objJSON.nombre);
        })
        .fail(function (jqXHR:any, textStatus:any, errorThrown:any) {
            alert(jqXHR.responseText + "\n" + textStatus + "\n" + errorThrown);
        });  
    }
}

*/