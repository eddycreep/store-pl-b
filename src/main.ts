import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.SERVERPORT || 4000;
  await app.listen(port);
  console.log(`Application is running on: http://localhost:${port}`);
}
bootstrap();

