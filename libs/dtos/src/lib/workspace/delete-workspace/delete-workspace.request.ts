import { ApiProperty } from '@nestjs/swagger';
import { IsPositive } from 'class-validator';

export class DeleteWorkspaceRequest {
  @ApiProperty()
  @IsPositive()
  id: number;
}
