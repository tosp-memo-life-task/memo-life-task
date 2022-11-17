import { Module } from '@nestjs/common';

import { TypeOrmExModule } from '../../database/typeorm-ex.module';

import { AuthenticationController } from './authentication.controller';

import { SignUpService } from './services/sign-up/sign-up.service';
import { SignInService } from './services/sign-in/sign-in.service';

import { UserRepository } from '../../database/repositories/user.repository';

import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
  controllers: [AuthenticationController],
  imports: [TypeOrmExModule.forCustomRepository([UserRepository])],
  providers: [JwtStrategy, SignUpService, SignInService]
})
export class AuthenticationModule {}
