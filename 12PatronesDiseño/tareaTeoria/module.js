const funcionPrivadaWaa = (function(){
    let evento = 'Hola mundo B)'
    let mensajeOculto = "Estoy palico, estoy divo y en mi masión didivo"
    return{
        mostrarMensaje: function(){
            console.log(evento)
        }
    }
})()

funcionPrivadaWaa.mostrarMensaje();
console.log(mensajeOculto);


