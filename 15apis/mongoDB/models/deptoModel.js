const mongoose = require('mongoose')

const deptoSchema = new mongoose.Schema({
    nombre:{
        type:String,
        required: true
    } 
})
const Depto = mongoose.model('departamentos', deptoSchema)

module.exports= Depto;