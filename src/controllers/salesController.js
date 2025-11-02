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
        
        const venta = await Ventas.findOne( {
                where: { id:id },
                include: [ 
                    { 
                        model: DetalleVentas, 
                        as: 'detalle', 
                        include: [ { model: Productos, as: 'producto', attributes: [ 'titulo']}],
                        attributes:[ 'cantidad', 'precio_unitario'] 
                    }
                ]
            });

        if (!venta) return res.status(404).json({ message: 'Venta no encontrada' });
        
        // Transformar formato
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

        res.send(venta);
    } catch (error) {
        console.error(error)
    }

}

export const createSale = async (req, res) => {

    const { cliente, total, detalle } = req.body

    try {
        
        const venta = await Ventas.create( { cliente, total } );
        const id = venta.id;

        await DetalleVentas.bulkCreate( detalle.map((item) => ({
            id_venta: id,
            id_producto: item.id_producto,
            cantidad: item.cantidad,
            precio_unitario: item.precio_unitario,
        })));
        
        res.status(201).json( { message: `Nueva venta registrada. ID autogenerado: ${id}` } )
    } catch (error) {
        res.status(500).json({ message: `Error al registrar venta: ${error.message}` });
    }
}