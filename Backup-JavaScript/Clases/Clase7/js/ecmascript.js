/* Es una standarizacion de un lenguaje y determina como se emplea javascript*/

//Ya fue explicado
var cuit = 1222;
//Solo acupa un espacio de memoria y no se puede redeclarar
let cuit = 3555;
// No se puede redeclarar o redefinir
const mayor_edad = 18;

//Funciones flecha --------------------------------
//Ahora codigo

//Funcion Normal
function dividir(var1, var2)
{
    if(var2 > 0)
    {
        return var1 / var2;
    }
    else
    {
        return false;
    }
}

//Funcion Flecha
const dividir = (var1,var2) =>
{
    if( var2 >= 0 ) 
    {
        return var1/var2
    }
    else
    {
        return false;
    }        
}

const lista = (url, nombre) => `${url} nombre de la pagina ${nombre}`;
