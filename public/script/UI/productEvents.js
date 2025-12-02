export function attachProductEvents(button, product) {
    // ACA DISPARAN TODOS LOS BOTONES. FILTRAR POR DATA-ID PARA QUE DISPAREN INDIVIDUALES.
    button.addEventListener("click", () => {
        console.log(product)
        //showQuantityModal(product); // del archivo modals.js
    });
}
