const express = require('express');
const router = express.Router();
const peliculasController = require('../controllers/peliculasController');

// CRUD operations
router.get('/', peliculasController.getAll);
router.get('/:id', peliculasController.getById);
router.post('/', peliculasController.create);
router.put('/:id', peliculasController.update);
router.delete('/:id', peliculasController.delete);

module.exports = router;
