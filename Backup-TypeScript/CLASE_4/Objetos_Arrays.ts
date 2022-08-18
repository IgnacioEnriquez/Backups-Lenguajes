
//Los arrays siempre llevan [ ] y los objetos { }
// ----------------------------------------------------------------- OBJETOS BASICOS----------------------------------------------------------------------------------------------------------------------------------

console.clear();
//objeto simple
let persona : any = { "nombre" : "Juan", "edad" : 35 };

console.log(persona.nombre + " - " + persona.edad);

// ----------------------------------------------------------------- ARRAYS BASICOS----------------------------------------------------------------------------------------------------------------------------------

//array simple
let nombres : string[]= [ "Juan", "Pablo", "Ramiro" ];

for(let i=0; i<nombres.length; i++)
    console.log(nombres[i]); 


// ----------------------------------------------------------------- ARRAYS DE OBJETOS----------------------------------------------------------------------------------------------------------------------------------

let personas : any[] = [
                        { "nombre" : "Juan", "edad" : 35 },
                        { "nombre" : "Anibal", "edad" : 26 }
                       ];
            
for(let i=0; i<personas.length; i++)
    console.log(personas[i].nombre + " - " + personas[i].edad); 