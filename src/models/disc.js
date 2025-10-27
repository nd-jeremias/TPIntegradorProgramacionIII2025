import { DataTypes } from 'sequelize';
import { sequelize } from '../database/index.js';

export const Discos = sequelize.define('Discos', 
    {
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        id_producto: { type: DataTypes.INTEGER, allowNull: false },
        interprete: { type: DataTypes.STRING(100), allowNull: false },
        genero: { type: DataTypes.STRING(45), allowNull: true },
        año: { type: DataTypes.INTEGER, allowNull: true }
    }, 
    {
        timestamps: false
    }
);