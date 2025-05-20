import { NestFactory } from '@nestjs/core';
import { Services/usersModule } from './services/users.module';

async function bootstrap() {
  const app = await NestFactory.create(Services/usersModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
