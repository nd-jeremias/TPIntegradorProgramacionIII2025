import { DataTypes } from 'sequelize';
import { sequelize } from '../database/index.js';

export const Generos = sequelize.define('Generos', 
    {
        id_genero: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        genero: { type: DataTypes.STRING(45), allowNull: true }
    },
    {
        timestamps: false
    }
);