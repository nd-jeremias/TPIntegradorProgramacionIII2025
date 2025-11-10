import { Product } from './classes/Product.js'

document.addEventListener("DOMContentLoaded", async () => {

    const container = document.getElementById("container");
    // `http://${process.env.HOST}:${process.env.PORT}/api/productos`;
    const response = await fetch('http://localhost:3000/api/productos');
    const data = await response.json()
    
    // data.forEach(e => {
        
    //     const producto = new Product(e.id, e.titulo, e.precio, e.imagen, e.stock, e.estado, e.categoria.nombre)

    //     console.log(producto.toHTML())
    // });
    
    for(let i=0; i<15; i++){
        let e = data[i]
        const producto = new Product(e.id, e.titulo, e.precio, e.imagen, e.stock, e.estado, e.categoria.nombre)
        container.appendChild(producto.toHTML('admin'));
    }

})