import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';

import { User } from './user.entity';
import { Workspace } from './workspace.entity';

import { TaskPriorityEnum } from '../../common/enums/task-priority.enum';
import { TaskStatusEnum } from '../../common/enums/task-status.enum';

@Entity()
export class Task {
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

  @CreateDateColumn({ name: 'registered_at' })
  registeredAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @ManyToOne(() => User, (user) => user.tasks)
  assignee: User;

  @ManyToOne(() => Workspace, (workspace) => workspace.tasks, {
    nullable: false
  })
  workspace: Workspace;
}
