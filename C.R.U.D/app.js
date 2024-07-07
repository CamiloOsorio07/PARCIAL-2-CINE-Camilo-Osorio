const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const peliculasRouter = require('./routes/peliculas');
const salasRouter = require('./routes/salas');
const sillasRouter = require('./routes/sillas');
const clientesRouter = require('./routes/clientes');
const taquillerosRouter = require('./routes/taquilleros');
const boletasRouter = require('./routes/boletas');
const funcionesRouter = require('./routes/funciones');

const app = express();
const port = 3000;

mongoose.connect('mongodb://localhost:27017/cinema', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/peliculas', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'peliculas.html'));
});

app.get('/salas', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'salas.html'));
});

app.get('/sillas', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'sillas.html'));
});

app.get('/clientes', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'clientes.html'));
});

app.get('/taquilleros', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'taquilleros.html'));
});

app.get('/boletas', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'boletas.html'));
});

app.get('/funciones', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'funciones.html'));
});

app.use('/api/peliculas', peliculasRouter);
app.use('/api/salas', salasRouter);
app.use('/api/sillas', sillasRouter);
app.use('/api/clientes', clientesRouter);
app.use('/api/taquilleros', taquillerosRouter);
app.use('/api/boletas', boletasRouter);
app.use('/api/funciones', funcionesRouter);

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
