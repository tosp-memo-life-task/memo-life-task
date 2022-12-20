import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

import { IModifyWorkspaceRequestBody } from '@memo-life-task/interfaces';

export class ModifyWorkspaceRequestBody implements IModifyWorkspaceRequestBody {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  title: string;
}
