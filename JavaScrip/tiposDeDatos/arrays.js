let numeros = [1,2,4,4,5];
console.log(numeros);

let numeros2 = [1,2,3,4,5,6];
console.log(numeros2[5]);

let palabras = ['hola','muchas','todos','estamos','call'];
console.log(palabras[1]);
console.log(`la palabra ${palabras[3]} tiene ${palabras[3].length} letras`);

/* 
 PROPIEDAD
     arrays.length = devuelve numero de posiciones de la lista 
*/
console.log(numeros.length);

/* 
METODOS
    arrays.isArray(variable); devuelve un boolean de si es una lista
*/
let numero = 4;
console.log(Array.isArray(numero));  //false 
console.log(Array.isArray(numeros)); //true

    // eliminar elemento de la posicion

console.log(numeros);
numeros.shift(); //elimina la primera posicion
// let deletedElement = numeros.shift(); //almacena la posicion eliminada 
console.log(numeros);
numeros.pop();   //elimina la ultima posicion
console.log(numeros);

    //añadir elementos var.push(numero a añadir);

console.log(numeros2);
numeros2.push(7); // añade un numero en la ultima posicion
console.log(numeros2);
numeros2.unshift(0);
console.log(numeros2); // añade un numero en la primera posicion

    // buscador de posicion

console.log(numeros);
console.log(numeros.indexOf(4)); // devuelve la posicion del valor escrito, caso contrario devuelve -1

console.log(numeros);
console.log(numeros.lastIndexOf(4)); // busca el valor desde el final

console.log(numeros);
numeros.reverse(); //invierte los elementos del array
console.log(numeros); //numero.reverse() es una opcion de solo ponerlo estaticamente

console.log(numeros2);
console.log(numeros2.join()); //devuelve el contenido de array en cadena separado por comas, en el parentesis puedes poner con que quieres separarlos en ves de coma (' '), tambien puedes llevarlos a una variable

    /* 
        .splice(a,b,items);  //remplaza o elimina el contenido de un array por otro contenido

            a = indice de inicio
            b = numero de elementos (opcional)
            items = elementos a añadir en caso de que se añadan(opcional)
    */

console.log(numeros2);

//numeros2.splice(3);  //elimina todo elemento apartir de la posiciom(3)

//numeros2.splice(3,2);  //elimina (, 2) elementos apartir de la posicion (3)

//numeros2.splice(3,2,12,23,45);  //elimina (,2) elementos apartir de la posicion (3) y reemplaza por los elementos (12,23,45) apartir de (3)

//numeros2.splice(3,0,34,24,32);  // añade los elementos (3,24,32) apartir de la posicion (3), sin eliminar nada (,0)
//console.log(numeros2);
/*----------------------------------------------------------------*/
    /* .slice(a,b) = extrae elementos de un array desde (a) hasta (b) si no existe b, es de a hasta final, si no existe a y b, copia al original */

//let newNumbers = numeros2.slice();
//console.log(numeros2);
//console.log(newNumbers);

//let newNumbers = numeros2.slice(2); //elimina las primeros (2) elementos y lo almacena en newNumbers
//console.log(numeros2);
//console.log(newNumbers);

let newNumbers = numeros2.slice(2,5);
console.log(numeros2);
console.log(newNumbers); //muestra los elementos desde la posicion (2) hasta (5) = 5-1