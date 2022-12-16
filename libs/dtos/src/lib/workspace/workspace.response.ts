import { ApiProperty } from '@nestjs/swagger';
import {
  ArrayMinSize,
  IsArray,
  IsBoolean,
  IsDate,
  IsNotEmpty,
  IsPositive,
  IsString,
  ValidateNested
} from 'class-validator';
import { Type } from 'class-transformer';

import { TaskResponse } from '../task/task.response';
import { UserResponse } from '../user/user.response';

export class WorkspaceResponse {
  @ApiProperty()
  @IsDate()
  createdAt: Date;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty()
  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => UserResponse)
  editors: Array<UserResponse> = new Array<UserResponse>();

  @ApiProperty()
  @IsPositive()
  id: number;

  @ApiProperty()
  @IsBoolean()
  isOwned: boolean;

  @ApiProperty()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => TaskResponse)
  tasks: Array<TaskResponse> = new Array<TaskResponse>();

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty()
  @IsDate()
  updatedAt: Date;
}
