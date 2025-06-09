// require mongoose para conectar a MongoDB
const mongoose = require('mongoose');

// URI de conexión a la base de datos MongoDB
let uri = "mongodb+srv://jmtz201289:{password}@pruebahenry.likdpje.mongodb.net/pruebausuarios?retryWrites=true&w=majority";


// Función para conectar a la base de datos es una función asíncrona
const dbCon = async() => {
    //realizar la conexión a la base de datos 
    //y esperar a que se complete la conexión
    await mongoose.connect(uri)
};

//exportamos la función de conexión a la base de datos
module.exports = dbCon;
