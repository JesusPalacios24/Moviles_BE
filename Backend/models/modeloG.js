const mongoose = require("mongoose");

const griSchema = mongoose.Schema({
    nombre_comun: {
        type: String,
        requied: true
    },
    nombre_cientifico: {
        type: String,
        requied: true
    },
    descripcion: {
        type: String,
        requied: true
    },
    imagen: {
        type: String,
        requied: true
    }
});

module.exports = mongoose.model('Modelo', griSchema);