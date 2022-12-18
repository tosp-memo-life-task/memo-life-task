import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsString,
  Matches,
  MaxLength,
  MinLength
} from 'class-validator';

export class SignInRequestBody {
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
}
