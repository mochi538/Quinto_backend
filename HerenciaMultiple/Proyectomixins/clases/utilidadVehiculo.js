import Carro from "./carro.js";
import Tractomula from "./tractomula.js";

class UtilidadVehiculo {
  constructor() {
    this.carro = new Carro(5);
    this.tractomula = new Tractomula("500Kg");
  }
  usarCarro() {
    return this.carro.numPasajeros;
  }
  usarTractomula() {
    this.tractomula.cargarMercancia();
    this.tractomula.descargarMercancia();
  }
}

export default UtilidadVehiculo;
