// Función para guardar usuarios en el localStorage
export function saveUser(user) {
    try {
        // Obtener usuarios existentes o crear un nuevo array
        let users = JSON.parse(localStorage.getItem('users')) || [];

        // Verificar si el nombre de usuario ya existe
        if (users.some(u => u.username === user.username)) {
            alert('El nombre de usuario ya existe');
            return;
        }

        // Agregar el nuevo usuario al array con método push()
        users.push(user);

        // Guardar el array de usuarios en localStorage con el método setItem
        localStorage.setItem('users', JSON.stringify(users));
        alert('Usuario guardado con éxito');
    } catch (error) {
        console.error('Error guardando al usuario', error);
    }
}
