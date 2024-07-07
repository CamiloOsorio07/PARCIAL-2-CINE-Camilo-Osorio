const express = require('express');
const router = express.Router();
const sillasController = require('../controllers/sillasController');

// CRUD operations
router.get('/', sillasController.getAll);
router.get('/:id', sillasController.getById);
router.post('/', sillasController.create);
router.put('/:id', sillasController.update);
router.delete('/:id', sillasController.delete);

module.exports = router;
