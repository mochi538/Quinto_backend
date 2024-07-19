class Comic {
  #titulo;
  #precio;
  #stock;
  constructor(titulo, precio, stock) {
    this.#titulo = titulo;
    this.#precio = precio;
    this.#stock = stock;
  }
  #validarCantidad() {
    let stock = this.#stock;
    if (stock <= 0) {
      return `El stock tiene está lleno ${stock}`;
    } else if (stock > 0) {
      return `El stock está vacío`;
    }
  }

  #agregarStock(nuevaMercancia) {
    return this.#stock + nuevaMercancia;
  }

  #vender(cantidadVenta) {
    return this.#stock - cantidadVenta;
  }

  #obtenerDetalles() {
    return `Información del comic: 
                Título del comic: ${this.#titulo}
                Precio del comic: ${this.#precio}
                Cantidad de stock: ${this.#stock}`;
  }
  _accesoPublicoInfo(nuevaMercancia, cantidadVenta) {
    return `Validar Cantidad: ${this.#validarCantidad()}
                Cantidad Stock(Con la nueva mercancia): ${this.#agregarStock(
                  nuevaMercancia
                )}
                Cantidad Stock (Despues de la venta): ${this.#vender(
                  cantidadVenta
                )}
                Detalles del comic: ${this.#obtenerDetalles()}`;
  }
}
class Autor extends Comic {
  #nombreAutor;
  _bibliografia;
  constructor(nombreAutor, bibliografia) {
    this.#nombreAutor = nombreAutor;
    this._bibliografia = bibliografia;
  }
  _obtenerInfo() {
    return `Información del comic:
                Información del comic:"No hay info"
                Nombre del autor: 
                Bibliografía: ${this._bibliografia}`;
  }
}
let comic = new Comic("Citrus", "62000", 50);
let autor = new Autor(
  "Saburouta",
  "El mejor comic GL, mi evento canon más personal"
);
console.log(comic._accesoPublicoInfo(20, 40));
console.log(autor._obtenerInfo());
