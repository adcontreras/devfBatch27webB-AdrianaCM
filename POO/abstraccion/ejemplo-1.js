
//class en JS, es azúcar sintáctico. En JS no existen las clases

//code refactor = re fabricar códig. pasamos una funcion constructora a una class


//asi se pueden escribir los prototipos
class Animal {
    //las clases cuentan con un método llamado constructor, en donde
    // se contruyen las propiedades
    constructor(nombre, color){
        this.nombre = nombre;
        this.color = color;
    }
    
  sonidoAnimal(){  //los métodos sólo se declaran dentro de una clase
        return `Hola, estoy emitiendo el sonido de ${this.nombre}`;  
    };
};

let perro = new Animal('perro, cafe');  // instancia, osea perro se volvio un objeto de tipo animal
let gato = new Animal('gato', 'naranja');

console.log(gato.color);
console.log(perro);
 