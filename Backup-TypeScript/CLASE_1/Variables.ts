
// ----------------------------------------------------------------- DECLARACION DE DATOS ----------------------------------------------------------------------------------------------------------------------------------

var esVerdad : boolean =  true;
//esVerdad = 0;
//esVerdad = "false";

var entero : number = 1;
var decimal : number = 10.59;
var hexa : number = 0xFF55AA;
var binario : number = 0b1001001;
var octal : number = 0o7125;
var cadena;
var otraCadena;

var cosa : any = "algo";
cosa = 10;
cosa = true;

var template : string = `concatenando: ${cadena} ${otraCadena}. Valor: ${hexa}.`;

// ----------------------------------------------------------------- ARRAYS DE DATOS ----------------------------------------------------------------------------------------------------------------------------------

var vec = [1, true, "hola"];//por default es any

var numeros : number[] = [1,2,3];

var otrosNumeros : Array<number> = [1,2,3];

numeros.push(5);

// ----------------------------------------------------------------- ENUMERADOS ----------------------------------------------------------------------------------------------------------------------------------

enum Ejemplo
{
    Basico,
    Intermedio,
    Avanzado
}

var e : Ejemplo = Ejemplo.Intermedio;