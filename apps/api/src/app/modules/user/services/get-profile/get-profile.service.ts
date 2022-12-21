import { Injectable } from '@nestjs/common';

import { UserRepository } from '../../../../database/repositories/user.repository';

import { ValidatedUserModel } from '../../../../common/models/validated-user.model';

import { GetProfileResponse } from '@memo-life-task/dtos';

import { UserNotFoundException } from '../../../../common/exceptions/user-not-found.exception';

@Injectable()
export class GetProfileService {
  constructor(private readonly userRepository: UserRepository) {}

  async getProfile(
    validatedUser: ValidatedUserModel
  ): Promise<GetProfileResponse> {
    const user = await this.userRepository
      .findOneOrFail({
        relations: { tasks: true, workspaces: true },
        where: { id: validatedUser.id }
      })
      .catch(() => {
        throw new UserNotFoundException();
      });

    const res: any = new Object();
    res.firstName = user.nameFirst;
    res.lastName = user.nameLast;
    res.pfp = user.pfp;
    res.tasks = user.tasks.length;
    res.workspaces = user.workspaces.length;

    return res;
  }
}
