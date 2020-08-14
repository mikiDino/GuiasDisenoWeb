//el objeto Math es estatico
//estatico = no nos permite crearlo como variable

//propiedades de MATH, variables ya establecidos
console.log(Math.E);
console.log(Math.PI);

//Metodos de MATH
let num = -5;
console.log(Math.abs(num)); //abs= valor absoluto

let num1 = 5.3;
console.log(Math.ceil(num1)); // redondea al sgte numero entero
console.log(Math.floor(num1)); // redondea al numero entero actual

console.log(Math.pow(2,3)); // (base, exponenete);

console.log(Math.random()); // muestra numero entre 0 y 1 (decimales)
console.log(Math.round(Math.random()*100)); //muestra numero del 1 al 100, el round elimina las decimales y devuelve enteros

//console.log(Math.round(Math.random() * (max-min) + min));
console.log(Math.round(Math.random() * (20-5)+5)); //muestra los numeros entre 5 y 20

console.log(Math.sign(-51)) // -1 = es negativo | 0 = es cero | 1 = es positivo

console.log(Math.sqrt(9)); // devuelve la raiz cuadrada del numero 