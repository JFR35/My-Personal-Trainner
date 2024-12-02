document.addEventListener('DOMContentLoaded', () => {
    // Selecciona los elementos del DOM
    const commentInput = document.getElementById('commentInput');
    const addCommentBtn = document.getElementById('addCommentBtn');
    const commentsContainer = document.getElementById('vieCommentsItems');

    // Cargar comentarios desde localStorage al cargar la página
    loadComments();

    // Event listener para agregar un nuevo comentario
    addCommentBtn.addEventListener('click', () => {
        const commentText = commentInput.value.trim();

        if (commentText) {
            // Crear un nuevo comentario
            const comment = {
                text: commentText,
                date: new Date().toLocaleString()
            };

            // Obtener comentarios existentes de localStorage
            const comments = JSON.parse(localStorage.getItem('comments')) || [];
            comments.push(comment);

            // Guardar comentarios actualizados en localStorage
            localStorage.setItem('comments', JSON.stringify(comments));

            commentInput.value = '';

            // Recargar la lista de comentarios
            loadComments();
        } else {
            alert('Por favor, escribe un comentario antes de enviarlo.');
        }
    });

    // Función para cargar los comentarios desde localStorage
    function loadComments() {
        commentsContainer.innerHTML = ''; 

        // Obtener comentarios de localStorage
        const comments = JSON.parse(localStorage.getItem('comments')) || [];

        comments.forEach(comment => {
            const commentElement = document.createElement('div');
            commentElement.classList.add('comment');
            commentElement.innerHTML = `
                <p>${comment.text}</p>
                <small><em>${comment.date}</em></small>
            `;
            commentsContainer.appendChild(commentElement);
        });
    }
});
