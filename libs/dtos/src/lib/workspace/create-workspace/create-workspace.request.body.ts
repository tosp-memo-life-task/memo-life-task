import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

import { ICreateWorkspaceRequestBody } from '@memo-life-task/interfaces';

export class CreateWorkspaceRequestBody implements ICreateWorkspaceRequestBody {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  title: string;
}
