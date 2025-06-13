const mongoose = require("mongoose")

//Creamos un middleware para validar el nombre del usuario
const validateUser = (req, res, next) => {
    //obtener el nombre del usuario del cuerpo de la peticion
    const {name} = req.body;
    //validamos que el nombre no sea nulo, sea una cadena y no este vacio
    if(!name || typeof name !== 'string' || name.trim() === '') {
        // si el nombre es nulo, no es una cadena o esta vacio devolvemos un error 400 y retornamos un mensaje de error
        return res.status(400).json({ error: 'El nombre es obligatorio y debe ser una cadena no vacía.' });
    } else if (name.length < 3 || name.length > 50) {
        return res.status(400).json({ error: 'El nombre debe tener entre 3 y 50 caracteres.' });
    } else {
        //si el nombre es valido llamamos a next() para que la peticion siga su curso
        next();
    }
};

//creamos una funcion la cual se encargada de validar el id del usuario 
const validateId = (req, res,next) => {
    const {id} = req.params; //pasamos por queryparams el id
    //validamos con una funcion que tiene mongoose el cual valida si es el id es valido y retorna true o false
    //si todo sale bien se aplica next y si no se aplica next para que muestre el error personalizado con su estatus esto se manda directo a nuestro modulo server
    if(mongoose.Types.ObjectId.isValid(id)){
        next();
    }else {
        next({message: "Id Invalido", statusCode: 400}); //al ser un objeto se le puede agregar varias propiedades
    }
};

// Exportamos el middleware para que pueda ser utilizado en las rutas 
//debemos analizar donde usaremos este middleware, en el router de usuarios
module.exports = {validateUser, validateId};