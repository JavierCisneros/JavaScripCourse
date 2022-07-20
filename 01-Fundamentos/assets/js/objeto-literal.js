let personaje = { // se puede usar const para bloquear las propiedades y no asiganarle nuevas
    nombre: 'Tony Stark',
    codeName: 'IronMan',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        lng: -118.70
    },
    trajes: ['Mark I', 'Mark V', 'HulkBuster'],
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'Malibu, California'
    },
    'Ultima-pelicula': 'Infinity War', //en caso de separacion por menos usar comillas 
};
console.log(personaje);
console.log('Nombre:',personaje['nombre']);
console.log('Edad', personaje.edad);
console.log('Lat', personaje.coords.lat, 'Long', personaje.coords.lng);
console.log('No. Trajes:', personaje.trajes.length);
console.log('Ultimo Traje:', personaje.trajes[personaje.trajes.length - 1]);

const x = 'vivo';

console.log('Vivo', personaje[x]); //x = vivo, objeto car

console.log('Ultima Pelicula:', personaje["Ultima-pelicula"]); //auto sintaxis



//Mas detalles 

personaje.edad = null; // no funciona 

delete personaje.edad; // borrar la propiedad edad 


console.log(personaje);

personaje.casado = true;

Object.freeze(personaje); //Bloquear la creacion de nuevas propiedades y asignación directas, no las indirectas

personaje.dinero = 10000;

const entriesPares = Object.entries( personaje); 
console.log(entriesPares);


const propiedades = Object.getOwnPropertyNames(personaje);
const valores     = Object.values(personaje);
console.log(propiedades, valores); //que propiedaes tiene el objeto en forma de arreglo
