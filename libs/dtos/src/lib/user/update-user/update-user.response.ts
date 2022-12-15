import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateUserResponse {
  @ApiProperty({ type: String })
  @IsNotEmpty()
  @IsString()
  nameFirst: string;

  @ApiProperty({ type: String })
  @IsNotEmpty()
  @IsString()
  nameLast: string;
}
