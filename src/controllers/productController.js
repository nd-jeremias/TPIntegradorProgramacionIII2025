import { Productos, Discos, Libros, Categorias, Generos } from "../models/index.js";

export const getProducts = async (req, res) => {

    try {

        const productos = await Productos.findAll(
            {
                include: [
                    {
                        model: Categorias,
                        as: 'categoria',
                        attributes: ['nombre']
                    },
                ],
                // raw: true, Esto elimina la cascada, y devuelve el objeto plano
                attributes: { exclude: ['id_categoria'] }
            }
        );

        res.send(productos);

    } catch (error) {
        console.error({ message: 'Error al obtener productos: ', error })
    }
}

export const getOneProduct = async (req, res) => {

    const { id } = req.params

    try {
        const producto = await Productos.findOne(
            {
                where: { id: id },
                include: [
                    {
                        model: Categorias,
                        as: 'categoria',
                        attributes: ['nombre']
                    },
                    {
                        model: Discos,
                        required: false,
                        as: 'info_disco',
                        attributes: ['interprete', 'año'],
                        include: [
                            {
                                model: Generos,
                                attributes: ['genero'],
                                as: 'genero'
                            }
                        ]
                    },
                    { model: Libros, required: false, as: 'info_libro', attributes: ['autor', 'editorial'], include: [{ model: Generos, attributes: ['genero'], as: 'genero' }] }
                ],
                attributes: { exclude: ['id_categoria'] }
            }
        );

        res.send(producto)
    } catch (error) {
        console.log({ message: `Error al obtener el producto id: ${id}: ${error}` })
    }
}

export const disableProduct = async (req, res) => {

    const { id } = req.params;

    try {

        await Productos.update(
            { estado: false },
            { where: { id } }
        );

        res.status(200).json({ message: `Producto con id: ${id} modificado correctamente!` });

    } catch (error) {
        console.log({ message: `Error al dar de baja el producto id: ${id}: ${error}` })
    }
}

export const createProduct = async (req, res) => {

    const { titulo, precio, imagen, stock, id_categoria, estado, detalles } = req.body;
    try {

        const nuevoProducto = await Productos.create({ titulo, precio, imagen, stock, id_categoria, estado });
        const idProducto = nuevoProducto.id;

        if (id_categoria === 1) {
            await Discos.create(
                {
                    id_producto: idProducto,
                    interprete: detalles.interprete,
                    genero: detalles.genero,
                    año: detalles.año
                })
        } else if (id_categoria === 2) {
            await Libros.create(
                {
                    id_producto: idProducto,
                    autor: detalles.autor,
                    editorial: detalles.editorial,
                    genero: detalles.genero
                },
            );
        }

        res.status(201).json({ message: `Nuevo producto agregado. ID autogenerado: ${nuevoProducto.id}` })

    } catch (error) {
        res.status(500).json({ message: `Error al crear producto: ${error.message}` });
    }
}

export const updateProduct = async (req, res) => {

    const data = req.body;
    const { id } = req.params;
    try {

        // Buscar categoría por nombre
        const categoria = await Categorias.findOne({
            where: { nombre: data.categoria }
        });

        if (!categoria) {
            return res.status(400).json({ message: "Categoría no encontrada" });
        }


        const product = await Productos.findOne({where: { id: id }})
        console.log("Producto Recibido: ", data)
        console.log("Producto encontrado: ", JSON.stringify(product))
        // Actualizar producto
        const [updated] = await Productos.update(
            {
                titulo: data.titulo,
                precio: data.precio,
                imagen: data.imagen,
                stock: data.stock,
                id_categoria: categoria.id,
                estado: data.estado
            },
            { where: { id:id } }
        );

        console.log("Update: response: ", updated)
        // Verificamos que haya habido algun cambio
        if (updated === 0) {
            return res.status(404).json({ message: "Producto no encontrado" });
        }

        // Si es un disco usamos INFO_DISCO para actualizar info_disco
        if (data.info_disco) {

            // Buscar id_genero por nombre
            const generoDisco = await Generos.findOne({
                where: { genero: data.info_disco.genero }
            });

            if (!generoDisco) {
                return res.status(400).json({ message: "Género (disco) no encontrado" });
            }

            await Discos.update(
                {
                    interprete: data.info_disco.interprete,
                    año: data.info_disco.año,
                    id_genero: generoDisco.id_genero
                },
                { where: { id_producto: id } }
            );
        }

        // Si es un libro usamos INFO_LIBRO para actualizar info_libro
        if (data.info_libro) {

            const generoLibro = await Generos.findOne({
                where: { genero: data.info_libro.genero.genero }
            });

            if (!generoLibro) {
                return res.status(400).json({ message: "Género (libro) no encontrado" });
            }

            await Libros.update(
                {
                    autor: data.info_libro.autor,
                    editorial: data.info_libro.editorial,
                    id_genero: generoLibro.id_genero
                },
                { where: { id_producto: id } }
            );
        }

        res.status(200).json({ message: `Producto id: ${id}, modificado con exito!` })

    } catch (error) {
        console.log("Error al modificar producto:", error);
        res.status(500).json({ message: "Error interno al modificar el producto" });
    }
};
