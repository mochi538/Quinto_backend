class Matrimonio {
  constructor(lugar, fecha, persona) {
    this.lugar = lugar;
    this.fechaHora = fecha;
    this.persona = new Persona(persona);
  }

  mostrarPareja() {
    let lista = "";
    for (let i = 0; i < this.persona.length; i++) {
      if (this.persona[i].cargo == "novio") {
        lista += `
        Novio:
            ${this.persona[i].mostrarInfoPersona()}
            `;
      }
      if (this.persona[i].cargo == "novia") {
        lista += `
        Novia:
            ${this.persona[i].mostrarInfoPersona()}`;
      }
    }
    return lista;
  }
  mostrarAutoridadCivil() {
    let lista = "";
    for (let i = 0; i < this.persona.length; i++) {
      if (this.persona[i].cargo == "civil") {
        lista += `
                Autoridad Civil:
                    ${this.persona[i].mostrarInfoPersona()}`;
      }
    }
    return lista;
  }
}

class Persona {
  constructor(nombre, apellido, edad, sexo, domicilio, cargo) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.sexo = sexo;
    this.domicilio = domicilio;
    this.cargo = cargo;
  }
  mostrarInfoPersona() {
    return `
          Nombre: ${this.nombre}
          Apellido: ${this.apellido}
          Edad: ${this.edad}`;
  }
}
let persona1 = new Persona("seis", "siete", "ocho", "nueve", "diez", "novia")
let matrimonio = new Matrimonio("Lugar", "fecha", [persona1])
/* console.log(matrimonio.mostrarPareja()); */
console.log(matrimonio.mostrarPareja());
/*  */
