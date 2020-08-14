//sintaxis simple
let num = 2;

switch(num){
    case 1: console.log(`el numero ${num}  que inserto es 1`);
    break;
    case 2: console.log(`el numero ${num}  que inserto es 2`);
    break; 
    default: console.log(`${num} no es el 1 ni el 2`);
}

// sintaxis multiple
switch(num){
    case 1:
    case 3:
    case 5:
        console.log(`el numero ${num}  es impar`);
        break;
    case 2:
    case 4:
        console.log(`el numero ${num}  es impar`);
}