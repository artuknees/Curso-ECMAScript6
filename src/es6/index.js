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

// VAR, LET y CONST ES6
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

/////////////////////////////////////////////////////////

// Propiedad de objetos mejorada ES6
// parametros de objetos

let nombre = 'arturo';
let edad = 31;

// Antes de ES6
obj = {nombre: nombre , edad: edad};

// Con ES6
obj_2 = { nombre , edad };

console.log(obj);
console.log(obj_2);

///////////////////////////////////////////////////

// Arrow functions ES6
// son funciones anonimas
const names = [
    {name: 'oscar', age: 32},
    {name: 'jesica', age: 27}
]

// para iterar por cada elemento
// uso map y paso una funcion anonima
let listOfNames = names.map(
    function (item){
        console.log(item.name);
    }
);

// Ahora con arrow functions

let listOfNames_2 = names.map(item => console.log(item.name));
// Mucho mas facil y corto de escribir.

// otro modo de encontrar una arrow function
const listOfNames_3 = (name,age,country) => {
    // el codigo de la funcion
};

// Si solo paso un parametro no hace falta envolver entre parentesis
const listOfNames_4 = name => {
    // codigo de la function
};

// puedo usar una nueva funcion
const square = num => num * num;
// genero una funcion "const" que eleva un numero al cuadrado.
// eso es lo que me retorna. No tengo que poner ni return ni bloque de llave.

console.log(square(2));

//////////////////////////////////////////////////////////

// Promesas ES6
const hello_promise = () => {
    return new Promise((resolve,reject) => {
        if (true) {
            resolve('Hey!')
        } else {
            reject('Ups!');
        }
    })
};
// Asigno una nueva funcion que devuelve una promesa.
// La promesa dice que algo va a pasar.
// Si verdadero es verdadero, entonces va a resolver con HEY. Si eso no pasa, devuelve UPS.

hello_promise()
    .then(response => console.log(response))
    .then(() => console.log('hola!'))
    .catch(error => console.log(error));
// ejecuto la funcion y avanzo sobre las promesas. Digo que se va a hacer en cada caso
// cara el caso true, va a imprimir hey y hola.
// para el caso false. solo responde ups.

///////////////////////////////////////////////////////