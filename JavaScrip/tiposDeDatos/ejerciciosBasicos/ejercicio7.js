/* 
7 - Crea 3 arrays. El primero tendra 5 números y el segundo se llamará pares y el tercero impares, ambos estarán vacíos. Después multiplica cada uno de los números del primer array por un número aleatorio entre 1 y 10, si el resultado es par guarda ese número en el array de pares y si es impar en el array de impares. Muestra por consola: -la multiplicación que se produce junto con su resultado con el formato 2 x 3 = 6 -el array de pares e impares
*/
let numeros = [1,2,3,4,5];
let pares =[];
let impares =[];

for (let i = 0; i < numeros.length; i++) {
       let res = numeros[i] * Math.round(Math.random() * (10-1) + 1);
       console.log(`${numeros[i]} * ${res/numeros[i]} = ${res}`);
       if (res % 2 == 0) {
           pares.push(res);
       } else {
           impares.push(res);
       }
}
console.log(pares);
console.log(impares);