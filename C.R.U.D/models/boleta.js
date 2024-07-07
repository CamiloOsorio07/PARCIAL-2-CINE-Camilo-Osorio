const mongoose = require('mongoose');

const boletaSchema = new mongoose.Schema({
    funcion_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Funcion' },
    cliente_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Cliente' },
    taquillero_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Taquillero' },
    silla_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Silla' },
    precio: Number
});

module.exports = mongoose.model('Boleta', boletaSchema);
