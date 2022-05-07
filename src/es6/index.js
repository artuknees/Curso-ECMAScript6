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

//////////////////////////////////////////

// Multilinea en strings
// Antes de ES6
let lorem = "Vamos a inventar un texto bastante largo \n" + "para separar en dos parrafos.";
// Esto queda separado en linea por el "\n"

// Con ES6
let lorem_2 = `Otra frase epica para separar
solo con el enter tengo la frase dividida en parafos`;
// Solo uso las comillas francesas y luego pongo enter sin mas detalles

console.log(lorem);
console.log(lorem_2);

/////////////////////////////////////////

// Desestructuración de elementos

let person = {
    'name': 'oscar',
    'age': 32,
    'country': 'MX'
}

// Antes de ES6
console.log(person.name,person.age,person.country);

// Con ES6
let { name , age , country } = person;
console.log(name , age , country);
// Puedo extraer las variables que quiera del objeto para llamarlas mas facilmente.

/////////////////////////////////

// Operador de propagación

let team_1 = ['Oscar','Julian','Ricardo'];
let team_2 = ['Valeria','Jessica','Camila'];

let education = ['David',...team_1,...team_2];

console.log(education);


/////////////////////////////////////////////

// VAR, LET y CONST
// LET
{
    var globalvar = "Global Var";
}
{
    let globallet = "Global Let";
    console.log(globallet);
}
console.log(globalvar);

// Puedo acceder a global VAR porque realmente es global.
// globallet es de bloque y queda solo dentro del bloque donde se definió


// CONST
// las variables CONST no permiten una reasignación
const a = 'b';
a = 'a';
// Esto si puede hacerse con una variable LET o con una variable VAR.
