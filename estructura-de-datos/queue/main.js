class Queue{
    constructor(){
        this.items=[];//Arreglo en el cual guardamos nuestros elementos    
    }

    enqueue(item){ //encolar
        this.items.push(item); //Agrega un elemento al final de la cola
    }

    dequeue(){ //desencolar
        if(this.isEmpty()){
            return 'Esta cola esta limpia'
        }
        return this.items.shift(); //dequeue: retira/elimina el primer elemento de la cola
    }

    front(){
        return this.items[0]; // devuelve el primer elemento sin eliminarlo
    }

    isEmpty(){
        return this.items.length === 0;
    }

    size(){
        return this.items.length; //Devuelve la cantidad de elementos en la cola
    }

    back(){
        return this.items[0]; // devuelve el primer elemento sin eliminarlo
    }
}

const cola = new Queue();
console.log(cola.front());
cola.enqueue(7);
cola.enqueue(24);
cola.enqueue(11);
cola.enqueue(313);
console.log(cola);
console.log(cola.dequeue());
console.log(cola.front());
console.log(cola);
console.log(cola.size());