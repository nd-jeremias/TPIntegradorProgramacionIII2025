import { getProducts } from './modules/getProducts.js'
import { loadBtns, cargarProductos } from './UI/renderElements.js'
import { updateCartBadge } from './UI/cartUI.js'

let actualPage = 1;  // empieza en 1;
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

    // Cargamos el carrito si existe en localStorage o creamos uno vacio -- Edit: no es necesario(esta en LocalStorage)
    // let carrito = JSON.parse(localStorage.getItem('carrito') || '[]');
    
    localStorage.setItem("carrito", '[]'); // Inicializamos un carrito vacio siempre que cargue la pagina

    const data = await getProducts()
    
    cargarProductos(data, PAGE)
    
    totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);
    loadBtns(actualPage, totalPages, cambiarPagina);
    
    updateCartBadge()
});
