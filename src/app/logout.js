// Funcion que redirige al index.html
function logout(){
    const logOut = document.getElementById('logout');
    if(logOut){
        window.location.href = 'index.html' ;
    }
}
document.getElementById('logout').addEventListener('click', logout);
