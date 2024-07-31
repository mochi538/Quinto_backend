class Autor{
    constructor(nombre, documento){
        this.nombre = nombre
        this.documento = documento
        this.libro = []
    }
    agregarLibro(libro){
        this.libro.push(libro)
    }
    mostrarDatos() {
        let lista = "";
        for (let i = 0; i < this.libro.length; i++) {
          lista += this.libro[i].titulo;
        }
        return `Autor: ${this.nombre}, Documento: ${this.documento}, Libros: ${lista}  `
    }
   
}
class Libro{
    constructor(titulo, ISBN){
        this.titulo = titulo
        this.codigoL = ISBN
        this.autor = []
    }
    agregarAutor(autor){
        this.autor.push(autor)
    }
    mostrarDatos() {
        let lista = "";
        for (let i = 0; i < this.autor.length; i++) {
          lista += this.autor[i].nombre;
        }
        return `Título: ${this.titulo}, Código: ${this.codigoL}, Autor: ${this.autor}`

    }
}

let autor1 = new Autor("Gabo", "1234")
let autor2 = new Autor("Mario Mendoza", "4321")

let libro1 = new Libro("Cien años de soledad", "567")
let libro2 = new Libro("El general no tiene quien le escriba", "890")
let libro3 = new Libro("Libro", "567")

autor1.agregarLibro(libro1)
autor1.agregarLibro(libro2)


console.log(autor1.mostrarDatos())