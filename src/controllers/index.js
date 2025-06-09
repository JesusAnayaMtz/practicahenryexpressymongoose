//en este modulo van a estar las funciones que establecen la logica de negocio de cada una de las rutas

//para esa ruta get /users vamos a ir a la base de datos a pedir la informacion de los usuarios
//y responder al cliente con la informacion obtenida

//se crea el controller este se exportara para puder usarlo en la ruta definida
//recibe dos parametros req(solicitud) y res(respuesta)
//res tiene el objeto de respuesta
const userController = (req, res) => {
    //res tiene un metodo status que recibe un codigo de estado
    //y un metodo send que recibe un mensaje que se envia al cliente
    res.status(200).send('Estamos recibiendo una solicitud para obtener datos de usuarios')
}

const postController = (req, res) => {
    res.status(200).send('Estamos enviando informacion sobre posts')
}

const vehicleController = (req, res) => {
    res.status(200).send('Estamos enviando informacion sobre vehiculos')
}

//exportamos el controller hacia routes
module.exports = {
    userController,
    postController,
    vehicleController
}