const mongoose = require('mongoose');

const peliculaSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  genero: { type: String },
  director: { type: String },
  actores: { type: [String] },
});

module.exports = mongoose.model('Pelicula', peliculaSchema);
