class Agenda {
  constructor() {
    this.nombre = [];
    this.apellido = [];
    this.telefono = [];
    this.correo = [];
  }
  agregarContacto(nombre, apellido, telefono, correo) {
    this.nombre.push(nombre);
    this.apellido.push(apellido);
    this.telefono.push(telefono);
    this.correo.push(correo);
  }
  
  editarContacto(nombre, NewNombre, NewApellido, NewTelelfono, NewCorroe) {
    let nombreConsultar = nombre;
    let consultar = this.nombre.find(
      (elementoConsultar) => elementoConsultar === nombreConsultar
    );
    if (consultar != undefined) {
      this.nombre = NewNombre;
      this.apellido = NewApellido;
      this.telefono = NewTelelfono;
      this.correo = NewCorroe;
    } else {
      console.log("El contacto no se encuentra registrado");
    }
  }
  eliminarContacto(titulo) {
    let tituloConsulta = titulo;
    let consulta = this.nombre.find(
      (elementoConsulta) => elementoConsulta === tituloConsulta
    );
    if (consulta != undefined) {
      this.nombre.splice(consulta);
      this.apellido.splice(consulta);
      this.telefono.splice(consulta);
      this.correo.splice(consulta);

    }else{
        console.log("El contacto no se encuentra registrado")
    }
  }
  /* Tambien se utiliza Abtracción en este método
     porque no se conoce como va a ser su implementación */
  mostrarDetalles() {
    console.log(`Información del Contacto
              Nombre: ${this.nombre} 
              Apellido: ${this.apellido}
              Teléfono: ${this.telefono}
              Correo: ${this.correo}`);
  }
}
let contacto1 = new Agenda();
contacto1.agregarContacto(
  "Valentina",
  "Altamarino",
  "1234567890",
  "val@gmail.com"
);
contacto1.mostrarDetalles();
contacto1.editarContacto(
  "Valentina",
  "Elena",
  "Landam",
  "0987654321",
  "elenita@gmail.com"
);

contacto1.mostrarDetalles();
contacto1.eliminarContacto("Elena");
contacto1.mostrarDetalles();
