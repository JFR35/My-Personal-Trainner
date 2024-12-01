export class Training {
    constructor(distancia, tiempo, fecha = new Date()) {
        this.distancia = distancia;
        this.tiempo = tiempo;
        this.fecha = new Date(fecha);
        this.comentarios = '';
    }

    
    toJSON() {
        return {
            distancia: this.distancia,
            tiempo: this.tiempo,
            fecha: this.fecha.toISOString(),
        };
    }

    static fromJSON(json) {
        const fecha = new Date(json.fecha);
        if (isNaN(fecha.getTime())) {
            console.error('Fecha inválida al convertir de JSON:', json.fecha);
            throw new Error('Fecha inválida');
        }
        return new Training(json.distancia, json.tiempo, fecha);
    }
}

