// importar las tablas a relacionar
import { Ventas, DetalleVentas, Productos, Categorias, Libros, Discos } from './exportModels.js'

// Definir Relaciones

// Relaciones DetalleVenta → Venta y Producto
Ventas.hasMany(DetalleVentas, { foreignKey: 'id_venta', as: 'detalle' });
DetalleVentas.belongsTo(Ventas, { foreignKey: 'id_venta', onDelete: 'CASCADE', onUpdate: 'CASCADE' });

Productos.hasMany(DetalleVentas, { foreignKey: 'id_producto' });
DetalleVentas.belongsTo(Productos, { foreignKey: 'id_producto', as: 'producto', onDelete: 'CASCADE', onUpdate: 'CASCADE' });

// Relación: productos.category → categorias.id
Categorias.hasMany(Productos, { foreignKey: 'id_categoria' });
Productos.belongsTo(Categorias, { foreignKey: 'id_categoria', as: 'categoria' });

// Relación: libros.id_producto → productos.id
Productos.hasOne(Libros, { foreignKey: 'id_producto', as: 'info_libro' });
Libros.belongsTo(Productos, { foreignKey: 'id_producto', onDelete: 'CASCADE', onUpdate: 'CASCADE' });

// Relación: discos.id_producto → productos.id
Productos.hasOne(Discos, { foreignKey: 'id_producto', as: 'info_disco' });
Discos.belongsTo(Productos, { foreignKey: 'id_producto', onDelete: 'CASCADE', onUpdate: 'CASCADE' });

// exportar las relaciones hechas

export { Ventas, DetalleVentas, Productos, Categorias, Libros, Discos };
