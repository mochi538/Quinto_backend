class Almacen {
  #cantidadStock;
  constructor(codigoProducto, nombreProducto, cantidadStock) {
    this.codigoProducto = codigoProducto;
    this.nombreProducto = nombreProducto;
    this.#cantidadStock = cantidadStock;
  }
  agregarProducto(nombreP, cantidad) {
    let producto = nombreP;
    let cantidadAumento = parseInt(cantidad);
    let cantidadStock = parseInt(this.#cantidadStock);
    if (producto === this.nombreProducto) {
      let nuevaCantidad = cantidadStock + cantidadAumento;
      this.#cantidadStock = nuevaCantidad;
      console.log(this.#cantidadStock);
    } else {
      console.log("El producto no está registrado");
    }
  }
  retirarProducto(nombreP, cantidad) {
    let producto = nombreP;
    let cantidadAumento = parseInt(cantidad);
    let cantidadStock = parseInt(this.#cantidadStock);
    if (producto === this.nombreProducto) {
      let nuevaCantidad = cantidadStock - cantidadAumento;
      this.#cantidadStock = nuevaCantidad;
      console.log(this.#cantidadStock);
    } else {
      console.log("El producto no está registrado");
    }
  }
  mostrarStock() {
    return `Información del Producto:
            Cantidad en Stock: ${this.#cantidadStock}
        `;
  }
}

let almacen = new Almacen(1, 1, 3);
almacen.agregarProducto(1, 4);
almacen.retirarProducto(1, 2);
console.log(almacen.mostrarStock());
