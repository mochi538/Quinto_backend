const express = require('express');
const router =  express.Router();
const muniRoutesController = require('../controllers/municipioController')


router.get('/municipios',muniRoutesController.obtenerMuni)
router.post('/municipios',muniRoutesController.crearMuni)
router.put('/municipios/:id',muniRoutesController.updateMuni)
router.delete('/municipios/:id',muniRoutesController.deleteMuni)




module.exports = router