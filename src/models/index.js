// importar las tablas a relacionar
import { Ventas, DetalleVentas, Productos, Categorias, Libros, Discos } from './exportModels.js'

// Definir Relaciones

// Relaciones DetalleVenta → Venta y Producto
DetalleVentas.belongsTo(Ventas, { foreignKey: 'id_venta', onDelete: 'CASCADE', onUpdate: 'CASCADE' });
Ventas.hasMany(DetalleVentas, { foreignKey: 'id_venta' });

DetalleVentas.belongsTo(Productos, { foreignKey: 'id_producto', onDelete: 'CASCADE', onUpdate: 'CASCADE' });
Productos.hasMany(DetalleVentas, { foreignKey: 'id_producto' });

// Relación: productos.category → categorias.id
Productos.belongsTo(Categorias, { foreignKey: 'categorias' });
Categorias.hasMany(Productos, { foreignKey: 'categorias' });

// Relación: libros.id_producto → productos.id
Libros.belongsTo(Productos, { foreignKey: 'id_producto', onDelete: 'CASCADE', onUpdate: 'CASCADE' });
Productos.hasOne(Libros, { foreignKey: 'id_producto' });

// Relación: discos.id_producto → productos.id
Discos.belongsTo(Productos, { foreignKey: 'id_producto', onDelete: 'CASCADE', onUpdate: 'CASCADE' });
Productos.hasOne(Discos, { foreignKey: 'id_producto' });

// exportar las relaciones echas

export { Ventas, DetalleVentas, Productos, Categorias };
