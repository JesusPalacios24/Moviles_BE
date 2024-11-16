const express = require('express');
const router = express.Router();
const Grimenea = require('../models/grimenea');

//Ruta para obtener los datos.

router.get('/', async(req, res) =>{
    try{
        const grimenea = await Grimenea.find();
        res.json(grimenea);
    }catch(error){
        res.status(500).json({message: error.message});
    }
});

// Ruta para obtener una grimenea por ID.
router.get('/:?', async(req,res) =>{
    try{
        const grimenea = await Grimenea.findId(req.params.id);
        if(grimenea){
            res.json(grimenea);
        }else{
            res.status(404).json({message:"No existe"});
        }
    } catch(error){
        res.status(500).json({message: error.message});
    }
});

module.exports = router;
