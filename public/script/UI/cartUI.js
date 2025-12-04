export function updateCartBadge() {

    // 1. Leer carrito del localStorage
    const carrito = JSON.parse(localStorage.getItem("carrito"));

    if(!carrito) return

    // 2. Calcular la cantidad total de unidades
    const totalUnidades = carrito.reduce((acc, item) => acc + item.cantidad, 0);

    // 3. Conseguir el badge visual del navbar
    const badge = document.getElementById("cart-badge");

    // 4. Actualizar UI del badge
    if (totalUnidades > 0) {
        badge.textContent = totalUnidades;   // mostrar número
        badge.classList.remove("d-none");    // asegurarse de que se vea
    } else {
        badge.classList.add("d-none");       // si no hay items, ocultarlo
        badge.textContent = "";              // limpiar texto
    }
}
