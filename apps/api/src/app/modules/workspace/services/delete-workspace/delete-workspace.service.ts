import { Injectable } from '@nestjs/common';

import { WorkspaceRepository } from 'apps/api/src/app/database/repositories/workspace.repository';

import { ValidatedUserModel } from 'apps/api/src/app/common/models/validated-user.model';

import { DeleteWorkspaceRequest } from '@memo-life-task/dtos';

import { CommonDatabaseErrorException } from 'apps/api/src/app/common/exceptions/common-database-error.exception';
import { WorkspaceNotFoundException } from 'apps/api/src/app/common/exceptions/workspace-not-found.exception';
import { WorkspaceUnauthroziedException } from 'apps/api/src/app/common/exceptions/workspace-unauthorized.exception';

@Injectable()
export class DeleteWorkspaceService {
  constructor(private readonly workspaceRepository: WorkspaceRepository) {}

  async deleteWorkspace(
    params: DeleteWorkspaceRequest,
    validatedUser: ValidatedUserModel
  ): Promise<void> {
    const workspace = await this.workspaceRepository
      .findOneOrFail({
        relations: { owner: true },
        where: { id: params.id }
      })
      .catch(() => {
        throw new WorkspaceNotFoundException();
      });

    if (workspace.owner.id !== validatedUser.id)
      throw new WorkspaceUnauthroziedException();

    await this.workspaceRepository.remove(workspace).catch((err) => {
      throw new CommonDatabaseErrorException(err);
    });
  }
}
