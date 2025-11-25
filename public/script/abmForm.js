document.addEventListener("DOMContentLoaded", async () => {

    if (MODO === "editar") {

        // --- Traer el producto
        const res = await fetch(`/api/productos/${PRODUCT_ID}`);
        const p = await res.json();

        /* DATOS GENERALES */
        titulo.value = p.titulo;
        precio.value = p.precio;
        stock.value = p.stock;
        estado.value = p.estado ? "true" : "false";
        categoria.value = p.categoria?.nombre || "";

        // Imagen
        if (p.imagen) {
            previewImg.src = p.imagen;
            previewImg.classList.remove("d-none");
        }

        /* INFO DISCO */
        if (p.info_disco) {
            seccionDisco.classList.remove("d-none");

            interprete.value = p.info_disco.interprete;
            anio.value = p.info_disco.año;
            generoDisco.value = p.info_disco.genero?.genero || "";
        }

        /* INFO LIBRO*/

        if (p.info_libro) {
            seccionLibro.classList.remove("d-none");

            autor.value = p.info_libro.autor;
            editorial.value = p.info_libro.editorial;
            generoLibro.value = p.info_libro.genero?.genero || "";
        }

        const btn = document.getElementById("guardarCambios");

        btn.addEventListener("click", async (event) => {

            event.preventDefault();

            // Crear una funcion para tomar los datos del form y armar la estructura correcta
            // Adecuar producto para que cree ambos(libros y discos)
            // const producto = {
            //     id: p.id,
            //     titulo: titulo.value,
            //     precio: precio.value,
            //     imagen: stock.value,
            //     stock: estado.value,
            //     estado: categoria.value,
            //     categoria: categoria.value,
            //     info_disco: {
            //         interprete: interprete.value,
            //         año: anio.value,
            //         genero: generoDisco.value
            //     }
            // }

            try {

                // Loader mientras se procesa
                Swal.fire({
                    title: "Guardando cambios...",
                    text: "Por favor espera",
                    allowOutsideClick: false,
                    didOpen: () => {
                        Swal.showLoading();
                    }
                });

                const response = await fetch(`/admin/update/${PRODUCT_ID}`, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(producto)
                });

                // Respuesta not ok lanza un error
                if (!response.ok) {
                    const errorText = await response.text();
                    throw new Error(`Error ${response.status}: ${errorText}`);
                }

                // Respuesta Ok
                Swal.fire({
                    icon: "success",
                    title: "¡Producto actualizado!",
                    // text: data.message,
                    confirmButtonColor: "#3085d6"
                });

            } catch (error) {
                Swal.fire({
                    icon: "error",
                    title: "Error al actualizar",
                    text: error.message,
                    confirmButtonColor: "#d33"
                });
                console.error("Error al actualizar:", error);
            }
        })
    }
    else {
        // Logica para crear producto:
    }

    /* Vista previa de imagen */
    imagen.addEventListener("change", () => {
        const file = imagen.files[0];
        if (file) {
            previewImg.src = URL.createObjectURL(file); // Crea un elemento de img a partir de file
            previewImg.classList.remove("d-none");
        }
    });
});


// {
//     "id": 2,
//     "titulo": "Back in Black",
//     "precio": 22.5,
//     "imagen": "/img/CIL002.jpg",
//     "stock": 40,
//     "estado": true,
//     "categoria": {
//         "nombre": "Disco"
//     },
//     "info_disco": {
//         "interprete": "AC/DC",
//         "año": 1980,
//         "genero": {
//             "genero": "Rock"
//         }
//     },
//     "info_libro": null
// }