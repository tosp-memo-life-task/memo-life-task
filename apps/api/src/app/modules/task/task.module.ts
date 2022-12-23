import { Module } from '@nestjs/common';
import { TypeOrmExModule } from '../../database/typeorm-ex.module';

import { TaskController } from './task.controller';

import { CreateTaskService } from './services/create-task/create-task.service';
import { DeleteTaskService } from './services/delete-task/delete-task.service';
import { ModifyTaskService } from './services/modify-task/modify-task.service';

import { TaskRepository } from '../../database/repositories/task.repository';
import { UserRepository } from '../../database/repositories/user.repository';
import { WorkspaceRepository } from '../../database/repositories/workspace.repository';

@Module({
  controllers: [TaskController],
  imports: [
    TypeOrmExModule.forCustomRepository([
      TaskRepository,
      UserRepository,
      WorkspaceRepository
    ])
  ],
  providers: [CreateTaskService, DeleteTaskService, ModifyTaskService]
})
export class TaskModule {}
