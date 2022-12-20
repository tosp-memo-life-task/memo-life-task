import { ApiProperty } from '@nestjs/swagger';
import { IsNumberString } from 'class-validator';

import { IRemoveEditorRequestParams } from '@memo-life-task/interfaces';

export class RemoveEditorRequestParams implements IRemoveEditorRequestParams {
  @ApiProperty({ type: Number })
  @IsNumberString()
  id: number;
}
