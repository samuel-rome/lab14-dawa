// config/db.js

const mongoose = require('mongoose');
const dbURI = 'mongodb://127.0.0.1:27017/lab14';

const connectToDatabase = async () => {
  try {
    await mongoose.connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Conexión exitosa a la base de datos');
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error);
  }
};

module.exports = connectToDatabase;
