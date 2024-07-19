class Silo {
    constructor(cantidadGrano, tipoGrano, cliente){
        this.cantGrano = cantidadGrano
        this.tipoGrano = tipoGrano
        this.cliente = cliente
    }
     infoAlmacen(){
        return `Información del Almacen: 
        Cantidad de Granos Almacenados por Kilo: ${this.cantGrano}
        Tipo de Granos Almacenados: ${this.tipoGrano}
        Cliente dueño del Grano: ${this.cliente}`
        
    }
    infoPedido(cantGranoPedido, diasAlmacenamiento, epocaAño){
        this.cantPedido = cantGranoPedido
        this.diasAlmacen = diasAlmacenamiento
        this.epocaAño = epocaAño
    }
   
    
    calcularPrecioPedido(){
        /* Se declaran las variables y cada una se le asigan un atributo para ,ayor orden :b */
        /* El cliente debe comprar por kilo */
        let cantPedidoKilo= parseFloat(this.cantPedido)
        let diasAlmacen = parseFloat(this.diasAlmacen)
        let año = this.epocaAño
        /* El costo del grano por gramo es de 1000 pesos :) */
        let costoGranoGramos = 1000

        /* Se multiplica la cantidad de días almacenados por el costo del Grano por Gramo, el resultado se multiplica por la cantidad del pedido por Kilo */
        let totalprecio = cantPedidoKilo * (costoGranoGramos * diasAlmacen);

        if(["enero","febrero" , "marzo" , "abril" , "mayo" , "junio"].includes(año)){
            return `El precio total del pedido es de $${totalprecio + 15000}` 

        }else if(["julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"].includes(año)){
            return `El precio total del pedido es de es $${totalprecio + 25000}` 

        }else{
            return `No se ingresó el mes del año, valor actul ${totalprecio}`
        }
    }
}
let silo = new Silo(10, ["Frijo", " Lenteja", " Maíz"], "José")
silo.infoPedido(4 , 3, "diciembre")
console.log(silo.calcularPrecioPedido())

/* console.log(silo.infoAlmacen()) */
