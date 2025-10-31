import { Ventas, DetalleVentas, Productos } from '../models/index.js'

export const getSales = async (req, res) => {
    try {
        
        const ventas = await Ventas.findAll();
        res.send(ventas);

    } catch (error) {
        console.error( { message: 'Error al traer ventas: ', error } )
    }
}

export const getOneSale = async (req, res) => {

    const { id } = req.params

    try {
        
        const venta = await Ventas.findOne( { where: { id:id } } )
        res.send(venta);

    } catch (error) {
        console.error( { message: `Error al encontrar venta id ${id}: ${error}` } )
    }
}

export const getDetailedSale = async (req, res) => {
    
    const { id } = req.params

    try {
        
        const venta = await Ventas.findOne( {
                where: { id:id },
                include: [ 
                    { 
                        model: DetalleVentas, 
                        as: 'detalle', 
                        include: [ { model: Productos, as: 'producto', attributes: [ 'titulo']}],
                        attributes:[ 'cantidad', 'precio_unitario'] 
                    } ] } );

        if (!venta) return res.status(404).json({ message: 'Venta no encontrada' });
        
        // transformar formato
        const respuesta = {
            id: venta.id,
            cliente: venta.cliente,
            fecha: venta.fecha,
            total: venta.total,
            detalle: venta.detalle.map((d) => ({
                producto: d.producto.titulo,
                cantidad: d.cantidad,
                precio_unitario: d.precio_unitario
            }))
        };
        
        res.send(respuesta);
    } catch (error) {
        console.error(error)
    }

}