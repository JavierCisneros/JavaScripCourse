

let a = 5;

if( a >= 10){
    console.log('A es mayor a 10');
}
else{
    console.log('A es menor a 10');
}

console.log('Fin de programa');


const hoy = new Date();

let Dia = hoy.getDay();

console.log(Dia);

if (Dia === 0){
console.log('Es domingo');
}
else if (Dia === 1){
    console.log('No es domingo');
}

const diaSemana = {
0: 'Domingo',
1: 'Lunes',
2: 'Martes',
3: 'Miercoles',
4: 'Jueves',
5: 'Viernes',
6: 'Sabado',

}

console.log( 'El dia es ' + diaSemana[Dia]);