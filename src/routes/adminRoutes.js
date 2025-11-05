import express from 'express';
import { disableProduct, updateProduct, createProduct } from '../controllers/productController.js'

const router = express.Router();
//const verifyToken = require("../middleware/auth"); 

router.get('/', ); // ARMAR ESTA RUTA PARA ADMIN DASHBOARD

// Deshabilitar producto por id
router.put('/:id', disableProduct);
// router.put('/:id', verifyToken, disableProduct);

// Modificar producto
router.put('/update/id', updateProduct)
// router.put('/update/id', verifyToken, updateProduct)

// Crear producto
router.post('/create', createProduct);
// router.post('/create', verifyToken, createProduct);

export default router;