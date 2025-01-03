import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import { setupSwagger } from './utils/swagger';
import { ConfigService } from '@nestjs/config';

dotenv.config(); // Load environment variables

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //const port = process.env.PORT || 4000;

  // Fetch ConfigService instance
  const configService = app.get(ConfigService);

  // Get port from ConfigService
  const port = configService.getOrThrow<number>('PORT');

  // Enable CORS
  app.enableCors({
    origin: 'http://localhost:4000', // Replace with your frontend URL
    methods: 'GET,POST,PUT,DELETE,PATCH,OPTIONS',
    allowedHeaders: 'Content-Type, Authorization',
  });


  setupSwagger(app, port); // setup swagger docs

  await app.listen(port, '0.0.0.0'); // Bind to all network interfaces
  console.log(`Application is running on: http://localhost:${port}`);
}

bootstrap();