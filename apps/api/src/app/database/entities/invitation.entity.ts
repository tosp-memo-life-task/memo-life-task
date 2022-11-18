import {
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn
} from 'typeorm';

import { User } from './user.entity';
import { Workspace } from './workspace.entity';

@Entity()
export class Invitation {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @ManyToOne(() => User)
  receiver: User;

  @ManyToOne(() => User)
  sender: User;

  @ManyToOne(() => Workspace)
  workspace: Workspace;
}
