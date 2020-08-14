/*
8 - Dado un array de letras, solicita un número de DNI y calcula que letra le corresponde. El número no puede ser negativo ni tener más de 8 dígitos. La posición de la letra es el resultado del módulo del número introducido entre 23

const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
*/
const rersult = document.getElementById('result');
const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'Q'];

let dni = prompt('digite su DNI');
let res;
let aux= dni;
if (dni > 0) {
    for (i = 0; aux < 1; i++) {
        aux= aux / 10;
        res =i;
        console.log(res);
    }
    if (res <= 8) {
        dni=dni % 23;
        console.log(`el modulo del numero de su DNI esta en la posicion de la letra ${letras[dni]}`);
    }else{
        console.log('el digito del dni es mayor a 8 numeros');
    }
}else{
    console.log(`el numero digitado es negativo`);
}
