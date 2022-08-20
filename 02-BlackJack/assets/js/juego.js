/**
 *  2C = Two of Clubs
 *  2H = Two of Clubs
 *  2S = Two of Swords
 *  2D = Two of Diamons
 */


//Funcion anonima
const miModulo = (() =>{
    'use strict'

    let deck = [];
    const tipos = ['C', 'D', 'S', 'H'],
          especiales = ['A', 'J', 'Q', 'K'];

    // let puntosJugador = 0,
    //     puntosComputadora = 0;

    let puntosJugadores = [];

    //Referencias HTML

    const btnPedir = document.querySelector('#btnPedir'),

          btnDetener = document.querySelector('#btnDetener'),

          btnNuevo = document.querySelector('#btnNuevo');

    const divCartasJugadores = document.querySelectorAll('.divCartas'),

          puntajeSmall = document.querySelectorAll('small');

    //Inicializar Juego
    const inicializarJuego = (numJugadores = 2) =>{
        deck = createDeck();
        puntosJugadores = [];
        for(let i = 0; i<numJugadores; i++){
            puntosJugadores.push(0);
        }

        puntajeSmall.forEach(elem => elem.innerText = 0);

        divCartasJugadores.forEach(elem => elem.innerHTML='');

        btnDetener.disabled = false;
        btnPedir.disabled = false;

    }


    const createDeck = () => {
        deck = [];
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
        return  _.shuffle(deck);
    }
    //Funcion para tomar carta

    const pedirCarta = () => {
        if (deck.length === 0) {
            throw 'No hay mas cartas';
        }
        return deck.pop();
    }

    const valorCarta = (carta) => {
        const valor = carta.substring(0, carta.length - 1);
        return (isNaN(valor)) ?
            (valor === 'A') ? 11 : 10 :
            valor * 1;
    }
    //Turno 0 = 1er Jugador y ultimo = Computadora
    const acumularPuntos = (carta, turno) =>{
        puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
        puntajeSmall[turno].innerText = puntosJugadores[turno];
        return puntosJugadores[turno];
    }

    const createCarta= (carta, turno)=>{
        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${ carta }.png`;
        imgCarta.classList.add('carta');
        divCartasJugadores[turno].append(imgCarta);
    }

    const ganador = () =>{
        const [puntosMinimos, puntosComputadora] = puntosJugadores;
        setTimeout(() => {

            if (puntosComputadora === puntosMinimos) {
                alert('Nadie gana');
            } else if (puntosMinimos > 21) {
                alert('Computadora gana');
            } else if (puntosComputadora > 21) {
                alert('Jugador gana');
            } else if (puntosComputadora === 21) {
                alert('Computadora gana');
            } else {
                alert('Computadora gana')
            }
        }, 500);
    }

    const turnoComputadora = (puntosMinimos) => {

        let puntosComputadora = 0;
        do {
            const carta = pedirCarta();
            puntosComputadora = acumularPuntos(carta, puntosJugadores.length-1);
            createCarta(carta,puntosJugadores.length-1);

        } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));
        ganador();

    }
    //Eventos
    btnNuevo.addEventListener('click', () => {
        inicializarJuego();
    });

    btnPedir.addEventListener('click', () => {
        const carta = pedirCarta();
        const puntosJugador = acumularPuntos(carta,0);
        createCarta(carta,0);

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
        turnoComputadora(puntosJugadores[0]);
    });

    return {
       nuevoJuego: inicializarJuego
    };

})();
