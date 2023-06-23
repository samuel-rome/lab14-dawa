const express = require('express');
const router = express.Router();
const Pelicula = require('../models/pelicula');

// Ruta para obtener todas las películas
router.get('/peliculas', async (req, res) => {
  try {
    const peliculas = await Pelicula.find();
    res.json(peliculas);
  } catch (error) {
    console.error('Error al obtener las películas:', error);
    res.status(500).json({ error: 'Error al obtener las películas' });
  }
});

// Ruta para crear una película
router.post('/peliculas', async (req, res) => {
  try {
    const pelicula = await Pelicula.create(req.body);
    res.json(pelicula);
  } catch (error) {
    console.error('Error al crear la película:', error);
    res.status(500).json({ error: 'Error al crear la película' });
  }
});

module.exports = router;
