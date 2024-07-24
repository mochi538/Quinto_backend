import Diseñador from './clases/diseñador.js'
import Persona from './clases/persona.js'
let diseñador = new Diseñador("Juan", "Sanchez", "JS")
console.log(diseñador.saludoInfoD())
console.log(diseñador.metodoPadre())

let arregloP = [new Persona("Jose", "Perez"), new Diseñador("Valentina","Altamarino", "Python")]
arregloP.forEach(persona => {
    console.log(persona.saludoP())
})
let arregloD = [new Diseñador("Valentina","Altamarino", "Python")]
arregloD.forEach(persona => {
    console.log(persona.saludoD())
})