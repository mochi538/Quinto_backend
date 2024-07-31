class Autor{
    constructor(nombre, documento){
        this.nombre = nombre
        this.documento = documento
    }

    mostrarDatos(){
        return `Autor: ${this.nombre}, Documento: ${this.documento}`
    }
}
class Libro{
    constructor(titulo, ISBN){
        this.titulo = titulo
        this.codigoL = ISBN

    }
    mostrarDatos(){
        return `Título: ${this.titulo}, Código: ${this.codigoL}, autor ${this.autor}`
    }
}
class Escribe{
    constructor(objAutor, objlibro){
        this.autor = objAutor
        this.libro = objlibro
    }
    mostraDatos(){
        return `Autor: ${this.autor.nombre}, Libro: ${this.libro.titulo}`;
    }
}

let autor1 = new Autor("Gabo", "1234")
let autor2 = new Autor("Mario Mendoza", "4321")

let libro1 = new Libro("Cien años de soledad", "567")
let libro2 = new Libro("Libro", "567")


let escribe1 = new Escribe(autor1, libro1)
console.log(escribe1.mostraDatos())
