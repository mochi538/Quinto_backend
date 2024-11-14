const Depto = require('../models/deptoModel')

const obtenerDeptos = async(req, res) =>{
    try{
        const deptos = await Depto.find();
        res.json(deptos);
    }
    catch(e){
        res.status(500).json({mensaje:"Error al obtener los depto"})
    }
}
const crearDepto = async(req, res)=>{
    try{
        const {nombre} = req.body;
        const newDepto = new Depto({nombre});
        await newDepto.save();
        res.json({mensaje:newDepto});
    
    }
    catch(e){
        res.status(500).json({mensaje:"Error al crear el depto"})
    }

}

const updateDepto = async (req, res)=>{
    try{
        let {id}= req.params;
        let {nombre, descripcion}= req.body
        if (!nombre || !descripcion){
            return res.json({msj: "Campos incompletos"})
        }else{
            let deptoActualizado =await Depto.findByIdAndUpdate(id, {nombre, descripcion})
            res.json({msj:"Departamento actualizado", deptoActualizado})
        }
    }
    catch(e){
        res.json({msj:"Error en el método updateDepto en el controller"})
    }
}

const deleteDepto = async(req, res)=>{
    try{
        let {id}= req.params;
        let deptoEliminar =await Depto.findByIdAndDelete(id);
        if (!deptoEliminar){
            return res.json({msj: "Id no existe"})
        }else{
            res.json({msj:"Departamento eliminado", deptoEliminar})
        }
    }
    catch(e){
        res.json({msj:"Error en el método deleteDepto en el controller"})
    }
}



module.exports={obtenerDeptos, crearDepto, updateDepto, deleteDepto}