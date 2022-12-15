import {
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn
} from 'typeorm';

import { UserEntity } from './user.entity';
import { WorkspaceEntity } from './workspace.entity';

@Entity('invitation')
export class InvitationEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @ManyToOne(() => UserEntity)
  receiver: UserEntity;

  @ManyToOne(() => UserEntity)
  sender: UserEntity;

  @ManyToOne(() => WorkspaceEntity)
  workspace: WorkspaceEntity;
}
