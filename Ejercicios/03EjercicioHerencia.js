class Animal {
  constructor(nombre, especie, raza) {
    this.nombre = nombre;
    this.especie = especie;
    this.raza = raza;
  }
  infoAnimal() {
    return `Animal = Nombre: ${this.nombre}, Especie: ${this.especie}, Raza: ${this.raza}`;
  }
  set setalimentacion(alimentacion) {
    this.alimentacion = alimentacion;
  }
  get getalimentacion() {
    return this.alimentacion;
  }
}

class Perro {
  constructor(domestico){
    this.domestico = domestico
  }

  infoPerro() {
    return `Domestico: ${this.domestico}`;
  }
}
class Gato{
    constructor(){

    }
    set setColor(color){
        this.color = color
    }
    get getColor(){
        return this.color
    }
    infoGato(){
         return `Color: ${this.color}`
    }
}
let animal = new Animal("Perro", "Canis lupus familiaris", "Pug");
animal.setalimentacion = "Omnívoro";
console.log(animal.getalimentacion);
console.log(animal.infoAnimal());


let perro = new Perro("Si");
console.log(perro.infoPerro());

let gato = new Gato()
gato.setColor= "Blanco sucio"
console.log(gato.infoGato())
console.log(gato.getColor)
