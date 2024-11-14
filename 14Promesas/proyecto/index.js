const express = require('express');
const app = express();
const port = 4000;
const deptoRoutes = require('./routes/deptoRoutes')
const municipioRoutes = require('./routes/municipioRoutes')



app.use('/api', deptoRoutes)
app.use('/api', municipioRoutes)

app.listen(port, ()=>{
    console.log("Servidor en puerto 1234")
})