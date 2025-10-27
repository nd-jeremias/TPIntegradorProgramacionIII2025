import { Productos, Discos, Libros } from "../models/exportModels.js";

export const getProducts = async (req, res) => {

    try {
        
        const productos = await Productos.findAll();
        res.send(productos);

    } catch (error) {
        console.error( { message: 'Error al obtener productos: ', error } )
    }
}

export const getOneProduct = async (req, res) => {

    const { id } = req.params
    
    try {
        const producto = await Productos.findOne({ where: { id: id }, });
        res.send(producto);
    } catch (error) {
        console.log({message: `Error al obtener el producto id: ${id}: ${error}`})
    }

}

export const disableProduct = async (req, res) => {

    const { id } = req.params;

    try {
        // const producto = await Productos.findOne( { where: { id:id } } );
        // producto.estado = false;
        // await producto.save();
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
    
    const producto = req.body;

    try {        
        const nuevoProducto = await Productos.create(
        { titulo: producto.titulo, precio: producto.precio, imagen: producto.imagen, stock: producto.stock, categoria: producto.stock, estado: producto.estado },)
        console.log("producto's auto-generated ID:", nuevoProducto.id);
    } catch (error) {
        console.log({message: `Error al crear producto nuevo: ${error}`})
    }
}