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
        INSERT INTO productos (titulo, precio, imagen, stock, category, status) VALUES (?, ?, ?, ?, ?, ?);
        `;

        // Array de valores en el mismo orden que la query
        const valores = [
            producto.titulo,
            producto.precio,
            producto.imagen,
            producto.stock,
            producto.category,
            producto.status
        ];

        const [result] = await db.query(sql, valores);

        // este es el id autogenerado
        const productoId = result.insertId;
        
        if (producto.category === 'libro') {
            const sqlLibro = `
                INSERT INTO libros (id_producto, autor, editorial, genero) VALUES (?, ?, ?, ?);
                `;
            await db.query(sqlLibro, [productoId, producto.autor, producto.editorial, producto.genero]);
        } else if (producto.category === 'disco') {
            const sqlDisco = `
            INSERT INTO discos (id_producto, interprete, genero, año) VALUES (?, ?, ?, ?);
            `;
            await pool.query(sqlDisco, [productoId, producto.interprete, producto.genero, producto.año]);
        }

    } catch (error) {
        console.error('Error al actualizar producto:', error);
        throw error;
    } finally {
        if (db) await db.end();
    }
};

// INSERT INTO productos (titulo, precio, imagen, stock, category, status) VALUES ('1984', 8900.00, './src/data/img/1984.jpg', 25, 'libro', TRUE),
// INSERT INTO libros (id_producto, autor, editorial, genero) VALUES (51, 'George Orwell', 'Secker & Warburg', 'Distopía')
// productos (titulo, precio, imagen, stock, category, status)
// INSERT INTO discos (id_producto, interprete, genero, año) VALUES (1, 'Michael Jackson', 'Pop', 1982),