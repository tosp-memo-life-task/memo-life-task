import { ApiProperty } from '@nestjs/swagger';
import { IsNumberString } from 'class-validator';

export class RemoveEditorRequestParams {
  @ApiProperty({ type: Number })
  @IsNumberString()
  id: number;
}
