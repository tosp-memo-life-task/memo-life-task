import { Body, Controller, Post } from '@nestjs/common';

import { Public } from '../../common/decorators/public.decorator';

import { SignInService } from './services/sign-in/sign-in.service';
import { SignUpService } from './services/sign-up/sign-up.service';

import {
  SignInRequest,
  SignInResponse,
  SignUpRequest,
  SignUpResponse
} from '@memo-life-task/dtos';

@Controller('auth')
export class AuthenticationController {
  constructor(
    private readonly signInService: SignInService,
    private readonly signUpService: SignUpService
  ) {}

  @Public()
  @Post('sign-in')
  async signIn(@Body() req: SignInRequest): Promise<SignInResponse> {
    return await this.signInService.signIn(req);
  }

  @Public()
  @Post('sign-up')
  async signUp(@Body() req: SignUpRequest): Promise<SignUpResponse> {
    return await this.signUpService.signUp(req);
  }
}
