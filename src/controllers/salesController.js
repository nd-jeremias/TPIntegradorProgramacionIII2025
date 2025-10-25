import { Ventas } from "../models/venta.js";

export const getVentas = async (req, res) => {
    try {
        
        const ventas = await Ventas.findAll();
        res.send(ventas);

    } catch (error) {
        console.error( { message: 'Error al traer ventas: ', error } )
    }
}