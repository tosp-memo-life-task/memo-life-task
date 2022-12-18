import { ApiProperty } from '@nestjs/swagger';
import { IsPositive } from 'class-validator';

export class RemoveEditorRequestBody {
  @ApiProperty()
  @IsPositive()
  id: number;
}
