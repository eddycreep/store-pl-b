import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import { setupSwagger } from './utils/swagger'; // Import the Swagger setup utility

dotenv.config(); // Load environment variables from .env file

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //const port = parseInt(process.env.SERVERPORT || '4000', 10);

  // Use Render's PORT environment variable or SERVERPORT for local
  const port = parseInt(process.env.PORT || process.env.SERVERPORT || '3000', 10);

  // Set up Swagger documentation
  setupSwagger(app, port);

  await app.listen(port, '0.0.0.0'); // Bind to all network interfaces
  console.log(`Application is running on: http://localhost:${port}`);
}
bootstrap();