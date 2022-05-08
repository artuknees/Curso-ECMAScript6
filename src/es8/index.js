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