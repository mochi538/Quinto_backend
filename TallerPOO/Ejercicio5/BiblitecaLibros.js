class Biblioteca{
    #disponibilidad
    constructor(){
        this.libros = []
        this.#disponibilidad = []
    }
    agregarLibro(titulo, disponible){
        this.libros.push(titulo)
        this.#disponibilidad.push(disponible)
    }
    prestarLibro(titulo){
        let titulo = titulo
        if(titulo === this.titulo && this.#disponibilidad === "Disponible"){
            this.#disponibilidad = "No está disponible"
            return `Libro Prestado`
        }else if(titulo === this.titulo && this.#disponibilidad === "Disponible"){
            return `El libro no está disponible` 
        }

    }
    devolverLibro(titulo){
        let titulo = titulo
        if(titulo === this.titulo){
            this.#disponibilidad = "Está disponible"
        }
    }

}
class Libro extends Biblioteca{
    
    constructor(titulo, autor){
        this.titulo = titulo
        this.autor = autor 
    }

}
