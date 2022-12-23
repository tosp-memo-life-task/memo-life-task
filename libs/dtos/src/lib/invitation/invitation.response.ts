import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsOptional, IsPositive } from 'class-validator';

import { IInvitationResponse } from '@memo-life-task/interfaces';

import { UserResponse } from '../user/user.response';
import { WorkspaceResponse } from '../workspace/workspace.response';

export class InvitationResponse implements IInvitationResponse {
  @ApiProperty()
  @IsPositive()
  id: number;

  @ApiProperty()
  @Type(() => UserResponse)
  receiver: UserResponse;

  @ApiProperty()
  @Type(() => UserResponse)
  sender: UserResponse;

  @ApiProperty()
  @IsOptional()
  @Type(() => WorkspaceResponse)
  workspace: WorkspaceResponse;
}
