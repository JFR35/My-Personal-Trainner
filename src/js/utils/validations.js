import { registrarUsuario } from "../controllers/adduser"

export const validarRegistro = (usuario) =>{
    const regExNombre =  /^[a-zA-Z\s]{2,50}$/;
    const regExEmail =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const regExPeso = /^[1-9]\d{1,2}(\.\d{1,2})?$/; 
    const regExAltura = /^[0-9]{2,3}$/; 
    const regExEdad = /^(1[89]|[2-9]\d|1[0-1]\d|120)$/;
    const regExNombreUsuario = /^[a-zA-Z0-9_]{3,20}$/; 
    const regExContrasenia = /^[a-zA-Z0-9]{6,}$/;
    
    if(!regExNombre.test(usuario.nombre)){
        throw new Error("El nombre solo puede contener letras y espacios");
    }

    if (!regExEmail.test(usuario.correo)) {
        throw new Error("El correo electrónico no tiene un formato válido.");
    }

    if (!regExPeso.test(usuario.peso)) {
        throw new Error("El peso debe ser un número válido entre 1 y 999.99.");
    }

    if (!regExAltura.test(usuario.altura)) {
        throw new Error("La altura debe ser un número válido entre 10 y 999 cm.");
    }

    if (!regExEdad.test(usuario.edad)) {
        throw new Error("La edad debe estar entre 0 y 120 años.");
    }

    if (!regExNombreUsuario.test(usuario.usuario)) {
        throw new Error("El nombre de usuario debe tener entre 3 y 20 caracteres y solo puede incluir letras, números y guiones bajos.");
    }

    if (!regExContrasenia.test(usuario.contrasenia)) {
        throw new Error("La contraseña debe tener al menos 8 caracteres, incluyendo una mayúscula, una minúscula, un número y un carácter especial.");
    }

}