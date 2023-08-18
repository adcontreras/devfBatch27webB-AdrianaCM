//FUNCIONES ANONIMAS AUTOEJECUTABLES IIFE

(function (){
    return console.log('Soy una funcion anonima autoejecutable...');
})();

//FUNCION ANONIMA DE FLECHA

(() => {
    return console.log('Soy una arrow funtion autoejecutable..');
})(); // el punto y coma es super necesario para la sintáxis correcta de las funciones


(function(a,b){
    return console.log(a+b);
})(67,9);

//hacer la funcion anterior una arrow function
((a,b) => {
    return console.log(a+b);
})(7,9);

//simplificada
((a,b) =>console.log(a+b))(1,9);

