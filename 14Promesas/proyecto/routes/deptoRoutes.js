//get, post, delete

const express = require('express');
const router =  express.Router();
const deptoRoutesController = require('../controllers/deptoController')


router.get('/departamentos',deptoRoutesController.obtenerDeptos)


router.post('/departamentos',deptoRoutesController.agregarDeptos)


router.delete('/departamentos',deptoRoutesController.eliminarDeptos)


module.exports = router