import { ApiProperty } from '@nestjs/swagger';
import { IsNumberString } from 'class-validator';

import { IGetWorkspaceRequestParams } from '@memo-life-task/interfaces';

export class GetWorkspaceRequestParams implements IGetWorkspaceRequestParams {
  @ApiProperty()
  @IsNumberString()
  id: number;
}
