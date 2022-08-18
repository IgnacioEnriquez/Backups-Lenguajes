// ----------------------------------------------------------------- JSON PARSE (CONVERTIR EN OBJ) ----------------------------------------------------------------------------------------------------------------------------------
//cadena con un array de objetos
let cadJSON : string = ' [{ "nombre" : "Juan", "edad" : 35 },{ "nombre" : "Anibal", "edad" : 26 }] ';
                
let personasJSON : any = JSON.parse(cadJSON); 

for(let i=0; i<personasJSON.length; i++)
    console.log(personasJSON[i].nombre + " - " + personasJSON[i].edad); 

// ----------------------------------------------------------------- JSON STRINGIFY (CONVERTIR EN STRING EL OBJ) ----------------------------------------------------------------------------------------------------------------------------------

    //objeto simple
    let p : any = { "nombre" : "Juan", "edad" : 35 };

    let tostring : string = JSON.stringify(p);

    console.log(tostring);

    let obj : any = JSON.parse(tostring);

    console.log(obj.nombre + " - " + obj.edad);

// ----------------------------------------------------------------- JSON CON FUNCIONES ----------------------------------------------------------------------------------------------------------------------------------

    let personaFunc : any = {
        "nombre" : "Jorge",
        "edad" : 23,
        "saludar" : function(){
                        console.log("Hola soy " + this.nombre + " y tengo " + this.edad + ".");
                    }
    };

personaFunc.saludar();