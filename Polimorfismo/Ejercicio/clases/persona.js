class Persona {
  constructor(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
  }
  saludoP(){
    return `Hello moto ${this.nombre}`
  }
  InfoP() {
    return `Nombre:${this.nombre} Apellido:${this.apellido}`;
  }
}

export default Persona;
