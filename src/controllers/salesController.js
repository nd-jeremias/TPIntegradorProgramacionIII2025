import { Ventas, DetalleVentas } from '../models/index.js'

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
        
        const venta = await Ventas.findOne( { where: { id:id }, include: DetalleVentas } )
        res.send(venta);
    } catch (error) {
        console.error(error)
    }

}