import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import { setupSwagger } from './utils/swagger';

dotenv.config(); // Load environment variables

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const port = parseInt(process.env.PORT || '3000', 10); // Use Render's PORT environment variable or SERVERPORT for local

  // Enable CORS
  app.enableCors({
    origin: 'http://localhost:3000', // Replace with your frontend URL
    methods: 'GET,POST,PUT,DELETE,PATCH,OPTIONS',
    allowedHeaders: 'Content-Type, Authorization',
  });


  setupSwagger(app, port); // setup swagger docs

  await app.listen(port, '0.0.0.0'); // Bind to all network interfaces
  console.log(`Application is running on: http://localhost:${port}`);
}

bootstrap();