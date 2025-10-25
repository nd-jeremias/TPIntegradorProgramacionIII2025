import { connection } from './dbConnection.js';

export const deleteProduct = async (id) => {
    let db;

    try {

        db = await connection();

        const [result] = await db.query(
            'DELETE FROM productos WHERE id = ?',
            [id]
        );

        return result.affectedRows > 0;

    } catch (error) {
        console.error('Error al eliminar producto:', error);
        throw error;

    } finally {
        if (db) {
            await db.end();
            console.log("Base de datos cerrada")
        }
    }
};
