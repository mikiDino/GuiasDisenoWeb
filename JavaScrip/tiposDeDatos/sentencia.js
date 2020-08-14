let num1 = 5;
let num2 = 2;

if(num1>0){
    if(num2>0){
        console.log(`${num1} y ${num2} son mayores a cero`);
    }else if(num2<0){
        console.log(`${num1} es mayor a 0 y ${num2} menor a cero`);
    }else{
        console.log(`${num1} es mayor a 0 y ${num2} es igual a cero`);
    }
}else if( num<0){
    if(num2>0){
        console.log(`${num1} es menor a 0 y ${num2} es menor a cero`);
    }else if(num2<0){
        console.log(`${num1} y ${num2} son menores a cero`);
    }else{
        console.log(`${num1} es menor a 0 y ${num2} es igual a cero`);
    }
}else{
    if(num2>0){
        console.log(`${num1} es igual a cero ${num2} es mayor a cero`);
    }else if(num2<0){
        console.log(`${num1} es igual a 0 y ${num2} menor a cero`);
    }else{
        console.log(`${num1} y ${num2} son iguales a cero`);
    }
}

let word = 'Hola';

if(word.length>4){
    console.log(`${word} tiena mas de 4 letras`);
}else if(word.length<4){
    console.log(`${word} tiene menos de 4 letras`);
}else{
    console.log(`${word} tiene 4 letras`);
}

let respuesta =false ;

if (respuesta) console.log(`respuesta tiene el valor true`);
if (!respuesta) console.log(`respuesta tiene el valor false`);
