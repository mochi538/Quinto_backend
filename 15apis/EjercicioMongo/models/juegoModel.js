const mongoose = require('mongoose')

const jugadorSchema = new mongoose.Schema({
    alias:{
        type:String,
        require: true
    },
    puntaje:{
        type: Number,
        require: true
    }
})

const juegoSchema = new mongoose.Schema({
    nombre:{
        type:String,
        require: true
    },
    jugadores:{
        type: [jugadorSchema],
        validate:[arrayLimit, "Es necesario al menos un jugador"],
        require: true
    }
})

function arrayLimit(num){
    return num.length>0;

}

const Game = mongoose.model('Juego', juegoSchema)
module.exports = Game;