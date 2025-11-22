/**
 * Crea e inserta un botón de prueba en el main que rellena el formulario de login.
 */
export function initializeLoginFormFiller() {
    const mainContent = document.getElementById('admin-form');
    const formEmailInput = document.getElementById('formEmail');
    const formPasswordInput = document.getElementById('formPassword');

    // Datos preestablecidos para el login
    const testData = {
        email: 'admin@root.com',
        password: 'admin'
    };

    // Validamos que los elementos existan antes de proceder
    if (!mainContent || !formEmailInput || !formPasswordInput) {
        console.warn("Faltan elementos HTML necesarios para el botón de prueba.");
        return;
    }

    // --- 1. Crear el botón ---
    const fillFormButton = document.createElement('button');
    fillFormButton.textContent = 'Rellenar Formulario';
    fillFormButton.id = 'fill-form-btn';
    
    // --- 2. Estilizar y posicionar el botón (Posición absoluta) ---
    
    fillFormButton.style.zIndex = '100'; 
    fillFormButton.style.padding = '8px';
    fillFormButton.style.margin = '10px';
    fillFormButton.style.backgroundColor = '#28a745';
    fillFormButton.style.color = 'white';
    fillFormButton.style.border = 'none';
    fillFormButton.style.borderRadius = '5px';
    fillFormButton.style.cursor = 'pointer';

    // --- 3. Añadir Event Listener ---
    fillFormButton.addEventListener('click', (event) => {
        event.preventDefault(); // Evita que si está dentro de un form, lo envíe
        formEmailInput.value = testData.email;
        formPasswordInput.value = testData.password;
        console.log("Formulario de login rellenado con datos de prueba.");
    });

    // --- 4. Insertar el botón en el main ---
    mainContent.appendChild(fillFormButton);
}
