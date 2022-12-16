import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsPositive, IsString } from 'class-validator';

export class UserResponse {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  email: string;

  @ApiProperty()
  @IsPositive()
  id: number;

  @ApiProperty()
  @IsBoolean()
  isUser: boolean;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  nameFirst: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  nameLast: string;
}
