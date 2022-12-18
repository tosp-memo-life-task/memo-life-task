import { ApiProperty } from '@nestjs/swagger';
import { IsNumberString } from 'class-validator';

export class ModifyWorkspaceRequestParams {
  @ApiProperty()
  @IsNumberString()
  id: number;
}
