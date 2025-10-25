-- =============================================
--  CREACIÓN DE BASE DE DATOS
-- =============================================

CREATE DATABASE IF NOT EXISTS `tpintegrador`;
USE `tpintegrador`;

-- CONSULTA:
-- SELECT * FROM productos;

-- =============================================
--  TABLA: categorias
-- =============================================
DROP TABLE IF EXISTS `categorias`;
CREATE TABLE `categorias` (
  `id` INT NOT NULL,
  `nombre` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`)
);

-- Carga inicial de categorías base
INSERT INTO `categorias` (`id`, `nombre`) VALUES 
(1, 'disco'),
(2, 'libro');

-- =====================================
--  Tabla PRODUCTOS 
-- =====================================
DROP TABLE IF EXISTS `productos`;
CREATE TABLE `productos` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `titulo` VARCHAR(100) NOT NULL,
  `precio` DOUBLE NOT NULL,
  `imagen` VARCHAR(150) NULL,
  `stock` INT DEFAULT 0,
  `category` INT NOT NULL,
  `status` BOOLEAN DEFAULT TRUE
  FOREIGN KEY (`category`) REFERENCES `categorias`(`id`)
);

-- =====================================
--  Tabla LIBROS 
-- =====================================
DROP TABLE IF EXISTS `libros`;
CREATE TABLE `libros` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `id_producto` INT NOT NULL,
  `autor` VARCHAR(100) NOT NULL,
  `editorial` VARCHAR(45) NULL,
  `genero` VARCHAR(45) NULL,
  FOREIGN KEY (`id_producto`) REFERENCES `productos`(`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);

-- =====================================
--  Tabla DISCOS 
-- =====================================
DROP TABLE IF EXISTS `discos`;
CREATE TABLE `discos` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `id_producto` INT NOT NULL,
  `interprete` VARCHAR(100) NOT NULL,
  `genero` VARCHAR(45) NULL,
  `año` INT NULL,
  FOREIGN KEY (`id_producto`) REFERENCES `productos`(`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);

-- =====================================
--  Tabla VENTAS
-- =====================================
-- DROP TABLE IF EXISTS `ventas`;
-- CREATE TABLE ventas (
--   `id` INT AUTO_INCREMENT PRIMARY KEY,
--   `cliente` VARCHAR(100) NOT NULL,
--   `fecha` DATETIME DEFAULT CURRENT_TIMESTAMP,
--   `total` DOUBLE NOT NULL
-- );

-- =====================================
--  Tabla DETALLE_VENTA 
-- =====================================
-- DROP TABLE IF EXISTS `detalle_venta`;
-- CREATE TABLE `detalle_venta` (
--   `id_venta` INT NOT NULL,
--   `id_producto` INT NOT NULL,
--   `cantidad` INT DEFAULT 1,
--   `precio_unitario` DOUBLE NOT NULL,
--   FOREIGN KEY (`id_venta`) REFERENCES `ventas`(`id`)
--     ON DELETE CASCADE
--     ON UPDATE CASCADE,
--   FOREIGN KEY (`id_producto`) REFERENCES `productos`(`id`)
--     ON DELETE CASCADE
--     ON UPDATE CASCADE
-- );

-- =====================================
--  Tabla ADMINISTRADORES
-- =====================================
-- DROP TABLE IF EXISTS `administradores`;
-- CREATE TABLE `administradores` (
--   `id` INT PRIMARY KEY,
--   `usuario` VARCHAR(45) NOT NULL UNIQUE,
--   `password` VARCHAR(255) NOT NULL
-- );
