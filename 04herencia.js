class Fruta{
    constructor(color, tipo,vitaminas){
        this.color = color
        this.tipo = tipo
        this.vitaminas = vitaminas
    }
    setColor(color) {
        this.color = color;
      }
    getubiColor() {
        return this.color;
    }

    setTipo(tipo) {
        this.tipo = tipo;
      }
    getubiTipo() {
        return this.tipo;
    }

    setColor(vitaminas) {
        this.vitaminas = vitaminas;
      }
    getubiColor() {
        return this.vitaminas;
    }
    datosxd(){
        console.log(`${this.color}`)

    }
}
let fruta = new Fruta("Blue ","de árbolxd", "Si tiene","4;)")

class Manzana extends Fruta{
    constructor(color, tipo,vitaminas,cantidad){
        super(color, tipo, vitaminas)
        this.cantidad = cantidad
    }
    mostrardatos(){
        console.log(this.color + super.getubiColor())
    }
}
let manzana = new Manzana("amarillo","de árbolxd", "Si tiene","4;)")
manzana.mostrardatos()

class Pera extends Fruta{
    constructor(color, tipo,vitaminas, sabor){
        super(color, tipo, vitaminas)
        this.sabor=sabor
    }

    
}


