import { DataTypes } from 'sequelize';
import { sequelize } from '../database/index.js';

export const Libros = sequelize.define('Libros', 
    {
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        id_producto: { type: DataTypes.INTEGER, allowNull: false },
        autor: { type: DataTypes.STRING(100), allowNull: false },
        editorial: { type: DataTypes.STRING(45), allowNull: true },
        genero: { type: DataTypes.STRING(45), allowNull: true }
    },
    {
        timestamps: false
    }
);