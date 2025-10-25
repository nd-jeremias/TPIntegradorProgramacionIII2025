import { connection } from './dbConnection.js';

export const updateProduct = async (producto) => {
  
    let db;

    try {
        
        db = await connection();

        // Verificamos que haya un ID
        if (!producto.id) {
            throw new Error('Falta el ID del producto');
        }

        // Query fija, con todos los campos que vamos a actualizar
        const sql = `
            UPDATE productos
            SET titulo = ?, precio = ?, imagen = ?, stock = ?, category = ?, status = ?
            WHERE id = ?;
            `;

        // Array de valores en el mismo orden que la query
        const valores = [
            producto.titulo,
            producto.precio,
            producto.imagen,
            producto.stock,
            producto.category,
            producto.status,
            producto.id
        ];

        const [result] = await db.query(sql, valores);

        return result.affectedRows > 0;

    } catch (error) {
        console.error('Error al actualizar producto:', error);
        throw error;
    } finally {
        if (db) await db.end();
    }
};
