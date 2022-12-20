import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

import { IUpdateUserRequestBody } from '@memo-life-task/interfaces';

export class UpdateUserRequestBody implements IUpdateUserRequestBody {
  @ApiProperty({ type: String })
  @IsNotEmpty()
  @IsString()
  firstName: string;

  @ApiProperty({ type: String })
  @IsNotEmpty()
  @IsString()
  lastName: string;
}
