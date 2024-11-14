const express = require('express');
const router = express.Router()
const gameRouterController = require('../controllers/juegoController')

router.get('/juego', gameRouterController.mostrar)
router.get('/juegosuma/:id', gameRouterController.sumaFor)

router.post('/juego', gameRouterController.agregar)
router.put('/juego/:id', gameRouterController.modificar)
router.delete('/juego/:id', gameRouterController.eliminar)



console.log("El de gafas es gay")
module.exports = router