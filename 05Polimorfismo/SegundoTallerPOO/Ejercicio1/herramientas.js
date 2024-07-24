class Herramientas{
    estado(){
        return `Las herramientas son necesarias para tareas de mantenimiento`
    }
}

class HerramientasMecanicas extends Herramientas{
    estado(){
        
        return `Las herramientas mecánicas son básicas y manejables`

        
    }
}

class HerramientasElectricas extends Herramientas{
    estado(){
       return `Las herramientas eléctricas o electrónicas son de alta precisión`
    }
}

let herramientas = new Herramientas()
let mecanicas = new HerramientasMecanicas()
let electricas = new HerramientasElectricas()

console.log(herramientas.estado())
console.log(mecanicas.estado())
console.log(electricas.estado())

