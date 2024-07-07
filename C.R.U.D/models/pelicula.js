const mongoose = require('mongoose');

const peliculaSchema = new mongoose.Schema({
    titulo: String,
    duracion: Number,
    genero: String,
    clasificacion: String,
    sinopsis: String
});

module.exports = mongoose.model('Pelicula', peliculaSchema);
