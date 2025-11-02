import { DataTypes } from 'sequelize';
import { sequelize } from '../database/index.js';

export const Productos = sequelize.define('Productos', 
    {
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        titulo: { type: DataTypes.STRING(100), allowNull: false },
        precio: { type: DataTypes.DOUBLE, allowNull: false },
        imagen: { type: DataTypes.STRING(150), allowNull: true },
        stock: { type: DataTypes.INTEGER, defaultValue: 0 },
        id_categoria: { type: DataTypes.INTEGER, allowNull: false },
        estado: { type: DataTypes.BOOLEAN, defaultValue: true }
    },
    {
        timestamps: false
    }
);