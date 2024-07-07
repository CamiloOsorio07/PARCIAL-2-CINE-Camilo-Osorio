const mongoose = require('mongoose');

const sillaSchema = new mongoose.Schema({
    fila: String,
    puesto: Number,
    sala_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Sala' }
});

module.exports = mongoose.model('Silla', sillaSchema);
