import { completeForm } from './formDataFiller.js'
import { loadGenres } from "./genresDataFiller.js";

document.addEventListener("DOMContentLoaded", async () => {

    if (MODO === "editar") {

        let p = null;
        // --- Traer el producto
        try {
            const res = await fetch(`/api/productos/${PRODUCT_ID}`);
            p = await res.json();
        } catch (error) {
            console.log(`Error encontrarndo producto id: ${PRODUCT_ID}`, error)
        }
        await loadGenres()
        completeForm(p);

        const btn = document.getElementById("guardarCambios");

        btn.addEventListener("click", async (event) => {

            event.preventDefault();

            try {

                // Crear un objeto FormData a partir del formulario
                const productForm = document.getElementById('formProducto');
                const formData = new FormData(productForm);
                
                for (let entry of formData.entries()) {
                    console.log(entry[0] + ': ' + entry[1]);
                  }

                const response = await fetch(`/admin/update/${PRODUCT_ID}`, {
                    method: "PUT",
                    body: formData
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
                    confirmButtonColor: "#3085d6"
                }).then(function () {
                    window.location.href = "/admin/dashboard";
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

    /* Vista previa de imagen */
    imagen.addEventListener("change", () => {
        const file = imagen.files[0];
        if (file) {
            previewImg.src = URL.createObjectURL(file); // Crea un elemento de img a partir de file
            previewImg.classList.remove("d-none");
        }
    });
});