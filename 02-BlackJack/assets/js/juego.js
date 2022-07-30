/**
 *  2C = Two of Clubs
 *  2H = Two of Clubs
 *  2S = Two of Swords
 *  2D = Two of Diamons
 */

let deck = [];
const tipos = ['C','D','S','H'];
const especiales = ['A','J','Q','K'];

const createDeck = () =>{

    for(let i = 2; i<=10; i++){
        for(let tipo of tipos){
            deck.push( i + tipo);
        }
        
    }
    for(let tipo of tipos){
        for(let especial of especiales){
            deck.push( tipo + especial);
        }
    }
    console.log(deck);
    deck = _.shuffle(deck);
}
    createDeck();
