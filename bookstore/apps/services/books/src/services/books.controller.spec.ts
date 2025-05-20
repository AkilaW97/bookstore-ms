import { Test, TestingModule } from '@nestjs/testing';
import { Services/booksController } from './services/books.controller';
import { Services/booksService } from './services/books.service';

describe('Services/booksController', () => {
  let services/booksController: Services/booksController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [Services/booksController],
      providers: [Services/booksService],
    }).compile();

    services/booksController = app.get<Services/booksController>(Services/booksController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(services/booksController.getHello()).toBe('Hello World!');
    });
  });
});
