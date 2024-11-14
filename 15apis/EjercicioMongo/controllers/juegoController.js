const Game = require('../models/juegoModel')
const mongoose = require('mongoose')
const mostrar = async (req, res)=>{
    try{
        const juego = await Game.find()
        res.json(juego)
    }
    catch(e){
        res.status(500).json({mensaje:"Error en el método mostrar desde Controller "})
    }
}

const agregar = async(req, res)=>{
    try{
        const {nombre, jugadores}= req.body;
        const newGame = new Game({nombre, jugadores});
        await newGame.save();
        res.json(newGame)
    }
    catch(e){
        res.status(500).json({mensaje:"Error en el método agregar desde Controller "})

    }
}

const modificar = async (req, res)=>{
    try{
        let {id}= req.params;
        let {nombre, jugadores}= req.body
        if(!nombre||!jugadores){
            res.json({msj:"Campos incompletos"})
        }else{
            const updateGame = await Game.findByIdAndUpdate(id,{nombre, jugadores})
            res.json({msj:"Colletion Juego actualizada correctamente", updateGame})
        }
    }
    catch(e){
        res.status(500).json({msj:"Error en el metodo modificar desde el controller"})
    }
}
const eliminar = async (req, res)=>{
    try{
        let {id}= req.params;
        let deleteGame =await Game.findByIdAndDelete(id);
        if (!deleteGame){
            return res.json({msj: "Id no existe"})
        }else{
            res.json({msj:"Departamento eliminado", deleteGame})
        }
    }
    catch(e){
        res.status(500).json({msj:"Error en el método deleteDepto en el controller"})
    }
}
const suma = async (req, res)=>{
    try{
        let {id}= req.params;
        let datos =await Game.findById(id);
        if (!datos){
            return res.json({msj: "Id no existe"})
        }else{
            const list = 0
            let suma = datos.jugadores.reduce((Total, jugador) => Total + jugador.puntaje, list)

            res.json({msj:`Acumulado de puntos del juego : ${suma}`})
        }
    }
    catch(e){
        res.status(500).json({mensaje:"Error en el método suma desde Controller "})
    }
}

const sumaMongo = async(req, res)=>{
    let {id} = req.params;
    
    try{
       
        const juego = await Game.aggregate([
            {$match:{_id: new mongoose.Types.ObjectId(id)}},
            {$unwind:"$jugadores"},
            {$group:{_id:"$_id", totalP:{$sum:"$jugadores.puntaje"}}}])

        return res.json({Punaje:juego[0].totalP})
    }
    catch(e){
        res.status(500).json({mensaje:"Error en el método sumaMongo desde Controller "})
    }
}

const sumaFor = async (req, res)=>{
    try{
        let {id}= req.params;
        let totalsuma
        let datos =await Game.findById(id);
        for (let i = 0; i < datos.jugadores.length; i++){
            totalsuma += datos.jugadores[i].puntaje
        }
        res.json({Totalsuma:totalsuma})
    }
    catch(e){
        res.status(500).json({mensaje:"Error en el método suma desde Controller "})
    }
}



module.exports={mostrar, agregar,modificar,eliminar,suma, sumaMongo,sumaFor}