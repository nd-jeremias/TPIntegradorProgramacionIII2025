function createCardCart(producto) {

    // === contenedor principal ===
    const item = document.createElement("div");
    item.className = "carrito-item card mb-3 p-3 shadow-sm";

    const row = document.createElement("div");
    row.className = "row align-items-center";
    item.appendChild(row);

    // ----------------------------
    // C1: IMAGEN
    // ----------------------------
    const colImg = document.createElement("div");
    colImg.className = "col-12 col-md-2 text-center";

    const img = document.createElement("img");
    img.src = producto.imagen;
    img.alt = producto.titulo;
    img.className = "img-fluid carrito-img";

    colImg.appendChild(img);
    row.appendChild(colImg);

    // ----------------------------
    // C2: INFORMACIÓN
    // ----------------------------
    const colInfo = document.createElement("div");
    colInfo.className = "col-12 col-md-3";

    const titulo = document.createElement("h5");
    titulo.className = "mb-1 fw-bold";
    titulo.textContent = producto.titulo;

    const interprete = document.createElement("p");
    interprete.className = "m-0 text-muted";
    interprete.textContent = `Intérprete: ${producto.interprete}`;

    const anio = document.createElement("p");
    anio.className = "m-0 text-muted";
    anio.textContent = `Año: ${producto.anio}`;

    const genero = document.createElement("p");
    genero.className = "m-0 text-muted";
    genero.textContent = `Género: ${producto.genero}`;

    colInfo.append(titulo, interprete, anio, genero);
    row.appendChild(colInfo);

    // ----------------------------
    // C3: PRECIO
    // ----------------------------
    const colPrecio = document.createElement("div");
    colPrecio.className = "col-12 col-md-2 text-center";

    const precio = document.createElement("p");
    precio.className = "m-0 fw-bold";
    precio.textContent = `$${producto.precio}`;

    colPrecio.appendChild(precio);
    row.appendChild(colPrecio);

    // ----------------------------
    // C4: CANTIDAD
    // ----------------------------
    const colCantidad = document.createElement("div");
    colCantidad.className = "col-12 col-md-2 text-center";

    const inputCantidad = document.createElement("input");
    inputCantidad.type = "number";
    inputCantidad.min = "1";
    inputCantidad.value = producto.cantidad;
    inputCantidad.className = "form-control cantidad-input";
    inputCantidad.dataset.id = producto.id;

    colCantidad.appendChild(inputCantidad);
    row.appendChild(colCantidad);

    // ----------------------------
    // C5: TOTAL + ELIMINAR
    // ----------------------------
    const colTotal = document.createElement("div");
    colTotal.className = "col-12 col-md-3 text-center";

    const total = document.createElement("p");
    total.className = "fw-bold mb-1 total-item";
    total.textContent = `$${producto.precio * producto.cantidad}`;

    const btnEliminar = document.createElement("button");
    btnEliminar.className = "btn btn-outline-danger btn-sm";
    btnEliminar.textContent = "Eliminar";
    btnEliminar.dataset.id = producto.id;

    colTotal.append(total, btnEliminar);
    row.appendChild(colTotal);

    // === devolver tarjeta completa ===
    return item;
}
