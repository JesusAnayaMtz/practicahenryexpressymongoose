//importamos el servicio de usuarios
const usersService = require('../services/usersService')

//exportamos el objeto con las funciones que vamos a usar en el controlador hacia el enrutador
module.exports = {
  // Creamos un endpoint para obtener todos los usuarios
  // Este endpoint recibe una solicitud y devuelve una respuesta con el estado 200 y los usuariosen formato JSON
  getAllUsers: async(req, res) => {
    try {
       const users = await usersService.getAllusers();
    res.status(200).json(users); 
    } catch (error) {
        res.status(500).json({ error: 'Error interno al obtener los usuarios' });
    } 
  },

  createUser: async (req, res) => {
    try {
        //body es el cuerpo de la peticion que se envia al servidor
        //req.body es un objeto que contiene la informacion que se envia en el cuerpo de la peticion
        const {name, email} = req.body;
        //llamamos al servicio de usuarios para crear un usuario con await ya que es una funcion asincrona
        const newuser =await usersService.createUser(name, email);
        //si todo sale bien devolvemos un mensaje de exito con el estado 201
        res
          .status(201)
          .json(newuser); // Devolvemos el usuario creado
    } catch (error) {
        res.status(500).json({ error: 'Error interno al crear el usuario' });
    }
  },
};