

class Persona{
    ///Sobrecarga de constructores para respuestas http
    static porObjeto({nombre,apellido,pais}){
        return new Persona(nombre,apellido,pais);
    }
    constructor(nombre, apellido, pais){
        this.nombre = nombre;
        this.apellido = apellido;
        this.pais = pais;
    }

    getInfo(){
        console.log(`Info: ${this.nombre}, ${this.apellido}, ${this.pais}`);
    }
}

const Regina = {
      nombre: 'Regina',
      apellido: 'Jirano',
      pais: 'México'
}



// const persona1 = new Persona(nombre1, apellido1, pais1);
const persona1 = Persona.porObjeto(Regina);
persona1.getInfo();