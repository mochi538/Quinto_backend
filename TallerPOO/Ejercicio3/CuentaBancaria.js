class CuentaBancaria {
  #tipoCuenta;
  constructor(nombreTitular, saldo, tipoCuenta) {
    this.nombreTirular = nombreTitular;
    this.saldo = saldo;
    this.#tipoCuenta = tipoCuenta;
  }
  depositar(depositar) {
    let depositado = parseInt(depositar)
    let saldo = parseInt(this.saldo)
    let nuevoSaldo = saldo + depositado
    this.saldo = nuevoSaldo
        return this.saldo
  }
  retirar(retirar) {
    if (this.saldo > retirar && this.#tipoCuenta == "ahorro") {
      let retiro = this.saldo - retirar;
      this.saldo = retiro
      return this.saldo
    } else if(this.saldo < retirar && this.#tipoCuenta == "ahorro"){
        return `Saldo insuficiente, El saldo disponible es de $${this.saldo}`
    }else if(this.#tipoCuenta == "credito"){
        return `No puede retirar de otro tipo de cuenta`
    }else{
        return `El valor a retirar no es un valor numerico`
    }
  }
  mostrarInfo() {
    return `Información de la cuenta:
                Nombre del Titular: ${this.nombreTirular}
                Saldo: ${this.saldo}
                Tipo de cuenta: ${this.#tipoCuenta} `;
  }
}
let cuenta = new CuentaBancaria("Hola", 5000, "ahorro");

console.log(cuenta.mostrarInfo());
cuenta.depositar(1000);
console.log(cuenta.mostrarInfo());
cuenta.retirar(1000);
console.log(cuenta.mostrarInfo());


