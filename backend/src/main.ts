import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Ativa validação global dos DTOs
  app.useGlobalPipes(new ValidationPipe());

  // Configuração do Swagger
  const config = new DocumentBuilder()
    .setTitle('N1 API - NestJS')
    .setDescription('API com Profile, User e Address')
    .setVersion('1.0')
    .addTag('profile')
    .addTag('user')
    .addTag('address')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  await app.listen(3000);
  console.log('Swagger disponível em: http://localhost:3000/api/docs');
}

bootstrap();
