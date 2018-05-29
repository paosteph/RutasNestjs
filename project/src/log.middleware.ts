import {Injectable, MiddlewareFunction, NestMiddleware} from "@nestjs/common";

const fs = require('fs');
@Injectable()
export class LogMiddleware implements NestMiddleware{

    resolve(nivelDeLog: string) : MiddlewareFunction {
      return (request, response, next) => {

          const respuesta = {
              baseUrl: request.baseUrl,
              hostname: request.hostname,
              subdomains: request.subdomains,
              ip: request.ip,
              method: request.method,
              originalUrl: request.originalUrl,
              path: request.path,
              protocol: request.protocol,
              headers: request.headers,
          };

          if(nivelDeLog === 'archivo'){
              escribirArchivo(respuesta);
          }else if(nivelDeLog === 'consola') {
              console.log(respuesta);
          }else{
              escribirArchivo(respuesta);
              console.log(respuesta);
          }

          next();
      };

    }
}

function escribirArchivo(respuesta: {}){
    fs.writeFile(__dirname+'/logs/logs.json',JSON.stringify(respuesta, null, 4), (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log("Json creado");
    });
    console.log(respuesta);
}