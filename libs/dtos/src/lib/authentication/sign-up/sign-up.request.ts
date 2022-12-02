import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsString,
  Matches,
  MaxLength,
  MinLength
} from 'class-validator';

export class SignUpRequest {
  @ApiProperty({ example: 'example@example.com', type: String, required: true })
  @IsEmail()
  email: string;

  @ApiProperty({
    example: 'SuperSecretPassword123',
    type: String,
    required: true
  })
  @IsString()
  @MinLength(6)
  @MaxLength(48)
  @Matches(/^[A-Za-z0-9]+$/)
  password: string;

  @ApiProperty({ example: 'John', type: String, required: true })
  @IsString()
  @MinLength(1)
  @MaxLength(128)
  firstName: string;

  @ApiProperty({ example: 'Smith', type: String, required: true })
  @IsString()
  @MinLength(1)
  @MaxLength(128)
  lastName: string;
}
