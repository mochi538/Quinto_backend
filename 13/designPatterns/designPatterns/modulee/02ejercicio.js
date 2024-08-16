class Contador {
    constructor() {
        this.contador = 0
    }

    incrementar () {
        this.contador++
    }

    decrementar () {
        this.contador--
    }
}

let num = document.getElementById("number").value

let cont = new Contador()
cont.contador = numero
console.log(cont.contador)
let contador = document.getElementById("contador")
contador.innerHTML = cont.contador

document.getElementById("incrementBtn").addEventListener("click", () => {
    cont.incrementar()
    contador.innerHTML = cont.contador
})
document.getElementById("decrementBtn").addEventListener("click", () => {
    cont.decrementar()
    contador.innerHTML = cont.contador
})