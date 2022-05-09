// ES10

// Array.flat
let array = [1,2,3, [1,2,3, [1,2,3]]];

// flat recibe como argumento la profundiad
// vacio es solo un nivel
console.log(array.flat(2));
// aplana el arreglo generando una matriz



// flatmap
let arreglo = [1,2,3,4,5];
// voy a tomar el valor y lo voy a devolver junto con su doble
console.log(arreglo.flatMap(value => [value,value*2]));


// trim start
// elimina blancos en un string
let hello = '                hello world';
console.log(hello);
console.log(hello.trimStart());
// con trimStart() elimino los espacios iniciales

// trimEnd
let hello_2 = 'hello world            ';
console.log(hello_2);
console.log(hello_2.trimEnd());
// elimino los espacios al final


// fromEntries

let entries = [['name','oscar'],['age',32]];
console.log(Object.fromEntries(entries));


// objeto de tipo simbolo

let mySymbol = `My Symbol`;
let symbol = Symbol(mySymbol);
console.log(symbol.description);