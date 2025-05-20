import { Controller, Get } from '@nestjs/common';
import { Services/ordersService } from './services/orders.service';

@Controller()
export class Services/ordersController {
  constructor(private readonly services/ordersService: Services/ordersService) {}

  @Get()
  getHello(): string {
    return this.services/ordersService.getHello();
  }
}
