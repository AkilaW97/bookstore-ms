import { NestFactory } from '@nestjs/core';
import { Services/booksModule } from './services/books.module';

async function bootstrap() {
  const app = await NestFactory.create(Services/booksModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
