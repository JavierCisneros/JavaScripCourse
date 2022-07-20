function crearPersona(nombre, apellido){
    return{nombre,apellido}
}
//const crearPersona = (nombre, apellido) => ({nombre,apellido}); //para regresar como objeto con ()
const persona = crearPersona('Javier','Cisneros');
console.log(persona);

function imprimeArgumentos(){
    console.log(arguments);
}

//imprimeArgumentos(10, true, false, 'Javier', 'Hola');
 
const imprimeArgumentos2 = (edad, ...arguments) => {  //las funciones flecha no crean el objeto argumento
    //console.log('Edad: ', edad, 'Argumentos: ', arguments);
    return arguments;
}

const [casado, vivo, nombre, saludo] = imprimeArgumentos2(10, true, false, 'Javier', 'Hola');

console.log({casado,vivo,nombre,saludo});


const {apellido} = crearPersona('Javier', 'Cisneros');
console.log({apellido});

const tony = { // se puede usar const para bloquear las propiedades y no asiganarle nuevas
    nombre: 'Tony Stark',
    codeName: 'IronMan',
    vivo: false,
    trajes: ['Mark I', 'Mark V', 'HulkBuster'],
};

/* const imprimePropiedades = (personaje) => {
    console.log(personaje.nombre); //version mala
} */


const imprimePropiedades = ({nombre, codeName,vivo,edad = 30,trajes}) => {

    console.log({nombre});

    console.log({edad});
}

imprimePropiedades(tony);
