const express = require('express');
const router = express.Router();
const taquillerosController = require('../controllers/taquillerosController');

// CRUD operations
router.get('/', taquillerosController.getAll);
router.get('/:id', taquillerosController.getById);
router.post('/', taquillerosController.create);
router.put('/:id', taquillerosController.update);
router.delete('/:id', taquillerosController.delete);

module.exports = router;
