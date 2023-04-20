// Argumentos por valor o referencia
console.log(document.title + '\n---------------------------');

console.error('Argumento por valor:');

const multiplicarPorDos = numero => {
    console.log('### Inicia función multiplicarPorDos');
    console.log('### Se está multiplicando por 2');
    numero *= 2;
    console.log('### Nuevo valor de numero:', numero);
    console.log('### Finaliza función multiplicarPorDos');
};

let prueba1 = 70; // number (primitivo)
console.warn('Valor de prueba1 antes de llamar a multiplicarPorDos:', prueba1);
multiplicarPorDos(prueba1);
console.warn('Valor de prueba1 después de llamar a multiplicarPorDos:', prueba1);


console.log('###################');

const agregarApellidoGarcia = nombre => {
    console.log('***** Inicia función agregarApellidoGarcia');
    console.log('***** Se está agregando el apellido García');
    nombre += ' García';
    console.log('***** Nuevo valor de nombre:', nombre);
    console.log('***** Finaliza función agregarApellidoGarcia');
};

let empleado = 'Lucas'; // string (primitivo)
console.warn('Valor de empleado antes de llamar a multiplicarPorDos:', empleado);
agregarApellidoGarcia(empleado);
console.warn('Valor de empleado después de llamar a multiplicarPorDos:', empleado);




console.error('Argumento por referencia:');


const resetearSaldo = objeto => {
    objeto.saldo = 0
};

let nuevoCliente = {    // objeto (no es un primitivo)
    nombre: 'Lucía',
    apellido: 'Ramírez',
    saldo: 400,
};

console.warn('Objeto nuevoCliente antes de llamar a resetearTelefono:', nuevoCliente);
resetearSaldo(nuevoCliente);
console.warn('Objeto nuevoCliente después de llamar a resetearTelefono:', nuevoCliente);


console.log('###################');


const agregarColorRojo = arrayDeColores => {
    arrayDeColores.push('Rojo');
};

const colores1 = ['Azul', 'Celeste', 'Verde'];   // objeto array (no es un primitivo)
console.warn('Objeto array colores1 antes de llamar a agregarColorRojo:', colores1);
agregarColorRojo(colores1);
console.warn('Objeto array colores1 después de llamar a agregarColorRojo:', colores1);


const agregarColor = (arrayDeColores, nuevoColor) => {
    arrayDeColores.push(nuevoColor);
};

const colores2 = ['Blanco', 'Rosa'];     // objeto array (no es un primitivo)
console.warn('Objeto array colores2 antes de llamar a agregarColor:', colores2);
agregarColor(colores2, 'Amarillo');
console.warn('Objeto array colores2 después de llamar a agregarColor:', colores2);

