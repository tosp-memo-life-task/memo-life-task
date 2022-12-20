import { Injectable } from '@nestjs/common';

import { WorkspaceRepository } from '../../../../database/repositories/workspace.repository';

import { ValidatedUserModel } from '../../../../common/models/validated-user.model';

import { DeleteWorkspaceRequestParams } from '@memo-life-task/dtos';

import { CommonDatabaseErrorException } from '../../../../common/exceptions/common-database-error.exception';
import { WorkspaceNotFoundException } from '../../../../common/exceptions/workspace-not-found.exception';
import { WorkspaceUnauthroziedException } from '../../../../common/exceptions/workspace-unauthorized.exception';

@Injectable()
export class DeleteWorkspaceService {
  constructor(private readonly workspaceRepository: WorkspaceRepository) {}

  async deleteWorkspace(
    params: DeleteWorkspaceRequestParams,
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
