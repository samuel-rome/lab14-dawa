const mongoose = require('mongoose');

const socioSchema = new mongoose.Schema({
  codigo: { type: String, required: true },
  nombre: { type: String, required: true },
  direccion: { type: String, required: true },
  telefono: { type: String, required: true },
  fechaCreacion: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Socio', socioSchema);
