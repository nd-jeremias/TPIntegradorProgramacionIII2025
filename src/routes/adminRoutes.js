import express from 'express';
import { disableProduct, updateProduct, createProduct } from '../controllers/productController.js'
import { dashboard } from '../controllers/adminController.js'

const router = express.Router();

router.get('/dashboard', (req, res) => {
    res.render('pages/dashboard');
});

// Deshabilitar producto por id
router.put('/:id', disableProduct);

// Modificar producto
router.put('/update/id', updateProduct)

// Crear producto
router.post('/create', createProduct);

export default router;