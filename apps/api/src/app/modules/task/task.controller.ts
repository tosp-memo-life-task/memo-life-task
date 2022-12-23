import { Body, Controller, Delete, Param, Patch, Post } from '@nestjs/common';

import { User } from '../../common/decorators/user.decorator';

import { ValidatedUserModel } from '../../common/models/validated-user.model';

import { CreateTaskService } from './services/create-task/create-task.service';
import { DeleteTaskService } from './services/delete-task/delete-task.service';
import { ModifyTaskService } from './services/modify-task/modify-task.service';

import {
  CreateTaskRequestBody,
  DeleteTaskRequestParams,
  ModifyTaskRequestBody,
  ModifyTaskRequestParams
} from '@memo-life-task/dtos';

@Controller('task')
export class TaskController {
  constructor(
    private readonly createTaskService: CreateTaskService,
    private readonly deleteTaskService: DeleteTaskService,
    private readonly modifyTaskService: ModifyTaskService
  ) {}

  @Post()
  async createTask(
    @Body() body: CreateTaskRequestBody,
    @User() validatedUser: ValidatedUserModel
  ): Promise<void> {
    return await this.createTaskService.createTask(body, validatedUser);
  }

  @Patch(':id')
  async modifyTask(
    @Body() body: ModifyTaskRequestBody,
    @Param() params: ModifyTaskRequestParams,
    @User() validatedUser: ValidatedUserModel
  ): Promise<void> {
    return await this.modifyTaskService.modifyTask(body, params, validatedUser);
  }

  @Delete(':id')
  async deleteTask(
    @Param() params: DeleteTaskRequestParams,
    @User() validatedUser: ValidatedUserModel
  ): Promise<void> {
    return await this.deleteTaskService.deleteTask(params, validatedUser);
  }
}
