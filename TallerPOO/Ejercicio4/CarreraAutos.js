class AutosEquipo{
    constructor(marca, modelo) {
      this.marca = marca;
      this.modelo = modelo;
      
    }

  }
class Auto{
    #velocidadMaxima
    #combustibleActual
    constructor(velocidadMaxima, combustibleActual){
        this.#velocidadMaxima = velocidadMaxima
        this.#combustibleActual = combustibleActual

    }
    acelerar(){
        let combustible = this.#combustibleActual
        let velocidadMaxima = this.#velocidadMaxima
        if (combustible > 10){
            return `Combustible suficiente:
            Aumentar velociadad hasta ${velocidadMaxima}Km/h`
        }else {
            return `Combustible insuficiente:
                    No puede aumentar la velociadad`
        }
    }
    frenar(velocidad){
        let velocidadActual = velocidad
        if (velocidadActual != 0){
            for(let i = 1; i <= velocidadActual; i++){
                return `${i}`
            }
            
        }else {
            return `El vehiculo está detenido`
        }
    }


    recargarCombustible(cantidadAumento){
        let cantAumento = parseInt(cantidadAumento)
        let nivel = parseInt(this.#combustibleActual);
        let niveltotal = cantAumento + nivel;
        this.#combustibleActual = niveltotal

            if (niveltotal < 145 && niveltotal > 0){
                return `Carga de combustion: ${niveltotal}L`
            } else if (niveltotal == 100){
                return `El nivel de combustible está completo: ${niveltotal}L`
            }else if (niveltotal > 100){
                return `Combustion completa: 145L, sobra esta cantidad: ${niveltotal-145}L`
            }
        }
    mostrarEstado(){
        return `Información del vehículo:
        Velocidad máxima: ${this.#velocidadMaxima}
        Combustible actual: ${this.#combustibleActual}`
    }
}
let auto = new Auto(90, 3)
console.log(auto.recargarCombustible(140))
console.log(auto.acelerar())
console.log(auto.mostrarEstado())
console.log(auto.frenar(10))