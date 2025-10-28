import express from 'express';
import { getSales, getOneSale, getDetailedSale } from '../controllers/salesController.js';

const router = express.Router();

// Obtener todos las ventas
router.get('/', getSales)

// Obtener venta por id
router.get('/:id', getOneSale)

// Obtener detalle de venta
router.get('/detalle/:id', getDetailedSale)

export default router;