/*5 - Escriba un programa que pida un número entero mayor que cero y calcule su factorial. El factorial es el resultado de multiplicar ese número por sus anteriores hasta la unidad. */
const rersult = document.getElementById('result');

let numero = prompt('digite el numero a factorar');
let res = 1;
for (let i = 2; i <= numero; i++) {
    res *= i;
}
result.textContent = `el factorial de ${numero} es ${res}`
