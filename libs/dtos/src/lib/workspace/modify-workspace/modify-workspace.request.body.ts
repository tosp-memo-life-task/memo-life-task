import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class ModifyWorkspaceRequestBody {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  description: string;
}
