//depto Controller
const deptoModel= require('../models/deptoModel')



async function obtenerDeptos(req, res){
    try{
        const resultado= await deptoModel.getAllDeptos();
        res.json(resultado)
    }
    catch(e){
        res.send("error desde la función obtener")

    }
}
async function agregarDeptos(req, res){
    try{
        const resultado= await deptoModel.postAllDeptos();
        res.send("Este es agregarDeptos desde controllers")
    }
    catch(e){
        res.send("error desde la función agregar")

    }
}
async function eliminarDeptos(req, res){
    try{
        const resultado= await deptoModel.deleteAllDeptos();
        res.send("Este es eliminarDeptos desde controllers")
    }
    catch(e){
        res.send("error desde la función eliminar")

    }
}




module.exports={obtenerDeptos, agregarDeptos, eliminarDeptos}