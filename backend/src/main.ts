import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));

  const config = new DocumentBuilder()
    .setTitle('Cinema Lab API')
    .setDescription('API para gerenciamento de perfis, usuários e endereços [cite: 4]')
    .setVersion('1.0')
    .addBearerAuth() // Para o Desafio Extra de JWT
    .build();
    
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document); // Rota /api/docs 

  await app.listen(3000);
}
bootstrap();