const Funcion = require('../models/funcion');

exports.getAll = async (req, res) => {
    try {
        const funciones = await Funcion.find().populate('pelicula_id sala_id');
        res.json(funciones);
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.getById = async (req, res) => {
    try {
        const funcion = await Funcion.findById(req.params.id).populate('pelicula_id sala_id');
        res.json(funcion);
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.create = async (req, res) => {
    try {
        const nuevaFuncion = new Funcion(req.body);
        await nuevaFuncion.save();
        res.status(201).json(nuevaFuncion);
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.update = async (req, res) => {
    try {
        const funcion = await Funcion.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(funcion);
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.delete = async (req, res) => {
    try {
        await Funcion.findByIdAndDelete(req.params.id);
        res.status(204).send();
    } catch (err) {
        res.status(500).send(err);
    }
};
