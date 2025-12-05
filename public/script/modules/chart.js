import { updateCartBadge } from '../UI/cartUI.js'

/**
 * Añade un producto al carrito de compras.
 * @param {number} id - El ID único del producto.
 * @param {string} titulo - El título del producto.
 * @param {number} precio - El precio unitario del producto.
 */
export function agregarAlCarrito(producto) {
    let carrito = JSON.parse(localStorage.getItem("carrito") || "[]");
    
    // Verificar si el producto ya está en el carrito
    const productoExistente = carrito.find((item) => item.producto.id === producto.id);

    if (productoExistente) {
        // Si existe, aumentamos la cantidad
        productoExistente.cantidad++;
        console.log(`Se sumo un item mas id: ${producto.id}`);
    } else {
        carrito.push({
            producto: producto,
            cantidad: 1,
        })
        console.log(`Se añadió producto id: ${producto.id} por primera vez al carrito.`);
    }

    // 2. Guardar el estado actual del carrito en localStorage
    localStorage.setItem("carrito", JSON.stringify(carrito));

    // Actualizar contador del carrito
    updateCartBadge();
}

export function eliminarDelCarrito(id) {
    let carrito = JSON.parse(localStorage.getItem("carrito") || "[]");

    // Verificar si el producto ya está en el carrito
    const productoExistente = carrito.find((item) => item.id === id);

    if (productoExistente) {
        // Si existe, quitamos uno
        productoExistente.cantidad--;

        carrito = carrito.filter((item) => item.cantidad > 0); // Borro todos los productos q esten en 0

        console.log(`Se quito un item id ${id}`);
    }

    localStorage.setItem("carrito", JSON.stringify(carrito));
    
    // Actualizar contador del carrito
    updateCartBadge();
}
