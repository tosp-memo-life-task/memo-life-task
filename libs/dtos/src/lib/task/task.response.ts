import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsDate,
  IsEnum,
  IsNotEmpty,
  IsPositive,
  IsString
} from 'class-validator';

import { UserResponse } from '../user/user.response';

import { TaskPriorityEnum, TaskStatusEnum } from '@memo-life-task/enums';

export class TaskResponse {
  @ApiProperty()
  @Type(() => UserResponse)
  assignee: UserResponse;

  @ApiProperty()
  @IsDate()
  createdAt: Date;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsPositive()
  id: number;

  @ApiProperty()
  @IsEnum(TaskPriorityEnum)
  priority: TaskPriorityEnum;

  @ApiProperty()
  @IsEnum(TaskStatusEnum)
  status: TaskStatusEnum;

  @ApiProperty()
  @IsDate()
  updatedAt: Date;

  @ApiProperty()
  @IsPositive()
  workspaceId: number;
}
