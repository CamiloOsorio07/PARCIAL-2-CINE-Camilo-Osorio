const Cliente = require('../models/cliente');

exports.getAll = async (req, res) => {
    try {
        const clientes = await Cliente.find();
        res.json(clientes);
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.getById = async (req, res) => {
    try {
        const cliente = await Cliente.findById(req.params.id);
        res.json(cliente);
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.create = async (req, res) => {
    try {
        const nuevoCliente = new Cliente(req.body);
        await nuevoCliente.save();
        res.status(201).json(nuevoCliente);
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.update = async (req, res) => {
    try {
        const cliente = await Cliente.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(cliente);
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.delete = async (req, res) => {
    try {
        await Cliente.findByIdAndDelete(req.params.id);
        res.status(204).send();
    } catch (err) {
        res.status(500).send(err);
    }
};
