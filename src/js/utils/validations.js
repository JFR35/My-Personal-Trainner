// Validar que no haya campos vacíos
export function validateEmptyFields(fields) {
    for (let field in fields) {
        if (fields[field] === '') {
            alert('Todos los campos deben ser completados');
            return false;
        }
    }
    return true;
}

// Se definen las expresiones regulares y los mensajes de error
const REGEX = {
    username: /^[a-zA-Z0-9_]{3,20}$/,
    email: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
    numeric: /^[0-9]+$/,
    age: /^[0-9]{1,3}$/,
    password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/
};

const ERROR_MESSAGES = {
    fullName: 'El nombre de usuario debe tener al menos 3 caracteres',
    email: 'Introduzca un email válido, por ejemplo: juan@hotmail.com',
    height: 'Introduzca la altura en centímetros',
    weight: 'Introduzca el peso en Kg.',
    age: 'La edad debe ser un número entero',
    username: 'El nombre de usuario debe tener al menos 3 caracteres',
    password: 'La contraseña debe tener al menos seis caracteres y contener números y letras',
    usernameExists: 'Nombre de usuario ya registrado'
};

// Validar todos los campos de un usuario
export function validateFields(user) {
    const errors = [];

    // Validar que los campos no estén vacíos
    if (!validateEmptyFields(user)) return false;

    // Validar cada campo usando las expresiones regulares
    if (!REGEX.username.test(user.fullName)) errors.push(ERROR_MESSAGES.fullName);
    if (!REGEX.email.test(user.email)) errors.push(ERROR_MESSAGES.email);
    if (!REGEX.numeric.test(user.height)) errors.push(ERROR_MESSAGES.height);
    if (!REGEX.numeric.test(user.weight)) errors.push(ERROR_MESSAGES.weight);
    if (!REGEX.age.test(user.age)) errors.push(ERROR_MESSAGES.age);
    if (!REGEX.password.test(user.password)) errors.push(ERROR_MESSAGES.password);

    // Validar si el nombre de usuario ya existe
    if (localStorage.getItem('user_' + user.username)) {
        errors.push(ERROR_MESSAGES.usernameExists);
    }

    // Mostrar errores si los hay previene el envió del formulario
    if (errors.length > 0) {
        alert(errors.join('\n'));
        return false;
    }
    return true;
}

// Validar nombre de usuario de forma independiente
export function validateUsername(username) {
    if (!REGEX.username.test(username)) {
        alert(ERROR_MESSAGES.username);
        return false;
    }
    if (localStorage.getItem('user_' + username)) {
        alert(ERROR_MESSAGES.usernameExists);
        return false;
    }
    return true;
}

// Validar contraseña de forma independiente
export function validatePassword(password) {
    if (!REGEX.password.test(password)) {
        alert(ERROR_MESSAGES.password);
        return false;
    }
    return true;
}

/* LOS DISPLAYS DE ERROR EN DIVS DE MOMENTO LOS DESCARTO YA QUE VOY PILLADO DE TIEMPO AUNQUE ESTAN EN EL HTML+CSS DE MOMENTO USO ALERTS
// Displays error messages.
export function showErrorMessage(element, message) {
    if (element) {
        element.textContent = message;
        element.classList.add('visible');
    } else {
        console.error('Element with specified ID not found.');
    }
}

// Hides error messages.
export function hideErrorMessage(element) {
    if (element) {
        element.textContent = '';
        element.classList.remove('visible');
    }
}
*/