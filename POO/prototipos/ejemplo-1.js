//Definición: JS, es un lenguaje multiparadigma, 
//principalmente orientado a objetos y basado en prototipos
// las classes son una fabrica de objetos
//un prototio es una funcion
//las funciones costructoras contruyen o crean prototipos que son: fabricas de objetos
//funcion constructora:

//function (){
    //atributos
//}

//esto es un prototipo
function Animal() { //cuando creamos un prototipo la promera letra debe se ser en mayúscula
    this.nombre = 'jaguar';
    this.color = 'amarillo';
};

//para crear un objeto

const primerAnimal = new Animal();
console.log(primerAnimal);

