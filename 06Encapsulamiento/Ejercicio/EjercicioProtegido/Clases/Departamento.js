import Empleado from "./Empleado.js";

class Departamento{
    constructor(nombreD){
        this.nombreD= nombreD;
        this.empleados = []
    }
    agregarEmpleados(nombreEmpleado){
        this.empleados.push(nombreEmpleado)
    }

    listaEmpleados(){
        this.empleados.forEach(empleado =>{
            console.log(empleado._nombreEmpleado)
        });
    }
    
}

export default Departamento;





