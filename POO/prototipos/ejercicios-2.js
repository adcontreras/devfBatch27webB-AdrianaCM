/**
 * Crear un objeto "contador" con un método "incrementar" que aumente un valor "valorActual"
 *  en 1 y otro método "obtenerValor" que devuelva el valor actual.
 */

class Contador{
    constructor(valorActual){
        this.valorActual = valorActual;
    }

    incrementar(){
        let valorIncrementado = this.valorActual + 1;

        return valorIncrementado;
    }

    obtenerValor(){
        let resp = this.valorActual
        return resp;
    }
}

var numToIncrement = new Contador(2)
console.log(numToIncrement.incrementar())



/**
 * Crear una función "ordenarArray" que acepte un array 
 * de números como parámetro y devuelva el array 
 * ordenado de menor a mayor.
 */

function ordenarArray (array){  
    let arrayOrdenado = array.slice().sort((a,b) => a-b)
    return arrayOrdenado;
}


//mismo ejercicio forma larga de resolverlo
const numero = [8,72,4,1,10,9,11]
console.log(ordenarArray(numero));

function ordenarArrayNasty(array) {
    const newArray = array.slice();
    const length = newArray.length;

    for (let i = 0; i < length - 1; i++) {
        for (let j = 0; j < length - i - 1; j++) {
            if (newArray[j]>newArray[j-1]){
                const temp = newArray[j];
                newArray[j]= newArray[j +1]
                newArray[j + 1] = temp;
            }
        }
        
    }
   return newArray 
}

const numeros = [8,72,4,1,10,9,11]


/**
 * Crear una clase "Rectangulo" con propiedades "ancho" 
 * y "alto" y un método "area" que calcule el área del 
 * rectángulo.
 */

``

class Rectangulo {
    constructor(ancho, alto){
    this.ancho = ancho;
    this.alto = alto;
    }
    area(){
        return (`${this.ancho * this.alto} es el área del rectángulo`);
    }
}

/**
 * Crear una función "factorial" que acepte un número 
 * como parámetro y devuelva su factorial 
 * (el producto de todos los números enteros positivos
 *  desde 1 hasta el número).
 */


/**
 * Crear un objeto "agenda" que permita agregar, 
 * eliminar y buscar contactos. Cada contacto debe 
 * tener un nombre, un email y un teléfono.
 */