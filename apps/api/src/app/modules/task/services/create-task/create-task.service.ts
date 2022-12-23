import { Injectable } from '@nestjs/common';

import { TaskRepository } from '../../../../database/repositories/task.repository';
import { UserRepository } from '../../../../database/repositories/user.repository';
import { WorkspaceRepository } from '../../../../database/repositories/workspace.repository';

import { TaskEntity } from '../../../../database/entities/task.entity';

import { ValidatedUserModel } from '../../../../common/models/validated-user.model';

import { CreateTaskRequestBody } from '@memo-life-task/dtos';

import { UserNotFoundException } from '../../../../common/exceptions/user-not-found.exception';
import { WorkspaceNotFoundException } from '../../../../common/exceptions/workspace-not-found.exception';
import { WorkspaceUnauthroziedException } from '../../../../common/exceptions/workspace-unauthorized.exception';

@Injectable()
export class CreateTaskService {
  constructor(
    private readonly taskRepository: TaskRepository,
    private readonly userRepository: UserRepository,
    private readonly workspaceRepository: WorkspaceRepository
  ) {}

  async createTask(
    body: CreateTaskRequestBody,
    validatedUser: ValidatedUserModel
  ): Promise<void> {
    const user = await this.userRepository
      .findOneOrFail({ where: { id: validatedUser.id } })
      .catch(() => {
        throw new UserNotFoundException();
      });

    const workspace = await this.workspaceRepository
      .findOneOrFail({
        relations: { editors: true },
        where: { id: body.workspaceId }
      })
      .catch(() => {
        throw new WorkspaceNotFoundException();
      });

    if (workspace.editors.findIndex((e) => e.id === user.id) === -1)
      throw new WorkspaceUnauthroziedException();

    const editor = await this.userRepository
      .findOneOrFail({ where: { id: body.editorId } })
      .catch(() => {
        throw new UserNotFoundException();
      });

    if (workspace.editors.findIndex((e) => e.id === editor.id) === -1)
      throw new UserNotFoundException();

    const task = new TaskEntity();
    task.assignee = editor;
    task.description = body.description;
    task.name = body.name;
    task.priority = body.priority;
    task.workspace = workspace;

    await this.taskRepository.save(task);
  }
}
