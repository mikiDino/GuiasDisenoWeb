// si son 3 numero las que comparamos, las posibilidades son
// 3*2*1 = 6 posibilidades

const numbers = document.getElementById('numbers');
const result = document.getElementById('result');

let a = prompt('introduce el primer numero');
let b = prompt('introduce el segundo numero');
let c = prompt('introduce el tercer numero');

numbers.textContent = `los numero introducidos son: ${a}, ${b}, ${c}`

if(a>=b && a >=c){
    if(b>c){
        result.textContent= `El orden es: ${a}, ${b}, ${c}`
    }else{
        result.textContent= `El orden es: ${a}, ${c}, ${b}`
    }
}else if(b>=a && b>=c){
    if(a>c){
        result.textContent= `El orden es: ${b}, ${a}, ${c}`
    }else{
        result.textContent= `El orden es: ${b}, ${c}, ${a}`
    }
}else if(c>=a && c>=b){
    if(a>b){
        result.textContent= `El orden es: ${c}, ${a}, ${b}`
    }else{
        result.textContent= `El orden es: ${c}, ${b}, ${a}`
    }
}