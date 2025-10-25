import { Ventas } from '../models/venta.js'

export const dbInit = async () => {

    // HAY QUE BORRAR UPDATEDAT Y CREATED AT
    
    await Ventas.create({
        id: 1,
        cliente: 'Nico',
    });

    await Ventas.create({
        id: 2,
        cliente: 'Yani',
        fecha: '2025-10-25 19:03:36'
    });

    await Ventas.create({
        id: 3,
        cliente: 'Pepe',
    });
}