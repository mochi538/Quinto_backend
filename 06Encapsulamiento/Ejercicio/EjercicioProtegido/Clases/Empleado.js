
let protegido = new WeakMap();
class Empleado{
    _nombreEmpleado
    #salario
    constructor(nombreEmpleado, salario,){
        this._nombreEmpleado= nombreEmpleado;
        this.#salario = salario
        this.obtenerSalario = ()=>{
            return this.#salario;
        }
    }
    _infoEmpleado(){
        return `Información del empleado:
                nombre: ${this._nombreEmpleado}
                salario: ${this.obtenerSalario()}` 
    }
}

export default Empleado;