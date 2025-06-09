const vehicleService = require('../services/vehicleService');

module.exports = {
    getAllVehicles: async (req, res) => {
        const vehicles = await vehicleService.getAllVehicles();
        res.status(200).json(vehicles); // Devolvemos los vehículos encontrados
    },

    createVehicle: async (req, res) => {
        try {
            const { patente, marca } = req.body; // Obtenemos los datos del vehículo desde el cuerpo de la solicitud
            const newVehicle = await vehicleService.createVehicle({ patente, marca }); // Llamamos al servicio para crear un vehículo
            res.status(201).json(newVehicle); // Devolvemos el vehículo creado con un estado 201
        } catch (error) {
            res.status(500).json({ error: 'Error interno al crear el vehículo' }); // Manejamos errores y devolvemos un mensaje de error
        }
    }
}