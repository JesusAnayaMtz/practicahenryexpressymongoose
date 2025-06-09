const mongoose = require("mongoose");

// Definimos el esquema para el modelo Vehicle
const vehicleSchema = new mongoose.Schema({
    patente: String,
    marca: String,
});

// Creamos el modelo Vehicle utilizando el esquema definido
const Vehicle = mongoose.model("Vehicle", vehicleSchema);

// Exportamos el modelo Vehicle para que pueda ser utilizado en otros archivos
module.exports = Vehicle;