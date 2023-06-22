const mongoose = require('mongoose');

const prestamoSchema = new mongoose.Schema({
  socio: { type: mongoose.Schema.Types.ObjectId, ref: 'Socio', required: true },
  pelicula: { type: mongoose.Schema.Types.ObjectId, ref: 'Pelicula', required: true },
  entregado: { type: Boolean, default: false },
  fechaCreacion: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Prestamo', prestamoSchema);
