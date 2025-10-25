import express from 'express';
import { getAllProductsController, getOneProductController, deleteProductController, updateProductController } from '../controllers/productController.js'

const router = express.Router();

// Obtener todos los productos
router.get('/productos/', getAllProductsController);

// Obtener producto por ID
router.get('/productos/:id', getOneProductController);

// Borrar producto por ID
router.delete('/productos/:id', deleteProductController);

// Actualizar producto por id
router.put('/productos/:id', updateProductController);

export default router;