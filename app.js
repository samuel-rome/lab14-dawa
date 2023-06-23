const express = require('express');
const db = require('./config/db');
const peliculasRoutes = require('./routes/peliculas');
const sociosRoutes = require('./routes/socios');
const prestamosRoutes = require('./routes/prestamos')

const app = express();
const PORT = 3000; // Puedes usar el puerto que desees

app.use(express.json());
app.use('/api', peliculasRoutes,);
app.use('/api', sociosRoutes,);
app.use('/api', prestamosRoutes,);


db.on('error', console.error.bind(console, 'Error de conexión a la base de datos:'));
db.once('open', () => {
  console.log('Conexión exitosa a la base de datos');

  app.listen(PORT, () => {
    console.log(`API en funcionamiento en el puerto ${PORT}`);
  });
});
