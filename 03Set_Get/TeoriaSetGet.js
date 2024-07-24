class Ruta {
  constructor(ubiInicial, ubiFinal, distancia) {
    this.ubiInicial = ubiInicial;
    this.ubiFinal = ubiFinal;
    this.distancia = distancia;
  }
  /* Estos métodos son obligatorios, van por defecto */

  /* Set: Conseguir -> guarda o almacena por atributo*/
  setubiInicial(ubiInicial) {
    this.ubiInicial = ubiInicial;
  }
  setubiFinal(ubiFinal) {
    this.ubiFinal = ubiFinal;
  }
  setdistancia(distancia) {
    this.distancia = distancia;
  }

  /* get:Colocar -> muestra por atributo*/
  getubiInicial() {
    return this.ubiInicial;
  }
  getubiFinal() {
    return this.ubiFinal;
  }
  getdistancia() {
    return this.distancia;
  }
  /* Después de estos métodos se deben crear los objetos -> es que hace uso de lo que posea la clase */
}
/* Prueba del get y set */

let rutas = new Ruta("casa1", "casa2", "100km");
console.log(rutas.getubiInicial());
rutas.ubiInicial = "casa3"; /* Para no hacer esto se creo el método */
console.log(rutas.getubiInicial());
rutas.setubiInicial("casa4");
console.log(rutas.getubiInicial());

console.log(rutas.getubiFinal());
rutas.setubiFinal("casa Final :3");
console.log(rutas.getubiFinal());

rutas.setdistancia("Amarillo pollito");
console.log(rutas.getdistancia());
