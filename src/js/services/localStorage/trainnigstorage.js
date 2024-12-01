import { Training } from '../../models/training.js';

// Guardar entrenamiento y convertir a JSON para poder almacenar en localStorage
export function saveInLocalStorage(training) {
    try {
        let trainings = JSON.parse(localStorage.getItem('trainings')) || [];
        trainings.push(training);
        localStorage.setItem('trainings', JSON.stringify(trainings));
        alert('Entrenamiento guardado con éxito');
    } catch (error) {
        console.error('Error al guardar entrenamiento', error);
    }
}

// Función ara recuperar los datos 
export function loadFromLocalStorage() {
    try {
        const data = JSON.parse(localStorage.getItem('trainings')) || [];
        return data.map(item => Training.fromJSON(item));
    } catch (error) {
        console.log('Error al cargar entrenamientos', error);
        return [];
    }
}