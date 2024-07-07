const Boleta = require('../models/boleta');

exports.getAll = async (req, res) => {
    try {
        const boletas = await Boleta.find().populate('funcion_id cliente_id taquillero_id silla_id');
        res.json(boletas);
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.getById = async (req, res) => {
    try {
        const boleta = await Boleta.findById(req.params.id).populate('funcion_id cliente_id taquillero_id silla_id');
        res.json(boleta);
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.create = async (req, res) => {
    try {
        const nuevaBoleta = new Boleta(req.body);
        await nuevaBoleta.save();
        res.status(201).json(nuevaBoleta);
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.update = async (req, res) => {
    try {
        const boleta = await Boleta.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(boleta);
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.delete = async (req, res) => {
    try {
        await Boleta.findByIdAndDelete(req.params.id);
        res.status(204).send();
    } catch (err) {
        res.status(500).send(err);
    }
};
