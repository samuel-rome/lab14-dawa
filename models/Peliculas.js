const mongoose = require('mongoose');

const peliculaSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  genero: { type: String, required: true },
  director: { type: String, required: true },
  actores: { type: [String], required: true }
});

const Pelicula = mongoose.model('Pelicula', peliculaSchema);

module.exports = Pelicula;
