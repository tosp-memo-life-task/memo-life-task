import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';

import { Task } from './task.entity';
import { Workspace } from './workspace.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'email', nullable: false })
  @Index({ unique: true })
  email: string;

  @Column({ name: 'password', nullable: false })
  password: string;

  @Column({ name: 'salt', nullable: false })
  salt: string;

  @Column({ name: 'name_first', nullable: false })
  nameFirst: string;

  @Column({ name: 'name_last', nullable: false })
  nameLast: string;

  @CreateDateColumn({ name: 'registered_at' })
  registeredAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @OneToMany(() => Task, (task) => task.assignee)
  tasks: Task[];

  @ManyToMany(() => Workspace, (workspace) => workspace.users)
  workspaces: Workspace[];
}
