const Sala = require('../models/sala');

exports.getAll = async (req, res) => {
    try {
        const salas = await Sala.find();
        res.json(salas);
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.getById = async (req, res) => {
    try {
        const sala = await Sala.findById(req.params.id);
        res.json(sala);
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.create = async (req, res) => {
    try {
        const nuevaSala = new Sala(req.body);
        await nuevaSala.save();
        res.status(201).json(nuevaSala);
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.update = async (req, res) => {
    try {
        const sala = await Sala.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(sala);
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.delete = async (req, res) => {
    try {
        await Sala.findByIdAndDelete(req.params.id);
        res.status(204).send();
    } catch (err) {
        res.status(500).send(err);
    }
};
