import { Module } from '@nestjs/common';
import { TypeOrmExModule } from '../../database/typeorm-ex.module';

import { UserController } from './user.controller';

import { GetProfileService } from './services/get-profile/get-profile.service';
import { UpdateUserService } from './services/update-user/update-user.service';

import { UserRepository } from '../../database/repositories/user.repository';

@Module({
  controllers: [UserController],
  imports: [TypeOrmExModule.forCustomRepository([UserRepository])],
  providers: [GetProfileService, UpdateUserService]
})
export class UserModule {}
