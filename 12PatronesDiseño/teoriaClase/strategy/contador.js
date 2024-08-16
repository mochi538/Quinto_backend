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

class Incrementar2{
    incrementar(){
        this.numero+=2
        return this.numero
    }
}


let contador = new Contador();
let incrementar = new Incrementar2();

contador.numero = incrementar;
contador.incrementar()


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