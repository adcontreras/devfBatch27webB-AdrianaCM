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
function Animal(nombre, color) { //cuando creamos un prototipo la promera letra debe se ser en mayúscula
    this.nombre = nombre;
    this.color = color;
    this.sonidoAnimal = function sonidoAnimal(){ // método: es una funcion que se declara dentro de un prototipo y 
                                                //bloque me codigo reutilizable
        return `Hola, estoy emitiendo el sonido de ${this.nombre}`;  // un método se ejecuta utiizando el objeto y la notación del punto
    };
};
 
//para crear un objeto

const jaguar = new Animal('jaguar', 'amarillo'); // generar una instancia (instancia:crear una nueva referencia)
const jirafa = new Animal ('jirafa','pinta'); // jirafa y pinta son argumentos
const conejo = new Animal ('conejo', 'blanco');        //objeto: es la instancia de un prototipo 

//para acceder a las propiedades de un objeto, hacemos use de la notacion del punto(dot notation)
console.log(jaguar.nombre); 
console.log(conejo.color);
console.log(jirafa.nombre);

//también se puede acceder a las propiedades de un objeto con la notación de corchetes cuadrados
console.log(conejo['nombre']);
console.log(conejo['sonidoAnimal']());

//Ejercicio: a partir del prototipo de arriba crear los siguientes objetos: jaguar, jirafa, conejo
console.log(jaguar.sonidoAnimal());

