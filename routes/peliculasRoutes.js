const express = require('express');
const router = express.Router();
const Pelicula = require('../models/Peliculas');

// Ruta para crear una nueva película
router.post('/', async (req, res) => {
  try {
    const pelicula = new Pelicula(req.body);
    await pelicula.save();
    res.json(pelicula);
  } catch (error) {
    console.log(error);
    res.status(500).send('Hubo un error al crear la película.');
  }
});

// Resto de rutas...

module.exports = router;
