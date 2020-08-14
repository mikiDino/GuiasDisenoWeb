/*
    3 - Solicita un número e imprime todos los números pares e impares desde 1 hasta ese número con el mensaje "es par" o "es impar" si el número es 5 el resultado será: 1 - es impar 2 - es par 3 - es impar 4 - es par 5 - es impar

*/
const result = document.getElementById('result');

let numero = prompt('digite el numero a contar y analizar');

for (let i=1;i <= numero; i++) {
    if (i%2 == 0) {
        result.textContent = `${i} es par`
        console.log(`${i} es par`);
    } else {
        result.textContent = `${i} es impar`
        console.log(`${i} es impar`);
    }
}