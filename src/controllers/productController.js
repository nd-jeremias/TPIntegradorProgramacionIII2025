import { getOneProduct, getAllProducts, deleteProduct, updateProduct } from '../models/modelsExport.js';

export const getOneProductController = async (req, res) => {
    try {
        // 1. Obtener el id desde los parámetros de la URL
        const { id } = req.params;

        // 2. Llamar al modelo para obtener el producto
        const product = await getOneProduct(id);

        // 3. Verificar si existe
        if (!product) {
            return res.status(404).json({ message: 'Producto no encontrado' });
        }

        // 4. Enviar el producto como respuesta
        res.status(200).json(product);

    } catch (error) {
        console.error('Error obteniendo producto:', error);
        res.status(500).json({ message: 'Error del servidor' });
    }
};

export const getAllProductsController = async (req, res) => {
  try {
    const products = await getAllProducts();

    if (products.length === 0) {
        res.status(404).json({ message: 'No se encontraron productos' });
    } else {
        res.status(200).json(products);
    }

  } catch (error) {
        console.error('Error obteniendio productos:', error);
        res.status(500).json({ message: 'Error del servidor' });
  }
};

export const deleteProductController = async (req, res) => {
    try {
        
        const { id } = req.params;

        const product = await deleteProduct(id);
    
        if (!product) {
            return res.status(404).json({ message: 'Producto no encontrado' });
        }

        res.status(200).json(product);

    } catch (error) {
        console.error('Error borrando el producto:', error);
        res.status(500).json({ message: 'Error del servidor' });
    }
}

export const updateProductController = async (req, res) => {
    
    const producto = req.body; // Se espera un objeto

    try {
        const actualizado = await updateProduct(producto);

        if (actualizado) {
            res.status(200).json({ message: 'Producto actualizado correctamente.' });
        } else {
            res.status(404).json({ message: 'Producto no encontrado o sin cambios.' });
        }

    } catch (error) {
        console.error('Error actualizando el producto:', error);
        res.status(500).json({ error: 'Error del servidor.' });
    }
};