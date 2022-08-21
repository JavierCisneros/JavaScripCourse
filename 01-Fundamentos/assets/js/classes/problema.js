
//Objetos 
const javier = {
    nombre: 'Javier',
    edad: 30,
    imprimir(){
        console.log(`Nombre: ${this.nombre} * Edad: ${this.edad}`);
    }
}


//Instanacias 
//Se debe de crear con la palabra new 
function Persona(nombre, edad){
    console.log('Se ejecuto esta linea');

    this.nombre = nombre;
    this.edad = edad;

    this.imprimir = function(){
        console.log(`Nombre: ${this.nombre} - Edad: ${this.edad}`);
    }
}

const maria = new Persona('Maria',18);
const melissa = new Persona('Melissa',35);

maria.imprimir();
melissa.imprimir();
