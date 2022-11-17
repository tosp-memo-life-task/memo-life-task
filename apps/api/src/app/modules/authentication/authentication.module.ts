import { Module } from '@nestjs/common';

import { TypeOrmExModule } from '../../database/typeorm-ex.module';

import { AuthenticationController } from './authentication.controller';

import { PasswordService } from './services/password/password.service';
import { SignUpService } from './services/sign-up/sign-up.service';
import { SignInService } from './services/sign-in/sign-in.service';
import { TokenService } from './services/token/token.service';

import { UserRepository } from '../../database/repositories/user.repository';

import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
  controllers: [AuthenticationController],
  imports: [TypeOrmExModule.forCustomRepository([UserRepository])],
  providers: [
    JwtStrategy,
    PasswordService,
    SignUpService,
    SignInService,
    TokenService
  ]
})
export class AuthenticationModule {}
