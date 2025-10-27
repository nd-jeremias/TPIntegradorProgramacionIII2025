import express from 'express';
import { getProducts, getOneProduct, disableProduct, createProduct } from '../controllers/productController.js'

const router = express.Router();

// Obtener todos los productos
router.get('/', getProducts);

// Obtener producto por ID
router.get('/:id', getOneProduct);

// Borrar producto por ID
//router.delete('/productos/:id', deleteProductController);

// Actualizar producto por id
router.put('/:id', disableProduct);

// Crear producto
router.post('/', createProduct);

export default router;