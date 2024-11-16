require ('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const gramineasRoutes = require('./routes/gramineas');

const app = express();
const PORT = process.env.PORT || 3000;


//conectar a mongo atlas
mongoose.connect(process.env.URL_MONGO,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("SE CONECTO A LA BD");
}).catch((error) => {
    console.error("Error al conectar a MongoDB", error);
});

//Middleware para procesar datos en formato JSON
app.use(express.json());

//Rutas
app.use('/api/grimeneas', gramineasRoutes);

//Iniciar el servidor
app.listen(PORT, () =>{
    console.log(`Servidor corriendo en el puerto ${PORT}`);
})