export const obtenerUsuarioPorClave = (clave) => {
    const data = localStorage.getItem(clave);
    return data ? JSON.parse(data) : null;
};

export const almacenarUsuario = (clave, usuario) => {
    localStorage.setItem(clave, JSON.stringify(usuario));
};

export const verificarUsuarioExistente = (claveBase, nombreUsuario) => {
    const clave = claveBase + nombreUsuario;
    return !!obtenerUsuarioPorClave(clave); // Devuelve true si existe
};
