const express = require('express');
const router = express.Router();
const funcionesController = require('../controllers/funcionesController');

// CRUD operations
router.get('/', funcionesController.getAll);
router.get('/:id', funcionesController.getById);
router.post('/', funcionesController.create);
router.put('/:id', funcionesController.update);
router.delete('/:id', funcionesController.delete);

module.exports = router;
