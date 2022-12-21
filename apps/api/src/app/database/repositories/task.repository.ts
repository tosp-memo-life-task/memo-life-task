import { Repository } from 'typeorm/repository/Repository';

import { CustomRepository } from '../../common/decorators/typeorm-ex.decorator';

import { TaskEntity } from '../entities/task.entity';

@CustomRepository(TaskEntity)
export class TaskRepository extends Repository<TaskEntity> {}
