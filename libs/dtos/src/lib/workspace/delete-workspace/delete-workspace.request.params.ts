import { ApiProperty } from '@nestjs/swagger';
import { IsNumberString } from 'class-validator';

export class DeleteWorkspaceRequestParams {
  @ApiProperty()
  @IsNumberString()
  id: number;
}
