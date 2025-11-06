import { Productos, Discos, Libros, Categorias } from "../models/index.js"; // CAMBIAR A INDEX.JS CUANDO SE HAGA LA RELACION

export const getProducts = async (req, res) => {

    try {

        const productos = await Productos.findAll(
            {
                include: [
                    {
                      model: Categorias, 
                      as: 'categoria',
                      attributes: ['nombre']
                    }
                ],
                raw: true, // Esto elimina la cascada, y devuelve el objeto plano
                attributes: { exclude: ['id_categoria'] }
            }
        );

        res.send(productos);
        
    } catch (error) {
        console.error( { message: 'Error al obtener productos: ', error } )
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
                    { model: Discos, as: 'info_disco', attributes: [ 'interprete', 'genero', 'año' ] }, 
                    { model: Libros, as: 'info_libro', attributes: [ 'autor', 'editorial', 'genero' ]}
                ],
                attributes: { exclude: ['id_categoria'] }
            }
        );

        res.send(producto)
    } catch (error) {
        console.log({message: `Error al obtener el producto id: ${id}: ${error}`})
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
        console.log({message: `Error al dar de baja el producto id: ${id}: ${error}`})
    }
}

export const createProduct = async (req, res) => {
    
    const {  titulo, precio, imagen, stock, id_categoria, estado, detalles } = req.body;
    try {
        
        const nuevoProducto = await Productos.create( { titulo, precio, imagen, stock, id_categoria, estado} );
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
        
        res.status(201).json( { message: `Nuevo producto agregado. ID autogenerado: ${nuevoProducto.id}` } )

    } catch (error) {
        res.status(500).json({ message: `Error al crear producto: ${error.message}` });
    }
}

export const updateProduct = async (req, res) => {

    const producto = req.body;
    const { id } = req.params

    try {        
        await Productos.update(
            {
                titulo: producto.titulo,
                precio: producto.precio,
                imagen: producto.imagen,
                stock: producto.stock,
                categoria: producto.categoria,
                estado: producto.estado 
            },
            { where: { id } }
        )
    } catch (error) {
        console.log({message: `Error al modificar producto id ${id}: ${error}`})
    }
}