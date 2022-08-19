/**
 *  2C = Two of Clubs
 *  2H = Two of Clubs
 *  2S = Two of Swords
 *  2D = Two of Diamons
 */

let deck = [];
const tipos = ['C', 'D', 'S', 'H'];
const especiales = ['A', 'J', 'Q', 'K'];

let puntosJugador = 0,
    puntosComputadora = 0;

//Referencias HTML

const btnPedir = document.querySelector('#btnPedir');

const btnDetener = document.querySelector('#btnDetener');

const btnNuevo = document.querySelector('#btnNuevo');

const puntajeSmall = document.querySelectorAll('small');

const divCartasJugador = document.querySelector('#jugador-cartas');

const divCartasComputadora = document.querySelector('#computadora-cartas');



const createDeck = () => {

    for (let i = 2; i <= 10; i++) {
        for (let tipo of tipos) {
            deck.push(i + tipo);
        }

    }
    for (let tipo of tipos) {
        for (let especial of especiales) {
            deck.push(especial + tipo);
        }
    }


    deck = _.shuffle(deck);
    console.log(deck);
    return deck;
}
//Funcion para tomar carta 

const pedirCarta = () => {
    if (deck.length === 0) {
        throw 'No hay mas cartas';
    }
    let carta = deck.pop();
    // console.log(deck);
    // console.log(carta);
    return carta;
}

const valorCarta = (carta) => {

    const valor = carta.substring(0, carta.length - 1);
    return (isNaN(valor)) ?
        (valor === 'A') ? 11 : 10 :
        valor * 1;
    // if (isNaN(valor)) {
    //     console.log('NaN');
    //     puntos = (valor === 'A') ? 11 : 10;
    // } else {
    //     console.log('Es un numero')
    //     puntos = valor * 1;
    // }

    // console.log(puntos);

}

// pedirCarta();
// valorCarta(pedirCarta());

//Eventos
btnNuevo.addEventListener('click', () =>{
    deck = [];
    createDeck();
    divCartasComputadora.innerHTML = '';
    divCartasJugador.innerHTML = '';
    btnDetener.disabled = false;
    btnPedir.disabled = false;
    puntosJugador = 0;
    puntosComputadora = 0;
    puntajeSmall[0].innerText = ''+puntosJugador;
    puntajeSmall[1].innerText = ''+puntosComputadora;
    console.clear();
});
btnPedir.addEventListener('click', () => {
    const carta = pedirCarta();

    puntosJugador = puntosJugador + valorCarta(carta);
    puntajeSmall[0].innerText = '' + puntosJugador;
    console.log(puntosJugador);

    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`;
    imgCarta.classList.add('carta');
    divCartasJugador.append(imgCarta);


    if (puntosJugador > 21) {
        console.warn('Haz perdido!');
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador);
    } else if (puntosJugador === 21) {
        console.warn('Ganaste!')
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador);
    }
});


btnDetener.addEventListener('click', () => {
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugador);
});


const turnoComputadora = (puntosMinimos) => {
     do{
         const carta = pedirCarta();

     puntosComputadora = puntosComputadora + valorCarta(carta);
     puntajeSmall[1].innerText = ''+puntosComputadora;
     console.log(puntosComputadora);

     const imgCarta = document.createElement('img');
     imgCarta.src = `assets/cartas/${ carta }.png`;
     imgCarta.classList.add('carta');
     divCartasComputadora.append(imgCarta);
     if(puntosMinimos > 21){
         break;
     }
  
     }while((puntosComputadora < puntosMinimos) && puntosMinimos <= 21);

     setTimeout(() =>{
    
     if(puntosComputadora === puntosMinimos){
        alert('Nadie gana');
     }
     else if(puntosMinimos > 21){
        alert('Computadora gana');
     }
     else if (puntosComputadora > 21){
        alert('Jugador gana');
     }
     else if(puntosComputadora === 21){
        alert('Computadora gana');
     }
     else{
        alert('Computadora gana')
     }
     },2000);

}


createDeck();