const User = require("../models/User");
const formatAge = require("../helpers/formatAge");


module.exports = {
    //metodo para obtener todos los usuarios
    getAllusers: async () => {
      // Utilizamos el modelo User para buscar todos los usuarios en la base de datos
      //el metodo find() de mongoose devuelve una promesa
      //por lo que debemos esperar a que se resuelva la promesa
      //y luego devolver el resultado
      //en este caso devolvemos todos los usuarios
      const users = await User.find().populate('vehicle'); //populate es un metodo de mongoose que nos permite traer los datos de un campo relacionado
      //retornamos los usuarios encontrados
      return users;
    },

    //metodo para crear un usuario
    createUser: async (user) => {
      // Utilizamos el modelo User para crear un nuevo usuario
      //el metodo create() de mongoose devuelve una promesa
      //por lo que debemos esperar a que se resuelva la promesa
      //y luego devolver el resultado
      const newUser = await User.create({ ...user, age: formatAge(user.age) }); //utilizamos el operador spread para copiar los datos del usuario proporcionado y agregar el campo age con el valor calculado por la funcion formatAge
      //retornamos el usuario creado
      return newUser;
    },

    //metodo para traer un usuario por su id
    getUserById: async (id) => {
      // Utilizamos el modelo User para buscar un usuario por su ID
      //el metodo findById() de mongoose devuelve una promesa
      const user = await User.findById(id).populate('vehicle'); //populate es un metodo de mongoose que nos permite traer los datos de un campo relacionado
      return user;
    },

    getUserByName: async (name) => {
      // Utilizamos el modelo User para buscar un usuario por su nombre
      //el metodo findOne() de mongoose devuelve una promesa 
      //y busca un unico usuario que coincida con el nombre proporcionado
      const user = await User.findOne({ name }).populate("vehicle"); //Aqui estamos usando la sintaxis de objeto para buscar por nombre ya que valida que el nombre sea igual al proporcionado
      //retornamos el usuario encontrado
      return user;
    },

    //aqui nos faltaria agregar validaciones para que el usuario no pueda agregar un vehiculo si ya tiene uno asignado
    // y que el vehiculo no pueda ser asignado a mas de un usuario
    //y que el usuario y el vehiculo existan en la base de datos
    //metodo para agregar un vehiculo a un usuario y destructurar el objeto que recibe desde los parametros de la funcion
    addVehicle: async ({userId, vehicleId}) => {
      const user = await User.findById(userId); // Buscamos el usuario por su ID que le agregaremos el vehículo
      user.vehicle = vehicleId; // Asignamos el ID del vehículo al campo 'vehicle' del usuario
      await user.save(); // Guardamos los cambios en la base de datos
      return user; // Retornamos el usuario actualizado
    }
}