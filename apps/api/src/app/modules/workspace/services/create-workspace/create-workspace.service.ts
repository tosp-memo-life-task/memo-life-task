import { Injectable } from '@nestjs/common';

import { UserRepository } from 'apps/api/src/app/database/repositories/user.repository';
import { WorkspaceRepository } from 'apps/api/src/app/database/repositories/workspace.repository';

import { WorkspaceEntity } from 'apps/api/src/app/database/entities/workspace.entity';

import { ValidatedUserModel } from 'apps/api/src/app/common/models/validated-user.model';

import { UserNotFoundException } from 'apps/api/src/app/common/exceptions/user-not-found.exception';
import { CreateWorkspaceResponse } from '@memo-life-task/dtos';

@Injectable()
export class CreateWorkspaceService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly workspaceRepository: WorkspaceRepository
  ) {}

  async createWorkspace(
    req: any,
    validatedUser: ValidatedUserModel
  ): Promise<CreateWorkspaceResponse> {
    const user = await this.userRepository
      .findOneOrFail({ where: { id: validatedUser.id } })
      .catch(() => {
        throw new UserNotFoundException();
      });

    let workspace = new WorkspaceEntity();
    workspace.description = req.description;
    workspace.owner = user;
    workspace.title = req.title;

    workspace = await this.workspaceRepository.save(workspace);

    const res = new CreateWorkspaceResponse();
    //   res.description = workspace.description;
    //   res.

    return res;
  }
}
