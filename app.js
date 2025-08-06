// backend/models/Resultado.js

const mongoose = require('mongoose');

const resultadoSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  intentos: { type: Number, required: true },
  resultado: { type: String, enum: ['ganó', 'perdió'], required: true },
  fecha: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Resultado', resultadoSchema);