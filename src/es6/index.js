// Parámetros por defecto
// Podemos establecer ciertos valores que le pasamos a una funcion, por defecto

// Antes de ES6
function newFunction(name,age,country){
    var name = name | 'oscar';
    var edad = edad | 32;
    var country = country | 'MX';
    console.log(name, age, country);
}

// Con ES6
function newFunction2(name = 'oscar' , age = 32 , country = 'MX'){
    console.log(name , age , country);
}


newFunction2();
newFunction2('Ricardo',23,'Colombia');

// Template literals
// permite separar o unir varios elementos

// Así se hacia antes de ES6
let hello = "Hello";
let world = "World";
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);

// Con ES6
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);