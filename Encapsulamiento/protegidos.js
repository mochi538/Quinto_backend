let protegido = new WeakMap()
class Continente{
    constructor(nombre, poblacion){
    protegido.set(this, {nombre});
    this.poblacion= poblacion
    }
    InfoContinente(){
        let datos = protegido.get(this)
        console.log(`La información del continente es: ${datos.nombre}, La población es: ${this.poblacion}`)
    }
}
class Pais extends Continente{
    constructor(nombreP, nombre, poblacion){
        super(nombre, poblacion)
        this.nombreP = nombreP

    }
    infoPais (){
        let data = protegido.get(this)
        console.log(`La infomación del pais es: ${this.nombreP}, el nombre del continente es ${data.nombre} y la población es de ${this.poblacion}`)
    }
}
let america = new Continente("Suramerica", "Mucha gente")
america.InfoContinente()
let colombia = new Pais("Colombia", "Suramerica", "Menos gente")
colombia.infoPais()
