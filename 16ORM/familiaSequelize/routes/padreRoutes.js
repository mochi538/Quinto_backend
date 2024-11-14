const express = require('express')
const route =express.Router()
const padreRouteController = require('../controller/padreController.js')

route.post('/padre', padreRouteController.crearPadre)
route.get('/padre', padreRouteController.vista)
route.get('/padre/:id',padreRouteController.consultaId)
route.put('/padre/:id', padreRouteController.actualizar)
route.delete('/padre/:id', padreRouteController.destruir)



module.exports = route