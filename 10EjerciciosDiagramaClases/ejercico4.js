class Casa{
    constructor(direccion){
        this.direccion = direccion
        this.habitaciones = []
    }
    agregarHabitacion(nombre, superficie){
        let habitar = new Habitacion(nombre, superficie)
        this.habitaciones.push(habitar)
    }
    mostrarInfo(){
        let lista = "";
        for (let i = 0; i < this.habitaciones.length; i++) {
          lista += this.habitaciones[i].nombre;
        }
        return `Dirección: ${this.direccion}, Habitaciones: ${lista}`
    }
}
class Habitacion{
    constructor(nombre, superficie){
        this.nombre = nombre
        this.superficie = superficie
    }
    
    mostrarInfo(){
        return `Nombre: ${this.nombre}, Superficie: ${this.superficie}`
    }
    
}
let casa = new Casa("El centro")
casa.agregarHabitacion("Baño", "Sirve")
casa.agregarHabitacion("Cocina", "Sirve x2")
console.log(casa.mostrarInfo())



