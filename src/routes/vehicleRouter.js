const {Router} = require("express");
const vehicleController = require("../controllers/vehicleController");

const vehicleRouter = Router();

// Definimos las rutas para manejar vehículos
vehicleRouter.get("/", vehicleController.getAllVehicles); // Obtener todos los vehículos
vehicleRouter.post("/", vehicleController.createVehicle); // Crear un nuevo vehículo

// Exportamos el objeto vehicleRouter
module.exports = vehicleRouter;
// Esto permite que el router de vehículos se pueda usar en otros archivos, como el archivo principal de rutas.