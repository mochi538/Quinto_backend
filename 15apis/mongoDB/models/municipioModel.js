const mongoose = require('mongoose')

const muniSchema = new mongoose.Schema({
    nombre:{
        type:String,
        required: true
    }
})
const Muni = mongoose.model('municipios', muniSchema)

module.exports= Muni;