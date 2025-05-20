import { Injectable } from '@nestjs/common';

@Injectable()
export class Services/booksService {
  getHello(): string {
    return 'Hello World!';
  }
}
