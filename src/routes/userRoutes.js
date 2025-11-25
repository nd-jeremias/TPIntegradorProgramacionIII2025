import express from 'express';

const router = express.Router();
// // borrar este bloque
// import {Ticket} from '../../public/classes/Ticket.js';

// const getVentaById = async (id) => {
//     return {
//       id: 1,
//       cliente: "Juan Pérez",
//       total: 40,
//       fecha: "2025-11-07T12:43:21.000Z",
//       detalle: [
//         { cantidad: 1, precio_unitario: 25.99, producto: { titulo: "Thriller" } },
//         { cantidad: 1, precio_unitario: 27.8, producto: { titulo: "The_Dark_Side_of_the_Moon" } }
//       ]
//     };
//   };
  
// router.get('/ticket', async (req, res) => {
//     const venta = await getVentaById(req.params.id);

//     const ticket = new Ticket(
//         venta.id,
//         venta.cliente,
//         venta.total,
//         venta.fecha,
//         venta.detalle
//     );

//     res.render('pages/ticket', { htmlTicket: ticket.toHTML() });
// })
// hasta aca
// router.get('/', (req, res) => {
//     res.render('pages/bienvenida');
// });

router.get('/ingresar', (req, res) => {
    res.render('pages/admin', { modo: 'login', paginaActual: 'login' });
});

router.get('/registrarse', (req, res) => {
    res.render('pages/admin', { modo: 'registro', paginaActual: 'register' });
});

// router.get('/carrito', (req, res) => {
//     res.render('pages/carrito')
// });

export default router;