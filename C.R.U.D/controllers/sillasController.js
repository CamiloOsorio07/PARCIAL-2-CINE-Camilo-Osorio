const Silla = require('../models/silla');

exports.getAll = async (req, res) => {
    try {
        const sillas = await Silla.find().populate('sala_id');
        res.json(sillas);
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.getById = async (req, res) => {
    try {
        const silla = await Silla.findById(req.params.id).populate('sala_id');
        res.json(silla);
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.create = async (req, res) => {
    try {
        const nuevaSilla = new Silla(req.body);
        await nuevaSilla.save();
        res.status(201).json(nuevaSilla);
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.update = async (req, res) => {
    try {
        const silla = await Silla.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(silla);
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.delete = async (req, res) => {
    try {
        await Silla.findByIdAndDelete(req.params.id);
        res.status(204).send();
    } catch (err) {
        res.status(500).send(err);
    }
};
