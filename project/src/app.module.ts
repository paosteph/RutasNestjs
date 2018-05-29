import {MiddlewareConsumer, Module, NestModule} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {PreguntaService} from "./pregunta.service";
import {InicioController} from "./inicio.controller";
import {PreguntasFrecuentesController} from "./preguntasFrecuentes.controller";
import {LogMiddleware} from "./log.middleware";
import {RutaMiddleware} from "./ruta.middleware";

@Module({
  imports: [],
  controllers: [AppController,
      InicioController,
      PreguntasFrecuentesController
  ],
  providers: [AppService,
      PreguntaService
  ],
})
export class AppModule implements NestModule{
    configure(consumer: MiddlewareConsumer): void{
        consumer.apply(LogMiddleware).with('archivo').forRoutes('/Pregunta/agregarPregunta');
        consumer.apply(LogMiddleware).with('consola').forRoutes('/Pregunta/mostrarPreguntas');
        //consumer.apply(LogMiddleware).with('todo').forRoutes('/Inicio/Pao');
        consumer.apply(RutaMiddleware).forRoutes('/Inicio/Pao');
    }
}
