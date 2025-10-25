// Repositorio: https://github.com/vitaccajulian/Parcial02-NicolasJeremias-JulianVitacca

import express from 'express';
import { sequelize }  from './src/databaseORM/index.js';

import productRoutes from './src/routes/productRoute.js';
import ventasRoutes from './src/routes/salesRoute.js';

import { dbInit } from './src/databaseORM/createTestData.js';

const app = express();

const PORT = process.env.PORT;

/* View Engine */
app.set('view engine', 'ejs');
app.set('views', './src/views');

app.use(express.json());

/* Rutas */
app.get('/', (req, res) => {
    res.send("Hello Word");
});

// API Response
app.use('/api', productRoutes);

// SEQUELIZE
app.use('ventas', ventasRoutes);

/* Archivos Estaticos */ 
app.use(express.static('public'));

app.use((req,res) => {
    res.status(404).send('Lo sentimos, pagina no encontrada'); // ACA ARMAR EL 404
})

//app.listen(PORT, () => console.log(`Servidor corriendo en puerto:${PORT}`));

sequelize
  .sync({ force: true })
  .then(() => dbInit())
  .then(() => {
    app.listen(PORT, () => {
      console.log(`El servidor corriendo en puerto: ${PORT} |=|=| http://localhost:${PORT}/`);
    });
  })
  .catch((error) => {
    console.log({ error });
  });