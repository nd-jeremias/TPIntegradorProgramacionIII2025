// Repositorio: https://github.com/vitaccajulian/Parcial02-NicolasJeremias-JulianVitacca

import express from 'express';
import { sequelize }  from './src/database/index.js';

import productRoutes from './src/routes/productRoute.js';
import salesRoute from './src/routes/salesRoute.js';
import adminRoutes from './src/routes/adminRoutes.js'

import { seedData } from './src/database/initData.js';

const app = express();

const PORT = process.env.PORT;

/* View Engine */
app.set('view engine', 'ejs');
app.set('views', './src/views');

app.use(express.json());

/* Rutas */
// app.get('/', (req, res) => {
//     res.send("Hello Word");
// });

// API Routes
app.use('/api/productos', productRoutes);
app.use('/api/ventas', salesRoute);

// Admin Routes
app.use('/admin', adminRoutes);

/* Archivos Estaticos */ 
app.use(express.static('public'));

app.use((req,res) => {
    res.status(404).send('Lo sentimos, pagina no encontrada'); // ACA ARMAR EL 404
})

sequelize
  .sync({ force: true }) // El .sync se podria poner en seedData?
  .then(() => seedData())
  .then(() => {
    app.listen(PORT, () => {
      console.log(`El servidor corriendo en puerto: ${PORT} |=|=| http://localhost:${PORT}/`);
    });
  })
  .catch((error) => {
    console.log({ error });
  });