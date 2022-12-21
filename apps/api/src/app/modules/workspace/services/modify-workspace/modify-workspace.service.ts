import { Injectable } from '@nestjs/common';

import { WorkspaceRepository } from '../../../../database/repositories/workspace.repository';

import { ValidatedUserModel } from '../../../../common/models/validated-user.model';

import {
  ModifyWorkspaceRequestBody,
  ModifyWorkspaceRequestParams,
  ModifyWorkspaceResponse,
  TaskResponse,
  UserResponse
} from '@memo-life-task/dtos';

import { WorkspaceNotFoundException } from '../../../../common/exceptions/workspace-not-found.exception';
import { WorkspaceUnauthroziedException } from '../../../../common/exceptions/workspace-unauthorized.exception';
import { CommonDatabaseErrorException } from '../../../../common/exceptions/common-database-error.exception';

@Injectable()
export class ModifyWorkspaceService {
  constructor(private readonly workspaceRepository: WorkspaceRepository) {}

  async modifyWorkspace(
    body: ModifyWorkspaceRequestBody,
    params: ModifyWorkspaceRequestParams,
    validatedUser: ValidatedUserModel
  ): Promise<ModifyWorkspaceResponse> {
    let workspace = await this.workspaceRepository
      .findOneOrFail({
        relations: {
          owner: true,
          tasks: { assignee: true, workspace: true },
          editors: true
        },
        where: { id: params.id }
      })
      .catch(() => {
        throw new WorkspaceNotFoundException();
      });

    if (workspace.owner.id !== validatedUser.id)
      throw new WorkspaceUnauthroziedException();

    workspace.description = body.description;
    workspace.title = body.title;

    workspace = await this.workspaceRepository.save(workspace).catch((err) => {
      throw new CommonDatabaseErrorException(err);
    });

    const editors = workspace.editors.map((e) => {
      const editor = new UserResponse();
      editor.email = e.email;
      editor.id = e.id;
      editor.isUser = e.id === validatedUser.id;
      editor.firstName = e.nameFirst;
      editor.lastName = e.nameLast;

      return editor;
    });

    const tasks = workspace.tasks.map((t) => {
      const assignee = new UserResponse();
      assignee.email = t.assignee.email;
      assignee.id = t.assignee.id;
      assignee.isUser = t.assignee.id === validatedUser.id;
      assignee.firstName = t.assignee.nameFirst;
      assignee.lastName = t.assignee.nameLast;

      const task = new TaskResponse();
      task.name = t.name;
      task.assignee = assignee;
      task.createdAt = t.createdAt;
      task.description = t.description;
      task.id = t.id;
      task.name = t.name;
      task.priority = t.priority;
      task.status = t.status;
      task.updatedAt = t.updatedAt;
      task.workspaceId = t.workspace.id;

      return task;
    });

    const res = new ModifyWorkspaceResponse();
    res.createdAt = workspace.createdAt;
    res.description = workspace.description;
    res.editors = editors;
    res.id = workspace.id;
    res.isOwned = true;
    res.tasks = tasks;
    res.title = workspace.title;
    res.updatedAt = workspace.updatedAt;

    return res;
  }
}
