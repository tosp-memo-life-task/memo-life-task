import { Controller, Post } from '@nestjs/common';

import { SignInService } from './services/sign-in/sign-in.service';
import { SignUpService } from './services/sign-up/sign-up.service';

@Controller('authentication')
export class AuthenticationController {
  constructor(
    private readonly signInService: SignInService,
    private readonly signUpService: SignUpService
  ) {}

  @Post()
  async signUp(): Promise<any> {
    return await this.signUpService.signUp();
  }

  @Post()
  async signIn(): Promise<any> {
    return await this.signInService.signIn();
  }
}
