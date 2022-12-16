import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';

import { TaskEntity } from './task.entity';
import { UserEntity } from './user.entity';

@Entity('workspace')
export class WorkspaceEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'title', nullable: false })
  title: string;

  @Column({ name: 'description', nullable: false })
  description: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @ManyToOne(() => UserEntity)
  owner: UserEntity;

  @OneToMany(() => TaskEntity, (task) => task.workspace, {
    cascade: ['remove']
  })
  tasks: TaskEntity[];

  @ManyToMany(() => UserEntity, (user) => user.workspaces)
  @JoinTable({ name: 'workspace_users_table' })
  users: UserEntity[];
}
