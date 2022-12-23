import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsPositive } from 'class-validator';

import { IRevokeInvitationRequestBody } from '@memo-life-task/interfaces';

export class RevokeInvitationRequestBody
  implements IRevokeInvitationRequestBody
{
  @ApiProperty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsPositive()
  workspaceId: number;
}
