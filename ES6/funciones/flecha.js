//1-la funcion flecha, nos da una sintaxis más limpia y fácil de leer


//2- normalmente se almacenan en constantes o variables 
//se manda a llamar la variable saludar 
//3.en las arrow functions, no existe el objeto "this", estas no pueden ser prototipos (prototipo: fabrica de objeto)
// los atributos son los prototipos


let saludar = () => {
    return 'Hola mundo';
};


console.log(saludar()); //sino le pongo el console.log no se va a ver nada 

//short arrow function
//Reglas de sintaxis en arrow functions:
//*si mi funcion solo retorna un valor, puedo quitar el return explicito,
//las llaves y hacer uso del return explicito

// normal
let suma = (a,b) => {
    return a + b;
};

console.log(suma(4,9));

//short con las reglas de arrow functions
let suma2 = (a,b) => a+b;
console.log(suma2(4,9))

//short arrow function que pide un solo parámetro
//reglas de sintaxis arrow function:
//*si mi funcion solo retorna un valor y pide un solo parámetro, puedo aplicar la regla anterior
//y además, quitar los parentesis del parámetro

//normal
let saludar3 = (persona) => {
    return 'Hola ' + persona;
}
console.log(saludar3(' Mario'));
//shorter aplicando las reglas
let saludar2 = persona => 'Hola' + persona;
console.log(saludar2(' Adry'));

//pregunta de entrevista
//que funciones usas?

//yo trabajo con las de flecha por que la sintaxis es mas sencilla pero cuando tengo que creear 
//prototipos usa las normales pq las de flecha no pueden crear prototipos.