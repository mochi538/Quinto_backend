import CargableMixin from "../mixins/cargable.js";
class Tractomula {
  constructor(capacidadCarga) {
    this.capacidadCarga = capacidadCarga;
    Object.assign(this, CargableMixin) /* Manera de utilizar un objeto de otro archivo */
  }
}
export default Tractomula
