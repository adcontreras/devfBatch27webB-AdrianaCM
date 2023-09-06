// ventajas lineas enlazadas: los nodos pueden eliminarse o añadirse facilmente de na lista enlazada sin reorganizar toda la estructura de datos

class Nodo{
    constructor(valor){
        this.valor = valor   // Datos almacenados en el nodo.
        this.nodoSiguiente = null //Referencia a donde apuntara nuestro nodo
    }
}

class ListaEnlazada{
    constructor(){
        this.cabeza = null //Puntero (apuntamos al primer nodo)
    }

    append(valor){
        const nuevoNodo = new Nodo(valor);

        if(!this.cabeza) {
            this.cabeza = nuevoNodo //si la lista está vacia, el nuevo nodo se convierte en el imero
        }else{
            let nodoActual = this.cabeza;
            while(nodoActual.nodoSiguiente){
                nodoActual = nodoActual.nodoSiguiente;
            }
            nodoActual.nodoSiguiente = nuevoNodo;
        }
    }

    prepend(valor){
        const nuevoNodo = new Nodo(valor);
            nuevoNodo.nodoSiguiente = this.cabeza //establecemos el nuevo nodo como el primero/cabeza
            this.cabeza = nuevoNodo;
        }

   delete(valor) {
      if (!this.cabeza) {
        return;
      }
      if (this.cabeza.valor === valor) {
        this.cabeza = this.cabeza.nodoSiguiente; // Elimina el primer nodo si contiene los datos buscados.
        return;
      }
      let nodoActual = this.cabeza;
      while (nodoActual.nodoSiguiente) {
        if (nodoActual.nodoSiguiente.valor === valor) {
          nodoActual.nodoSiguiente = nodoActual.nodoSiguiente.nodoSiguiente; // Elimina el nodo siguiente si contiene los datos buscados.
          return;
        }
        nodoActual = nodoActual.nodoSiguiente;
      }
    }

display() {
    let nodoActual = this.cabeza;
    while (nodoActual) {
      console.log(nodoActual.valor); // Muestra los datos de cada nodo en la lista.
      nodoActual = nodoActual.nodoSiguiente;
    }
  }

  setHead(nodo){
    if(!nodo||!(nodo instanceof Nodo)){
        return console.log('El nodo ingresado no es un nodo valido');
    }

    this.delete(nodo.valor)
    nodo.nodoSiguiente = this.cabeza;//el nodo proporcionado apuntara al nodo actual de la cabeza
    this.cabeza = nodo;// el nodo proporcionado se convierte en la nueva cabeza
  }
}




  const listaEnlazada = new ListaEnlazada();
  listaEnlazada.append(10);
  listaEnlazada.append(23);
  listaEnlazada.append(19);
  listaEnlazada.append(9);
  listaEnlazada.append(7);
  listaEnlazada.append(18);
  listaEnlazada.append(50);
  listaEnlazada.display();
  console.log('-----------------')
  listaEnlazada.delete(23);
  listaEnlazada.display();
  console.log('-----------------')
  listaEnlazada.delete(10);
  listaEnlazada.display();
  console.log('-----------------')
  listaEnlazada.prepend(7);
  listaEnlazada.append(235);
  listaEnlazada.display();