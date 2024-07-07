const mongoose = require('mongoose');

const clienteSchema = new mongoose.Schema({
    nombre: String,
    apellido: String,
    email: String,
    telefono: String
});

module.exports = mongoose.model('Cliente', clienteSchema);
