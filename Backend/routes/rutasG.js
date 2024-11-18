const express = require("express");
const griSchema = require("../models/modeloG");

const router = express.Router();

//Tuve que crear esto para insertar las gramineas
router.post("/plantas", (req, res) => {
    const plantas = griSchema(req.body);
    plantas
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//obtener las plantas
router.get("/plantas", (req, res) => {
    griSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//obtener 1 planta
router.get("/plantas/:id", (req, res) => {
    const { id } = req.params;
    griSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//actualizar 1 planta
router.put("/plantas/:id", (req, res) => {
    const { id } = req.params;
    const { nombre_comun, nombre_cientifico, descripcion, imagen } = req.body;
    griSchema
        .updateOne({ _id: id }, { $set: { nombre_comun, nombre_cientifico, descripcion, imagen } })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//borrar 1 planta
router.delete("/plantas/:id", (req, res) => {
    const { id } = req.params;
    griSchema
        .deleteOne({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

module.exports = router;