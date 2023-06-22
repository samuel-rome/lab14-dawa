const express = require('express');
const router = express.Router();
const Socio = require('../models/Socio');

// Ruta para crear un nuevo socio
router.post('/', async (req, res) => {
  try {
    const socio = new Socio(req.body);
    await socio.save();
    res.json(socio);
  } catch (error) {
    console.log(error);
    res.status(500).send('Hubo un error al crear el socio.');
  }
});

module.exports = router;
