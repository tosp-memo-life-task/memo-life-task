import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsPositive } from 'class-validator';

import { ISendInvitationRequestBody } from '@memo-life-task/interfaces';

export class SendInvitationRequestBody implements ISendInvitationRequestBody {
  @ApiProperty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsPositive()
  workspaceId: number;
}
