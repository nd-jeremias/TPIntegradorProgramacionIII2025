import { Ventas, DetalleVentas, Productos, Categorias, Libros, Discos, Usuarios, Generos } from '../models/exportModels.js';

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
        ]);
        console.log('📊 Categorias creadas')

        // 2 Insertar productos
        const productos = await Productos.bulkCreate([
        { titulo: 'Thriller', precio: 25.99, imagen: '/img/CIL001.jpg', stock: 50, id_categoria: 1, estado: true },
        { titulo: 'Back in Black', precio: 22.50, imagen: '/img/CIL002.jpg', stock: 40, id_categoria: 1, estado: true },
        { titulo: 'The Dark Side of the Moon', precio: 27.80, imagen: '/img/CIL003.jpg', stock: 30, id_categoria: 1, estado: true },
        { titulo: 'The Bodyguard', precio: 18.90, imagen: '/img/CIL004.jpg', stock: 20, id_categoria: 1, estado: true },
        { titulo: 'Rumours', precio: 21.40, imagen: '/img/CIL005.jpg', stock: 35, id_categoria: 1, estado: true },
        { titulo: 'Saturday Night Fever', precio: 19.99, imagen: '/img/CIL006.jpg', stock: 25, id_categoria: 1, estado: true },
        { titulo: 'Hotel California', precio: 23.70, imagen: '/img/CIL007.jpg', stock: 32, id_categoria: 1, estado: true },
        { titulo: 'Their Greatest Hits', precio: 24.60, imagen: '/img/CIL008.jpg', stock: 40, id_categoria: 1, estado: true },
        { titulo: 'Come On Over', precio: 17.90, imagen: '/img/CIL009.jpg', stock: 20, id_categoria: 1, estado: true },
        { titulo: '21', precio: 20.50, imagen: '/img/CIL010.jpg', stock: 50, id_categoria: 1, estado: true },
        { titulo: 'Bad', precio: 25.00, imagen: '/img/CIL011.jpg', stock: 45, id_categoria: 1, estado: true },
        { titulo: 'Led Zeppelin IV', precio: 26.30, imagen: '/img/CIL012.jpg', stock: 30, id_categoria: 1, estado: true },
        { titulo: 'Jagged Little Pill', precio: 19.40, imagen: '/img/CIL013.jpg', stock: 28, id_categoria: 1, estado: true },
        { titulo: 'Abbey Road', precio: 28.90, imagen: '/img/CIL014.jpg', stock: 25, id_categoria: 1, estado: true },
        { titulo: 'Born in the USA', precio: 20.10, imagen: '/img/CIL015.jpg', stock: 35, id_categoria: 1, estado: true },
        { titulo: 'Nevermind', precio: 24.20, imagen: '/img/CIL016.jpg', stock: 25, id_categoria: 1, estado: true },
        { titulo: 'Appetite for Destruction', precio: 22.00, imagen: '/img/CIL017.jpg', stock: 30, id_categoria: 1, estado: true },
        { titulo: '1 (One)', precio: 26.00, imagen: '/img/CIL018.jpg', stock: 20, id_categoria: 1, estado: true },
        { titulo: 'Supernatural', precio: 23.30, imagen: '/img/CIL019.jpg', stock: 30, id_categoria: 1, estado: true },
        { titulo: 'The Eminem Show', precio: 21.80, imagen: '/img/CIL020.jpg', stock: 35, id_categoria: 1, estado: true },
        { titulo: 'Hybrid Theory', precio: 20.70, imagen: '/img/CIL021.jpg', stock: 40, id_categoria: 1, estado: true },
        { titulo: 'Oops!..._I_Did It Again', precio: 18.50, imagen: '/img/CIL022.jpg', stock: 30, id_categoria: 1, estado: true },
        { titulo: 'Come Away with Me', precio: 17.80, imagen: '/img/CIL023.jpg', stock: 25, id_categoria: 1, estado: true },
        { titulo: 'Falling into You', precio: 19.60, imagen: '/img/CIL024.jpg', stock: 28, id_categoria: 1, estado: true },
        { titulo: 'Back to Black', precio: 22.20, imagen: '/img/CIL025.jpg', stock: 20, id_categoria: 1, estado: true },
        { titulo: '1984', precio: 8900.00, imagen: '/img/CIL026.jpg', stock: 25, id_categoria: 2, estado: true },
        { titulo: 'Cien años de soledad', precio: 9200.00, imagen: '/img/CIL027.jpg', stock: 20, id_categoria: 2, estado: true },
        { titulo: 'Don Quijote de la Mancha', precio: 8700.00, imagen: '/img/CIL028.jpg', stock: 15, id_categoria: 2, estado: true },
        { titulo: 'El principito', precio: 7600.00, imagen: '/img/CIL029.jpg', stock: 40, id_categoria: 2, estado: true },
        { titulo: 'Crimen y castigo', precio: 8800.00, imagen: '/img/CIL030.jpg', stock: 20, id_categoria: 2, estado: true },
        { titulo: 'Orgullo y prejuicio', precio: 8500.00, imagen: '/img/CIL031.jpg', stock: 18, id_categoria: 2, estado: true },
        { titulo: 'En busca del tiempo perdido', precio: 9900.00, imagen: '/img/CIL032.jpg', stock: 12, id_categoria: 2, estado: true },
        { titulo: 'Ulises', precio: 9700.00, imagen: '/img/CIL033.jpg', stock: 10, id_categoria: 2, estado: true },
        { titulo: 'Fahrenheit 451', precio: 8000.00, imagen: '/img/CIL034.jpg', stock: 22, id_categoria: 2, estado: true },
        { titulo: 'Matar a un ruiseñor', precio: 8800.00, imagen: '/img/CIL035.jpg', stock: 25, id_categoria: 2, estado: true },
        { titulo: 'El gran Gatsby', precio: 8300.00, imagen: '/img/CIL036.jpg', stock: 30, id_categoria: 2, estado: true },
        { titulo: 'Los miserables', precio: 9400.00, imagen: '/img/CIL037.jpg', stock: 15, id_categoria: 2, estado: true },
        { titulo: 'La odisea', precio: 9100.00, imagen: '/img/CIL038.jpg', stock: 10, id_categoria: 2, estado: true },
        { titulo: 'La Iliada', precio: 9000.00, imagen: '/img/CIL039.jpg', stock: 10, id_categoria: 2, estado: true },
        { titulo: 'El viejo y el mar', precio: 7800.00, imagen: '/img/CIL040.jpg', stock: 25, id_categoria: 2, estado: true },
        { titulo: 'El retrato de Dorian Gray', precio: 8500.00, imagen: '/img/CIL041.jpg', stock: 18, id_categoria: 2, estado: true },
        { titulo: 'Rayuela', precio: 8700.00, imagen: '/img/CIL042.jpg', stock: 22, id_categoria: 2, estado: true },
        { titulo: 'La metamorfosis', precio: 8100.00, imagen: '/img/CIL043.jpg', stock: 35, id_categoria: 2, estado: true },
        { titulo: 'Moby Dick', precio: 9300.00, imagen: '/img/CIL044.jpg', stock: 10, id_categoria: 2, estado: true },
        { titulo: 'El nombre de la rosa', precio: 8900.00, imagen: '/img/CIL045.jpg', stock: 20, id_categoria: 2, estado: true },
        { titulo: 'La sombra del viento', precio: 8600.00, imagen: '/img/CIL046.jpg', stock: 30, id_categoria: 2, estado: true },
        { titulo: 'El alquimista', precio: 8200.00, imagen: '/img/CIL047.jpg', stock: 45, id_categoria: 2, estado: true },
        { titulo: 'Dracula', precio: 8400.00, imagen: '/img/CIL048.jpg', stock: 25, id_categoria: 2, estado: true },
        { titulo: 'Frankenstein', precio: 8500.00, imagen: '/img/CIL049.jpg', stock: 20, id_categoria: 2, estado: true },
        { titulo: 'Los pilares de la Tierra', precio: 9600.00, imagen: '/img/CIL050.jpg', stock: 12, id_categoria: 2, estado: true },
        { titulo: 'It', precio: 9800.00, imagen: '/img/CIL051.jpg', stock: 10, id_categoria: 2, estado: true }
        ]);
        console.log('📦 Productos cargados correctamente.');
        
        // 3 Insertar Generos
        await Generos.bulkCreate([
            { genero: 'Pop'},
            { genero: 'Rock'},
            { genero: 'Hard_Rock'},
            { genero: 'Rock_Progresivo'},
            { genero: 'Disco'},
            { genero: 'Country_Pop'},
            { genero: 'Soul'},
            { genero: 'Rock_Alternativo'},
            { genero: 'Grunge'},
            { genero: 'Pop_Rock'},
            { genero: 'Rock_Latino'},
            { genero: 'Rap'},
            { genero: 'Nu_Metal'},
            { genero: 'Jazz_Pop'},
            { genero: 'Distopía'},
            { genero: 'Realismo_mágico'},
            { genero: 'Aventura'},
            { genero: 'Fábula'},
            { genero: 'Romántico'},
            { genero: 'Filosófico'},
            { genero: 'Modernismo'},
            { genero: 'Ciencia_ficción'},
            { genero: 'Drama'},
            { genero: 'Ficción'},
            { genero: 'Épico'},
            { genero: 'Gótico'},
            { genero: 'Experimental'},
            { genero: 'Existencialismo'},
            { genero: 'Misterio'},
            { genero: 'Inspiracional'},
            { genero: 'Histórico'},
            { genero: 'Terror'},
        ])
        console.log("☢️ Generos cargados correctamente!")
        
        // 4 Insertar Discos
        const discos = await Discos.bulkCreate([
            { id_producto: 1, interprete: 'Michael Jackson', id_genero: 1, año: 1982 },
            { id_producto: 2, interprete: 'AC/DC', id_genero: 2, año: 1980 },
            { id_producto: 3, interprete: 'Pink Floyd', id_genero: 4, año: 1973 },
            { id_producto: 4, interprete: 'Whitney Houston', id_genero: 1, año: 1992 },
            { id_producto: 5, interprete: 'Fleetwood Mac', id_genero: 2, año: 1977 },
            { id_producto: 6, interprete: 'Bee Gees', id_genero: 5, año: 1977 },
            { id_producto: 7, interprete: 'Eagles', id_genero: 2, año: 1976 },
            { id_producto: 8, interprete: 'Eagles', id_genero: 2, año: 1976 },
            { id_producto: 9, interprete: 'Shania Twain', id_genero: 6, año: 1997 },
            { id_producto: 10, interprete: 'Adele', id_genero: 7, año: 2011 },
            { id_producto: 11, interprete: 'Michael Jackson', id_genero: 1, año: 1987 },
            { id_producto: 12, interprete: 'Led Zeppelin', id_genero: 2, año: 1971 },
            { id_producto: 13, interprete: 'Alanis Morissette', id_genero: 8, año: 1995 },
            { id_producto: 14, interprete: 'The Beatles', id_genero: 2, año: 1969 },
            { id_producto: 15, interprete: 'Bruce Springsteen', id_genero: 2, año: 1984 },
            { id_producto: 16, interprete: 'Nirvana', id_genero: 9, año: 1991 },
            { id_producto: 17, interprete: 'Guns N’ Roses', id_genero: 3, año: 1987 },
            { id_producto: 18, interprete: 'The Beatles', id_genero: 10, año: 2000 },
            { id_producto: 19, interprete: 'Santana', id_genero: 11, año: 1999 },
            { id_producto: 20, interprete: 'Eminem', id_genero: 12, año: 2002 },
            { id_producto: 21, interprete: 'Linkin Park', id_genero: 13, año: 2000 },
            { id_producto: 22, interprete: 'Britney Spears', id_genero: 1, año: 2000 },
            { id_producto: 23, interprete: 'Norah Jones', id_genero: 14, año: 2002 },
            { id_producto: 24, interprete: 'Celine Dion', id_genero: 1, año: 1996 },
            { id_producto: 25, interprete: 'Amy Winehouse', id_genero: 7, año: 2000 }
        ]);
        console.log("💿 Discos cargados correctamente!")
        
        // 5 Insertar Libros
        const libros = await Libros.bulkCreate([
            { id_producto: 26, autor: 'George Orwell', editorial: 'Minotauro', id_genero: 15 },
            { id_producto: 27, autor: 'Gabriel García Márquez', editorial: 'Debolsillo', id_genero: 16 },
            { id_producto: 28, autor: 'Miguel de Cervantes', editorial: 'Biblioteca Teide', id_genero: 17 },
            { id_producto: 29, autor: 'Antoine de Saint-Exupéry', editorial: 'Sudamericana', id_genero: 18 },
            { id_producto: 30, autor: 'Fiódor Dostoyevski', editorial: 'Debolsillo', id_genero: 23 },
            { id_producto: 31, autor: 'Jane Austen', editorial: 'Elejandria', id_genero: 19 },
            { id_producto: 32, autor: 'Marcel Proust', editorial: 'Edesa', id_genero: 20 },
            { id_producto: 33, autor: 'James Joyce', editorial: 'Pluton', id_genero: 21 },
            { id_producto: 34, autor: 'Ray Bradbury', editorial: 'Ballantine_Books', id_genero: 22 },
            { id_producto: 35, autor: 'Harper Lee', editorial: 'Haper Collins', id_genero: 23 },
            { id_producto: 36, autor: 'F. Scott Fitzgerald', editorial: "Losada", id_genero: 24 },
            { id_producto: 37, autor: 'Victor Hugo', editorial: 'Losada', id_genero: 31 },
            { id_producto: 38, autor: 'Homero', editorial: 'Salim', id_genero: 25 },
            { id_producto: 39, autor: 'Homero', editorial: 'Alma', id_genero: 25 },
            { id_producto: 40, autor: 'Ernest Hemingway', editorial: "Debolsillo", id_genero: 17 },
            { id_producto: 41, autor: 'Oscar Wilde', editorial: 'Alma', id_genero: 26 },
            { id_producto: 42, autor: 'Julio Cortázar', editorial: 'Sudamericana', id_genero: 27 },
            { id_producto: 43, autor: 'Franz Kafka', editorial: 'Alianza', id_genero: 28 },
            { id_producto: 44, autor: 'Herman Melville', editorial: 'Susaeta', id_genero: 17 },
            { id_producto: 45, autor: 'Umberto Eco', editorial: 'Lumen', id_genero: 29 },
            { id_producto: 46, autor: 'Carlos Ruiz Zafón', editorial: 'Planeta', id_genero: 29 },
            { id_producto: 47, autor: 'Paulo Coelho', editorial: 'Planeta', id_genero: 30 },
            { id_producto: 48, autor: 'Bram Stoker', editorial: 'Fontana', id_genero: 32 },
            { id_producto: 49, autor: 'Mary Shelley', editorial: 'Fontana', id_genero: 32 },
            { id_producto: 50, autor: 'Ken Follett', editorial: 'Plaza Janes', id_genero: 31 },
            { id_producto: 51, autor: 'Stephen King', editorial: 'Viking Press', id_genero: 32 }
        ]);
        console.log("📖 Libros cargados correctamente!")

        // 6 Insertar ventas
        const ventas = await Ventas.bulkCreate([
            { cliente: 'Juan Pérez', total: 40.00 },
            { cliente: 'María Gómez', total: 127.00 },
            { cliente: 'Carlos Díaz', total: 60.00 },
            { cliente: 'Lucía Fernández', total: 37.00 },
            { cliente: 'Santiago López', total: 105.00 }
            ]);
        console.log('💰 Ventas registradas.');
        
        // 7 Insertar detalle de ventas
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

        // 8 Insertar Usuarios(admin)
        await Usuarios.bulkCreate([
            { email: 'nicolas@email.com', nombre: 'Nicolas', apellido: 'Jeremias', contraseña: '$2b$10$X8IKXGfCWhiQoe34FqLf6eSIYfbRnLsCOHkVphwqpyKm9rRY1.sLO' },// password = '$2b$10$X8IKXGfCWhiQoe34FqLf6eSIYfbRnLsCOHkVphwqpyKm9rRY1.sLO' - salt = 10
            { email: 'admin@root.com', nombre: 'admin', apellido: 'root', contraseña: '$2b$10$n/SBDbMKtdHU7ijHXfit7.ySfb6Bqtv6v3M5MVzbCKCoLoKg3zGuu'}
        ]);
        console.log('✍🏻 Usuarios registrados.');

        console.log('✅ Base de datos inicializada con éxito.');
    } catch (error) {
        console.error('❌ Error al inicializar los datos:', error);
    } finally {
        //await sequelize.close();
    }
}
