/* Las clases abstractas no se pueden instanciar  */
class Electronico{
    constructor(marca, modelo){
        this.marca= marca
        this.modelo= modelo
        if(this.constructor === Electronico){
            throw new Error("Esta clase no se puede instanciar ya que es abstracta")
        }
    }
    /* También es abstracto porque no modifica sus propiedades o algu así */
    infoElectronico(){
        console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}`)
    }
    /*Un método abstracto no permite implementar ninguna de sus propiedades, mantiene oculto lo más importante de la clase */
    stockElectronico(){
        throw new Error("Debe ser implementado en la clase hija")
    }
}
class Pc extends Electronico{
    constructor(marca, modelo,sistemaOp){
        super(marca, modelo)
        this.sistemaOp = sistemaOp
    }
    infoPc(){
        console.log(`Marca: ${this.marca}, Sistema Operativo: ${this.sistemaOp}`)
    }
}
class Tv extends Electronico{
    constructor(size, marca){
        super(marca)
        this.size = size
    }
    infoTv(){
        console.log(`Marca: ${this.marca}, Tamaño: ${this.size}`)
    }

}


/* let elec = new Electronico("sony", 2023)
elec.infoElectronico() */


/* A pesar de ser una clase abstracta, se puede hacer uso de sus propiedades desde las clases hijas*/
let apple = new Pc("Apple", 2023,"Linux")
apple.infoElectronico()
apple.infoPc()
apple.stockElectronico()
/* Que principio se cumple y en que linea.
Archivo por clase */