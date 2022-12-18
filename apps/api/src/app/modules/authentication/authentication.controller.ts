import { Body, Controller, Post } from '@nestjs/common';
import {
  ApiConflictResponse,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiUnauthorizedResponse
} from '@nestjs/swagger';

import { Public } from '../../common/decorators/public.decorator';

import { SignInService } from './services/sign-in/sign-in.service';
import { SignUpService } from './services/sign-up/sign-up.service';

import {
  ErrorResponse,
  SignInRequestBody,
  SignInResponse,
  SignUpRequestBody,
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
  @ApiUnauthorizedResponse({
    description: 'User not found. Wrong email and/or password.',
    type: ErrorResponse
  })
  @ApiOkResponse({
    description: 'User successfully signed in.',
    type: SignInResponse
  })
  async signIn(@Body() body: SignInRequestBody): Promise<SignInResponse> {
    return await this.signInService.signIn(body);
  }

  @Public()
  @Post('sign-up')
  @ApiConflictResponse({
    description: 'User already signed up with email.',
    type: ErrorResponse
  })
  @ApiCreatedResponse({
    description: 'User successfully signed up.',
    type: SignUpResponse
  })
  async signUp(@Body() body: SignUpRequestBody): Promise<SignUpResponse> {
    return await this.signUpService.signUp(body);
  }
}
