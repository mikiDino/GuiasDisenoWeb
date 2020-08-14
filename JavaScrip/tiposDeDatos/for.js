let names = ['paco','marcos','muriel','daniel'];
/* existen FOR OF y FOR IN */

for (let name of names) { // name = una variable estatica donde el valor se almacena
    console.log(name); //en esta variable y lo muestra
}

for (let index in names) { // index = 0 y se suma en uno hasta names.lenght
    console.log(index); // muestra las posiciones
}