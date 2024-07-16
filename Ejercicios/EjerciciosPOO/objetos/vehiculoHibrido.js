import VehiculoElectrico from "./vehiculoElectrico.js";
import VehiculoCombustion from "./vehiculoCombustion.js";

class VehiculoHibrido {
  constructor() {
    this.electrico = new VehiculoElectrico(50);
    this.combustion = new VehiculoCombustion(60);
  }
  cargarBateria(cantAumento1) {
    return `${this.electrico.cargarBateria(cantAumento1)}`;
  }
  usarBateria(cantidadDis1) {
    return `${this.electrico.usarBateria(cantidadDis1)}`;
  }
  llenarTanque(cantAumento2) {
    return `${this.combustion.llenarTanque(cantAumento2)}`;
  }
  usarCombustible(cantidadDis2) {
    return `${this.combustion.usarCombustible(cantidadDis2)}`;
  }

  mostrarEstado() {
    return `Nivel de carga: ${this.electrico}
        Nivel de Combustión: ${this.combustion}`;
  }
}

export default vehiculoHibrido;
