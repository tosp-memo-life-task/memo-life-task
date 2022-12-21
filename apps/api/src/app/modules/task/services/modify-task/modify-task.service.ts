import { Injectable } from '@nestjs/common';

import { ValidatedUserModel } from '../../../../common/models/validated-user.model';

import { TaskRepository } from '../../../../database/repositories/task.repository';
import { UserRepository } from '../../../../database/repositories/user.repository';

import {
  ModifyTaskRequestBody,
  ModifyTaskRequestParams
} from '@memo-life-task/dtos';

import { CommonDatabaseErrorException } from '../../../../common/exceptions/common-database-error.exception';
import { TaskForbiddenException } from '../../../../common/exceptions/task-forbidden.exception';
import { TaskNotFoundException } from '../../../../common/exceptions/task-not-found.exception';
import { UserNotFoundException } from '../../../../common/exceptions/user-not-found.exception';
import { WorkspaceUnauthroziedException } from '../../../../common/exceptions/workspace-unauthorized.exception';

@Injectable()
export class ModifyTaskService {
  constructor(
    private readonly taskRepository: TaskRepository,
    private readonly userRepository: UserRepository
  ) {}

  async modifyTask(
    body: ModifyTaskRequestBody,
    params: ModifyTaskRequestParams,
    validatedUser: ValidatedUserModel
  ): Promise<void> {
    const task = await this.taskRepository
      .findOneOrFail({
        relations: { workspace: { editors: true } },
        where: { id: params.id }
      })
      .catch(() => {
        throw new TaskNotFoundException();
      });

    const editors = task.workspace.editors;

    if (editors.findIndex((e) => e.id === validatedUser.id) === -1)
      throw new WorkspaceUnauthroziedException();

    if (editors.findIndex((e) => e.id === body.editorId) == -1)
      throw new TaskForbiddenException();

    const editor = await this.userRepository
      .findOneOrFail({ where: { id: body.editorId } })
      .catch(() => {
        throw new UserNotFoundException();
      });

    task.assignee = editor;
    task.description = body.description;
    task.name = body.name;
    task.priority = body.priority;
    task.status = body.status;

    await this.taskRepository.save(task).catch((err) => {
      throw new CommonDatabaseErrorException(err);
    });
  }
}
