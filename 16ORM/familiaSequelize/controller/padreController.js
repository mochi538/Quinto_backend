const {Padre} = require('../models')


exports.crearPadre = async (req, res)=>{
    const {nombre , telefono, direccion} = req.body;
    try{
        const p = await Padre.create({nombre, telefono, direccion});
        res.json({mjs: p})
    }
    catch(error){
        console.error(error);
        res.json({mjs: "Error"})
    }
}

exports.vista = async(req,res)=>{
    try{
        const result = await Padre.findAll()
        res.json({result})
    }
    catch(error){
        console.error(error)
        res.json({mjs: "Error"})
    }
}

exports.actualizar = async(req, res) =>{
    const {id}= req.params;
    const {nombre, telefono, direccion} =req.body;
    try{
        let busqueda = await Padre.findByPk(id)
        if (busqueda){
            busqueda.nombre=nombre
            busqueda.telefono=telefono
            busqueda.direccion=direccion
            await busqueda.save()
            res.json({mjs: "Actualizado"})
        }
        else{
            res.json({mjs:"Padre no encontrado"})
        }

        }
    catch(e){
        console.error(e)
        res.json({mjs:"Error en el método actualizar"})
    }
}

exports.destruir = async (req,res)=>{
    const {id} = req.params;
    try{
        const busqueda = await Padre.findByPk(id)
        if(busqueda){
            await busqueda.destroy()
            res.json({mjs:"Eliminado"})
        }else{
            res.json({mjs:"Padre no encontrado"})

        }
    }
    catch(e){
        console.error(e)
        res.json({mjs:"Error en el método destruir"})
    }
}
exports.consultaId = async(req,res)=>{
    const {id}= req.params;
    try{
        const busqueda = await Padre.findByPk(id)
        res.json({busqueda})
    }
    catch(error){
        console.error(error)
        res.json({mjs: "Error"})
    }
}