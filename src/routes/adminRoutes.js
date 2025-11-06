import express from 'express';
import { disableProduct, updateProduct, createProduct } from '../controllers/productController.js'

const router = express.Router();

//router.get('/dashboard', ); // ARMAR ESTA RUTA PARA ADMIN DASHBOARD

// Deshabilitar producto por id
router.put('/:id', disableProduct);

// Modificar producto
router.put('/update/id', updateProduct)

// Crear producto
router.post('/create', createProduct);

export default router;