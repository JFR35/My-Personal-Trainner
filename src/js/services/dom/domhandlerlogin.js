// Función para obtener los datos del formulario y prevenir el comportamiento por defecto.
export function obtenerDatosForm(event) {
    event.preventDefault();

    const credenciales = {
        username: document.getElementById('usuario').value.trim(),
        password: document.getElementById('password').value.trim()
    };
    console.log('Datos del formulario:', credenciales); // Para depurar
    return credenciales;
}
