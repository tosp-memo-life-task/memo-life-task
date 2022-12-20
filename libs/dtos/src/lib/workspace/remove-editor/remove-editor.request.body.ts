import { ApiProperty } from '@nestjs/swagger';
import { IsPositive } from 'class-validator';

import { IRemoveEditorRequestBody } from '@memo-life-task/interfaces';

export class RemoveEditorRequestBody implements IRemoveEditorRequestBody {
  @ApiProperty()
  @IsPositive()
  id: number;
}
