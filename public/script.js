document.addEventListener("DOMContentLoaded", () => {

    const formLogin = document.getElementById("admin-form");

    formLogin.addEventListener("submit", async (e) => {

        e.preventDefault(); // Previene el envio por defecto

        const email = document.getElementById("formEmail").value.trim();
        const contraseña = document.getElementById("formPassword").value.trim();

        if (!email || !contraseña) {
            Swal.fire("Campos vacíos", "Completá email y contraseña", "warning");
            return;
        }

        try {

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
                window.location.href = "/admin"; // o donde quieras redirigir al usuario
                }
            );
        } catch (error) {
            console.error("Error en login:", error);
            Swal.fire("Error", error.message, "error");
        }
    });
});