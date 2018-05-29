import {Controller, Get, HttpCode, Req, Response} from "@nestjs/common";

const fs = require('fs');

@Controller('Inicio')
export class InicioController{

    @Get('Home')
    //@HttpCode(200)
    mostrarContenido(@Req() request, @Response() response){
        const respuesta = {
            path: request.path,
            protocol: request.protocol
        };

        let footer = this.leerArchivo('/html/footer.html');
        let header = this.leerArchivo('/html/header.html');
        let contenido = this.leerArchivo('/html/contenido.html');
        console.log(respuesta);
        return header.replace('{{variable}}', header.concat(contenido).concat(footer));

        //return response.redirect('/Home');
    }

    leerArchivo(direccion: string): string{
        let lectura = fs.readFile(
            __dirname + direccion,
            'utf8',
            (error, detalle)=>{
                if(error){
                    console.log('Error', error);
                    HttpCode(500);
                    return "";
                }else{
                    HttpCode(200);
                    return lectura;
                    //console.log('Datos', detalle);
                }
            }
        );
        return lectura;
    }

    @Get('Pao')
    inicioMiddle(){
        return 'Inicio pao';
    }
}