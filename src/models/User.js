const mongoose = require("mongoose");

//llamamos al constructor de mongoose.Schema
//para crear un nuevo esquema de usuario
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
 });

 // Creamos el modelo de usuario a partir del esquema
// El primer parámetro es el nombre del modelo y el segundo es el esquema
 const User = mongoose.model("User", userSchema);

 // Exportamos el modelo de usuario para poder usarlo en otros archivos
 module.exports = User;