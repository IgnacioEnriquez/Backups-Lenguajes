
//Funciones simples
function saludar()
{
    alert("Hola, bienvenido al sistema");
}

saludar();

//Funciones con parametros
function multiplicar(num1,num2)
{
    return num1 * num2;
}

document.getElementById("contador").innerHTML = multiplicar(4*3);