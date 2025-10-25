import { connection } from './dbConnection.js';

export const getAllProducts = async () => {
  let db;

  try {
    // 1. Abrir conexión
    db = await connection();

    // 2. Ejecutar query
    const [rows] = await db.query('SELECT * FROM productos');

    // 3. Retornar todos los productos (array)
    return rows;

  } catch (error) {
    console.error('Error al obtener productos:', error);
    throw error;

  } finally {
    // 4. Cerrar conexión
    if (db) {
      await db.end();
    }
  }
};
