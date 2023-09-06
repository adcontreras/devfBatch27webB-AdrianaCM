class Stack{
    constructor(){
        this.items=[]//Usamos un arreglo para poder almacenar los datos de nuestro arreglo
    }
    
    push(item){
        this.items.push(item); //Agregamos al final de la pila un elemento
    }

    pop(){ //Elimina y muestra (devuelve) el último elemento de nuestra pila/stack
                if(this.isEmpty()){ //el metodo isEmpty se realizará mas adelante, es para..
            return 'La pila esta vacía'
        }
        return this.items.pop()
    }

    peek(){
        return this.items[this.items.length-1]//devolvemos el valor del ultimo elemento de nuestra pila pero no la eliminamos
    }

    size(){
        return this.items.length; //devuelve el numero de elementos que se encuetran en la pila
    }

    isEmpty(){
        return this.items.length === 0; // verificar si nuetsra pila está vacía
    }
}

//Uso de pila

const pila = new Stack();

pila.push(95);
pila.push(66);
pila.push(22);
pila.push(37);
pila.push(77);
pila.push(19);

console.log(pila);

console.log(pila.pop());
console.log(pila);
console.log(pila.peek());
console.log(pila);
console.log(pila.size());