import { Injectable } from '@nestjs/common';

import { UserRepository } from 'apps/api/src/app/database/repositories/user.repository';

import { ValidatedUserModel } from 'apps/api/src/app/common/models/validated-user.model';

import { UpdateUserRequest, UpdateUserResponse } from '@memo-life-task/dtos';

import { CommonDatabaseErrorException } from 'apps/api/src/app/common/exceptions/common-database-error.exception';
import { UserNotFoundException } from 'apps/api/src/app/common/exceptions/user-not-found.exception';

@Injectable()
export class UpdateUserService {
  constructor(private readonly userRepository: UserRepository) {}

  async updateUser(
    req: UpdateUserRequest,
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

    user.nameFirst = req.firstName;
    user.nameLast = req.lastName;
    user.pfp = `https://ui-avatars.com/api/?background=${bgColor}&color=fff?name=${req.firstName}+${req.lastName}`;

    user = await this.userRepository.save(user).catch((err) => {
      throw new CommonDatabaseErrorException(err);
    });

    const res = new UpdateUserResponse();
    res.nameFirst = user.nameFirst;
    res.nameLast = user.nameLast;

    return res;
  }
}
