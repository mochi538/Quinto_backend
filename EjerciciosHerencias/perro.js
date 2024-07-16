import Animal from './animal.js';

class Perro extends Animal {
  constructor(nombre, raza) {
    super(nombre);
    this.raza = raza;
  }

  infoPerro() {
    return `Nombre: ${this.nombre}, Raza: ${this.raza}`;
  }
}
let perro = new Perro("Lucas", "Pug");
console.log(perro.infoPerro());

export default Perro;
