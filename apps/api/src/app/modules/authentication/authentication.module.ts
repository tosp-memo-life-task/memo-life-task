import { Module } from '@nestjs/common';

import { AuthenticationController } from './authentication.controller';

import { SignUpService } from './services/sign-up/sign-up.service';
import { SignInService } from './services/sign-in/sign-in.service';

import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
  controllers: [AuthenticationController],
  providers: [JwtStrategy, SignUpService, SignInService]
})
export class AuthenticationModule {}
