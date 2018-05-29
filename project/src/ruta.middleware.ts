import {Injectable, MiddlewareFunction, NestMiddleware} from "@nestjs/common";

@Injectable()
export class RutaMiddleware implements NestMiddleware{
    resolve() : MiddlewareFunction {
        return (request, response, next) => {
            const cookie = {
                nombre: 'cookieee',
                valor: request.baseURL
            };

            response.cookie(cookie.nombre, cookie.valor);

        }
    }
}