const express = require('express');
const router = express.Router();
const Usuario = require('../models/Usuario');

// Crear un nuevo usuario
router.post('/', async (req, res) => {
  try {
    const usuario = new Usuario(req.body);
    await usuario.save();
    res.status(201).json(usuario);
  } catch (error) {
    console.error(error);
    res.status(500).send('Hubo un error al crear el usuario');
  }
});

module.exports = router;
