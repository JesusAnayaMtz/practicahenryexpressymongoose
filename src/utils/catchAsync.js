
//esta es una funcion de orden superior que recibe un controlador y devuelve una funcion que maneja los errores de manera centralizada
//esto hara que la aplicacion maneje el error de forma general y asi la aplicacion no se rompa
const catchAsync = (controller) => {
    return (req,res,next) => {
        controller(req,res).catch((error) => {
            next(error); // le indicamos que pase el error al manejador de errores de express
        })
    }
}

module.exports = catchAsync;