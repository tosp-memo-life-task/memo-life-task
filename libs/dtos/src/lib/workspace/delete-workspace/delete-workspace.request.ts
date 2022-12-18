import { ApiProperty } from '@nestjs/swagger';
import { IsNumberString } from 'class-validator';

export class DeleteWorkspaceRequest {
  @ApiProperty()
  @IsNumberString()
  id: number;
}
