const mongoose = require('mongoose');

const taquilleroSchema = new mongoose.Schema({
    nombre: String,
    apellido: String,
    email: String,
    telefono: String
});

module.exports = mongoose.model('Taquillero', taquilleroSchema);
