class Animal{
  constructor(nombre) {
    this.nombre = nombre;
  }
  infoAnimal() {
    return `Animal = Nombre: ${this.nombre}`;
  }
}
let animal = new Animal("Perro")
console.log(animal.infoAnimal())
export default Animal
