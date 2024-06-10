import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);   // cria a api importando as informações do app module, esse por sua vez, importa as informações do contacts module, que importa o contacts service e contacts controller
  app.useGlobalPipes(new ValidationPipe({            // faz a validação de forma global nas instancias da api
    whitelist: true,                                 // não aceita, na requisição, os itens que não estiverem no create-DTO 
    forbidNonWhitelisted: true,                      // retorna erro caso tentem enviar itens que não estão na lista branca
    transform: true,                                 // quando um valor number vem da rota, vem como string, ele transforma em number novamente
  }))
  app.enableCors();                                  // libera acesso de dominios diferentes 
  await app.listen(3010);                            // insere a rota da api na porta 3000 do servidor local
}
bootstrap();
