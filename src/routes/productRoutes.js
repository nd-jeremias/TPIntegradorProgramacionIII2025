import express from 'express';
import { getProducts, getOneProduct, } from '../controllers/productController.js'

const router = express.Router();

// Obtener todos los productos
router.get('/', getProducts);

// Obtener producto por ID
router.get('/:id', getOneProduct);

export default router;