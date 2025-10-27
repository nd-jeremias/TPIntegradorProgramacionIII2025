import { DataTypes } from 'sequelize';
import { sequelize } from '../database/index.js';

export const DetalleVentas = sequelize.define('DetalleVentas', 
    
    {
        id_venta: { type: DataTypes.INTEGER, allowNull: false, },
        id_producto: { type: DataTypes.INTEGER, allowNull: false, },
        cantidad: { type: DataTypes.INTEGER, defaultValue: 1, },
        precio_unitario: { type: DataTypes.FLOAT, allowNull: false, },
    },
    {
        timestamps: false
    }

);