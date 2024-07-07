const mongoose = require('mongoose');

const funcionSchema = new mongoose.Schema({
    pelicula_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Pelicula' },
    sala_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Sala' },
    fecha: Date,
    hora: String
});

module.exports = mongoose.model('Funcion', funcionSchema);
