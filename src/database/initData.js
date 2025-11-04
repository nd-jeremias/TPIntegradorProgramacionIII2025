import { Ventas, DetalleVentas, Productos, Categorias, Libros, Discos, Usuarios } from '../models/exportModels.js';

export async function seedData() {
    try {
        // 1️⃣ Sincronizar (crear tablas si no existen)
        // await sequelize.sync({ force: true });
        // console.log('🧱 Tablas sincronizadas correctamente.');

        // HACER DROP TABLE DETALLE_VENTAS LIBROS DISCOS PRODUCTOS CATEGORIAS -- ESE ORDEN

        // 1 Insertar Categorias
        await Categorias.bulkCreate([
            { nombre: 'Disco'},
            { nombre: 'Libro'}
        ])

        // 2 Insertar productos
        const productos = await Productos.bulkCreate([
        { titulo: 'Thriller', precio: 25.99, imagen: './src/data/img/Thriller', stock: 50, id_categoria: 1, estado: true },
        { titulo: 'Back_in_Black', precio: 22.50, imagen: './src/data/img/Back_in_Black', stock: 40, id_categoria: 1, estado: true },
        { titulo: 'The_Dark_Side_of_the_Moon', precio: 27.80, imagen: './src/data/img/The_Dark_Side_of_the_Moon', stock: 30, id_categoria: 1, estado: true },
        { titulo: 'The_Bodyguard', precio: 18.90, imagen: './src/data/img/The_Bodyguard', stock: 20, id_categoria: 1, estado: true },
        { titulo: 'Rumours', precio: 21.40, imagen: './src/data/img/Rumours', stock: 35, id_categoria: 1, estado: true },
        { titulo: 'Saturday_Night_Fever', precio: 19.99, imagen: './src/data/img/Saturday_Night_Fever', stock: 25, id_categoria: 1, estado: true },
        { titulo: 'Hotel_California', precio: 23.70, imagen: './src/data/img/Hotel_California', stock: 32, id_categoria: 1, estado: true },
        { titulo: 'Their_Greatest_Hits', precio: 24.60, imagen: './src/data/img/Their_Greatest_Hits', stock: 40, id_categoria: 1, estado: true },
        { titulo: 'Come_On_Over', precio: 17.90, imagen: './src/data/img/Come_On_Over', stock: 20, id_categoria: 1, estado: true },
        { titulo: '21', precio: 20.50, imagen: './src/data/img/21', stock: 50, id_categoria: 1, estado: true },
        { titulo: 'Bad', precio: 25.00, imagen: './src/data/img/Bad', stock: 45, id_categoria: 1, estado: true },
        { titulo: 'Led_Zeppelin_IV', precio: 26.30, imagen: './src/data/img/Led_Zeppelin_IV', stock: 30, id_categoria: 1, estado: true },
        { titulo: 'Jagged_Little_Pill', precio: 19.40, imagen: './src/data/img/Jagged_Little_Pill', stock: 28, id_categoria: 1, estado: true },
        { titulo: 'Abbey_Road', precio: 28.90, imagen: './src/data/img/Abbey_Road', stock: 25, id_categoria: 1, estado: true },
        { titulo: 'Born_in_the_USA', precio: 20.10, imagen: './src/data/img/Born_in_the_USA', stock: 35, id_categoria: 1, estado: true },
        { titulo: 'Nevermind', precio: 24.20, imagen: './src/data/img/Nevermind', stock: 25, id_categoria: 1, estado: true },
        { titulo: 'Appetite_for_Destruction', precio: 22.00, imagen: './src/data/img/Appetite_for_Destruction', stock: 30, id_categoria: 1, estado: true },
        { titulo: '1_(One)', precio: 26.00, imagen: './src/data/img/1_(One)', stock: 20, id_categoria: 1, estado: true },
        { titulo: 'Supernatural', precio: 23.30, imagen: './src/data/img/Supernatural', stock: 30, id_categoria: 1, estado: true },
        { titulo: 'The_Eminem_Show', precio: 21.80, imagen: './src/data/img/The_Eminem_Show', stock: 35, id_categoria: 1, estado: true },
        { titulo: 'Hybrid_Theory', precio: 20.70, imagen: './src/data/img/Hybrid_Theory', stock: 40, id_categoria: 1, estado: true },
        { titulo: 'Oops!..._I_Did_It_Again', precio: 18.50, imagen: './src/data/img /Oops!..._Did_It_Again', stock: 30, id_categoria: 1, estado: true },
        { titulo: 'Come_Away_with_Me', precio: 17.80, imagen: './src/data/img/Come_Away_with_Me', stock: 25, id_categoria: 1, estado: true },
        { titulo: 'Falling_into_You', precio: 19.60, imagen: './src/data/img/Falling_into_You', stock: 28, id_categoria: 1, estado: true },
        { titulo: 'Back_to_Black', precio: 22.20, imagen: './src/data/img/Back_to_Black', stock: 20, id_categoria: 1, estado: true },
        { titulo: '1984', precio: 8900.00, imagen: './src/data/img/1984.jpg', stock: 25, id_categoria: 2, estado: true },
        { titulo: 'Cien_años_de_soledad', precio: 9200.00, imagen: './src/data/img/Cien_años_de_soledad.jpg', stock: 20, id_categoria: 2, estado: true },
        { titulo: 'Don_Quijote_de_la_Mancha', precio: 8700.00, imagen: './src/data/img/Don_Quijote_de_la_Mancha.jpg', stock: 15, id_categoria: 2, estado: true },
        { titulo: 'El_principito', precio: 7600.00, imagen: './src/data/img/El_principito.jpg', stock: 40, id_categoria: 2, estado: true },
        { titulo: 'Crimen_y_castigo', precio: 8800.00, imagen: './src/data/img/Crimen_y_castigo.jpg', stock: 20, id_categoria: 2, estado: true },
        { titulo: 'Orgullo_y_prejuicio', precio: 8500.00, imagen: './src/data/img/Orgullo_y_prejuicio.jpg', stock: 18, id_categoria: 2, estado: true },
        { titulo: 'En_busca_del_tiempo_perdido', precio: 9900.00, imagen: './src/data/img/En_busca_del_tiempo_perdido.jpg', stock: 12, id_categoria: 2, estado: true },
        { titulo: 'Ulises', precio: 9700.00, imagen: './src/data/img/Ulises.jpg', stock: 10, id_categoria: 2, estado: true },
        { titulo: 'Fahrenheit_451', precio: 8000.00, imagen: './src/data/img/Fahrenheit_451.jpg', stock: 22, id_categoria: 2, estado: true },
        { titulo: 'Matar_a_un_ruiseñor', precio: 8800.00, imagen: './src/data/img/Matar_a_un_ruiseñor.jpg', stock: 25, id_categoria: 2, estado: true },
        { titulo: 'El_gran_Gatsby', precio: 8300.00, imagen: './src/data/img/El_gran_Gatsby.jpg', stock: 30, id_categoria: 2, estado: true },
        { titulo: 'Los_miserables', precio: 9400.00, imagen: './src/data/img/Los_miserables.jpg', stock: 15, id_categoria: 2, estado: true },
        { titulo: 'La_odisea', precio: 9100.00, imagen: './src/data/img/La_odisea.jpg', stock: 10, id_categoria: 2, estado: true },
        { titulo: 'La_Iliada', precio: 9000.00, imagen: './src/data/img/La_Iliada.jpg', stock: 10, id_categoria: 2, estado: true },
        { titulo: 'El_viejo_y_el_mar', precio: 7800.00, imagen: './src/data/img/El_viejo_y_el_mar.jpg', stock: 25, id_categoria: 2, estado: true },
        { titulo: 'El_retrato_de_Dorian_Gray', precio: 8500.00, imagen: './src/data/img/El_retrato_de_Dorian_Gray.jpg', stock: 18, id_categoria: 2, estado: true },
        { titulo: 'Rayuela', precio: 8700.00, imagen: './src/data/img/Rayuela.jpg', stock: 22, id_categoria: 2, estado: true },
        { titulo: 'La_metamorfosis', precio: 8100.00, imagen: './src/data/img/La_metamorfosis.jpg', stock: 35, id_categoria: 2, estado: true },
        { titulo: 'Moby_Dick', precio: 9300.00, imagen: './src/data/img/Moby_Dick.jpg', stock: 10, id_categoria: 2, estado: true },
        { titulo: 'El_nombre_de_la_rosa', precio: 8900.00, imagen: './src/data/img/El_nombre_de_la_rosa.jpg', stock: 20, id_categoria: 2, estado: true },
        { titulo: 'La_sombra_del_viento', precio: 8600.00, imagen: './src/data/img/La_sombra_del_viento.jpg', stock: 30, id_categoria: 2, estado: true },
        { titulo: 'El_alquimista', precio: 8200.00, imagen: './src/data/img/El_alquimista.jpg', stock: 45, id_categoria: 2, estado: true },
        { titulo: 'Dracula', precio: 8400.00, imagen: './src/data/img/Dracula.jpg', stock: 25, id_categoria: 2, estado: true },
        { titulo: 'Frankenstein', precio: 8500.00, imagen: './src/data/img/Frankenstein.jpg', stock: 20, id_categoria: 2, estado: true },
        { titulo: 'Los_pilares_de_la_Tierra', precio: 9600.00, imagen: './src/data/img/Los_pilares_de_la_Tierra.jpg', stock: 12, id_categoria: 2, estado: true },
        { titulo: 'It', precio: 9800.00, imagen: './src/data/img/It.jpg', stock: 10, id_categoria: 2, estado: true }
        ]);
        console.log('📦 Productos cargados correctamente.');

        // 3 Insertar Discos
        const discos = await Discos.bulkCreate([
            { id_producto: 1, interprete: 'Michael Jackson', genero: 'Pop', año: 1982 },
            { id_producto: 2, interprete: 'AC/DC', genero: 'Rock', año: 1980 },
            { id_producto: 3, interprete: 'Pink Floyd', genero: 'Rock-Progresivo', año: 1973 },
            { id_producto: 4, interprete: 'Whitney Houston', genero: 'Pop', año: 1992 },
            { id_producto: 5, interprete: 'Fleetwood Mac', genero: 'Rock', año: 1977 },
            { id_producto: 6, interprete: 'Bee Gees', genero: 'Disco', año: 1977 },
            { id_producto: 7, interprete: 'Eagles', genero: 'Rock', año: 1976 },
            { id_producto: 8, interprete: 'Eagles', genero: 'Rock', año: 1976 },
            { id_producto: 9, interprete: 'Shania Twain', genero: 'Country-Pop', año: 1997 },
            { id_producto: 10, interprete: 'Adele', genero: 'Soul', año: 2011 },
            { id_producto: 11, interprete: 'Michael Jackson', genero: 'Pop', año: 1987 },
            { id_producto: 12, interprete: 'Led Zeppelin', genero: 'Rock', año: 1971 },
            { id_producto: 13, interprete: 'Alanis Morissette', genero: 'Rock-Alternativo', año: 1995 },
            { id_producto: 14, interprete: 'The Beatles', genero: 'Rock', año: 1969 },
            { id_producto: 15, interprete: 'Bruce Springsteen', genero: 'Rock', año: 1984 },
            { id_producto: 16, interprete: 'Nirvana', genero: 'Grunge', año: 1991 },
            { id_producto: 17, interprete: 'Guns N’ Roses', genero: 'Hard Rock', año: 1987 },
            { id_producto: 18, interprete: 'The Beatles', genero: 'Pop-Rock', año: 2000 },
            { id_producto: 19, interprete: 'Santana', genero: 'Rock-Latino', año: 1999 },
            { id_producto: 20, interprete: 'Eminem', genero: 'Rap', año: 2002 },
            { id_producto: 21, interprete: 'Linkin Park', genero: 'Nu-Metal', año: 2000 },
            { id_producto: 22, interprete: 'Britney Spears', genero: 'Pop', año: 2000 },
            { id_producto: 23, interprete: 'Norah Jones', genero: 'Jazz-Pop', año: 2002 },
            { id_producto: 24, interprete: 'Celine Dion', genero: 'Pop', año: 1996 },
            { id_producto: 25, interprete: 'Amy Winehouse', genero: 'Soul', año: 2000 }
        ]);

        // 4 Insertar Libros
        const libros = await Libros.bulkCreate([
            { id_producto: 26, autor: 'George Orwell', editorial: 'Secker&Warburg', genero: 'Distopía' },
            { id_producto: 27, autor: 'Gabriel García Márquez', editorial: 'Sudamericana', genero: 'Realismo mágico' },
            { id_producto: 28, autor: 'Miguel de Cervantes', editorial: 'Francisco de Robles', genero: 'Aventura' },
            { id_producto: 29, autor: 'Antoine de Saint-Exupéry', editorial: 'Reynal & Hitchcock', genero: 'Fábula' },
            { id_producto: 30, autor: 'Fiódor Dostoyevski', editorial: 'The Russian Messenger', genero: 'Drama' },
            { id_producto: 31, autor: 'Jane Austen', editorial: 'T. Egerton', genero: 'Romántico' },
            { id_producto: 32, autor: 'Marcel Proust', editorial: 'Grasset', genero: 'Filosófico' },
            { id_producto: 33, autor: 'James Joyce', editorial: 'Sylvia Beach', genero: 'Modernismo' },
            { id_producto: 34, autor: 'Ray Bradbury', editorial: 'Ballantine Books', genero: 'Ciencia ficción' },
            { id_producto: 35, autor: 'Harper Lee', editorial: 'J. B. Lippincott & Co.', genero: 'Drama' },
            { id_producto: 36, autor: 'F. Scott Fitzgerald', editorial: "Charles Scribner's Sons", genero: 'Ficción' },
            { id_producto: 37, autor: 'Victor Hugo', editorial: 'A. Lacroix', genero: 'Histórico' },
            { id_producto: 38, autor: 'Homero', editorial: 'Antigua Grecia', genero: 'Épico' },
            { id_producto: 39, autor: 'Homero', editorial: 'Antigua Grecia', genero: 'Épico' },
            { id_producto: 40, autor: 'Ernest Hemingway', editorial: "Charles Scribner's Sons", genero: 'Aventura' },
            { id_producto: 41, autor: 'Oscar Wilde', editorial: 'Ward, Lock & Co.', genero: 'Gótico' },
            { id_producto: 42, autor: 'Julio Cortázar', editorial: 'Sudamericana', genero: 'Experimental' },
            { id_producto: 43, autor: 'Franz Kafka', editorial: 'Kurt Wolff', genero: 'Existencialismo' },
            { id_producto: 44, autor: 'Herman Melville', editorial: 'Harper & Brothers', genero: 'Aventura' },
            { id_producto: 45, autor: 'Umberto Eco', editorial: 'Bompiani', genero: 'Misterio' },
            { id_producto: 46, autor: 'Carlos Ruiz Zafón', editorial: 'Planeta', genero: 'Misterio' },
            { id_producto: 47, autor: 'Paulo Coelho', editorial: 'HarperTorch', genero: 'Inspiracional' },
            { id_producto: 48, autor: 'Bram Stoker', editorial: 'Archibald Constable', genero: 'Terror' },
            { id_producto: 49, autor: 'Mary Shelley', editorial: 'Lackington, Hughes, Harding, Mavor & Jones', genero: 'Terror' },
            { id_producto: 50, autor: 'Ken Follett', editorial: 'Macmillan', genero: 'Histórico' },
            { id_producto: 51, autor: 'Stephen King', editorial: 'Viking Press', genero: 'Terror' }
        ])

        // 5 Insertar ventas
        const ventas = await Ventas.bulkCreate([
            { cliente: 'Juan Pérez', total: 40.00 },
            { cliente: 'María Gómez', total: 127.00 },
            { cliente: 'Carlos Díaz', total: 60.00 },
            { cliente: 'Lucía Fernández', total: 37.00 },
            { cliente: 'Santiago López', total: 105.00 }
            ]);
        console.log('💰 Ventas registradas.');
        
        // 6 Insertar detalle de ventas
        await DetalleVentas.bulkCreate([
            // Venta 1
            { id_venta: ventas[0].id, id_producto: productos[0].id, cantidad: 1, precio_unitario: productos[0].precio },
            { id_venta: ventas[0].id, id_producto: productos[2].id, cantidad: 1, precio_unitario: productos[2].precio },

            // Venta 2
            { id_venta: ventas[1].id, id_producto: productos[1].id, cantidad: 2, precio_unitario: productos[1].precio },
            { id_venta: ventas[1].id, id_producto: productos[2].id, cantidad: 1, precio_unitario: productos[2].precio },
            { id_venta: ventas[1].id, id_producto: productos[3].id, cantidad: 1, precio_unitario: productos[3].precio },
            { id_venta: ventas[1].id, id_producto: productos[4].id, cantidad: 1, precio_unitario: productos[4].precio },

            // Venta 3
            { id_venta: ventas[2].id, id_producto: productos[3].id, cantidad: 2, precio_unitario: productos[3].precio },

            // Venta 4
            { id_venta: ventas[3].id, id_producto: productos[0].id, cantidad: 1, precio_unitario: productos[0].precio },
            { id_venta: ventas[3].id, id_producto: productos[1].id, cantidad: 1, precio_unitario: productos[1].precio },

            // Venta 5
            { id_venta: ventas[4].id, id_producto: productos[0].id, cantidad: 2, precio_unitario: productos[0].precio },
            { id_venta: ventas[4].id, id_producto: productos[2].id, cantidad: 3, precio_unitario: productos[2].precio }
        ]);
        console.log('🧾 Detalle de ventas cargado correctamente.');

        // 7 Insertar Usuarios(admin)
        await Usuarios.bulkCreate([
            { email: 'nicolas@email.com', nombre: 'Nicolas', apellido: 'Jeremias', contraseña: '$2b$10$X8IKXGfCWhiQoe34FqLf6eSIYfbRnLsCOHkVphwqpyKm9rRY1.sLO' },// password = '$2b$10$X8IKXGfCWhiQoe34FqLf6eSIYfbRnLsCOHkVphwqpyKm9rRY1.sLO' - salt = 10
        ])

        console.log('✅ Base de datos inicializada con éxito.');
    } catch (error) {
        console.error('❌ Error al inicializar los datos:', error);
    } finally {
        //await sequelize.close();
    }
}
