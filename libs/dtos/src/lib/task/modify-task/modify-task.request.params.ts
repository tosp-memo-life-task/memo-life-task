import { ApiProperty } from '@nestjs/swagger';
import { IsNumberString } from 'class-validator';

import { IModifyTaskRequestParams } from '@memo-life-task/interfaces';

export class ModifyTaskRequestParams implements IModifyTaskRequestParams {
  @ApiProperty()
  @IsNumberString()
  id: number;
}
