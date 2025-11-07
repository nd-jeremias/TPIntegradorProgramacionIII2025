// Repositorio: https://github.com/vitaccajulian/Parcial02-NicolasJeremias-JulianVitacca

import express from 'express';

// Define __dirname para el ámbito de módulos de ES
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import { sequelize } from './src/database/index.js';
import { seedData } from './src/database/initData.js';

// Empaquetar rutas en un solo export/import
import productRoutes from './src/routes/productRoute.js';
import salesRoute from './src/routes/salesRoute.js';
import adminRoutes from './src/routes/adminRoutes.js'
import userRoutes from './src/routes/userRoutes.js'
import auth from "./src/routes/auth.js";


import cookieParser from 'cookie-parser';

const app = express();
const PORT = process.env.PORT;

/* View Engine */
app.set('view engine', 'ejs');
app.set('views', './src/views');

/* Middlewares */
import { verificarToken } from "./src/middleware/verifyToken.js";
app.use(express.json());
app.use(cookieParser());

/* Rutas de cliente */
app.use('/', userRoutes);

/*  API Routes */
app.use('/api/productos', productRoutes);
app.use('/api/ventas', salesRoute);

/* Ruta de acceso/autorizacion */
app.use('/auth', auth);

/* Admin Routes */
app.use('/admin', verificarToken, adminRoutes);

/* Archivos Estaticos */
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res) => {
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