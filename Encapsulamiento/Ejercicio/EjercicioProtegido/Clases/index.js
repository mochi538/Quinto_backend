import Departamento from "./Departamento.js";
import Empresa from "./empresa.js";
import Empleado from "./Empleado.js";

let empresa = new Empresa("Meta")


/* Departamentos agregados a la empresa. Se agregaron desde Departamento */
let administracion = new Departamento("Administración")
let contables = new Departamento("Contables")
let desarrollo = new Departamento("Desarrollo")
empresa.agregarDepartamento(administracion)
empresa.agregarDepartamento(contables)
empresa.agregarDepartamento(desarrollo)
console.log(empresa.listaDeptos())


/* Empleados agregados al departamento. Se agregan empleados desde Empleados a un Departamento existente de Empresa */
let empleado1 = new Empleado("José", 4000000)
let empleado2 = new Empleado("Carlos", 4000000)
let empleado3 = new Empleado("Mafe", 4000000)

desarrollo.agregarEmpleados(empleado1)
desarrollo.agregarEmpleados(empleado2)
desarrollo.agregarEmpleados(empleado3)
console.log(desarrollo.listaEmpleados())

/* Información del Empleado  */
console.log(empleado3._infoEmpleado())

export default Empleado;