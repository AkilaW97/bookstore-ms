import { Module } from '@nestjs/common';
import { Services/booksController } from './services/books.controller';
import { Services/booksService } from './services/books.service';

@Module({
  imports: [],
  controllers: [Services/booksController],
  providers: [Services/booksService],
})
export class Services/booksModule {}
