class Empleado {
    static instancia
    constructor(nombre) {
        if(!Empleado.instancia) {
        this.nombre = nombre;
        Empleado.instancia = this
        } else {
            return Empleado.instancia
        }
    }
    mostrarDatos() {
        return this.nombre;
    }
}
document.querySelector('#empleadoBtn').addEventListener("click", () => {
    let empleado = new Empleado("Pablo Ortiz");
    document.querySelector('#empleadoText').innerText = empleado.mostrarDatos();
    let empleado1 = new Empleado("Franco Reina");
    document.querySelector('#empleadoText').innerText = empleado1.mostrarDatos();
});