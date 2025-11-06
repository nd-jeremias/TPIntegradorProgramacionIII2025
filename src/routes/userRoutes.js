import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.render('pages/bienvenida');
});

router.get('/ingresar', (req, res) => {
    res.render('pages/admin', { modo: 'login', paginaActual: 'login' }); // MODIFICAR RUTA ADMIN EN VIEWS, USAR INGRESO O REGISTRO.
});

router.get('/registrarse', (req, res) => {
    res.render('pages/admin', { modo: 'registro', paginaActual: 'register' });
});

router.get('/carrito', (req, res) => {
    res.render('pages/carrito')
});

export default router;