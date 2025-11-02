import { DataTypes } from 'sequelize';
import { sequelize } from '../database/index.js';

export const Categorias = sequelize.define('Categorias', 
    
    {
        id: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false, autoIncrement: true },
        nombre: { type: DataTypes.STRING(45), allowNull: false }
    }, 
    {
        timestamps: false
    }
    
);