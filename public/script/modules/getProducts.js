const localhost = 'http://localhost:3000';

export async function getProducts() {

    try {

        const response = await fetch(`${localhost}/api/productos`);
        const data = await response.json();

        return data;

    } catch (error) {
        console.error("Error cargando productos:", error);
        container.textContent = "Error al cargar productos";
    }
}