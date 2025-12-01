import { Product } from '../../classes/Product.js'

const ITEMS_PER_PAGE = 9;

/**
 * Crea productos en el contenedor
 * @param {Number} page : pagina actual. Default: 1
 * @param {String} context : contexto de renderizado( "admin" || "user")
 */
export async function cargarProductos(data, context, page = 1) {

    const container = document.getElementById("cards-container");
    container.innerHTML = "";
    
    try {
        const start = (page - 1) * ITEMS_PER_PAGE;
        const finish = start + ITEMS_PER_PAGE;
        
        let productos = data.slice(start, finish);
        
        productos.forEach(p => {
            const imagen = (context == "admin") ? p.imagen : p.imagen = `/public${p.imagen}` // Esto es si lo cargamos desde LiveServer
            const producto = new Product(p.id, p.titulo, p.precio, imagen, p.stock, p.estado, p.categoria.nombre)
            container.appendChild(producto.toHTML(context));
        });

    } catch (error) {
        console.error("Error creando productos en container:", error);
        container.textContent = "Error al crear productos";
    }
}

/**
 * Carga de Botones Condicional
 * @param {Number} actualPage pagina actual de productos
 * @param {Number} totalPages Total de paginas calculado previamente segun productos
 * @param {Callback Function} pageChange Funcion Callback que maneja la paginacion
 */
export function loadBtns(actualPage, totalPages, pageChange) {

    const container = document.getElementById('navList-Container');
    container.innerHTML = '';

    // Crear un fragmento para inserción eficiente
    const fragment = document.createDocumentFragment();

    // 1. Lógica para el botón "Anterior"
    if (actualPage > 1) {
        const prevBtn = document.createElement('button');
        prevBtn.id = 'prevBtn';
        prevBtn.className = 'btn btn-dark m-2';
        prevBtn.textContent = 'Anterior';
        // Añade el listener directamente al crearlo
        prevBtn.addEventListener('click', () => pageChange(actualPage - 1));
        fragment.appendChild(prevBtn);
    }

    // Mostrar el número de página actual
    const pageInfo = document.createElement('span');
    pageInfo.textContent = `Página ${actualPage} de ${totalPages}`;
    pageInfo.className = ('m-2', "text-light");
    fragment.appendChild(pageInfo);

    // 2. Lógica para el botón "Siguiente"
    if (actualPage < totalPages) {
        const nextBtn = document.createElement('button');
        nextBtn.id = 'nextBtn';
        nextBtn.className = 'btn btn-dark m-2';
        nextBtn.textContent = 'Siguiente';
        // Añade el listener directamente al crearlo
        nextBtn.addEventListener('click', () => pageChange(actualPage + 1));
        fragment.appendChild(nextBtn);
    }

    // Inserta todos los botones en el DOM de una vez
    container.appendChild(fragment);
}