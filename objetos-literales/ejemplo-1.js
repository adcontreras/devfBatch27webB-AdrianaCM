// 1. Los objetos literales son una estructura de datos que también son conocidos
//como arreglos asociativos o mapas 

//2. los objetos literales son diferentes de los objetos de POO(Programacion orientada a objetos)
// ctrl + k + c = comenta una línea completa

// 3.los objetos literales son diferentes de JASON (formato de texto plano)
// 4. pueden almacenar cualquier tipo de dato , desde primitivo hasta referencias 

//5. los objetos literales con un objeto the tipo "object"

const miCuentaDeAlumno = {
//las propiedades se definen como pares clave y valor
    id:"2i2o9hf", 
    nombre: "Cinthya",
    materias: ['Español', 'Matemáticas', 'Física'],
    mostrarGrupo(){
        return `El alumno ${this.nombre}, se encuentra cursando la materia ${this.materias[2]}`; //se usa el this porque se hace referencia a las propiedades del mismo objeto
    }
};

// 'this' es un objeto, que se crea para cada function, con excepcion de las arrow functions y también existe para cada objeto
// ya sea objet literal o de POO y representa una autorreferencia para poder acceder a mis propiedades 

console.log(miCuentaDeAlumno);

// podemos acceder a los valores de nuestras propiedades y metodos, usando la notacion de punto (dot notation)

console.log(miCuentaDeAlumno.materias[1]);
console.log(miCuentaDeAlumno.mostrarGrupo());