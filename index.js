const express = require('express');
const connectToDatabase = require('./config/db');
const peliculaRoutes = require('./routes/peliculasRoutes');
const prestamoRoutes = require('./routes/prestamoRoutes');
const socioRoutes = require('./routes/socioRoutes');

const app = express();
const PORT = 3000;

// Otros middlewares y rutas...

// Conexión a la base de datos
connectToDatabase()
  .then(() => {
    // Configuración de rutas
    app.use('/api/peliculas', peliculaRoutes);
    app.use('/api/prestamos', prestamoRoutes);
    app.use('/api/socios', socioRoutes);

    // Iniciar el servidor después de establecer la conexión a la base de datos
    app.listen(PORT, () => {
      console.log(`Servidor iniciado en http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error al conectar a la base de datos:', error);
  });
