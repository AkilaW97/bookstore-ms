import { Test, TestingModule } from '@nestjs/testing';
import { Services/usersController } from './services/users.controller';
import { Services/usersService } from './services/users.service';

describe('Services/usersController', () => {
  let services/usersController: Services/usersController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [Services/usersController],
      providers: [Services/usersService],
    }).compile();

    services/usersController = app.get<Services/usersController>(Services/usersController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(services/usersController.getHello()).toBe('Hello World!');
    });
  });
});
