import { Controller, Get } from '@nestjs/common';
import { Services/usersService } from './services/users.service';

@Controller()
export class Services/usersController {
  constructor(private readonly services/usersService: Services/usersService) {}

  @Get()
  getHello(): string {
    return this.services/usersService.getHello();
  }
}
