const express = require('express');
//importamos el router
const router = require("./routes/")
//importamos el middleware de morgan
const morgan = require("morgan");

const app = express();
const cors = require("cors");
//importamos el cors para que pueda recibir peticiones de otros dominios

//utilizaremos el midleware de morgan para que nos muestre en la consola las peticiones que se estan haciendo al servidor
//lo que hace es que cada vez que se haga una peticion al servidor nos va a mostrar en la consola el metodo de la peticion, 
// la url, el estado de la respuesta y el tiempo que tardo en responder
app.use(morgan("dev"))

//utilizamos cors para que el servidor pueda recibir peticiones de otros dominios
app.use(cors());

//utilizamos express.json() para que el servidor pueda recibir peticiones en formato json
//convierte la informacion que se envia en el cuerpo de la peticion a un objeto de javascript
app.use(express.json());

//haremos un middleware personalizado que nos permita ver en la consola un error forzado
/* app.use((req,res) => {
    throw new Error("Un error forzado para probar el middleware de manejo de errores");    
}); */

//utilizamos un midleware personalizado para que nos muestre un mensaje en la consola cada vez que se haga una peticion al servidor 
//recibe como parametros la peticion, la respuesta y el siguiente middleware
//next es una funcion que se debe llamar para que la peticion siga su curso, el next() se debe llamar para que se libere el flujo de la peticion
app.use((req, res, next) => {
    console.log(`Peticion recibida paso por nuestro middleware personalizado: ${req.method} ${req.url}`);
    //llamamos a next() para que la peticion siga su curso
    next();
});

//en este punto ya paso por todos los middlewares que hemos definido
//cuando app reciba la solicitud que la envie y el navegador va areponder con lo que le retorne el controlador
app.use(router)

//este nuevo manejador de errores resume el error y eso hace que no exponga mas datos de los debidos
//este viene de una midleware creado para validar usuarios validateUSer donde se establecio el statusCode y el mensaje que mostrara en caso de un error
app.use((err, req, res, next)=> {
    res.status(err.statusCode || 500).json({ error: err.message})
})

//se exporta el objeto app para que pueda ser utilizado en el index.js principal
module.exports = app;