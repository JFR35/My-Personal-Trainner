import { loadFromLocalStorage } from '../js/services/localStorage/trainnigstorage.js';

// Elementos del DOM
const bestTrainnerButton = document.getElementById('best-trainner');
const bestTrainnerContainer = document.getElementById('bestTrainner');

// Lógica para calcular el mejor entrenamiento
function getBestTraining() {
    const trainings = loadFromLocalStorage();
    if (trainings.length === 0) {
        return null;
    }

    return trainings.reduce((best, current) => {
        const currentSpeed = current.distancia / current.tiempo; 
        const bestSpeed = best.distancia / best.tiempo; // Mejor velocidad
        return currentSpeed > bestSpeed ? current : best;
    });
}

// Renderizar el mejor entrenamiento
function showBestTraining() {
    const bestTraining = getBestTraining();

    // Si no hay entrenamientos registrados
    if (!bestTraining) {
        bestTrainnerContainer.innerHTML = '<p>No tienes entrenamientos registrados.</p>';
        return;
    }

    // Formatear la fecha antes de mostrarla
    const trainingDate = new Date(bestTraining.fecha); // Convertir a objeto Date
    const formattedDate = trainingDate.toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    // Mostrar el mejor entrenamiento
    bestTrainnerContainer.innerHTML = `
        <div class="best-training">
            <p><strong>Distancia:</strong> ${bestTraining.distancia} km</p>
            <p><strong>Tiempo:</strong> ${bestTraining.tiempo} minutos</p>
            <p><strong>Fecha:</strong> ${formattedDate}</p> <!-- Usar la fecha formateada -->
            <p><strong>Velocidad:</strong> ${(bestTraining.distancia / bestTraining.tiempo).toFixed(2)} km/min</p>
        </div>
    `;

     // Crear el botón de cerrar
     const closeButton = document.createElement('button');
     closeButton.type = 'button';
     closeButton.textContent = 'Cerrar';
     closeButton.classList.add('close-button');
     closeButton.style.marginTop = '10px'; // Opcional: espacio entre el contenido y el botón
     closeButton.addEventListener('click', () => {
         bestTrainnerContainer.innerHTML = ''; // Limpiar el contenido del contenedor
     });
 
     // Añadir el botón de cerrar al contenedor
     bestTrainnerContainer.appendChild(closeButton);
 
    bestTrainnerContainer.style.marginTop = '12%';

  
}

// Evento al hacer clic en el boton
bestTrainnerButton.addEventListener('click', showBestTraining);
