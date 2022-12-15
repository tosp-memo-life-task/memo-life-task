import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateUserRequest {
  @ApiProperty({ type: String })
  @IsNotEmpty()
  @IsString()
  nameFirst: string;

  @ApiProperty({ type: String })
  @IsNotEmpty()
  @IsString()
  nameLast: string;
}
