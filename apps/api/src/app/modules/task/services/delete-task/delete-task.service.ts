import { Injectable } from '@nestjs/common';

import { ValidatedUserModel } from '../../../../common/models/validated-user.model';

import { TaskRepository } from '../../../../database/repositories/task.repository';

import { DeleteTaskRequestParams } from '@memo-life-task/dtos';

import { CommonDatabaseErrorException } from '../../../../common/exceptions/common-database-error.exception';
import { TaskNotFoundException } from '../../../../common/exceptions/task-not-found.exception';
import { WorkspaceUnauthroziedException } from '../../../../common/exceptions/workspace-unauthorized.exception';

@Injectable()
export class DeleteTaskService {
  constructor(private readonly taskRepository: TaskRepository) {}

  async deleteTask(
    params: DeleteTaskRequestParams,
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

    await this.taskRepository.remove(task).catch((err) => {
      throw new CommonDatabaseErrorException(err);
    });
  }
}
