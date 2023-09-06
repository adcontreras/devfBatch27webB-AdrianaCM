// ¿como puedo crear un arreglo desde cero con codigo?

class MyArray{
    constructor(){
        this.length = 0;
        this.data = {};
    };

    get(index){
        return this.data[index];
    }
    push(element){
        this.data[this.length] = element;
        this.length++;
        return this.data;
    }
    // elimina en la última posicion del arreglo
    pop(){
        const lastItem = this.data[this.length - 1];
        delete this.data[this.data[this.length - 1]];
        this.length --;
        return lastItem;
    }
    // agrega un elemento al principio del arreglo
    unshift(){

        this.length++; //aumentar la longitud del arreglo en una unidad
        //modificar los indices, desplazandolos hacia adelante
        // pedir un valor a agregar
        // una vez que lo tengamos
        // colocar ese valor en el indice 0
        // retornar la nueva cant de elementos del arreglo
    }
};

// la complejidad de un algoritmos, tiempo contra memoria
//Big O notaction = numero de operaciones (memoria que se esta ocupando) en contra el tiempo que se esta ocupando

const arr1 = new MyArray();
console.log(arr1);

console.log(arr1.get(1));


arr1.push('Dolores');
arr1.push(['Español', 'Matemáticas']);
arr1.push('78');

console.log(arr1.get(0));
console.log(arr1);




