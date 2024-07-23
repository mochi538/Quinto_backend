import Departamento from "./Departamento.js";
class Empresa{
    constructor(nombreEmpresa){
        this.nombreEmpresa= nombreEmpresa;
        this.departamento = []
    }
    agregarDepartamento(nombreD){
        this.departamento.push(nombreD)
    }
    listaDeptos(){
        this.departamento.forEach(departamento =>{
            console.log(departamento.nombreD)
        });
    }
    
}

export default Empresa; 



