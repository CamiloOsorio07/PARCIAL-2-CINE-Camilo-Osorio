const express = require('express');
const router = express.Router();
const boletasController = require('../controllers/boletasController');

// CRUD operations
router.get('/', boletasController.getAll);
router.get('/:id', boletasController.getById);
router.post('/', boletasController.create);
router.put('/:id', boletasController.update);
router.delete('/:id', boletasController.delete);

module.exports = router;
