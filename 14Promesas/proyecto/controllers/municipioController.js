//Municipio

const municipioModel = require('../models/municipioModel')


async function obtenerMunicipio(req, res){
    try{
        const resultado= await municipioModel.getAllMuni();
        res.send("Hola desde obtener municipio :)")
    }
    catch(e){
        res.send("Error desde la función obtener municipio")
    }
}
async function agregarMunicipio(req, res){
    try{
        const resultado= await municipioModel.postAllMuni();
        res.send("Hola desde agregar municipio :)")
    }
    catch(e){
        res.send("Error desde la función agregar municipio")
    }
}
async function eliminarMunicipio(req, res){
    try{
        const resultado= await municipioModel.deleteAllMuni();
        res.send("Hola desde agregar municipio :)")
    }
    catch(e){
        res.send("Error desde la función eliminar municipio")
    }
}

module.exports = {obtenerMunicipio, agregarMunicipio, eliminarMunicipio}