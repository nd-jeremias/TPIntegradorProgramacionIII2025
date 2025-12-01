import { getProducts } from './modules/getProducts.js'
import { loadBtns, cargarProductos } from './modules/renderElements.js'

let carrito = null;
let data = null;

let actualPage = 1;  // empieza en 0;
let totalPages = 0;
const ITEMS_PER_PAGE = 9; // Hacer coincidir en renderElements

// Detecta automáticamente si la vista es admin o frontend
const PAGE = window.location.pathname.startsWith("/admin")
    ? "admin"
    : "user";

function cambiarPagina(nuevaPagina) {
    cargarProductos(data, PAGE, nuevaPagina);
    loadBtns(nuevaPagina, totalPages, cambiarPagina);
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

document.addEventListener("DOMContentLoaded", async () => {

    // Cargamos el carrito si existe en localStorage o creamos uno vacio
    carrito = JSON.parse(localStorage.getItem('carrito') || '[]');

    if (!data) {
        data = await getProducts()
    }

    cargarProductos(data, PAGE)

    totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);
    loadBtns(actualPage, totalPages, cambiarPagina);

});
