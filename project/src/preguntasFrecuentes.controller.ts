import {Body, Controller, Get, Post} from "@nestjs/common";
import {Pregunta, PreguntaService} from "./pregunta.service";

const fs = require('fs');
@Controller('Preguntas')
export class PreguntasFrecuentesController{
    constructor (private _preguntaServices: PreguntaService){}

    @Get('mostrarPreguntas')
    mostrarPreguntas(mostrarPreguntas) {
        //return this._preguntaServices.preguntasFrecuentes;
        let html = fs.readFileSync(
            __dirname + '/html/preguntas.html',
            'utf8'
        );


        html.replace("{{respuesta}}", this._preguntaServices.mostrarPreguntas()[1].respuest);

        return html.replace("{{pregunta}}", this._preguntaServices.mostrarPreguntas()[1].pregunt);
        //return html.replace('{{pregunta}}', this._preguntaServices.mostrarPreguntas()[1].pregunt);
            /*.forEach(
            (pregunta, indice, arreglo) =>{
                console.log(pregunta.pregunt );
                console.log(pregunta.pregunt);

            }));*/
    }

    @Post('agregarPregunta')
    agregarPregunta(@Body() bodyParams){
        const preguntaNueva = new Pregunta(bodyParams.pregunta, bodyParams.respuesta);
        return this._preguntaServices.agregarPregunta(preguntaNueva);
    }


}