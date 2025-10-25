import { connection } from './dbConnection.js';

export const getOneProduct = async (id) => {
    let db;

    try {
        // 1. Abrir conexión
        db = await connection();

        // 2. Ejecutar query
        const [rows] = await db.query(
            'SELECT * FROM productos WHERE id = ?',
            [id]
        );

        // 3. Retornar resultado (puede ser un producto o null)
        return rows.length > 0 ? rows[0] : null;

    } catch (error) {
        console.error('Error al obtener producto:', error);
        throw error;

    } finally {
        // 4. Cerrar conexión
        if (db) {
            await db.end();
            console.log("Base de datos cerrada")
        }
    }
};