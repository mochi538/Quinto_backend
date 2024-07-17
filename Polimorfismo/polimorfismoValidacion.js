class Valor{
    constructor(valor){
        this.valor= valor
    }
    
    imprimirElemento(){
        let valor = this.valor
        if (typeof valor == 'number' ){
            return valor + 2;

        }else if (typeof valor == 'string'){
            return `Hola ${valor}` 
        }
    }
}
let valor1 = new Valor(2)
let valor2 = new Valor("casa")
console.log(valor1.imprimirElemento(), valor2.imprimirElemento())

