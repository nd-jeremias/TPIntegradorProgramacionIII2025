// Repositorio: https://github.com/vitaccajulian/Parcial02-NicolasJeremias-JulianVitacca

import express from 'express';

const app = express();
const PORT = process.env.PORT;

/* Cross-Origin Resource Sharing */
import cors from 'cors';
app.use(cors());

// Define __dirname para el ámbito de módulos de ES
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Sequelize
import { sequelize } from './src/database/index.js';
import { seedData } from './src/database/initData.js';

// Rutas
import { adminRoutes, authRoutes, productRoutes, salesRoutes, userRoutes, } from './src/routes/index.js';

/* View Engine */
app.set('view engine', 'ejs');
app.set('views', './src/views');

/* Middlewares */

app.use(express.json());
// Verifica la cookie para iniciar/mantener sesion
import { verificarToken } from "./src/middleware/verifyToken.js";
// CookieParser 
import cookieParser from 'cookie-parser';
app.use(cookieParser());

/* Rutas de cliente */
app.use('/', userRoutes);

/*  API Routes */
app.use('/api/productos', productRoutes);
app.use('/api/ventas', salesRoutes);

/* Ruta de acceso/autorizacion */
app.use('/auth', authRoutes);

/* Admin Routes */
app.use('/admin', verificarToken, adminRoutes);

/* Archivos Estaticos */
app.use(express.static(path.join(__dirname, 'public')));

/* Respuesta 404 */
app.use((req, res) => {
    res.status(404).send('Lo sentimos, pagina no encontrada'); // ACA ARMAR EL 404
})

sequelize
    .sync({ force: true })
    .then(() => seedData())
    .then(() => {
        app.listen(PORT, () => {
            console.log(`El servidor corriendo en puerto: ${PORT} |=|=| http://localhost:${PORT}/`);
        });
    })
    .catch((error) => {
        console.log({ error });
    });