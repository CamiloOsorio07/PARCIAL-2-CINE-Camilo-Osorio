const express = require('express');
const router = express.Router();
const salasController = require('../controllers/salasController');

// CRUD operations
router.get('/', salasController.getAll);
router.get('/:id', salasController.getById);
router.post('/', salasController.create);
router.put('/:id', salasController.update);
router.delete('/:id', salasController.delete);

module.exports = router;
