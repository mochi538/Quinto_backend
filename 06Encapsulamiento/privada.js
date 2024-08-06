class CuentaBancaria {
  _nombre;
  _fecha;
  #clave;
  #cantDinero;

  constructor(nombre, fecha, cantDinero, clave) {
    this._nombre = nombre;
    this._fecha = fecha;
    this.#cantDinero = cantDinero;
    this.#clave = clave;
  }
  deporsitar(monto) {
    return this.#cantDinero + monto;
  }
  retirar(monto) {
    return this.#cantDinero - monto;
  }
  #saldo() {
    return this.#cantDinero;
  }

  mostrarInfo() {
    console.log(this._nombre);
  }
  saldoTotal() {
    return this.#saldo();
  }
}
let cuenta = new CuentaBancaria("José", "Abril", 2000, "1234Superseguridad");
cuenta.mostrarInfo();
console.log(cuenta.deporsitar(200));
console.log(cuenta.retirar(100));
console.log(cuenta.saldoTotal());


