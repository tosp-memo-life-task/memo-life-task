import { Body, Controller, Get, Patch } from '@nestjs/common';
import { ApiOkResponse, ApiUnauthorizedResponse } from '@nestjs/swagger';

import { User } from '../../common/decorators/user.decorator';
import { ValidatedUserModel } from '../../common/models/validated-user.model';

import { GetProfileService } from './services/get-profile/get-profile.service';
import { UpdateUserService } from './services/update-user/update-user.service';

import {
  ErrorResponse,
  GetProfileResponse,
  UpdateUserRequestBody,
  UpdateUserResponse
} from '@memo-life-task/dtos';

@Controller('user')
export class UserController {
  constructor(
    private readonly getProfileService: GetProfileService,
    private readonly updateUserService: UpdateUserService
  ) {}

  @Patch()
  @ApiUnauthorizedResponse({
    description: 'User not found.',
    type: ErrorResponse
  })
  @ApiOkResponse({
    description: 'User updated succesfully.',
    type: UpdateUserResponse
  })
  async updateUser(
    @Body() body: UpdateUserRequestBody,
    @User() validatedUser: ValidatedUserModel
  ): Promise<UpdateUserResponse> {
    return await this.updateUserService.updateUser(body, validatedUser);
  }

  @Get()
  async getProfile(
    @User() validatedUser: ValidatedUserModel
  ): Promise<GetProfileResponse> {
    return await this.getProfileService.getProfile(validatedUser);
  }
}
