export const dashboard = async () => {
    
    const container = document.getElementById("container");
    
    const response = await fetch('http://localhost:3000/api/productos')
    const data = await response.json()

    for(let i=0; i<5; i++){
        let e = data[i]
        const producto = new Product(e.id, e.titulo, e.precio, e.imagen, e.stock, e.estado, e.categoria.nombre)
        container.appendChild(producto.toHTML());
    }
    
}