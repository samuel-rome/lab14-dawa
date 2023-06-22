// models/Usuario.js

const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  email: { type: String, required: true },
  // Otros campos de usuario
});

module.exports = mongoose.model('Usuario', usuarioSchema);
