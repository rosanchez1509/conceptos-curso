
//definimos la función hola mundo
function HolaMundo() {
    console.log ("Hola mundo!")
}

//en este caso no recibe parametros

HolaMundo();
//Se puede de esta manera invocar la función 

function sumar(a,b) {               //recibe parametros
    var resultado = a+b;

     return resultado;  
}
    
     /**tambien se podria poner (sin declarar la variable resultado)
      * directamente return a+b;
      */

var suma= sumar (3,4)
console.log (suma)

