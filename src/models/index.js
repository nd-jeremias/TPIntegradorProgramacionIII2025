// importar las tablas a relacionar
import { Ventas, DetalleVentas, Productos, Categorias, Libros, Discos } from './exportModels.js'

// Definir Relaciones

// Relaciones DetalleVenta → Venta y Producto
Ventas.hasMany(DetalleVentas, { foreignKey: 'id_venta' });
DetalleVentas.belongsTo(Ventas, { foreignKey: 'id_venta', onDelete: 'CASCADE', onUpdate: 'CASCADE' });

Productos.hasMany(DetalleVentas, { foreignKey: 'id_producto' });
DetalleVentas.belongsTo(Productos, { foreignKey: 'id_producto', onDelete: 'CASCADE', onUpdate: 'CASCADE' });

// Relación: productos.category → categorias.id
Categorias.hasMany(Productos, { foreignKey: 'categorias' });
Productos.belongsTo(Categorias, { foreignKey: 'categorias' });

// Relación: libros.id_producto → productos.id
Productos.hasOne(Libros, { foreignKey: 'id_producto' });
Libros.belongsTo(Productos, { foreignKey: 'id_producto', onDelete: 'CASCADE', onUpdate: 'CASCADE' });

// Relación: discos.id_producto → productos.id
Productos.hasOne(Discos, { foreignKey: 'id_producto' });
Discos.belongsTo(Productos, { foreignKey: 'id_producto', onDelete: 'CASCADE', onUpdate: 'CASCADE' });

// exportar las relaciones echas

export { Ventas, DetalleVentas, Productos, Categorias, Libros, Discos };
