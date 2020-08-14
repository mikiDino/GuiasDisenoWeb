let cadena = 'hola mundo';

/* PROPIEDADES */
console.log(cadena.length);

/* METODOS */

console.log(cadena.substring(2)); //muestra la letra segun el # de posicion incluso de un numero a otro 
console.log(cadena.slice(2, -6)); //muestra de una pocision a otra con un numero hasta el final
let cadena2 = '    estamos trabajando      '
console.log(cadena2.trim()); // elimina los espacios de inicio y del final

console.log(cadena.startsWith('h')); // es bolleano, si la cadena empieza con h
console.log(cadena.startsWith('m', 5));// si empieza con m a partir de la posicion 5
console.log(cadena.endsWith('o')); //termina con esa letra?
console.log(cadena.endsWith('a',4)); // termina en esa latra en los primero 4 charts
console.log(cadena.endsWith('mundo')); //si termina en esa palabra

let cadena3 = 'hola'
console.log(cadena3.repeat(3));

let nombre ='Juan';
let apellido ='Gomez';
let edad =20;

//dos formas diferentes de mostrar en console.log
console.log("hola " + nombre + " " + apellido + " " + "tienes " + edad + " años")

console.log(`hola ${nombre} ${apellido} tienes ${edad} años.`)
