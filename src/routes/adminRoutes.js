import express from 'express';
import { disableProduct, createProduct, updateProduct } from '../controllers/productController.js'

const router = express.Router();

// Actualizar producto por id
router.put('/:id', disableProduct);

// Modificar producto
router.put('/update/id', updateProduct)

// Crear producto
router.post('/create', createProduct);

export default router;