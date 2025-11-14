document.addEventListener("DOMContentLoaded", () => {
    console.log('Bienvenido')
    const nameForm = document.getElementById('name-form');

    nameForm.addEventListener('submit', (e) => {
        console.log('Boton')
        e.preventDefault();

        const NOMBRE = document.getElementById('nombre').value.trim();

        if(!NOMBRE) {
            Swal.fire("Campo vacío", "Completá con tu nombre", "warning");
            return;
        }

        location.href='./productos.html'
    })
    
});