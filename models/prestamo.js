const mongoose = require('mongoose');

const prestamoSchema = new mongoose.Schema({
  nombreSocio: { type: String, required: true },
  cinta: { type: String, required: true },
  entregado: { type: Boolean, default: false },
  fechaCreacion: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Prestamo', prestamoSchema);
