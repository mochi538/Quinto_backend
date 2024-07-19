/* Ejercicio 2

Una panadería necesita crear un programa que involucre el tipo de pan, el insumo principal usado, la cantidad producida y el costo de producción de cada tipo de pan. Para ello se debe identificar la clase (de nombre “panadería”), junto con, los atributos de la clase y los métodos getters y setters, además, incluir un método con el mismo nombre para cada una de las clases (padre e hijas), sin argumentos y con un mensaje adecuado para cada una de ellas.
 */
class Panaderia{
    constructor(tipoPan, insumo, cantidadProducida, costoProduccion){
        this.tipoPan = tipoPan
        this.insumo = insumo
        this.cantPro = cantidadProducida
        this.costoProduccion = costoProduccion 
    }
    set settipoPan(tipoPan){
        this.tipoPan = tipoPan
    }
    set setinsumo(insumo){
        this.insumo = insumo
    }
    set setcantPro(cantPro){
        this.cantPro = cantPro
        
    }
    set setcostoPro(costPro){
        this.costoProduccion = costPro 
    }

    get gettipoPan(){
        return this.tipoPan 
    }
    get getinsumo(){
        return this.insumo
    }
    get getcantPro(){
        return this.cantPro 
    }
    get getcostPro(){
        return this.costoProduccion
    }
}
let panaderia = new Panaderia(1,2,3,4)
panaderia.settipoPan = "Pollo"
console.log(panaderia.gettipoPan)