
export function validarCamposVacios(campos) {
    for (let campo in campos) {
        if (campos[campo] === '') {
            alert('Todos los campos deben ser completados.');
            return false;
        }
    }
    return true;
}

export function validarCampos(usuario) {
    const regexNombre = /^[a-zA-Z0-9_]{3,20}$/;
    const regexMail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const regexPesoAltura = /^[0-9]+$/;
    const regexEdad = /^[0-9]{1,3}$/;
    
    const isValidNombre = regexNombre.test(usuario.nombre);
    if (!isValidNombre) {
        alert('Ingrese un nombre válido, min 3 carácteres máx 20');
        return false;
    }

    const isValidMail = regexMail.test(usuario.correo);
    if (!isValidMail) {
        alert('Ingrese un correo válido; tunombredominio@hotmail.com');
        return false;
    }

    const isValidPesoAltura = regexPesoAltura.test(usuario.altura);
    if (!isValidPesoAltura) {
        alert('Introduzca peso en KG y altura en CM');
        return false;
    }

    const isValidPeso = regexPesoAltura.test(usuario.peso);
    if (!isValidPeso) {
        alert('Introduzca el peso en KG como un número.');
        return false;
    }

    const isValidEdad = regexEdad.test(usuario.edad);
    if (!isValidEdad) {
        alert('Introduzca una edad válida');
        return false;
    }
    return true; // Si todo esta validado
}

export function validarNombreUsuario(usuario) {
    const regexNombreUsuario = /^[a-zA-Z0-9_]{3,20}$/;
    const mensajeErrorElemento = document.getElementById('error-usuario');

    if (!regexNombreUsuario.test(usuario)) {
        mostrarMensajeError(mensajeErrorElemento, 'El nombre de usuario debe tener entre 3 y 20 caracteres y solo puede incluir letras, números y guiones bajos.');
        return false;
    }

    if (localStorage.getItem('usuario_' + usuario)) {
        mostrarMensajeError(mensajeErrorElemento, 'Este nombre de usuario ya está registrado.');
        return false;
    }

    ocultarMensajeError(mensajeErrorElemento);
    return true;
}

export function validarContrasenia(contrasenia) {
    const regexContrasenia = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    const mensajeErrorElemento = document.getElementById('error-contrasenia');

    if (!regexContrasenia.test(contrasenia)) {
        mostrarMensajeError(mensajeErrorElemento, 'La contraseña debe contener al menos 6 caracteres, incluyendo una letra y un número.');
        return false;
    }

    ocultarMensajeError(mensajeErrorElemento);
    return true;
}

export function mostrarMensajeError(elemento, mensaje) {
    elemento.textContent = mensaje;
    elemento.classList.add('visible');
}

export function ocultarMensajeError(elemento) {
    elemento.textContent = '';
    elemento.classList.remove('visible');
}