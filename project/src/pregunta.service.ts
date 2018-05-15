import {Component} from "@nestjs/common/utils/decorators/component.decorator";

@Component()
export class PreguntaService{
    preguntasFrecuentes: Pregunta[] = [];

    agregarPregunta(pregunta: Pregunta){
        this.preguntasFrecuentes.push(pregunta);
        return this.preguntasFrecuentes;
    }

    mostrarPreguntas(): Pregunta[] {
        return this.preguntasFrecuentes;
    }

}

export class Pregunta{
    constructor(public pregunta: string,
                public respuesta: string){

    }
    get pregunt(): string{
        return this.pregunta;
    }
    get respuest(): string{
        return this.respuesta;
    }
}