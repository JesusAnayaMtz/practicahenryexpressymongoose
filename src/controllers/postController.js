//exportamos el objeto con las funciones que vamos a usar en el controlador hacia el enrutador 
module.exports = {
  getAllPosts: (req, res) => {
    res.status(200).send("Endpoint para obtener todos los posts");
  },
  //creamos otro endpoint para obtener un post por id
  getPostById: (req, res) => {
    res.status(200).send("Endpoint para obtener un post por id");
  },
};