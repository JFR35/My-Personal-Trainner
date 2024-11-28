import { Usuario } from "../models/user.js";
import { validarCamposVacios, validarCampos, validarNombreUsuario, validarContrasenia } from "../utils/validations.js";
import { obtenerUsuarioPorClave, almacenarUsuario, verificarUsuarioExistente } from "../services/userstorage.js";

function registrarUsuario(event) {
    event.preventDefault();

    const usuario = {
        nombre: document.getElementById('nombre').value.trim(),
        correo: document.getElementById('correo').value.trim(),
        altura: document.getElementById('altura').value.trim(),
        peso: document.getElementById('peso').value.trim(),
        edad: document.getElementById('edad').value.trim(),
        usuario: document.getElementById('usuario').value.trim(),
        contrasenia: document.getElementById('contrasenia').value.trim(),
    };

    // Validaciones
    if (!validarCamposVacios(usuario)) return;
    if (!validarCampos(usuario)) return;
    if (!validarNombreUsuario(usuario.usuario)) return;
    if (!validarContrasenia(usuario.contrasenia)) return;

    const claveBase = 'usuario_';

    // Verificar si ya existe
    if (verificarUsuarioExistente(claveBase, usuario.usuario)) {
        alert("Este usuario ya está registrado.");
        return;
    }

    // Crear usuario
    const usuarioCreado = new Usuario(
        usuario.nombre,
        usuario.correo,
        usuario.altura,
        usuario.peso,
        usuario.edad,
        usuario.usuario,
        usuario.contrasenia
    );

    // Almacenar en localStorage
    almacenarUsuario(claveBase + usuario.usuario, usuarioCreado);

    alert("¡Usuario registrado exitosamente!");
    console.log('Usuario registrado: ',obtenerUsuarioPorClave); // Para depurar
    window.location.href = 'login.html';
}

// Evento de tipo submit
document.getElementById('registroForm').addEventListener('submit', registrarUsuario);
