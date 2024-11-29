// Función para obtener los datos del formulario y prevenir el comportamiento por defecto.
export function getDataForm(event) {
    event.preventDefault();

    const credenciales = {
        username: document.getElementById('username').value.trim(),
        password: document.getElementById('password').value.trim()
    };
    console.log('Datos del formulario:', credenciales); // Para depuración
    return credenciales;
}
// Función para resetear el form igual que anteriormente para regustrar usuario
export function resetForm() {
    const form = document.getElementById('login-form');
    if (form) {
        form.reset();
    } else {
        console.error('Formulario con id="login-form" no encontrado.');
    }
}
