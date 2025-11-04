import { DataTypes } from 'sequelize';
import { sequelize } from '../database/index.js';

export const Usuarios = sequelize.define('Usuarios', 
    {
        email: { type:DataTypes.STRING, allowNull: false, primaryKey: true },
        //id: { type: DataTypes.INTEGER, autoIncrement: true,  primaryKey: true },
        nombre: { type: DataTypes.STRING(100), allowNull: false },
        apellido: { type: DataTypes.STRING(100), allowNull: false },
        contraseña: { type: DataTypes.STRING(100), allowNull: false }
    },
    {
        timestamps: false
    }
);