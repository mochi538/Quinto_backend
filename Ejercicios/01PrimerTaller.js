class Prestamo{
    constructor(valorId, valornombre, valorValor, valorcuotas, valorfecha,valorInteres){
      this.Id = valorId
      this.nombre = valornombre
      this.valor = valorValor
      this.conIntereses = []   
      this.fecha = valorfecha
      this.cuotas = valorcuotas
      this.valorInteres = valorInteres
    }
   CalcularValorTotalPrestamo(){
    let valor = parseFloat(this.valor);
    let valInteres = parseFloat(this.valorInteres)
    let cuotas =parseFloat(this.cuotas)
    
    let total = valor +(cuotas*(valor * valInteres)) 
    this.conIntereses = (total);
    console.log(`El valor total del prestamo es: $${this.conIntereses}`)

   }

   ValorPagarInteres(){
    let valor = parseFloat(this.valor)
    let cuotas = parseFloat(this.cuotas)
    let total = valor/cuotas
    console.log(`Valor de cada cuota sin interés $${total}`)
   }
   PagarCuota(valorPagar){
    let valor = parseFloat(this.valor)
    let valInteres = parseFloat(this.valorInteres)
    let cuotas= parseFloat(this.cuotas)
    if(valor > 0){
        let total = (valor +(cuotas*(valor * valInteres))) - valorPagar
        console.log(`Aun debe esta cantidad: $${total}`)
    } else{
        console.log(`No debe nada :)`)
    }
   }
   Refinanciar(numeroCuotas){
    this.cuotas = numeroCuotas
    let valor = parseFloat(this.valor);
    let valInteres = parseFloat(this.valorInteres)
    let cuotas =parseFloat(this.cuotas)
    
    let total = valor +(cuotas*(valor * valInteres)) 
    console.log(total)

   }
}
let instancia = new Prestamo(123, "Luz", "300", 4, 56, 0.05)
instancia.Refinanciar(5)
