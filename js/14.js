//Arreglos o Arrays

const numeros = [20, 30, 40, 50];

console.table(numeros);

const meses = new Array('Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo');

console.table(meses);

//const arreglo = ["hola", 10, true, "si", null, {nombre: "Marco", trabajo: "freelancer",}, [1,2,3]];

//console.log(arreglo);

//Acceder a los valores de los arreglos

console.log(numeros[3]);
console.log(numeros[2]);
console.log(numeros[220]);


//Conocer la extension de un arreglo, iterar con forEach

console.log(meses.length);

numeros.forEach( function(numero){
    console.log(numero);
})
