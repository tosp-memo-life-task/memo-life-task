import { Injectable } from '@nestjs/common';

import { UserRepository } from '../../../../database/repositories/user.repository';

import { ValidatedUserModel } from '../../../../common/models/validated-user.model';

import {
  ListWorkspacesResponse,
  UserResponse,
  WorkspaceResponse
} from '@memo-life-task/dtos';

import { UserNotFoundException } from '../../../../common/exceptions/user-not-found.exception';

@Injectable()
export class ListWorkspacesService {
  constructor(private readonly userRepository: UserRepository) {}

  async listWorkspaces(validatedUser: ValidatedUserModel): Promise<any> {
    const user = await this.userRepository
      .findOneOrFail({
        relations: { workspaces: { owner: true } },
        where: { id: validatedUser.id }
      })
      .catch(() => {
        throw new UserNotFoundException();
      });

    const workspaces = user.workspaces.map((w) => {
      const owner = new UserResponse();
      owner.firstName = w.owner.nameFirst;
      owner.isUser = w.owner.id === validatedUser.id;
      owner.lastName = w.owner.nameLast;

      const workspace = new WorkspaceResponse();
      workspace.createdAt = w.createdAt;
      workspace.description = w.description;
      workspace.id = w.id;
      workspace.isOwned = w.owner.id === validatedUser.id;
      workspace.owner = owner;
      workspace.title = w.title;
      workspace.updatedAt = w.updatedAt;

      return workspace;
    });

    const res = new ListWorkspacesResponse();
    res.workspaces = workspaces;

    return res;
  }
}
