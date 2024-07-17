import Persona from './persona.js'
class Diseñador extends Persona{
    constructor(nombre, apellido, lenguaje){
        super(nombre, apellido)
        this.lenguaje= lenguaje
    }
    saludoInfoD(){
        return `Nombre:${this.nombre} Apellido:${this.apellido} Lenguaje:${this.lenguaje} `
    }
    saludoD(){
        return `Hello word${this.nombre}`
      }
      metodoPadre(){
        return `${super.InfoP()}`
      }
}
export default Diseñador