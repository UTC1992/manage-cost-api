import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configurar títulos de documentación
  const options = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('Manage Cost REST API')
    .setDescription('API REST for control cost')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);

  // La ruta en que se sirve la documentación
  SwaggerModule.setup('docs', app, document);

  // cors
  app.enableCors({
    origin: [
      'http://localhost:3000',
      'https://manage-services-cost.vercel.app',
    ],
    methods: 'GET, PUT, POST, DELETE, PATCH',
  });

  await app.listen(process.env.PORT, '0.0.0.0');
}
bootstrap();
