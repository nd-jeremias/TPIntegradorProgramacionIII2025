import { Product } from "../../classes/Product.js";
import { attachProductEvents } from "./productEvents.js";
const ITEMS_PER_PAGE = 9;

/**
 * Carga de Botones Condicional
 * @param {Number} actualPage pagina actual de productos
 * @param {Number} totalPages Total de paginas calculado previamente segun productos
 * @param {Callback Function} pageChange Funcion Callback que maneja la paginacion
 */
export function loadBtns(actualPage, totalPages, pageChange) {
    const container = document.getElementById("navList-Container");
    container.innerHTML = "";

    // Crear un fragmento para inserción eficiente
    const fragment = document.createDocumentFragment();

    // 1. Lógica para el botón "Anterior"
    if (actualPage > 1) {
        const prevBtn = document.createElement("button");
        prevBtn.id = "prevBtn";
        prevBtn.className = "btn btn-dark m-2";
        prevBtn.textContent = "Anterior";
        // Añade el listener directamente al crearlo
        prevBtn.addEventListener("click", () => pageChange(actualPage - 1));
        fragment.appendChild(prevBtn);
    }

    // Mostrar el número de página actual
    const pageInfo = document.createElement("span");
    pageInfo.textContent = `Página ${actualPage} de ${totalPages}`;
    pageInfo.className = ("m-2", "text-light");
    fragment.appendChild(pageInfo);

    // 2. Lógica para el botón "Siguiente"
    if (actualPage < totalPages) {
        const nextBtn = document.createElement("button");
        nextBtn.id = "nextBtn";
        nextBtn.className = "btn btn-dark m-2";
        nextBtn.textContent = "Siguiente";
        // Añade el listener directamente al crearlo
        nextBtn.addEventListener("click", () => pageChange(actualPage + 1));
        fragment.appendChild(nextBtn);
    }

    // Inserta todos los botones en el DOM de una vez
    container.appendChild(fragment);
}

/**
 * Crea los elementos HTML para renderizar la card
 * @param {Producto} product producto a renderizar
 * @returns {HTMLElement} div "card" con los elementos html dentro
 */
export function createCard(product) {
    const card = document.createElement("div");
    card.classList.add("card", "m-3");
    card.style.width = "18rem";
    card.id = "cardId";

    const img = document.createElement("img");
    img.src = product.image;
    img.alt = product.tittle;
    img.classList.add("card-img-top", "m-1");

    const body = document.createElement("div");
    body.classList.add("card-body");

    const title = document.createElement("h5");
    title.classList.add("card-title");
    title.textContent = product.tittle;

    const price = document.createElement("p");
    price.classList.add("card-text");
    price.textContent = `$${product.price}`;

    const stock = document.createElement("p");
    stock.classList.add("card-text", "stock");
    stock.textContent = `Stock: ${product.stock}`;

    const btn = document.createElement("button");
    btn.href = "#";
    btn.classList.add("btn", "add", "btn-success", "m-2");
    btn.textContent = "Agregar al carrito";
    btn.dataset.id = product.id;

    const deleteBtn = document.createElement("button");
    deleteBtn.href = "#";
    deleteBtn.classList.add("btn", "remove", "btn-danger", "m-2", "d-none");
    deleteBtn.textContent = "Eliminar del carrito";
    deleteBtn.dataset.id = product.id;

    body.appendChild(title);
    body.appendChild(price);
    body.appendChild(stock);
    body.appendChild(btn);
    body.appendChild(deleteBtn);
    card.appendChild(img);
    card.appendChild(body);

    return card;
}

export function renderList() {
    // Aca van los elementos para crear la lista en admin
}

/**
 * Renderiza productos en el contenedor
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

        productos.forEach((p) => {
            //const imagen = (context == "admin") ? p.imagen : p.imagen = `/public${p.imagen}` // Esto es si lo cargamos desde LiveServer
            const imagen = p.imagen;
            const producto = new Product(
                p.id,
                p.titulo,
                p.precio,
                imagen,
                p.stock,
                p.estado,
                p.categoria.nombre
            );
            const card = createCard(producto) // Creo el elemento card
            container.appendChild(card); // Lo agrego al html
            const buttons = card.querySelectorAll("button") // Ambos botones por carta
            buttons.forEach(b => {
                attachProductEvents(b, producto)
            });

        });
    } catch (error) {
        console.error("Error creando productos en container:", error);
        container.textContent = "Error al crear productos";
    }
}

/**
 * Modifica el stock en el producto y en el html
 * @param {HTMLElement} element <p></p> donde esta anotado el stock
 */
export function modStock(element, producto, add = true){

    if(add) {
        producto.stock--;
    } else {
        producto.stock++;
    }
    element.innerHTML = `Stock: ${producto.stock}`;

}