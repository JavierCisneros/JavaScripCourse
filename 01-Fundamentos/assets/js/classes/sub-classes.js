


class Persona{
    static _conteo = 0;

    static get conteo(){
        //metodos estaticos se usan instancias estaticas
        return Persona._conteo + ' Instancias';
    }

    static mensaje(){
        console.log('Soy un metodo estatico');
    }

    nombre = '';
    codigo = '';
    frase = '';
    comida = '';

    constructor(nombre='Sin nombre',codigo='Sin codigo',frase='Sin frase'){
        // console.log('Hola!');
        // if(!nombre) throw Error('Necesitamos el nombre');
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;
        
        Persona._conteo++;
    }


    set setComidaFavorita(comida){
        this.comida = comida.toUpperCase();
    }
    get getComidaFavorita(){
        return `La comida favorita de:${this.nombre} es: ${this.comida }`
    }


    quienSoy(){
        console.log(`Soy: ${this.codigo} y mi identidad es: ${this.nombre}`);
    }
    miFrase(){
        this.quienSoy();
        console.log(`${this.codigo} dice ${this.frase}`);
    }
}


class Heroe extends Persona{

    //Clases heredando
    clan = 'sin clan';
    constructor(nombre,codigo,frase){
        //Constructor de persona
        super(nombre,codigo,frase);

        this.clan = 'Los avengers';
    }
    quienSoy(){
        console.log(`Soy ${this.nombre}, ${this.clan}`)
        super.quienSoy();
    }
 }
// const spiderman = new Persona('Peter Parker', 'Spiderman', 'Soy tu amigable amigo el hombre araña');
// const ironman = new Persona('Tony Stark', 'IronMan', 'Yo soy IronMan');


const spiderman = new Heroe('Peter Parker', 'Spiderman', 'Soy tu amigable amigo el hombre araña');

console.log(spiderman)
spiderman.quienSoy();