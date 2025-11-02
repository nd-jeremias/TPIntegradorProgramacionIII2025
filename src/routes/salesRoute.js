import express from 'express';
import { getSales, getOneSale, createSale} from '../controllers/salesController.js';

const router = express.Router();

// Obtener todos las ventas
router.get('/', getSales)

// Obtener venta por id
router.get('/:id', getOneSale)

router.post('/', createSale)

export default router;