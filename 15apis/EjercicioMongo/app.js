const express = require('express')
const game = express()
const gameRouter = require('./routes/juegoRoute')
const conexionDB = require('./config/db')
require('dotenv').config();


const port = process.env.PORT;
game.use(express.json())
conexionDB()

game.use('/api', gameRouter)

game.listen(port, ()=>{
    console.log(`Servidor corriendo en http://localhost:${port}`)
})