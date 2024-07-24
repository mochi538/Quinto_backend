class Agenda{
    constructor() {
      this.nombre = [];
      this.apellido = [];
      this.telefono = [];
      this.correo = [];
    }
    agregarCancion(nombre, apellido, telefono,correo) {
      this.nombre.push(nombre);
      this.apellido.push(apellido);
      this.telefono.push(telefono);
      this.correo.push(correo);

    }
    eliminarCancion(titulo, NewNombre, NewApellido, NewTelelfono, NewCorroe) {
        let tituloConsulta = titulo;
        let consulta = this.nombre.find(
          (elementoConsulta) => elementoConsulta === tituloConsulta
        );
        if (consulta != undefined){
            
          this.nombre = NewNombre
          this.apellido = NewApellido
          this.telefono = NewTelelfono
          this.correo = NewCorroe

        }else{
            console.log("La canción no se encuentra registrada")
        }
      
    }
  
    /* Tambien se utiliza Abtracción en este método
     porque no se conoce como va a ser su implementación */
    mostrarDetalles() {
      console.log(`Información de la canción
              Título: ${this.nombre} 
              Artista: ${this.apellido}
              Duración: ${this.telefono}`);
    }
  }
  let cancion1 = new Agenda();
cancion1.agregarCancion("CHIHIRO", "Billie", "5:03 min");
cancion1.mostrarDetalles();
cancion1.eliminarCancion("CHIHIRO", "TituloN", "artistaN", "DuraciónN");
cancion1.mostrarDetalles();
