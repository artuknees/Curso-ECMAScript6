// ES 11
// Dynamic import
// index.js
const button = document.getElementById("btn");
// estaré esperando el resultado del boton

button.addEventListener("click",async function (){
    const module = await import("./file.js");
    module.hello();
});


// bigInt
const bigNumber = 9007199254740991n;
const anotherBigNumber = BigInt(9007199254740991);
console.log(bigNumber);
console.log(anotherBigNumber);


// promise.allStettled()
// genero 3 promesas en donde cada una devuelve directo algo, sin logica.
const promise_1 = new Promise((resolve,reject) => reject("reject"));
const promise_2 = new Promise((resolve,reject) => resolve("resolve"));
const promise_3 = new Promise((resolve,reject) => resolve("resolve 1"));

// buscará que terminen todas las promesas y devuelve la informacion
Promise.allSettled([promise_1,promise_2,promise_3])
.then(response => console.log(response));
// toma las tres promesas y luego de que terminen, devuelve las respuestas


// global this
console.log(window); // esto no lo podria hacer haciendo run aca
console.log(globalThis); // con esto si puedo acceder el espacio global


// operador nulo
const foo = null ?? 'default string';
console.log(foo);
// deberia devolver lo del lado derecho si lo del lado izquierdo es null o undefined.


// optional chaining

const user = {};
// con un llamado de API cargaremos el user
console.log(user?.profile?.email); // con el ? trato de leer el nivel que pido, y si no puede, no romper la aplicacion

if (user?.profile?.email){
    console.log('email');
} else {
    console.log('fail');
}
// al no tener el elemento email porque no existe, mi validacion muestra fail.

