/**
 * Funcion para manejar la paginación
 * "Siguiente"
 */
function nextPage(actualPage, totalPages) {
    actualPage++;
    cargarProductos(data, actualPage);
    loadBtns(actualPage, totalPages);
}

/**
 * Funcion para manejar la paginación
 * "Anterior"
 */
function prevPage(actualPage, totalPages) {
    if (actualPage > 0) {
        actualPage--;
        getProducts(actualPage);
        loadBtns(actualPage, totalPages);
    }
}

function cambiarPagina(nuevaPagina) {
    cargarProductos(data, nuevaPagina);
    loadBtns(nuevaPagina, totalPages, cambiarPagina);
}