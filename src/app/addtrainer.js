import { Training } from '../js/models/training.js';
import { saveInLocalStorage } from '../js/services/localStorage/trainnigstorage.js';

// Elementos del DOM
const addTrainerButton = document.getElementById('add-trainer');
const trainingItemsContainer = document.getElementById('addTrainingItems');

// Crear y renderizar el formulario dinámico
function createAddTrainerForm() {
    // Verificar si el formulario ya existe
    if (document.getElementById('trainingForm')) {
        alert('Ya hay un formulario abierto.');
        return;
    }

    const form = document.createElement('form');
    form.id = 'trainingForm';
    form.classList.add('form-visible');

    // Crear campos para renderizar (label e input)
    const distanciaLabel = document.createElement('label');
    distanciaLabel.setAttribute('for', 'distancia');
    distanciaLabel.textContent = 'Distancia (Km):';

    const distanciaInput = document.createElement('input');
    distanciaInput.type = 'number';
    distanciaInput.id = 'distancia';
    distanciaInput.name = 'distancia';
    distanciaInput.required = true;

    const tiempoLabel = document.createElement('label');
    tiempoLabel.setAttribute('for', 'tiempo');
    tiempoLabel.textContent = 'Tiempo (min):';

    const tiempoInput = document.createElement('input');
    tiempoInput.type = 'number';
    tiempoInput.id = 'tiempo';
    tiempoInput.name = 'tiempo';
    tiempoInput.required = true;

    const fechaLabel = document.createElement('label');
    fechaLabel.setAttribute('for', 'fecha');
    fechaLabel.textContent = 'Fecha:';

    const fechaInput = document.createElement('input');
    fechaInput.type = 'date';
    fechaInput.id = 'fecha';
    fechaInput.name = 'fecha';
    fechaInput.required = true;

    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Añadir entrenamiento';

    // Botón para cerrar el formulario
    const closeButton = document.createElement('button');
    closeButton.type = 'button';
    closeButton.textContent = 'Cerrar';
    closeButton.classList.add('close-button');
    closeButton.addEventListener('click', () => {
        form.remove();
    });

    // Añadir elementos al formulario
    form.appendChild(distanciaLabel);
    form.appendChild(distanciaInput);
    form.appendChild(tiempoLabel);
    form.appendChild(tiempoInput);
    form.appendChild(fechaLabel);
    form.appendChild(fechaInput);
    form.appendChild(submitButton);
    form.appendChild(closeButton);

    // Manejar el evento de envío
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const distancia = parseFloat(distanciaInput.value);
        const tiempo = parseFloat(tiempoInput.value);
        const fecha = fechaInput.value;

        // Pequeña validacion se podría mejorar
        if (isNaN(distancia) || isNaN(tiempo) || !fecha) {
            alert('Por favor, ingresa valores válidos');
            return;
        }

        const newTraining = new Training(distancia, tiempo, fecha);
        saveInLocalStorage(newTraining.toJSON());
        form.reset();
        form.remove(); // Eliminar el formulario tras agregar un entrenamiento
    });

    trainingItemsContainer.appendChild(form);
}

// Evento para mostrar el formulario al hacer click
addTrainerButton.addEventListener('click', createAddTrainerForm);
