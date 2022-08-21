





class PersonaService {

    static #instancia; //undefined
    nombre = '';

    constructor ( nombre = ''){

    //    console.log(PersonaService.#instancia);

        if(!!PersonaService.#instancia){
            return PersonaService.#instancia;
        }
       PersonaService.#instancia = this;
       this.nombre = nombre;


    }



}

const instancia1 = new PersonaService('IronMan');

const instancia2 = new PersonaService('Spiderman');

const instancia3 = new PersonaService('BlackPanther');

console.log(`Nombre de la instancia es: ${instancia1.nombre}`);
console.log(`Nombre de la instancia es: ${instancia2.nombre}`);
console.log(`Nombre de la instancia es: ${instancia3.nombre}`);