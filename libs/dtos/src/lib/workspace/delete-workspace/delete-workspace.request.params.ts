import { ApiProperty } from '@nestjs/swagger';
import { IsNumberString } from 'class-validator';

import { IDeleteWorkspaceRequestParams } from '@memo-life-task/interfaces';

export class DeleteWorkspaceRequestParams
  implements IDeleteWorkspaceRequestParams
{
  @ApiProperty()
  @IsNumberString()
  id: number;
}
