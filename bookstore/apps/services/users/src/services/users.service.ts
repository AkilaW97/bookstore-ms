import { Injectable } from '@nestjs/common';

@Injectable()
export class Services/usersService {
  getHello(): string {
    return 'Hello World!';
  }
}
