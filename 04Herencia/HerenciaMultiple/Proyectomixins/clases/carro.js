import pasajerosMixin from "../mixins/pasajeros.js"
class Carro{
    constructor(numPasajeros){
        this.numPasajeros = numPasajeros
        Object.assign(this, pasajerosMixin)
    }
}
export default Carro
