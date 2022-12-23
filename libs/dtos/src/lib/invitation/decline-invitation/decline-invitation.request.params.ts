import { IDeclineInvitationRequestParams } from '@memo-life-task/interfaces';
import { ApiProperty } from '@nestjs/swagger';
import { IsNumberString } from 'class-validator';

export class DeclineInvitationRequestParams
  implements IDeclineInvitationRequestParams
{
  @ApiProperty()
  @IsNumberString()
  id: number;
}
