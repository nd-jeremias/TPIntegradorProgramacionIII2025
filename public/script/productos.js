import { getProducts } from './modules/getProducts.js'
import { loadBtns, cargarProductos } from './modules/renderElements.js'

let carrito = null;
let data = null;

let actualPage = 1;  // empieza en 0;
let totalPages = 0;
const ITEMS_PER_PAGE = 12; // Hacer coincidir en renderElements

function cambiarPagina(nuevaPagina) {
    cargarProductos(data, nuevaPagina);
    loadBtns(nuevaPagina, totalPages, cambiarPagina);
}

document.addEventListener("DOMContentLoaded", async () => {

    // Cargamos el carrito si existe en localStorage o creamos uno vacio
    carrito = JSON.parse(localStorage.getItem('carrito') || '[]');
    
    if(!data){
        data = await getProducts()
    }
    
    cargarProductos(data)

    totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);
    loadBtns(actualPage, totalPages, cambiarPagina);

});
