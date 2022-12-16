import { Injectable } from '@nestjs/common';

import { WorkspaceRepository } from 'apps/api/src/app/database/repositories/workspace.repository';

import { ValidatedUserModel } from 'apps/api/src/app/common/models/validated-user.model';

import { DeleteWorkspaceRequest } from '@memo-life-task/dtos';

import { CommonDatabaseErrorException } from 'apps/api/src/app/common/exceptions/common-database-error.exception';
import { CommonUnauthorizedException } from 'apps/api/src/app/common/exceptions/common-unauthorized.exception';
import { WorkspaceNotFoundException } from 'apps/api/src/app/common/exceptions/workspace-not-found.exception';

@Injectable()
export class DeleteWorkspaceService {
  constructor(private readonly workspaceRepository: WorkspaceRepository) {}

  async deleteWorkspace(
    req: DeleteWorkspaceRequest,
    validatedUser: ValidatedUserModel
  ): Promise<void> {
    const workspace = await this.workspaceRepository
      .findOneOrFail({
        where: { id: req.id }
      })
      .catch(() => {
        throw new WorkspaceNotFoundException();
      });

    if (workspace.owner.id !== validatedUser.id)
      throw new CommonUnauthorizedException();

    await this.workspaceRepository.remove(workspace).catch((err) => {
      throw new CommonDatabaseErrorException(err);
    });
  }
}
