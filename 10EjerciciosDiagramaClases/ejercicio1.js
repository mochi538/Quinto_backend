class Empleado {
  constructor(nombreCompleto) {
    this.nombreCompleto = nombreCompleto;
  }
  mostrarInfo() {
    return `${this.nombreCompleto}`;
  }
}

class Departamento { 
  constructor(nombre, codigo) {
    this.nombreD = nombre;
    this.codigo = codigo;
    this.empleados = [];
  }
  agregarEmpleado(objEmpleado) {
    this.empleados.push(objEmpleado);
  }
  mostrarEmpleados() {
    let lista = "";
    for (let i = 0; i < this.empleados.length; i++) {
      lista += this.empleados[i].mostrarInfo();
    }
    return `Departamento: ${this.nombreD}, código: ${this.codigo}: Empleados: ${lista}`;
  }
}
let pedro = new Empleado("Pedro Pedro Pedro Pedro");
let RH = new Departamento("Recursoso Humanos", "001");
RH.agregarEmpleado(pedro);
console.log(RH.mostrarEmpleados());
