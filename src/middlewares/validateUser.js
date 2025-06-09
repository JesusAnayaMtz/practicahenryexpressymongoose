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

// Exportamos el middleware para que pueda ser utilizado en las rutas 
//debemos analizar donde usaremos este middleware, en el router de usuarios
module.exports = validateUser;