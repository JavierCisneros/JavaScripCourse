

class Rectangulo {

    #area = 0;

    constructor(base = 0, altura =0){

        this.base = base;
        this.altura = altura;

        this.#area = base * altura;
    }
    //Metodo privado
     #calcularArea(){
        console.log(this.#area * 2);
        
    }
    //Metodo publico
    getArea(){
        return this.#calcularArea();
    }
}

const rectangulo = new Rectangulo(10,15);

// rectangulo.#area  = 100;
rectangulo.getArea();
console.log(rectangulo);