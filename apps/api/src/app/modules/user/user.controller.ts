import { Body, Controller, Patch } from '@nestjs/common';
import { ApiOkResponse, ApiUnauthorizedResponse } from '@nestjs/swagger';

import { User } from '../../common/decorators/user.decorator';
import { ValidatedUserModel } from '../../common/models/validated-user.model';

import { UpdateUserService } from './services/update-user/update-user.service';

import {
  ErrorResponse,
  UpdateUserRequestBody,
  UpdateUserResponse
} from '@memo-life-task/dtos';

@Controller('user')
export class UserController {
  constructor(private readonly updateUserService: UpdateUserService) {}

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
}
