/* Se crea la clase Prestamo y se le agrega un consturctor con atributos*/
class Prestamo {
  constructor(valorValor, valorcuotas, valorfecha, valorInteres) {
    /* Estos son los atributos asignados a Prestamo */
    this.valor = valorValor; /* A los atributos se les asigna */
    this.conIntereses = [];
    this.fecha = valorfecha;
    this.cuotas = valorcuotas;
    this.valorInteres = valorInteres;
  }
  /*  */
  infouser(Id, nombre) {
    this.Id = Id;
    this.nombre = nombre;
  }

  CalcularValorTotalPrestamo() {
    let valor = parseFloat(this.valor);
    let valInteres = parseFloat(this.valorInteres);
    let cuotas = parseFloat(this.cuotas);

    let total = valor + cuotas * (valor * valInteres);
    this.conIntereses = total;
    console.log(`El valor total del prestamo es: $${this.conIntereses}`);
  }

  ValorPagarInteres() {
    let valor = parseFloat(this.valor);
    let cuotas = parseFloat(this.cuotas);
    let total = valor / cuotas;
    console.log(`Valor de cada cuota sin interés $${total}`);
  }
  PagarCuota(valorPagar) {
    let valor = parseFloat(this.valor);
    let valInteres = parseFloat(this.valorInteres);
    let cuotas = parseFloat(this.cuotas);
    if (valor > 0) {
      let total = valor + cuotas * (valor * valInteres) - valorPagar;
      this.conIntereses = console.log(`Aun debe esta cantidad: $${total}`);
    } else {
      console.log(`No debe nada :)`);
    }
  }
  Refinanciar(numeroCuotas) {
    this.cuotas = numeroCuotas;
    let valor = parseFloat(this.valor);
    let valInteres = parseFloat(this.valorInteres);
    let cuotas = parseFloat(this.cuotas);
    let total = valor + cuotas * (valor * valInteres);
    this.conIntereses = total;
    console.log(`Nuevo Total a pagar $${this.conIntereses}`);
  }
  toString() {
    console.log(
      `Infromación del prestamo: 
      Nombre:${this.nombre}, 
      Valor del prestamo:${this.valor},
      Número de cuotas:${this.cuotas}, 
      Valor del prestamo con Interés:${this.conIntereses},
      Fecha del prestamo: ${this.fecha},
      Valor del procentaje del intereses: ${this.valorInteres * 100}% 
      `
    );
  }
}
/* this.valor = valorValor; v
    this.conIntereses = [];
    this.fecha = valorfecha;
    this.cuotas = valorcuotas;
    this.valorInteres = valorInteres; */

let prestamo = new Prestamo("300", 4, "09/07/2024", 0.05);
prestamo.infouser("123", "Luz");
prestamo.CalcularValorTotalPrestamo();
prestamo.ValorPagarInteres();
prestamo.PagarCuota(300);
prestamo.Refinanciar(8);
prestamo.toString();
