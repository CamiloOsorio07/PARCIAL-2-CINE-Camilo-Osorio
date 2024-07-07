const Taquillero = require('../models/taquillero');

exports.getAll = async (req, res) => {
    try {
        const taquilleros = await Taquillero.find();
        res.json(taquilleros);
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.getById = async (req, res) => {
    try {
        const taquillero = await Taquillero.findById(req.params.id);
        res.json(taquillero);
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.create = async (req, res) => {
    try {
        const nuevoTaquillero = new Taquillero(req.body);
        await nuevoTaquillero.save();
        res.status(201).json(nuevoTaquillero);
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.update = async (req, res) => {
    try {
        const taquillero = await Taquillero.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(taquillero);
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.delete = async (req, res) => {
    try {
        await Taquillero.findByIdAndDelete(req.params.id);
        res.status(204).send();
    } catch (err) {
        res.status(500).send(err);
    }
};
