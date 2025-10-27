import express from 'express';
import { getVentas } from '../controllers/salesController.js';

const router = express.Router();

// Obtener todos las ventas
router.get('/', getVentas)

export default router;