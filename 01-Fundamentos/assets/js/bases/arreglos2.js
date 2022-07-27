let juegos = ['Zelda','Mario','Metroid','Gears'];
console.log(juegos.length);

let primero = juegos[0];
let ultimo = juegos[juegos.length - 1];

console.log({primero, ultimo});

juegos.forEach((elemento, indice, arr) => { //elemento, indice, lenght
    console.log({elemento, indice, arr});
});

let longitud = juegos.push('Need For Speed');
console.log({juegos, longitud}); //Agregar al final

let nuevaLongitud =juegos.unshift('Age of Empires');
console.log({juegos, nuevaLongitud}); //Agregar al inicio

let juegoBorrado= juegos.pop();
console.log({juegoBorrado,juegos}); //Borra el ultimo elemento 

let pos =  1; 
let juegosBorrados = juegos.splice(pos,2);
console.log({juegosBorrados,juegos}); //borrar dos elementoss a partir de la posicion 1


let gearsIndex = juegos.indexOf('Gears'); // Encontrar index del juego
console.log({gearsIndex});


