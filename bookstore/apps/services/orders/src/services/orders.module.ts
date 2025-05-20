import { Module } from '@nestjs/common';
import { Services/ordersController } from './services/orders.controller';
import { Services/ordersService } from './services/orders.service';

@Module({
  imports: [],
  controllers: [Services/ordersController],
  providers: [Services/ordersService],
})
export class Services/ordersModule {}
