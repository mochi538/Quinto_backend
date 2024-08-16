class ListaUsuarios {
    constructor() {
        this.nombres = []
    }

    agregarNombre(nombre) {
        this.nombres.push(nombre)
        return `Se agrego ${nombre} a la lista`
    }

    listarNombres() {
        let listaN = ""
        this.nombres.forEach(nombre => {
            listaN += `<li>${nombre}</li>`
        })
        return listaN
    }
}


let lista = new ListaUsuarios();

document.querySelector("#agregarBtn").addEventListener("click", () => {
    let n = document.querySelector("#nombre").value
    let resultN = lista.agregarNombre(n);
    alert(resultN)
})
document.getElementById("ListarBtn").addEventListener("click", () => {
    let li = lista.listarNombres()
    document.querySelector("#resultado").innerHTML = li
})