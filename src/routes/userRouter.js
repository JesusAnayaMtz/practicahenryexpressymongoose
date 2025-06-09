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
//al get se le agrega el parametro :id que es el id del usuario que queremos obtener en la peticion
userRouter.get("/byName", userController.getUserByName); // Agregamos una ruta para obtener un usuario por nombre 
// en este caso no se le agrega el parametro :name ya que se envia en el body de la peticion
//todas la rutas que dle metodo get que reciben por parametro otro valor que no es id deben estar por encima de la ruta que recibe el id ya que 
//si no se ejecutaria primero la ruta que recibe el id y no se ejecutaria la ruta que recibe el nombre

userRouter.get("/:id", userController.getUserById); // Agregamos una ruta para obtener un usuario por ID

userRouter.put("/users/addVehicle", userController.addVehicle);

//exportamos la variable userRouter
module.exports = userRouter;
