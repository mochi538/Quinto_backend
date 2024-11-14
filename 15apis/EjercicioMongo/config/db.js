const mongoose = require('mongoose');

const conexionDB = async()=>{
    try{
        await mongoose.connect(process.env.DATABASE_URL)
        console.log("Conexión con la base de datos exitosa")
    }
    catch(e){
        console.log("Error al conectar la base de datos", e)
    }
}
module.exports = conexionDB;