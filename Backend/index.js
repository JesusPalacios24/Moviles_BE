const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const gramineas = require("./routes/rutasG");

const PORT = process.env.PORT || 3000;
const app = express();

//middleware
app.use(express.json());
app.use('/api', gramineas);

//routes
app.get('/', (req,res)=>{
    res.send('SI SE CONECTO.');
});

//mongo conexion
mongoose
.connect(process.env.URI_MONGO)
.then(() => console.log('Se conecto a la BD.'))
.catch((error) => console.error(error));


app.listen(PORT, () => console.log('Servidor funcionando en:', PORT));