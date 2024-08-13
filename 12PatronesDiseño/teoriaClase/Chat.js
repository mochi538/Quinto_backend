class Chat{
    constructor(){
        this.mensajes = []
    }
    addMsj(chat){
        this.mesenaje.push(chat)
    }
    notificacion(mss){
        this.mensajes.forEach(obsver => observador(mss))
            
    }
}
    
let josejose = new Chat()
function observador(mensajesE){
document.querySelector('#chat').innerText = mensajesE
}

pepito.addMsj(observador);
document.querySelector('#notificacion').addEventListener("click", ()=>{
    josejose.notificacion()
})