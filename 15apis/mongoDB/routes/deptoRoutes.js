const express = require('express');
const router =  express.Router();
const deptoRoutesController = require('../controllers/deptoController')


router.get('/departamentos',deptoRoutesController.obtenerDeptos)
router.post('/departamentos',deptoRoutesController.crearDepto)
router.put('/departamentos/:id',deptoRoutesController.updateDepto)
router.delete('/departamentos/:id',deptoRoutesController.deleteDepto)





module.exports = router