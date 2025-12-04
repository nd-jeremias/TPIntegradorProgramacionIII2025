export function loadGenres() {

    return new Promise(async (resolve, reject) => {
        const selectoresGenero = document.querySelectorAll(".listaGenero");

        if (selectoresGenero.length === 0) {
            console.warn("No se encontraron elementos .listaGenero. Resuelto sin error.");
            resolve(); // Resuelve aunque no haya selects que llenar
            return;
        }

        try {
            const response = await fetch("/api/generos");
            if (!response.ok) throw new Error("Error al cargar géneros");
            const generos = await response.json();

            selectoresGenero.forEach((selectElemento) => {
                generos.forEach((genero) => {
                    const option = document.createElement("option");
                    option.value = genero.genero;
                    option.textContent = genero.genero;
                    selectElemento.appendChild(option);
                });
            });

            resolve();
        } catch (error) {
            console.error("Error en la carga de datos:", error);
            reject(error);
        }
    });
}
