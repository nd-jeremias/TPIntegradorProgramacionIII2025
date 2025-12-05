const container = document.getElementById("container")

let carrito = JSON.parse(localStorage.getItem("carrito"));

//if(!carrito || carrito == 0) container.innerHTML = "<h2>No hay productos agregados en el carrito!</h2>"

const img = document.getElementsByClassName('carrito-img')

console.log(img[0].src)