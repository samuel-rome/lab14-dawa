const express = require('express');
const router = express.Router();
const Socio = require('../models/socio');

// Ruta para crear un socio
router.post('/socios', async (req, res) => {
  try {
    const socio = await Socio.create(req.body);
    res.json(socio);
  } catch (error) {
    console.error('Error al crear el socio:', error);
    res.status(500).json({ error: 'Error al crear el socio' });
  }
});

module.exports = router;
