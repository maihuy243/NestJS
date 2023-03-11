import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import dotenv from 'dotenv';

async function initApp(): Promise<void> {
  const app = await NestFactory.create(AppModule);
  // dotenv.config();
  const PORT = process.env.PORT || 8080;
  await app.listen(PORT);
}
initApp();
