class Vehiculo {
  constructor(marca, modelo) {
    if (marca instanceof Vehiculo) {
      this.marca = marca.marca;
      this.modelo = marca.modelo;
    } else {
      this.marca = marca;
      this.modelo = modelo;
    }
  }
  mostraInfo() {
    return this.marca + this.modelo;
  }
}
document.querySelector("#crear").addEventListener("click", () => {
  let marcaI = document.querySelector("#marca").value;
  let modeloI = document.querySelector("#modelo").value;
  let vehiculo1 = new Vehiculo(marcaI, modeloI);
  let rest = vehiculo1.mostraInfo();
  document.querySelector("#resultado1").innerText = rest;
});

document.querySelector("#copiar").addEventListener("click", () => {
  let marcaI = document.querySelector("#marca").value;
  let modeloI = document.querySelector("#modelo").value;
  let vehiculo1 = new Vehiculo(marcaI, modeloI);
  let vehiculo2 = new Vehiculo(vehiculo1)
  let rest2 = vehiculo2.mostraInfo();
  document.querySelector("#resultado2").innerText = rest2;
});
/* let vehiculo1 = new Vehiculo("Honda", "2005");
console.log(vehiculo1.mostraInfo());

let vehiculo2 = new Vehiculo(vehiculo1);
console.log(vehiculo2.mostraInfo());
 */
