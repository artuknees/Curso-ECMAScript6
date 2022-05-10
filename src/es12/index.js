// ES12

// ReplaceAll
const string = "JavaScript es maravilloso, con JavaScript puedo crear el futuro de la web";
// Esto es con replace comun - solo cambia lo primero.
const replacedString = string.replace("JavaScript","Python");
console.log(replacedString);
// solo cambie el primer elemento que encontre coincidente
const replacedString_2 = string.replaceAll("JavaScript","Python");
console.log(replacedString_2);
// Ahora con replaceAll cambio todos los elementos que dicen JavaScript



// Métodos privados para clases
class Message {
    #show(val) {
        console.log(val)
    };
    get #add(val){
        ...
    }
}
// el # antes del metodo lo define como privado. No puedo llamarlo desde afuera
// defino la clase, que solo tiene un metodo que hace console.log

// hago una instancia de la clase
const message = new Message();
message.show('Hola!');


// PromiseAny
const promise1 = new Promise((resolve,reject) => reject("1"));
const promise2 = new Promise((resolve,reject) => resolve("2"));
const promise3 = new Promise((resolve,reject) => resolve("3"));
// defino 3 promesas. la primera solo se niega y la segunda se resuelve
Promise.any([promise1,promise2,promise3])
.then (response => console.log(response));
// corro el promise any y la primera que se resuelve es la 2.


// WeakRef
class anyClass {
    constructor(element){
    this.ref = new WeakRef(element)
    // le doy una weak ref con el elemento
    }
    {...}
}


// Operadores logicos nuevos
// AND lógico
let isTrue = true;
let isFalse = false;
// AND logico
console.log(isTrue &&= isFalse); // false

// OR logico
console.log(isTrue ||= isFalse); // false

// Anulación logica
let isUndef = undefined;
console.log(isUndef ??= isFalse); // false
