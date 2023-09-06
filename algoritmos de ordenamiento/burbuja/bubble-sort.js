const arr = [0,12,67,4,2,1];

function ordenamientoBurbuja(arregloDeNumerosAordenar) {
    // 6
    const total = arregloDeNumerosAordenar.length;
    // recorrer todas las posiciones del arreglo para avanzar
    for (let i = 0; i < total; i++) {
        // comparar valores por parejas y ordenarlas de menor a mayor
        for (let j = 0; j < total; j++) {
            if (arregloDeNumerosAordenar[j] > arregloDeNumerosAordenar[j+1]){ //desestructuración de arreglos se utiliza para poder acceder a los elementos del arreglo
                [arregloDeNumerosAordenar[j], arregloDeNumerosAordenar[j + 1]] = [arregloDeNumerosAordenar[j+1], arregloDeNumerosAordenar[j]];
            }
            
        }
    }
    // retornar el arreglo ordenado
    return arregloDeNumerosAordenar
}
    console.log(ordenamientoBurbuja(arr));
    // ctrl + D atajo del teclado para seleccionar todas las palabras por modificar sin ir una por una