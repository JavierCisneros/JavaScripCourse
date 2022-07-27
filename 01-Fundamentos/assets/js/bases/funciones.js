
function saludar(nombre){  // no es recomendable ya que la funcion puede ser cambiada 
    console.log(arguments); 
    console.log('Hola '+ nombre);
    return 1; //se puede retornar cualquier valor, arreglos, objetos, variables
}


const saludar2 = function (nombre){  //funcion anonima
    console.log('Hola mundo '+nombre);
}

const saludarFlecha = (nombre) => {
    console.log('Hola '+nombre)
}

const retorno = saludar('Javier',21,true, 'Mexico');
console.log({retorno}); //undefined en return si no es explicito
saludar2('Javier');
saludarFlecha('Javier');


function sumar(a, b){
    return a + b;
}

const sumar2 = (a,b) => {
    return a + b ;
}

// se puede usar asi cuando solo hay return

const sumar3 = (a,b) =>  a + b;

function getRandom(){
    return Math.random();
}

const getRandom2 = () => Math.random(); //funcion flecha sin llave

console.log('Suma: ', sumar(1,2));

console.log(getRandom());

console.log(getRandom2());
