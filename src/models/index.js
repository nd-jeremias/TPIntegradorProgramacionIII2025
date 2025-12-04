// importar las tablas a relacionar
import { Ventas, DetalleVentas, Productos, Categorias, Libros, Discos, Generos, Usuarios } from './exportModels.js'

// Definir Relaciones

// --- Relación de muchos a muchos: Ventas <-> Productos a través de DetalleVentas ---
Ventas.belongsToMany(Productos, { through: DetalleVentas, foreignKey: 'id_venta', otherKey: 'id_producto', as: 'productos_vendidos' });
Productos.belongsToMany(Ventas, { through: DetalleVentas, foreignKey: 'id_producto', otherKey: 'id_venta', as: 'ventas_incluidas' });

// --- Relacion 1 a muchos: DetalleVenta → Venta y Producto - (Se mantienen para permitir el acceso directo a los atributos de DetalleVentas (cantidad, precio_unitario)) ---
Ventas.hasMany(DetalleVentas, { foreignKey: 'id_venta', as: 'detalle' });
DetalleVentas.belongsTo(Ventas, { foreignKey: 'id_venta', onDelete: 'CASCADE', onUpdate: 'CASCADE' });

Productos.hasMany(DetalleVentas, { foreignKey: 'id_producto', as: 'detalles_venta' });
DetalleVentas.belongsTo(Productos, { foreignKey: 'id_producto', as: 'producto', onDelete: 'CASCADE', onUpdate: 'CASCADE' });

// --- Relación 1 a muchos: productos.category → categorias.id () ---
Categorias.hasMany(Productos, { foreignKey: 'id_categoria', as: 'productos' });
Productos.belongsTo(Categorias, { foreignKey: 'id_categoria', as: 'categoria' });

// --- Relación 1 a 1 ---

// Relación: libros.id_producto → productos.id
Productos.hasOne(Libros, { foreignKey: 'id_producto', as: 'info_libro' });
Libros.belongsTo(Productos, { foreignKey: 'id_producto', onDelete: 'CASCADE', onUpdate: 'CASCADE' });

// Relación: discos.id_producto → productos.id
Productos.hasOne(Discos, { foreignKey: 'id_producto', as: 'info_disco' });
Discos.belongsTo(Productos, { foreignKey: 'id_producto', onDelete: 'CASCADE', onUpdate: 'CASCADE' });

// --- Relación 1 a muchos: Productos → Generos ---

// Relación: Libros/Discos a Generos
Discos.belongsTo(Generos, { foreignKey: 'id_genero', as: 'genero' });
Generos.hasMany(Discos, { foreignKey: 'id_genero', as: 'discos' }); 

Libros.belongsTo(Generos, { foreignKey: 'id_genero', as: 'genero' });
Generos.hasMany(Libros, { foreignKey: 'id_genero', as: 'libros' }); 

// exportar las relaciones hechas
export { Ventas, DetalleVentas, Productos, Categorias, Libros, Discos, Generos, Usuarios };
