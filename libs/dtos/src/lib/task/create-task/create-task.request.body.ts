import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsPositive, IsString } from 'class-validator';

import { ICreateTaskRequestBody } from '@memo-life-task/interfaces';

import { TaskPriorityEnum } from '@memo-life-task/enums';

export class CreateTaskRequestBody implements ICreateTaskRequestBody {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty()
  @IsPositive()
  editorId: number;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsEnum(TaskPriorityEnum)
  priority: TaskPriorityEnum;

  @ApiProperty()
  @IsPositive()
  workspaceId: number;
}
