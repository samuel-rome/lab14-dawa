// models/Producto.js

const mongoose = require('mongoose');

const productoSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  precio: { type: Number, required: true },
  // Otros campos de producto
});

module.exports = mongoose.model('Producto', productoSchema);
