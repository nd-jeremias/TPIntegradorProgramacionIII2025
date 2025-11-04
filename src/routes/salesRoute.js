import express from 'express';
import { getSales, getOneSale, createSale} from '../controllers/salesController.js';
//import { verifyToken } from './middleware/auth';

const router = express.Router();

// Obtener todos las ventas
router.get('/', getSales);
//router.get('/', verifyToken, getSales);

// Obtener venta por id
router.get('/:id', getOneSale)
//router.get('/:id', verifyToken, getOneSale)

// Registrar una venta en BBDD
router.post('/', createSale)

export default router;