const express = require('express');
const router = express.Router();
const Prestamo = require('../models/prestamo');

// Ruta para crear un préstamo
router.post('/prestamos', async (req, res) => {
  try {
    const prestamo = await Prestamo.create(req.body);
    res.json(prestamo);
  } catch (error) {
    console.error('Error al crear el préstamo:', error);
    res.status(500).json({ error: 'Error al crear el préstamo' });
  }
});

module.exports = router;
