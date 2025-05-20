import { NestFactory } from '@nestjs/core';
import { Services/ordersModule } from './services/orders.module';

async function bootstrap() {
  const app = await NestFactory.create(Services/ordersModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
