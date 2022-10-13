//Operaciones entre variables logicas
var valUno = true;
var valDos = true;
//Negacion
var dato = !valUno;

// AND(&&) -> Conjuncion
//devuelve true solo si los dos son verdaderos
dato = valUno && valDos;

//OR (||) ASCII Alt + 124 
//Devuelve false si solo dos lados de la operacion son falsos
dato = valUno || valDos;

//Relacionales
num1= 50;
num2 = 10;
dato = num1 > num2;
dato = num1 >= num2;
dato = num1 < num2;
dato = num1 <= num2;
dato = num1 == num2;
dato = num1 != num2;

//Pedir datos - prompt siempre devuelve strings
var nombre = prompt("Ingrese su nombre");
var apellido = prompt("Ingrese su apellido");
var edad = promt("Ingrese su edad");
//Da como resultado edad10 porque es un string
var edadFuturo = edad + 10

//Parsea el string
parseInt(prompt("Ingrese su edad"));
alert("Bienvenido " + nombre + " " + apellido);


