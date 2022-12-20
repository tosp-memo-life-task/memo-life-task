import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNumber, ValidateNested } from 'class-validator';

import { IListInvitationsResponse } from '@memo-life-task/interfaces';

import { InvitationResponse } from '../invitation.response';

export class ListInvitationsResponse implements IListInvitationsResponse {
  @ApiProperty()
  @IsNumber()
  count: number;

  @ApiProperty()
  @IsArray()
  @ValidateNested({ each: true })
  invitations: Array<InvitationResponse>;
}
