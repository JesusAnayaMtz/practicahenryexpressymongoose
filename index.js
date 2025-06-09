const app = require("./src/server")
//
// Importamos la función de conexión a la base de datos
const dbCon = require("./src/config/dbCon")

//con listen le damos la capacidad de ejecutar peticiones y escuchar cuando se necesiten
//y dentro le pasamos por parámetro el puerto que queremos escuchar
//en este caso 3000
//por segundo le pasamos una funcion callback que se ejecutará cuando se inicie el servidor
//y con eso ya esta listo para recibir peticiones y responderlas

//llamamos a la función de conexión a la base de datos
//y luego iniciamos el servidor
dbCon().then(res => {
    app.listen(3000, () => {
    console.log("Server ejecutado en el puerto 3000")
})
})

