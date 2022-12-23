import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

import { IGetProfileResponse } from '@memo-life-task/interfaces';

export class GetProfileResponse implements IGetProfileResponse {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  lastName: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  pfp: string;

  @ApiProperty()
  @IsNumber()
  tasks: number;

  @ApiProperty()
  @IsNumber()
  workspaces: number;
}
