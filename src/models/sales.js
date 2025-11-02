import { DataTypes } from 'sequelize';
import { sequelize } from '../database/index.js';

export const Ventas = sequelize.define('Ventas', 
    {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, unique: true },
        cliente: { type: DataTypes.STRING(100), allowNull: false },
        total: { type: DataTypes.DOUBLE },
        fecha: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    },
    {
        timestamps: false,
    }
);