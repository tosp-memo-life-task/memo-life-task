import { ApiProperty } from '@nestjs/swagger';
import { IsPositive } from 'class-validator';

import { ISendInvitationRequestBody } from '@memo-life-task/interfaces';

export class SendInvitationRequestBody implements ISendInvitationRequestBody {
  @ApiProperty()
  @IsPositive()
  receiverId: number;

  @ApiProperty()
  @IsPositive()
  workspaceId: number;
}
