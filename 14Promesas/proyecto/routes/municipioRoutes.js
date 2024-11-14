const express = require('express')
const router = express.Router()
const municipioRoutesController= require('../controllers/municipioController')


router.get('/municipio', municipioRoutesController.obtenerMunicipio)

router.post('/municipio', municipioRoutesController.agregarMunicipio)

router.delete('/municipio', municipioRoutesController.eliminarMunicipio)

module.exports= router