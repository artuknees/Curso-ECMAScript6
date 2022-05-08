// ES9

// Operador de reposo

const obj = {
    nombre: 'arturo',
    edad: 31,
    pais: 'argentina',
};
// uso operador de reposo para separar los elementos.

let { nombre, ...all } = obj;
console.log(nombre, all);
// con el operador de reposo separe los elementos. saque el nombre por fuera
// lo demas lo dejo en el all
// extraje el nombre. lo demas quedo en el objeto.


// unir elementos de objetos con propiedad de propagacion

const obj_2 = {
    nombre: 'arturo',
    edad: 31,
}

const obj_3 = {
    ...obj_2,
    pais: 'argentina',
}

console.log(obj_3);


// Promise.finally

// hago mi promesa
const helloWorld = () => {
    return new Promise((resolve,reject) => {
        (true)
        ? setTimeout(() => resolve('Hello World'),3000)
        : reject(new WebGLContextEvent('Test Error'))
    });
};

// llamo la promesa y veo las variantes
helloWorld()
.then(response => console.log(response))
.catch(error => console.log (error))
// cuando sabemos que la promesa termino, se el resultado que sea
.finally(() => console.log('Finalizó'))

// Ya sea que haya mostrado lo del then o lo del catch, me muestra el finally.


// Mejoras en regex -> agrupacion en bloques

// defino una fecha de aaaa-mm-dd. numeros del 0 al 9 con N cantidad de digitos.
// asi es la sintaxis
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
// eso es un regex . es una admision de datos
const match = regexData.exec('2018-04-20'); // reviso si está bien
console.log(match); // tiene dentro la data, primero la fecha cruda, luego a,m,d y luego datos extra.
const year = match[1] // extraigo el año
const month = match[2] // extraigo el mes
const day = match [3] // extraigo el dia

console.log(year,month,day); // imprimo




