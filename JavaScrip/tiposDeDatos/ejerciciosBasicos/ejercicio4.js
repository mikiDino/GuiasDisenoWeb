/* 
    4 - Escribe un programa que pida un número entero mayor que 1 y que escriba si el número primo o no. Un número primo es aquel que solo es divisible por sí mismo y la unidad
*/
const result = document.getElementById('result');

let num = prompt('digite un numero des el numero'); 
let bandera = false;

for (let i = 2; i < num; i++) {
    if(num % i != 0){
        bandera=true;
    }else{
        i = num;
    }
}
if (bandera==true){
    console.log(`${num} es numero primo`);
}else{
    console.log(`${num} no es numero primo`);
}