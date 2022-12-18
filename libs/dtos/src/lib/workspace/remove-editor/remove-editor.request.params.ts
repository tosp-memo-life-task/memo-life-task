import { ApiProperty } from '@nestjs/swagger';
import { IsNumberString } from 'class-validator';

export class RemoveEditorRequestParams {
  @ApiProperty()
  @IsNumberString()
  id: number;
}
