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
import { InvitationEntity } from './invitation.entity';

import { TaskEntity } from './task.entity';
import { WorkspaceEntity } from './workspace.entity';

@Entity('user')
export class UserEntity {
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

  @Column({ name: 'pfp', nullable: false })
  pfp: string;

  @CreateDateColumn({ name: 'registered_at' })
  registeredAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @OneToMany(() => InvitationEntity, (invitation) => invitation.receiver)
  invitations: Array<InvitationEntity>;

  @OneToMany(() => TaskEntity, (task) => task.assignee)
  tasks: Array<TaskEntity>;

  @ManyToMany(() => WorkspaceEntity, (workspace) => workspace.users)
  workspaces: Array<WorkspaceEntity>;
}
