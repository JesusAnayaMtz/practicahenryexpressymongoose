//importamos el objeto router de express se debe importar entre llaves por que es un objeto
const {Router} = require("express");
const userController = require("../controllers/userController");
const validateUser = require("../middlewares/validateUser");

//creamos la variable userRouter que es un objeto de la clase Router
const userRouter = Router();

//creamos la ruta para obtener todos los usuarios el cual es una peticion get y manda a llamar a los metodo que tenga
//dentro de la clase userController ya que ahora es un objeto
userRouter.get("/", userController.getAllUsers)
userRouter.post("/", validateUser, userController.createUser) // Agregamos una ruta para crear un usuario y agregamos el middleware validateUser

//exportamos la variable userRouter
module.exports = userRouter;