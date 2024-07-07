const Pelicula = require('../models/pelicula');

exports.getAll = async (req, res) => {
    try {
        const peliculas = await Pelicula.find();
        res.json(peliculas);
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.getById = async (req, res) => {
    try {
        const pelicula = await Pelicula.findById(req.params.id);
        res.json(pelicula);
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.create = async (req, res) => {
    try {
        const nuevaPelicula = new Pelicula(req.body);
        await nuevaPelicula.save();
        res.status(201).json(nuevaPelicula);
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.update = async (req, res) => {
    try {
        const pelicula = await Pelicula.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(pelicula);
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.delete = async (req, res) => {
    try {
        await Pelicula.findByIdAndDelete(req.params.id);
        res.status(204).send();
    } catch (err) {
        res.status(500).send(err);
    }
};
