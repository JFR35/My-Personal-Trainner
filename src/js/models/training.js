export class Entrenamiento {
    #distancia;
    #tiempo;
    #fecha;
    #hora;

    constructor(distancia, tiempo, fecha = new Date()) {
        this.distancia = distancia;
        this.tiempo = tiempo; 
        this.fecha = fecha; 
        this.comentarios = '';
    }
}