import { Test, TestingModule } from '@nestjs/testing';
import { Services/ordersController } from './services/orders.controller';
import { Services/ordersService } from './services/orders.service';

describe('Services/ordersController', () => {
  let services/ordersController: Services/ordersController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [Services/ordersController],
      providers: [Services/ordersService],
    }).compile();

    services/ordersController = app.get<Services/ordersController>(Services/ordersController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(services/ordersController.getHello()).toBe('Hello World!');
    });
  });
});
