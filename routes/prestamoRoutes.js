const express = require('express');
const router = express.Router();
const Prestamo = require('../models/Prestamo');

// Ruta para crear un nuevo préstamo
router.post('/', async (req, res) => {
  try {
    const prestamo = new Prestamo(req.body);
    await prestamo.save();
    res.json(prestamo);
  } catch (error) {
    console.log(error);
    res.status(500).send('Hubo un error al crear el préstamo.');
  }
});

module.exports = router;
