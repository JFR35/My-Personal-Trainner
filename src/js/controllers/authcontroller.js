import { obtenerDatosForm } from "../services/dom/domhandlerregister.js";
import { validarCamposVacios, mostrarMensajeError } from "../utils/validations.js";

// Función para mostrar una alerta al iniciar sesión con éxito.
function mostrarAlert() {
    alert('Credenciales correctas');
}

// Función para redirigir al dashboard.
function redirectToDashboard() {
    window.location.href = 'dashboard.html';
}

// Función para comparar las credenciales ingresadas con las guardadas en localStorage.
function compararContraLocalStorage(event) {
    event.preventDefault();

    // Obtener las credenciales del formulario
    const credenciales = obtenerDatosForm(event);
    if (!validarCamposVacios(credenciales)) {
        return;
    }

    // Recuperar los usuarios guardados desde localStorage, o un array vacío si no hay datos
    const usersaved = JSON.parse(localStorage.getItem('users')) || [];

    // Imprimir en la consola para depuración
    console.log('Usuarios guardados:', usersaved);
    console.log('Credenciales ingresadas:', credenciales);

    // Verificar si las credenciales coinciden con algún usuario guardado
    const credencialesCorrectas = usersaved.some(user => 
        user.usuario === credenciales.name && user.contrasenia === credenciales.password
    );

    if (credencialesCorrectas) {
        mostrarAlert();
        redirectToDashboard();
    } else {
        alert('Credenciales incorrectas');
    }
}

// Cambiar el evento de 'click' a 'submit'
document.getElementById('login-form').addEventListener('submit', compararContraLocalStorage);
