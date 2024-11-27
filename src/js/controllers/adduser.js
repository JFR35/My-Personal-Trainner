import { validarRegistro } from "../utils/validations";
import { almacenarUsuarioclave } from "../services/userstorage";

export function registrarUsuario(){
   
     // Obtención de los valores de los campos(creo un objeto para agruparlos y no tener que pasarlos uno a uno cuando cree instancias del objeto)
     const usuario = {
        nombre: document.getElementById('nombre').value.trim(),
        correo: document.getElementById('correo').value.trim(),
        altura: document.getElementById('altura').value.trim(),
        peso: document.getElementById('peso').value.trim(),
        edad: document.getElementById('edad').value.trim(),
        usuario: document.getElementById('usuario').value.trim(),
        contrasenia: document.getElementById('contrasenia').value.trim()
    };

    try{
        validarRegistro(usuario);
        almacenarUsuarioclave(usuario);
        alert('Usuario registrado con éxito');
    }catch(error){
        throw new Error(`Error al registrar usuario: ${error.message}`);
    }
}