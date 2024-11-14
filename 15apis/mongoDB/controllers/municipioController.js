const Muni = require('../models/municipioModel')

const obtenerMuni = async(req, res) =>{
    try{
        const municipio = await Muni.find()
        res.json(municipio)
    }
    catch(e){
        res.status(500).json({mensaje:"Error al obtener los municipios"})
    }
}
const crearMuni = async(req, res)=>{
    try{
        const {nombre} = req.body;
        const newMuni = new Muni({nombre});
        await newMuni.save();
        res.json({mensaje:newMuni});
    
    }
    catch(e){
        res.status(500).json({mensaje:"Error al crear municipio"})
    }

}

const updateMuni = async (req, res)=>{
        let {id}= req.params;
        let {nombre, descripcion}= req.body;
        if (!nombre || !descripcion){
            return res.json({msj: "Campos incompletos"})
        }else{
            let muniActualizado =await Muni.findByIdAndUpdate(id, {nombre, descripcion})
            res.json({msj:"Municipio actualizado", muniActualizado})
        }
}



const deleteMuni = async(req, res)=>{
    try{
        let {id}= req.params;
        let muniEliminar = await Muni.findByIdAndDelete(id);
        if (!muniEliminar){
            res.json({msj:"El id no exite"})
        }else{
            res.json({msj:"Municipio eliminado correctamente", muniEliminar})
        }
    }
    catch(e){
        res.json({mjs:"Error desde el método deleteMuni en el controller"})
    }
}

module.exports={obtenerMuni, crearMuni, updateMuni,deleteMuni}