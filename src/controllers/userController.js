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
        const {name, email, age} = req.body;
        //llamamos al servicio de usuarios para crear un usuario con await ya que es una funcion asincrona
        const newuser =await usersService.createUser({name, email, age});
        //si todo sale bien devolvemos un mensaje de exito con el estado 201
        res
          .status(201)
          .json(newuser); // Devolvemos el usuario creado
    } catch (error) {
        res.status(500).json({ error: 'Error interno al crear el usuario' });
    }
  },

  getUserById: async (req, res) => {
    const {id} = req.params; // Obtenemos el ID del usuario desde los parámetros de la solicitud
    try {
      // Llamamos al servicio de usuarios para obtener un usuario por su ID
      const user = await usersService.getUserById(id);
      // Si no se encuentra el usuario, devolvemos un error 404
      // Si se encuentra, devolvemos el usuario con un estado 200
      if (!user) {
        return res.status(404).json({ error: 'Usuario no encontrado' });
      }
      res.status(200).json(user); // Devolvemos el usuario encontrado
      // Si ocurre un error, devolvemos un error 500
    } catch (error) {
      res.status(500).json({ error: 'Error interno al obtener el usuario' });
    }
  },

  getUserByName: async (req, res) => {
    const {name} = req.body; // Obtenemos el nombre del usuario desde los parámetros de la solicitud
    const user = await usersService.getUserByName(name);
    res.status(200).json(user); // Devolvemos el usuario encontrado
  },

  addVehicle: async (req, res) => {
    const {userId,vehicleId} = req.body; // Obtenemos el ID del usuario y del vehículo desde el cuerpo de la solicitud
    await usersService.addVehicle({userId, vehicleId}); //debe ir entre llaves ya que es un objeto
    res.status(200).json({ message: 'Vehículo agregado al usuario correctamente' }); // Devolvemos un mensaje de éxito
  }
};