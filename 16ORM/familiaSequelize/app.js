const express = require('express')
const app = express()
require('dotenv').config();
const padreRoutes = require('./routes/padreRoutes')
const madreRoutes = require('./routes/madreRoutes')

const port = process.env.PORT

app.use(express.json())
app.use('/api', padreRoutes, madreRoutes);


app.listen(port, ()=>{
    console.log(`Servidor corriendo en el puerto http://localhost:${port}`)
})
