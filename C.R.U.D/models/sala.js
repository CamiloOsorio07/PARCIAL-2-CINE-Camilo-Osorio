const mongoose = require('mongoose');

const salaSchema = new mongoose.Schema({
    nombre: String,
    distribucion_sillas: String
});

module.exports = mongoose.model('Sala', salaSchema);
