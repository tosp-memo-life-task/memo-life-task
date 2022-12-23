import { ApiProperty } from '@nestjs/swagger';
import {
  ArrayMinSize,
  IsArray,
  IsBoolean,
  IsDate,
  IsNotEmpty,
  IsOptional,
  IsPositive,
  IsString,
  ValidateNested
} from 'class-validator';
import { Type } from 'class-transformer';

import { IWorkspaceResponse } from '@memo-life-task/interfaces';

import { TaskResponse } from '../task/task.response';
import { UserResponse } from '../user/user.response';

export class WorkspaceResponse implements IWorkspaceResponse {
  @ApiProperty()
  @IsDate()
  createdAt: Date;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty()
  @IsOptional()
  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => UserResponse)
  editors: Array<UserResponse>;

  @ApiProperty()
  @IsPositive()
  id: number;

  @ApiProperty()
  @IsArray()
  @ValidateNested({ each: true })
  invitations: Array<string>;

  @ApiProperty()
  @IsBoolean()
  isOwned: boolean;

  @ApiProperty()
  @IsOptional()
  @Type(() => UserResponse)
  owner: UserResponse;

  @ApiProperty()
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => TaskResponse)
  tasks: Array<TaskResponse>;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty()
  @IsDate()
  updatedAt: Date;
}
