//Aqui vamos a definir las rutas a travez de las cuales nos podemos comunicar

//tengo definida la solicitud get  a /users => controlador

//importamos el objeto router de express se debe importar entre llaves por que es un objeto
const {Router} = require("express");
//importamos los routers hijos para que se puedan usar en este archivo
const userRouter = require("./userRouter");
const postRouter = require("./postRouter");
const vehicleRouter = require("./vehicleRouter");

//este modulo(index.js) sera nuestro enrutador principal

//creamos un objeto router el cual internamente le definiremos las rutas
const router = Router();

//hacemos uso de los routers hijos para que al hacer la peticion se vaya a llamar a la ruta
//que se definio en el router hijo
router.use("/users", userRouter);
router.use("/posts", postRouter);
router.use("/vehicles", vehicleRouter); // Importamos y usamos el router de vehículos



//ahora vamos a exportar el objeto router que es el que va a manejar las rutas
//hacia el server el cual tiene la constante app que es el objeto express
module.exports = router;

 