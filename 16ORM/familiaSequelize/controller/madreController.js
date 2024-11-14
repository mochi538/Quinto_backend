const {Madre} = require('../models')

exports.vista = async(req, res)=>{
    try{
        const consulta = await Madre.findAll()
        res.json({consulta})

    }
    catch(e){
        console.error(e)
        res.json({mjs:"Error el en metodo vista"})
    }
}
exports.create = async(req, res)=>{
    const {nombre , telefono, direccion} = req.body;
    try{
        const p = await Madre.create({nombre, telefono, direccion});
        res.json({mjs: p})
    }
    catch(e){
        console.error(error);
        res.json({mjs: "Error en el método create"})
    }
}

exports.update = async (req,res)=>{
    const {id}= req.params;
    const {nombre, telefono, direccion} =req.body;
    try{
        let busqueda = await Madre.findByPk(id)
        if (busqueda){
            busqueda.nombre=nombre
            busqueda.telefono=telefono
            busqueda.direccion=direccion
            await busqueda.save()
            res.json({mjs: "Actualizado"})
        }
        else{
            res.json({mjs:"El id no existe"})
        }

        }
    catch(e){
        console.error(e)
        res.json({mjs:"Error en el método actualizar"})
    }
}

exports.delete = async (req,res)=>{
    const {id} = req.params;
    try{
        const consulta = await Madre.findByPk(id)
        if(consulta){
            const p = await consulta.destroy()
            res.json({mjs:"ELiminado correcatmente"})
        }
        else{
            res.json({mjs:"EL id no existe"})
        }
    }
    catch(e){
        console.error(e)
        res.json({mjs:"Error el en metodo delete"})
    }
}

exports.consultaId = async(req,res)=>{
    const {id}= req.params;
    try{
        const busqueda = await Madre.findByPk(id)
        res.json({busqueda})
    }
    catch(error){
        console.error(error)
        res.json({mjs: "Error"})
    }
}
