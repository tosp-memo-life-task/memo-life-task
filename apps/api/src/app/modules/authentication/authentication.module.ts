import { Module } from '@nestjs/common';

import { AuthenticationController } from './authentication.controller';

import { SignUpService } from './services/sign-up/sign-up.service';
import { SignInService } from './services/sign-in/sign-in.service';

@Module({
  controllers: [AuthenticationController],
  providers: [SignUpService, SignInService]
})
export class AuthenticationModule {}
