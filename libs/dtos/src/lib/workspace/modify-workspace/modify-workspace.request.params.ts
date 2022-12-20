import { ApiProperty } from '@nestjs/swagger';
import { IsNumberString } from 'class-validator';

import { IModifyWorkspaceRequestParams } from '@memo-life-task/interfaces';

export class ModifyWorkspaceRequestParams
  implements IModifyWorkspaceRequestParams
{
  @ApiProperty()
  @IsNumberString()
  id: number;
}
