import { ApiProperty } from '@nestjs/swagger';
import { IsNumberString } from 'class-validator';

export class GetWorkspaceRequestParams {
  @ApiProperty()
  @IsNumberString()
  id: number;
}
