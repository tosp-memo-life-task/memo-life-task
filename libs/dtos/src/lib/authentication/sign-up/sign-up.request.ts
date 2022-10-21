import {
  IsEmail,
  IsString,
  Matches,
  MaxLength,
  MinLength
} from 'class-validator';

export class SignUpRequest {
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6)
  @MaxLength(48)
  @Matches(/^[A-Za-z0-9]+$/)
  password: string;

  @IsString()
  @MinLength(1)
  @MaxLength(128)
  firstName: string;

  @IsString()
  @MinLength(1)
  @MaxLength(128)
  lastName: string;
}
