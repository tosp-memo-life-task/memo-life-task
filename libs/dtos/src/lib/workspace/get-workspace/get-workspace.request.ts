import { ApiProperty } from '@nestjs/swagger';
import { IsNumberString } from 'class-validator';

export class GetWorkspaceRequest {
  @ApiProperty()
  @IsNumberString()
  id: number;
}
