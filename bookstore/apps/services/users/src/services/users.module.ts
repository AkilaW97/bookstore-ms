import { Module } from '@nestjs/common';
import { Services/usersController } from './services/users.controller';
import { Services/usersService } from './services/users.service';

@Module({
  imports: [],
  controllers: [Services/usersController],
  providers: [Services/usersService],
})
export class Services/usersModule {}
