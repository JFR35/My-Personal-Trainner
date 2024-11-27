
export const almacenarUsuarioclave = (clave, valor)=>{
    localStorage.setItem(clave, JSON.stringify(valor));
}
export const obtenerLocalStorage = (clave) =>{
    const data = localStorage.getItem(clave);
    return data ? JSON.parse(data) : null;
}

