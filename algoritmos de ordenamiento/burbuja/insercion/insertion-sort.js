//  recorrer los datos 

//  se aseguran que los valores de la izq, sean mas chicos que los valores de a drecha 
//  los mayores
// preguntar de derecha a izq, si soy el elemnto mas chico que el elemnto que estoy comparando, y si eso ocurre, me inserto en esa posición 

function ordenamientoDeInsercion(numerosAordenar){
    //3,0,6,1
    for (let i = 1; i < numerosAordenar.length; i++) {

        //1 = 1
        let j = i;

        // 1>=1 && 0 <3 = true
        // 0>= 1
        while(j >= 1 && numerosAordenar[j] < numerosAordenar[j-1]){
            //[3,0] = [0,3]
           [numerosAordenar[j-1], numerosAordenar[j]] = [numerosAordenar[j], numerosAordenar[j-1]]
           //0,3,6,1
           j --
           //0
        }
        
    }
return numerosAordenar;
}

console.log(ordenamientoDeInsercion([3,0,6,1]));