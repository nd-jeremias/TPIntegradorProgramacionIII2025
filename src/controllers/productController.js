import { Productos, Discos, Libros, Categorias } from "../models/exportModels.js"; // CAMBIAR A INDEX.JS CUANDO SE HAGA LA RELACION

export const getProducts = async (req, res) => {

    try {
        
        //const productos = await Productos.findAll( { include: Categorias } ); Esto me trae CATEGORIAS vacio
        const productos = await Productos.findAll();
        const categorias = await Categorias.findAll();
        // Se cambia numero de categoria por string(Revisar)
        categorias.forEach(c => {
            productos.forEach(p => {
                if(c.id == p.categoria){
                    p.categoria = c.nombre;
                }
            })
        });

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

export const getDetailedProduct = async (req,res) => {
    
    const { id } = req.params;

    try {
        const producto = await Productos.findOne( 
            {
                where: { id:id },
                include: [
                    
                ]
            } )

    } catch (error) {
        console.log({message: `Error al obtener el detalle del producto id: ${id}: ${error}`})
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
    
    const {  titulo, precio, imagen, stock, categoria, estado, variableUno, variableDos, variableTres } = req.body;

    try {
        
        const nuevoProducto = await Productos.create( { titulo, precio, imagen, stock, categoria, estado} )
        const idProducto = nuevoProducto.id
        
        if(categoria === "disco"){
            await Discos.create( { idProducto, variableUno, variableDos, variableTres } )
        }
        if(categoria === "libro"){
            await Libros.create( { idProducto, variableUno, variableDos, variableTres } )
        }
        
        res.status(201).json( { message: `Nuevo producto agregado. ID autogenerado: ${nuevoProducto.id}` } )
    } catch (error) {
        console.log({message: `Error al crear producto nuevo: ${error}`})
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
                categoria: producto.stock,
                estado: producto.estado 
            },
            { where: { id } }
        )
    } catch (error) {
        console.log({message: `Error al modificar producto id ${id}: ${error}`})
    }
}