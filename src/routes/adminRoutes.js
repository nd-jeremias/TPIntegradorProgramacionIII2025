import express from 'express';
import { disableProduct, updateProduct, createProduct } from '../controllers/productController.js'

import { upload } from '../middleware/uploadImages.js'
import { saveImg, saveMultiImg } from '../controllers/imgController.js';

const router = express.Router();

// Admin Dashboard (EJS)
router.get('/dashboard', (req, res) => {
    res.render('pages/dashboard');
});

// Deshabilitar producto por id
router.put('/:id', disableProduct);

// Modificar producto
router.put('/update/id', updateProduct)

// Crear producto
router.post('/create', createProduct);

// Cargar imagenes
router.post("/upload/:nombre", upload.single("archivo"), saveImg)

router.post("/upload/multi/", upload.array("archivo", 3), saveMultiImg)

export default router;