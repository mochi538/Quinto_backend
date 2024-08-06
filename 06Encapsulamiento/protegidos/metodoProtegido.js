let protegido = new WeakMap()

class Zoo{
    constructor(nombreZoo, numZona){
        protegido.set(this, {nombreZoo})
        this.numZona = numZona

        this.obtenerNombreZoo = ()=> {
            let nombre = protegido.get(this)
            return nombre.nombreZoo 
        }
    }
    infoZoo(){
        return `Infomación del Zoológico:
                nombre: ${this.obtenerNombreZoo()}
                Número de zona: ${this.numZona}`
    }
}
class AnimalesAcuaticos extends Zoo{
    constructor(nombre, especie, nombreZoo, numZona){
        super(nombreZoo, numZona)
        this.nombre = nombre
        this.especie = especie
    }
    infoAnimal(){   
        let dato = protegido.get(this)

        return `Información del animal: 
                nombre: ${this.nombre}
                especie: ${this.especie}
                nombre Zoo (con Variable): ${dato.nombreZoo}
                nombre Zoo (con función): ${this .obtenerNombreZoo()}`
                
    }
}
let zooCali = new Zoo("Zoo de Cali", "hola")

console.log(zooCali.obtenerNombreZoo())

let cocodrilo = new AnimalesAcuaticos("Cocodrilo", "Reptil","Zoo de Cali", 3)
console.log(cocodrilo.infoAnimal())