import User from '../../models/user.js';

/* Función para capturar los datos del formulario, como son bastantes inputs en un principio pense hacer un array de objetos (usuario{}),
pero no se por que se me complicaba luego
*/

export function getFormData(event) {
    event.preventDefault();

    const fullName = document.getElementById('full-name').value.trim();
    const email = document.getElementById('email').value.trim();
    const height = document.getElementById('height').value.trim();
    const weight = document.getElementById('weight').value.trim();
    const age = document.getElementById('age').value.trim();
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    const user = new User(fullName, email, height, weight, age, username, password);
    console.log(user); // Para depurar
    return user;
}

// Función para resetear el formulario
export function resetForm() {
    const form = document.getElementById('register-form');
    if (form) {
        form.reset();
    } else {
        console.error('Formulario con id="register-form" no encontrado.');
    }
}
