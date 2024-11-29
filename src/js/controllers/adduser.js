import { getFormData, resetForm } from '../services/dom/domhandlerregister.js';
import { saveUser } from '../services/localStorage/userstorage.js';
import { validateEmptyFields, validateFields, validateUsername, validatePassword } from '../utils/validations.js';

// Función para envío del formulario
function registerUser(event) {
    event.preventDefault();

    const userData = getFormData(event);

       // Array para las funciones de validacion y validaciones individuales
       const validations = [
        () => validateEmptyFields(userData),
        () => validateFields(userData),
        () => validateUsername(userData.username),
        () => validatePassword(userData.password)
    ];

    if (validations.some(validate => !validate())) {
        return; // Detiene la función si alguna validación no es exitosa
    }

    // En caso de registro exitoso guarda el usuario, resetea el formulario y redirige a la pagina de login.
    try {
        saveUser(userData);
        resetForm();
        window.location.href = 'login.html'; // Redirigir a la página de login
    } catch (error) {
        console.error('Error al registrar al usuario:', error);
        alert('Ocurrió un error. Por favor, intente nuevamente.');
    }
}

// Envento de tipo sumbit para enviar el form 
document.getElementById('register-form')?.addEventListener('submit', registerUser);
