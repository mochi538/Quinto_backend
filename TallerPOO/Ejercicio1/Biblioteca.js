
class BibliotecaMusica {
  #duracion; 
  constructor() {
    this.titulo = [];
    this.artista = [];
    this.#duracion = [];
  }
  agregarCancion(titulo1, artista, duracion) {
    this.titulo.push(titulo1);
    this.artista.push(artista);
    this.#duracion.push(duracion);
  }
  eliminarCancion(titulo) {
    let tituloConsulta = titulo;
    let consulta = this.titulo.find(
      (elementoConsulta) => elementoConsulta === tituloConsulta
    );
    if (consulta != undefined) {
      this.titulo.splice(consulta);
      this.artista.splice(consulta);
      this.#duracion.splice(consulta);
    }else{
        console.log("La canción no se encuentra registrada")
    }
  }

  /* Tambien se utiliza Abtracción en este método
   porque no se conoce como va a ser su implementación */
  mostrarDetalles() {
    console.log(`Información de la canción
            Título: ${this.titulo} 
            Artista: ${this.artista}
            Duración: ${this.#duracion}`);
  }
}
let cancion1 = new BibliotecaMusica();
cancion1.agregarCancion("CHIHIRO", "Billie", "5:03 min");
cancion1.mostrarDetalles();
cancion1.eliminarCancion("CHIHIRO");
cancion1.mostrarDetalles();

let cancion2 = new BibliotecaMusica();
cancion2.agregarCancion("idontwannabeyouanymore", "Billie", "3:23 min");
cancion2.mostrarDetalles();



