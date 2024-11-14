const express = require('express')
const route = express.Router()
const madreRouteController = require('../controller/madreController')

route.get('/madre', madreRouteController.vista)
route.get('/madre/:id', madreRouteController.consultaId)

route.post('/madre', madreRouteController.create)
route.put('/madre/:id', madreRouteController.update)
route.delete('/madre/:id', madreRouteController.delete)


module.exports = route