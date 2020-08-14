/* 
    2 - Escribe un programa que pueda calcular el área de 3 figuras geométricas, triángulo, rectángulo y círculo. En primer lugar pregunta de qué figura se quiere calcular el área, después solicita los datos que necesites para calcularlo. triángulo = b * h/2 rectángulo = b * h círculo = π * r2 (pi * radio al cuadrado)
*/

let figura = prompt('¿Qué figura desea calcular el area?\n opción:\n 1.triangulo\n 2.rectangulo\n 3.circulo\n');

let b;
let h;
const result = document.getElementById('result');

if (figura==1) {
    b = prompt('digite la base');
    h = prompt('digite la altura');
    result.textContent = `el area del triangulo es ${b*h/2}`
} else if (figura==2) {
    b = prompt('digite la base');
    h = prompt('digite la altura');
    result.textContent = `el area del rectangulo es ${b*h}`
} else {
    let r = prompt('digite el radio');
    result.textContent = `el area del circulo es ${Math.PI * Math.pow(r,2)}`
}