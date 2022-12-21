import { IAcceptInvitationRequestParams } from '@memo-life-task/interfaces';
import { ApiProperty } from '@nestjs/swagger';
import { IsNumberString } from 'class-validator';

export class AcceptInvitationRequestParams
  implements IAcceptInvitationRequestParams
{
  @ApiProperty()
  @IsNumberString()
  id: number;
}
