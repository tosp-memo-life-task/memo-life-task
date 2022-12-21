import { ApiProperty } from '@nestjs/swagger';

import { IDeleteTaskRequestParams } from '@memo-life-task/interfaces';
import { IsNumberString } from 'class-validator';
export class DeleteTaskRequestParams implements IDeleteTaskRequestParams {
  @ApiProperty()
  @IsNumberString()
  id: number;
}
