import {
  CreateDateColumn,
  Entity,
  JoinColumn,
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

  @ManyToOne(() => UserEntity, { nullable: false })
  receiver: UserEntity;

  @ManyToOne(() => UserEntity, { nullable: false })
  @JoinColumn({ name: 'sender_id' })
  sender: UserEntity;

  @ManyToOne(() => WorkspaceEntity, { nullable: false })
  @JoinColumn({ name: 'workspace_id' })
  workspace: WorkspaceEntity;
}
