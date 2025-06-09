//importamos el objeto router de express se debe importar entre llaves por que es un objeto
const {Router} = require("express");
const postController = require("../controllers/postController.js");

//creamos el objeto router
const postRouter = Router();

//creamos las rutas la cual es una peticion get y la ruta que queremos que se ejecute dentro del controlador
postRouter.get("/", postController.getAllPosts)

//exportamos el objeto router
module.exports = postRouter;