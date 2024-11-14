const express = require('express');
const pais = express();
const deptoRoutes = require('./routes/deptoRoutes');
const muniRoutes = require('./routes/municipioRoutes');
const connexionDB = require("./config/db");
pais.use(express.json());


pais.use('/api', deptoRoutes)
pais.use('/api', muniRoutes)

const port= 3500


connexionDB();


pais.listen(port, ()=>{
    console.log(`Servidor corriendo en http://localhost:${port}`)
})