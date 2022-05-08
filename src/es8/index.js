// ES8 - 2017

// Object.Entries

const data = {
    frontend: 'Oscar',
    backend: 'Isabel',
    design: 'Ana',
}
// Como transformo este objeto en una matriz.

const entries = Object.entries(data);
console.log(entries);
// Para ver cuantos elementos tiene el objeto, ahora si puedo hacer length.
// Con el objeto comun, no se puede hacer length.
console.log(entries.length)


// Object.values
const data_2 = {
    frontend: 'Oscar',
    backend: 'Isabel',
    design: 'Ana',
}

const values_2 = Object.values(data_2);
console.log(values_2);
// Me devuelve los valores (solo los valores) en un array.
// Ignora las keys de las asignaciones
console.log(values_2.length);
// Al igual que en el caso anterior, aplica lo de length


// Padding

const string = 'hello';
// ¿como antepongo una cadena vacia o elementos al string?
console.log(string.padStart(7,'hi'))
// string.padStart(cantidad_total_de_caracteres_a_mostrar,que_agrego_al_inicio_si_sobran)
console.log(string.padEnd(12,' -----'))
// Ahi agregue la final


// async await

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (false)
        ? setTimeout(() => resolve('Hello World'),3000)
        : reject(new Error('Test Error'))
    })
}
// se arma una arrow function y la funcion, en si, es la definicion de una nueva promesa
// la promesa tiene un caso resolve y un caso reject (si o no).
// aca hacemos un IF ternario (otra forma de escribirlo), pero es igual a decir if(true)
// si es true, hacemos un settimeout, que en 3000ms devuelve el resolve (entrega un hello world)
// si es falto, genera un nuevo error y da test error
// luego llamo la promesa y con los then le doy las respuestas del true y con catch las de false.
// el then de response -> console.log(response) es el que da el hello world.

const helloAsync = async () => { // asi se identifica como una funcion que usa async
    const hello = await helloWorld(); // ejecuta el llamado
    // va a hacer el llamado, espera que suceda y luego imprime.
    // puedo llamar otra funcion para que se corra despues de la primera.
    console.log(hello);
    // da una sintaxis mas amigable.
}

helloAsync();

// otra forma de usar async y await (mas correctamente)

const anotherFunction = async () => {
    try {
        const hello = await helloWorld();
        console.log(hello);
    } catch (error) {
        console.log(error);
    }// prueba ejecutar algo y si no puede, hace el catch.
}

anotherFunction();


