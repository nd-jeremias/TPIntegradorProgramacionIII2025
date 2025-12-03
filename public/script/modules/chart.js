/**
 * Guarda el array en LocalStorage
 * @param {Array} carrito Lista de productos cargados hasta el momento
 */
function guardarCarrito(carrito) {
    const carritoTxt = JSON.stringify(carrito);
    localStorage.setItem("carrito", carritoTxt);
}

/**
 * Añade un producto al carrito de compras.
 * @param {number} id - El ID único del producto.
 * @param {string} titulo - El título del producto.
 * @param {number} precio - El precio unitario del producto.
 */
export function agregarAlCarrito(id, titulo, precio) {
    let carrito = JSON.parse(localStorage.getItem("carrito") || "[]");

    // Verificar si el producto ya está en el carrito
    const productoExistente = carrito.find((item) => item.id === id);

    if (productoExistente) {
        // Si existe, aumentamos la cantidad
        productoExistente.cantidad++;
        console.log(`Se sumo un item mas de ${titulo}`);
    } else {
        // Si no existe, creamos un nuevo objeto ítem y lo agregamos al array
        const nuevoItem = {
            id: id,
            titulo: titulo,
            precio: precio,
            cantidad: 1,
        };
        carrito.push(nuevoItem);
        console.log(`Se añadió ${titulo} por primera vez al carrito.`);
    }

    // 2. Guardar el estado actual del carrito en localStorage
    guardarCarrito(carrito);

    // Opcional: Actualizar la interfaz de usuario (UI), por ejemplo, un contador del carrito
    // actualizarContadorCarrito();
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
    guardarCarrito(carrito);
}
