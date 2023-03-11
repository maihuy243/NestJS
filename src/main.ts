import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
// import dotenv from 'dotenv';

async function initApp(): Promise<void> {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  // dotenv.config();
  const PORT = process.env.PORT || 8080;
  await app.listen(PORT);
}
initApp();
