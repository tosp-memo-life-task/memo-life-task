import { Injectable } from '@nestjs/common';

import { WorkspaceRepository } from '../../../../database/repositories/workspace.repository';

import { ValidatedUserModel } from '../../../../common/models/validated-user.model';

import {
  GetWorkspaceRequestParams,
  GetWorkspaceResponse,
  InvitationResponse,
  TaskResponse,
  UserResponse
} from '@memo-life-task/dtos';

import { WorkspaceNotFoundException } from '../../../../common/exceptions/workspace-not-found.exception';
import { WorkspaceUnauthroziedException } from '../../../../common/exceptions/workspace-unauthorized.exception';

@Injectable()
export class GetWorkspaceService {
  constructor(private readonly workspaceRepository: WorkspaceRepository) {}

  async getWorkspace(
    params: GetWorkspaceRequestParams,
    validatedUser: ValidatedUserModel
  ): Promise<GetWorkspaceResponse> {
    const workspace = await this.workspaceRepository
      .findOneOrFail({
        relations: {
          invitations: { receiver: true },
          owner: true,
          tasks: { assignee: true, workspace: true },
          editors: true
        },
        where: { id: params.id }
      })
      .catch(() => {
        throw new WorkspaceNotFoundException();
      });

    if (workspace.editors.findIndex((e) => e.id === validatedUser.id) === -1)
      throw new WorkspaceUnauthroziedException();

    const editors = workspace.editors.map((e) => {
      const editor = new UserResponse();
      editor.email = e.email;
      editor.id = e.id;
      editor.isUser = e.id === validatedUser.id;
      editor.firstName = e.nameFirst;
      editor.lastName = e.nameLast;

      return editor;
    });

    const invitations = workspace.invitations.map((i) => {
      return i.receiver.email;
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

    const res = new GetWorkspaceResponse();
    res.createdAt = workspace.createdAt;
    res.description = workspace.description;
    res.editors = editors;
    res.id = workspace.id;
    res.invitations = invitations;
    res.isOwned = workspace.owner.id === validatedUser.id;
    res.tasks = tasks;
    res.title = workspace.title;
    res.updatedAt = workspace.updatedAt;

    return res;
  }
}
