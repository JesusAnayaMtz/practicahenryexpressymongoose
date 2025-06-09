const User = require("../models/User");


module.exports = {
    //metodo para obtener todos los usuarios
    getAllusers: async () => {
      // Utilizamos el modelo User para buscar todos los usuarios en la base de datos
      //el metodo find() de mongoose devuelve una promesa
      //por lo que debemos esperar a que se resuelva la promesa
      //y luego devolver el resultado
      //en este caso devolvemos todos los usuarios
      const users = await User.find();
      //retornamos los usuarios encontrados
      return users;
    },

    //metodo para crear un usuario
    createUser: async (name, email, age) => {
      // Creamos una nueva instancia del modelo User con los datos proporcionados
      const newUser = new User({
        name: name,
        email: email,
        age: age
      });
      // Guardamos el nuevo usuario en la base de datos
      //el metodo save() de mongoose devuelve una promesa
      //por lo que debemos esperar a que se resuelva la promesa
      //y luego devolver el resultado
      const savedUser = await newUser.save();
      //retornamos el usuario guardado
      return savedUser;
    }
}