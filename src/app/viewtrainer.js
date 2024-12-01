import { loadFromLocalStorage } from '../js/services/localStorage/trainnigstorage.js';

// Elementos del DOM
const viewTrainerButton = document.getElementById('view-trainers');
const trainingItemsContainer = document.getElementById('viewTrainingItems');

// Crear y renderizar tabla de entrenamientos
function renderTrainingTable() {

    // Limpiar el contenedor para evitar duplicados
    trainingItemsContainer.innerHTML = '';

    const trainings = loadFromLocalStorage(); // Obtener entrenamientos desde localStorage
    if (!trainings || trainings.length === 0) {
        trainingItemsContainer.textContent = 'No hay entrenamientos disponibles.';
        return;
    }

    // Crear tabla para mostrar los entrenamientos
    const table = document.createElement('table');
    table.id = 'trainingTable';

    const caption = document.createElement('caption');
    caption.textContent = 'Lista de entrenamientos registrados';
    table.appendChild(caption);

    // Crear encabezado de la tabla
    const thead = document.createElement('thead');
    thead.innerHTML = `
        <tr>
            <th scope="col">Distancia (Km)</th>
            <th scope="col">Tiempo (min)</th>
            <th scope="col">Fecha</th>
            <th scope="col">Borrar</th>
        </tr>
    `;
    table.appendChild(thead);

    // Crear cuerpo de la tabla
    const tbody = document.createElement('tbody');
    trainings.forEach((training, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${training.distancia}</td>
            <td>${training.tiempo}</td>
            <td>${new Date(training.fecha).toLocaleDateString()}</td>
            <td><span class="delete-icon" data-index="${index}">&#x2716;</span></td> <!-- Icono para eliminar entreno -->
        `;
        tbody.appendChild(row);
    });
    table.appendChild(tbody);

    // Añadir tabla al contenedor con appendChild
    trainingItemsContainer.appendChild(table);
}

// Eliminar un entrenamiento
function deleteTraining(event) {
    if (event.target.classList.contains('delete-icon')) {
        const index = event.target.getAttribute('data-index');
        let trainings = loadFromLocalStorage();
        trainings.splice(index, 1);
        localStorage.setItem('trainings', JSON.stringify(trainings));
        renderTrainingTable(); // Volver a renderizar la tabla después de eliminar un entrenamiento
    }
 
}

// Evento para mostrar la tabla al hacer click
viewTrainerButton.addEventListener('click', renderTrainingTable);

// Evento para eliminar un entrenamiento
trainingItemsContainer.addEventListener('click', deleteTraining);