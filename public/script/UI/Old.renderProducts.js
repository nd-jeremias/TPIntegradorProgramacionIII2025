/**
 * Crea los elementos HTML necesarios para cada caso
 * @param {String} page "admin" || "user"
 * @returns
 */
function toHTML(page) {
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

    const btn = document.createElement("button");
    const deleteBtn = document.createElement("button");

    if (page == "admin") {
        btn.href = "#";
        btn.classList.add("btn", "btn-secondary", "m-2");
        btn.textContent = "Modificar";
        btn.dataset.id = product.id;
        btn.addEventListener("click", (event) => {
            window.location.href = `./editar/${product.id}`;
        });

        deleteBtn.href = "#";
        deleteBtn.classList.add("btn", "btn-danger");
        deleteBtn.textContent = "Borrar";
        deleteBtn.dataset.id = product.id;
    }
    if (page == "user") {
        btn.href = "#";
        btn.classList.add("btn", "btn-primary");
        btn.textContent = "Agregar al carrito";
        btn.dataset.id = product.id;
        // Listener para agregar al carrito
        btn.addEventListener("click", (event) => {
            event.preventDefault();

            // Llama a tu función externa que maneja la adición al carrito
            // Pasándole la información necesaria del producto (product)
            agregarAlCarrito(product.id, product.tittle, product.price);
        });
    }

    body.appendChild(title);
    body.appendChild(price);
    body.appendChild(btn);
    if (page == "admin") body.appendChild(deleteBtn);
    card.appendChild(img);
    card.appendChild(body);

    return card;
}

export function renderCard(product) {
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

    const btn = document.createElement("button");
    btn.href = "#";
    btn.classList.add("btn", "btn-success", "m-2");
    btn.textContent = "Agregar al carrito";
    btn.dataset.id = product.id;

    const deleteBtn = document.createElement("button");
    deleteBtn.href = "#";
    deleteBtn.classList.add("btn", "btn-danger", "m-2", "d-none");
    deleteBtn.textContent = "Eliminar del carrito";
    deleteBtn.dataset.id = product.id;

    body.appendChild(title);
    body.appendChild(price);
    body.appendChild(btn);
    body.appendChild(deleteBtn);
    card.appendChild(img);
    card.appendChild(body);

    return card;
}

export function renderList() {
    // Aca van los elementos para crear la lista en admin
}