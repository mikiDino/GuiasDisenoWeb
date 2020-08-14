/* 6 - Escribe un programa que permita ir introduciendo una serie indeterminadade números mientras su suma no supere 50. Cuando esto ocurra, se debe mostrar el total acumulado y el contador de cuantos números se han introducido */

const result= document.getElementById('result');
let aux = 0;
let res = 0;

while (res <= 50) {
    let num = parseInt(prompt('digite un numero'));
    res =res + num;
    if (res>50) {
        res=res-num;
        break;
    }
    aux++;
}
result.textContent= `se acumulo ${res} y se introducieron ${aux} numeros`