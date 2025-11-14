import express from 'express';
import { getSales, getOneSale, createSale} from '../controllers/salesController.js';
import { generateSale } from '../middleware/generateSale.js';

const router = express.Router();

// Obtener todos las ventas
router.get('/', getSales);

// Obtener venta por id
router.get('/:id', getOneSale);

// Registrar una venta en BBDD
router.post('/', generateSale, createSale);

export default router;