

let a = 10;
let b = a;

a = 30;

console.log({a,b});

let juan = {nombre: 'Juan'};
let ana = {...juan}; //spread
ana.nombre = 'Ana';

console.log(juan, ana);

const cambiaNombre = (...persona) => { //rest
    persona.nombre = 'Tony';
    return persona;
}

let peter = {nombre: 'Peter'};
let tony = cambiaNombre(peter);

console.log({peter, tony});


//arreglos

const frutas = ['Manzana', 'Naranja', ' Mango'];
console.time('slice');
const otrasFrutas = frutas.slice(); //evita que los objetos se relaciones 
console.timeEnd('slice');

console.time('spread');
//const otrasFrutas2 = [...frutas];
console.timeEnd('spread');

otrasFrutas.push('Piña');


console.table({frutas, otrasFrutas});