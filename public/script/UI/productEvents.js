import { agregarAlCarrito, eliminarDelCarrito } from "../modules/chart.js";
import { modStock } from "./renderElements.js";

export function attachProductEvents(button, product) {
    // 1) Al iniciar, si ya está en carrito → mostrar botón eliminar
    const carrito = JSON.parse(localStorage.getItem("carrito") || "[]");
    const existe = carrito.some((item) => item.id === product.id);

    if (existe) {
        button
            .closest(".card")
            .querySelector(".remove")
            ?.classList.remove("d-none");
    }

    if (button.classList.contains("add")) {
        button.addEventListener("click", () => {
            agregarAlCarrito(product.id, product.tittle, product.price);
            
            const card = button.closest(".card")
            modStock((card.querySelector(".stock")), product)
            card.querySelector(".remove") ?.classList.remove("d-none");
            
        });
    }
    if (button.classList.contains("remove")) {
        button.addEventListener("click", () => {
            eliminarDelCarrito(product.id);
            
            const card = button.closest(".card")
            modStock((card.querySelector(".stock")), product, false)

            const carritoActual = JSON.parse(
                localStorage.getItem("carrito") || "[]"
            );
            // Se chequea si todavia hay items en el carrito sino lo borra
            const sigue = carritoActual.some((item) => item.id === product.id);

            if (!sigue) {
                card.querySelector(".remove")?.classList.add("d-none");
            }
        });
    }
}
