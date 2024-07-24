import Perro from './perro.js'
class Gato extends Perro{
    constructor(nombre, raza, sonido){
        super(nombre, raza)
        this.sonido = sonido
    }
    infoGato(){
         return `nombre: ${this.nombre}, raza: ${this.raza}, sonido: ${this.sonido}`
    }
}

export default Gato