class Empleado{
    static instancia
    constructor(nombre){
        if(!Empleado.instancia){
            this.nombre = nombre
            Empleado.instancia = this
        }else{
            return Empleado.instancia
        }
            
        
    }
    mostrarDatos(){
        return this.nombre
    }
}
document.querySelector("#empleadobtn").addEventListener("click", () =>{
    let empleado = new Empleado("José José");
    document.querySelector("#empleadotexto").innerText =empleado.mostrarDatos()
    let empleado1 = new Empleado("José Cristian");
    document.querySelector("#empleadotexto").innerText =empleado1.mostrarDatos()
})
/* En casos como un login o opción de una sola configuración */