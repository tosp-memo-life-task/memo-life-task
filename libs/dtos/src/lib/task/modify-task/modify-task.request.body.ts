import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsPositive, IsString } from 'class-validator';

import { IModifyTaskRequestBody } from '@memo-life-task/interfaces';

import { TaskPriorityEnum, TaskStatusEnum } from '@memo-life-task/enums';

export class ModifyTaskRequestBody implements IModifyTaskRequestBody {
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
  @IsEnum(TaskStatusEnum)
  status: TaskStatusEnum;
}
