import vehiculoHibrido from "./objetos/vehiculoHibrido.js";
let hibrido = new vehiculoHibrido()
console.log(hibrido.llenarTanque(20))
console.log(hibrido.usarCombustible(20))
console.log(hibrido.cargarBateria(20))
console.log(hibrido.usarBateria(20))