// Repositorio: https://github.com/vitaccajulian/Parcial02-NicolasJeremias-JulianVitacca

import express from 'express';

import path from 'path';
// Define __dirname para el ámbito de módulos de ES
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import { sequelize }  from './src/database/index.js';
import { seedData } from './src/database/initData.js';

import productRoutes from './src/routes/productRoute.js';
import salesRoute from './src/routes/salesRoute.js';
import adminRoutes from './src/routes/adminRoutes.js'

const app = express();

const PORT = process.env.PORT;

/* View Engine */
app.set('view engine', 'ejs');
app.set('views', './src/views');

app.use(express.json());

/* Rutas Dinamicas*/

Estructura para armar ingreso de usuario:

// De parte del front -> El usuario ingresa su informacion -> hacer script que hashee la contraseña -> enviar al servidor por ruta "x"
// De parte del back -> el server recibe el objeto que envia el front(usuario/contraseña(hash)) -> pasa por un middleware que valida la contraseña -> si es correcto devuelve una cookie -> sino invalidar el inicio

app.get('/ingresar', (req, res) => {
  res.render('pages/admin', { modo: 'login', paginaActual: 'login' });
});

app.get('/registrarse', (req, res) => {
  res.render('pages/admin', { modo: 'registro', paginaActual: 'register' });
});

// API Routes
app.use('/api/productos', productRoutes);
app.use('/api/ventas', salesRoute);

// Admin Routes
app.use('/admin', adminRoutes);

/* Archivos Estaticos */ 
app.use(express.static(path.join(__dirname, 'public')));

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