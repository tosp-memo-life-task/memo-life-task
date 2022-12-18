import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsPositive, IsString } from 'class-validator';

export class UserResponse {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  email: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @ApiProperty()
  @IsPositive()
  id: number;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  lastName: string;

  @ApiProperty()
  @IsBoolean()
  isUser: boolean;
}
