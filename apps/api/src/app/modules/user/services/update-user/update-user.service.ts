import { Injectable } from '@nestjs/common';

import { UserRepository } from 'apps/api/src/app/database/repositories/user.repository';

import { ValidatedUserModel } from 'apps/api/src/app/common/models/validated-user.model';

import {
  UpdateUserRequestBody,
  UpdateUserResponse
} from '@memo-life-task/dtos';

import { CommonDatabaseErrorException } from 'apps/api/src/app/common/exceptions/common-database-error.exception';
import { UserNotFoundException } from 'apps/api/src/app/common/exceptions/user-not-found.exception';

@Injectable()
export class UpdateUserService {
  constructor(private readonly userRepository: UserRepository) {}

  async updateUser(
    body: UpdateUserRequestBody,
    validatedUser: ValidatedUserModel
  ): Promise<UpdateUserResponse> {
    let user = await this.userRepository
      .findOneOrFail({
        where: { id: validatedUser.id }
      })
      .catch(() => {
        throw new UserNotFoundException();
      });

    const bgColor = Math.floor(Math.random() * 16777215).toString(16);

    user.nameFirst = body.firstName;
    user.nameLast = body.lastName;
    user.pfp = `https://ui-avatars.com/api/?background=${bgColor}&color=fff?name=${body.firstName}+${body.lastName}`;

    user = await this.userRepository.save(user).catch((err) => {
      throw new CommonDatabaseErrorException(err);
    });

    const res = new UpdateUserResponse();
    res.firstName = user.nameFirst;
    res.lastName = user.nameLast;

    return res;
  }
}
