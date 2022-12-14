import { Injectable } from '@nestjs/common';

import { UserRepository } from '../../../../database/repositories/user.repository';
import { WorkspaceRepository } from '../../../../database/repositories/workspace.repository';

import { UserEntity } from '../../../../database/entities/user.entity';
import { WorkspaceEntity } from '../../../../database/entities/workspace.entity';

import { ValidatedUserModel } from '../../../../common/models/validated-user.model';

import {
  CreateWorkspaceRequestBody,
  CreateWorkspaceResponse,
  UserResponse
} from '@memo-life-task/dtos';

import { CommonDatabaseErrorException } from '../../../../common/exceptions/common-database-error.exception';
import { UserNotFoundException } from '../../../../common/exceptions/user-not-found.exception';

@Injectable()
export class CreateWorkspaceService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly workspaceRepository: WorkspaceRepository
  ) {}

  async createWorkspace(
    body: CreateWorkspaceRequestBody,
    validatedUser: ValidatedUserModel
  ): Promise<CreateWorkspaceResponse> {
    const user = await this.userRepository
      .findOneOrFail({ where: { id: validatedUser.id } })
      .catch(() => {
        throw new UserNotFoundException();
      });

    let workspace = new WorkspaceEntity();
    workspace.description = body.description;
    workspace.owner = user;
    workspace.title = body.title;
    workspace.editors = new Array<UserEntity>(user);

    workspace = await this.workspaceRepository.save(workspace).catch((err) => {
      throw new CommonDatabaseErrorException(err);
    });

    const editor = new UserResponse();
    editor.email = user.email;
    editor.id = user.id;
    editor.isUser = true;
    editor.firstName = user.nameFirst;
    editor.lastName = user.nameLast;

    const res = new CreateWorkspaceResponse();
    res.createdAt = workspace.createdAt;
    res.description = workspace.description;
    res.editors = new Array<UserResponse>(editor);
    res.id = workspace.id;
    res.isOwned = true;
    res.title = workspace.title;
    res.updatedAt = workspace.updatedAt;

    return res;
  }
}
