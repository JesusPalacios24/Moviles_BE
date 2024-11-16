const mongoose = require('mongoose');

const Esquema = new mongoose.Schema({
    nombre_comun: String,
    nombre_cientifico: String,
    descripcion: String
});

module.exports = mongoose.model('grimenea', Esquema);