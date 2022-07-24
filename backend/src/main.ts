import { NestFactory } from '@nestjs/core';
require('dotenv').config();
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(process.env.NODE_DOCKER_PORT);
}
bootstrap();
