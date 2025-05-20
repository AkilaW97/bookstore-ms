import { Controller, Get } from '@nestjs/common';
import { Services/booksService } from './services/books.service';

@Controller()
export class Services/booksController {
  constructor(private readonly services/booksService: Services/booksService) {}

  @Get()
  getHello(): string {
    return this.services/booksService.getHello();
  }
}
