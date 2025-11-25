document.addEventListener("DOMContentLoaded", () => {

    const formLogin = document.getElementById("admin-form");

    formLogin.addEventListener("submit", async (e) => {

        e.preventDefault(); // Previene el envio por defecto

        const mode = formLogin.getAttribute('data-mode')

        const email = document.getElementById("formEmail").value.trim();
        const contraseña = document.getElementById("formPassword").value.trim();
        let nombre = ""
        let apellido = ""

        if (mode == "register") {
            nombre = document.getElementById("nombre").value.trim();
            apellido = document.getElementById("apellido").value.trim();
        } else {
            nombre = "default_nombre"
            apellido = "default_apellido"
        }

        if (!email || !contraseña || !nombre || !apellido) {
            Swal.fire("Campos vacíos", "Asegurate de completar todos los campos", "warning");
            return;
        }

        try {

            if (mode == "login") {

                const response = await fetch("/auth/ingresar", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    credentials: "include", // permite recibir cookies JWT
                    body: JSON.stringify({ email, contraseña }),
                });

                const data = await response.json();

                if (!response.ok) {
                    throw new Error(data.message || "Error al iniciar sesión");
                }

                Swal.fire("Bienvenido", "Inicio de sesión correcto", "success").then(
                    () => {
                        window.location.href = "/admin/dashboard"; // donde se redirige al usuario
                    }
                );
            } else {
                const response = await fetch("/auth/registrarse", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ email, nombre, apellido, contraseña }),
                })
                
                if (!response.ok) {
                    throw new Error(data.message || "Error al registrarse");
                }

                Swal.fire("Bienvenido", "Creacion de usuario correcta.", "success");
            }

        } catch (error) {
            let error_resp = "Error en "
            error_resp += (mode == 'login') ? "login: " : "el registro: "
            console.error(error_resp, error);
            Swal.fire("Error", error.message, "error");
        }
    });
});