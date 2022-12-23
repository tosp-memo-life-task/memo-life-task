import { Injectable } from '@nestjs/common';

import { WorkspaceRepository } from '../../../../database/repositories/workspace.repository';

import {
  RemoveEditorRequestBody,
  RemoveEditorRequestParams
} from '@memo-life-task/dtos';

import { ValidatedUserModel } from '../../../../common/models/validated-user.model';

import { CommonDatabaseErrorException } from '../../../../common/exceptions/common-database-error.exception';
import { UserNotFoundException } from '../../../../common/exceptions/user-not-found.exception';
import { WorkspaceForbiddenException } from '../../../../common/exceptions/workspace-forbidden.exception';
import { WorkspaceNotFoundException } from '../../../../common/exceptions/workspace-not-found.exception';
import { WorkspaceUnauthroziedException } from '../../../../common/exceptions/workspace-unauthorized.exception';

@Injectable()
export class RemoveEditorService {
  constructor(private readonly workspaceRepository: WorkspaceRepository) {}

  async removeEditor(
    body: RemoveEditorRequestBody,
    params: RemoveEditorRequestParams,
    validatedUser: ValidatedUserModel
  ): Promise<void> {
    const workspace = await this.workspaceRepository
      .findOneOrFail({
        relations: { owner: true, editors: true },
        where: { id: params.id }
      })
      .catch(() => {
        throw new WorkspaceNotFoundException();
      });

    if (workspace.owner.id !== validatedUser.id)
      throw new WorkspaceUnauthroziedException();

    if (body.id === validatedUser.id) throw new WorkspaceForbiddenException();

    const id = workspace.editors.findIndex((e) => e.id === body.id);

    if (id === -1) throw new UserNotFoundException();

    workspace.editors.splice(id, 1);

    await this.workspaceRepository.save(workspace).catch((err) => {
      throw new CommonDatabaseErrorException(err);
    });
  }
}
