


//Entrada al sitio web para conocer si esta abierto


const dia = 1; //Domingo
const horaActual = 10;

let horaApertura;
let mensaje; // Esta abierto, o abrimos a las xx

// if([0,6].includes(dia)){

//     console.log('Fin de semana');
//     horaApertura = 9;
// }
// else{
//     console.log('Dia de semana')
//     horaApertura = 11;
// }

 horaApertura = ([0,6].includes(dia)) ? 9 : 11 ;  //Operador ternario 

// if (horaActual >= horaApertura){
//     mensaje = 'Esta Abierto';
// }
// else {
//     mensaje = `Esta cerrado, hoy abrimos a las ${horaApertura}`;
// }

mensaje = (horaActual >= horaApertura) ? 'Esta Abierto' : `Esta cerrado, hoy abrimos a las ${horaApertura}`;

console.log({horaApertura, mensaje});