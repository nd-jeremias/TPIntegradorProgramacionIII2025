import { loadGenres } from '/script/modules/genresDataFiller.js'

const tipo = document.getElementById("categoria");
const elementosLibro = document.getElementById("seccionLibro");
const elementosDisco = document.getElementById("seccionDisco");
const btn = document.getElementById("guardarCambios");

await loadGenres()

tipo.addEventListener('change', () => {

    if (tipo.value == "Disco") {
        elementosDisco.classList.remove("d-none")
        elementosLibro.classList.add("d-none")
    }
    if (tipo.value == "Libro") {
        elementosLibro.classList.remove("d-none")
        elementosDisco.classList.add("d-none")
    }

});

btn.addEventListener("click", async (event) => {

    event.preventDefault();

    try {

        // Crear un objeto FormData a partir del formulario
        const productForm = document.getElementById('formProducto');
        const formData = new FormData(productForm);

        const response = await fetch(`/admin/create`, {
            method: "POST",
            body: formData
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Error ${response.status}: ${errorText}`);
        }

        // Respuesta Ok
        Swal.fire({
            icon: "success",
            title: "¡Producto Creado Correctamente!",
            confirmButtonColor: "#3085d6"
        }).then(function () {
            window.location.href = "/admin/dashboard";
        });

    } catch (error) {
        console.log(`Error al crear producto: ${error}`)
        Swal.fire({
            icon: "error",
            title: "¡Error Creando Producto!",
            text: `${error}`,
            confirmButtonColor: "#3085d6"
        });
    }
})

/* Vista previa de imagen */
    imagen.addEventListener("change", () => {
        const file = imagen.files[0];
        if (file) {
            previewImg.src = URL.createObjectURL(file); // Crea un elemento de img a partir de file
            previewImg.classList.remove("d-none");
        }
    });