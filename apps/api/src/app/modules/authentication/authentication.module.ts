import { Module } from '@nestjs/common';

import { AuthenticationController } from './authentication.controller';

import { SignUpService } from './services/sign-up/sign-up.service';

@Module({
  controllers: [AuthenticationController],
  providers: [SignUpService]
})
export class AuthenticationModule {}
