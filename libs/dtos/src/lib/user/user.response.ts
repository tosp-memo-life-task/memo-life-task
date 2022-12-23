import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsPositive,
  IsString
} from 'class-validator';

import { IUserResponse } from '@memo-life-task/interfaces';

export class UserResponse implements IUserResponse {
  @ApiProperty()
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  email: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @ApiProperty()
  @IsOptional()
  @IsPositive()
  id: number;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  lastName: string;

  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  isUser: boolean;
}
