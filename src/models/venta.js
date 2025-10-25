// El sistema debe poder persistir en la base de datos el registro
//  de las ventas realizadas exitosamente, junto 
// con el nombre del usuario que las efectuó, la fecha y el precio total. 

// VENTAS
// {
//     'id': 1,
//     'cliente': 'nombre',
//     'fecha': 'newDate()',
//     'total': 'sumaTotal'
// }

// // DETALLE VENTAS

// {
//     'id_venta': 'ventas.id',
//     'productos':[
//         {
//             'id_producto': 'producto.id',
//             'precio_unitario': 'precio_unitario',
//             'cantidad': 'cantidad'},
//         {
//             'id_producto': 'producto.id',
//             'precio_unitario': 'precio_unitario',
//             'cantidad': 'cantidad'},
//         {
//             'id_producto': 'producto.id',
//             'precio_unitario': 'precio_unitario',
//             'cantidad': 'cantidad'}
//     ]
// }

import { DataTypes } from 'sequelize';
import { sequelize } from '../databaseORM/index.js';

export const Ventas = sequelize.define('Ventas', 
    {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        cliente: { type: DataTypes.STRING, allowNull: false, },
        fecha: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
    }
);