class Contador{
    constructor(numero){
        this.numero = numero
    }
    incrementar(){
        this.numero+=1
        return this.numero
    }
    decrementar(){
        this.numero-=1
        return this.numero
    }
    obtenerValor(){
        return this.numero
    }
    actualizarValor(nuevoValor){
        this.numero = nuevoValor
    }
}



let valorInicio = 0
let numeroC = new Contador(valorInicio);

document.querySelector("#capturar").addEventListener("click",() =>{
    let numeroE = parseInt(document.querySelector("#numeroInput").value)
    numeroC.actualizarValor(numeroE);
    document.querySelector("#resultado").innerText = numeroC.actualizarValor()
})

document.querySelector("#incrementarBtn").addEventListener("click", ()=>{
    numeroC.incrementar()
    let resul = numeroC.obtenerValor();
    numeroC.actualizarValor(resul);
    document.querySelector("#resultado").innerText = resul;  
})
/* Ultimo patrón: Las funcionalidade sprincipales de una clase son convertidas en otra clase */