
const miCuentaDeAlumno = {

    // idealmete, si le pones "" o '' a un atributo, para mantener tu base de codigo/codebase uniforme, tienes que añadirselas a os demas atributos

        'id':"2i2o9hf", 
        'nombre completo': "Cinthya",
        'materias': ['Español', 'Matemáticas', 'Física'],
        'mascota1':'gato',
        'mascota2':'gata',
        mostrarGrupo(){
            return `El alumno ${this['nombre completo']}, se encuentra cursando la materia ${this.materias[2]}`; //se usa el this porque se hace referencia a las propiedades del mismo objeto
        }
    };

    let claveDinamica = 'materias';

// un 'typo', es un error de ortografía en el código

// tambien podemos acceder a los valores de nuestros objetos con la notacion de corchetes cuadrados (square bracket notation)
console.log(miCuentaDeAlumno['nombre completo']);
console.log(miCuentaDeAlumno['mostrarGrupo']());

// la square bracket Notification, nos permite añadir un poco mas de dinamismo al poder concatenar dentro de los corchetes
console.log(miCuentaDeAlumno['mascota' + 1]);
console.log(miCuentaDeAlumno[claveDinamica]);