import { verificarUsuarioExistente, obtenerUsuarioPorClave } from "../services/userstorage.js";
import { mostrarMensajeError } from "../utils/validations.js";

function validarCredenciales(event) {
    event.preventDefault();
    const credenciales = {
        usuario: document.getElementById('usuario').value.trim(),
        contrasenia: document.getElementById('contrasenia').value.trim()
    };

    // Limpiar mensajes de error previos
    limpiarMensajesError();

    const comprobarContraLocalStorage = localStorage.getItem('usuario_' + credenciales.usuario);
    if (comprobarContraLocalStorage) {
        const usuarioParse = JSON.parse(comprobarContraLocalStorage);
        if (credenciales.contrasenia === usuarioParse.contrasenia && credenciales.usuario === usuarioParse.usuario) {
            // Redirigir al dashboard si las credenciales son correctas
            window.location.href = 'dashboard.html';
        } else {
            mostrarMensajeError('error-contrasenia', 'Contraseña incorrecta');
        }
    } else {
        mostrarMensajeError('error-nombre-usuario', 'El usuario no existe.');
    }
}

// Evento submit para inicio de sesión 
document.getElementById('loginForm').addEventListener('submit', validarCredenciales);

// Función para mostrar errores en el campo correspondiente
export function mostrarError(idCampoError, mensaje) {
    console.log(`Mostrando error en "${idCampoError}": ${mensaje}`);
    const errorElemento = document.getElementById(idCampoError);
    if (errorElemento) {
        errorElemento.textContent = mensaje;
        errorElemento.classList.add('visible');
    } else {
        console.error(`Elemento con ID "${idCampoError}" no encontrado.`);
    }
}

function limpiarMensajesError() {
    const mensajesError = document.querySelectorAll('.error-message');
    console.log('Limpiando mensajes de error');
    mensajesError.forEach((error) => {
        error.textContent = '';
        error.classList.remove('visible');
    });
}
