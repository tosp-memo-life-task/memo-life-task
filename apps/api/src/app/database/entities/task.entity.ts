import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';

import { UserEntity } from './user.entity';
import { WorkspaceEntity } from './workspace.entity';

import { TaskPriorityEnum, TaskStatusEnum } from '@memo-life-task/enums';

@Entity('task')
export class TaskEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'description', nullable: false })
  description: string;

  @Column({ name: 'name', nullable: false })
  name: string;

  @Column({
    enum: TaskPriorityEnum,
    name: 'priority',
    nullable: true,
    type: 'enum'
  })
  priority: TaskPriorityEnum;

  @Column({
    default: TaskStatusEnum.READY_TO_START,
    enum: TaskStatusEnum,
    name: 'status',
    nullable: false,
    type: 'enum'
  })
  status: TaskStatusEnum;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @ManyToOne(() => UserEntity, (user) => user.tasks)
  assignee: UserEntity;

  @ManyToOne(() => WorkspaceEntity, (workspace) => workspace.tasks, {
    nullable: false
  })
  workspace: WorkspaceEntity;
}
