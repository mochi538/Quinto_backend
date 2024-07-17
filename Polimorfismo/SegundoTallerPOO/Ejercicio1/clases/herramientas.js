class Herramientas{
    estado(){
        return `Las herramientas son necesarias para tareas de mantenimiento`
    }
}

class HerramientasMecanicas extends Herramientas{
    estado(){
        if(x=0){
        return `Las herramientas mecánicas son básicas y manejables`

        }
        return `Las herramientas eléctricas o electrónicas son de alta precisión`
        
    }
}

class HerramientasElectricas extends Herramientas{
    estado(){
        return `Las herramientas mecánicas son básicas y manejables`
        return `Las herramientas eléctricas o electrónicas son de alta precisión`
    }
}

let herramientas = new Herramientas()
let mecanicas = new HerramientasMecanicas()
let electricas = new HerramientasElectricas()

console.log(herramientas.estado())
console.log(herramientas.estado())
console.log(herramientas.estado())


/* Ejercicio 1

Crear un método para la clase “herramientas”, de nombre “estado”,   sin argumentos, que muestre el siguiente mensaje “Las
herramientas son necesarias para tareas de mantenimiento”. Para las clases hijas crear métodos con el mismo nombre, cada uno con los siguientes mensajes: primer mensaje. “Las herramientas mecánicas son básicas y manejables”, segundo mensaje, “Las herramientas eléctricas o electrónicas son de alta precisión”.




Ejercicio 3

Una empresa de almacenamiento de granos, debe mantener actualizada la cantidad de cada grano almacenada en sus silos, el tipo de grano almacenado y el cliente dueño del grano, para tal fin desea una clase (de nombre “silos”). Se debe calcular el precio a cobrar, a los clientes. Según los siguientes criterios: Los granos tienen un costo básico que depende del número de días de almacenamiento, y, la época del año, si es de enero a junio se cobra 15000 pesos más, si es de Julio a diciembre se cobra 25000 más.
 */