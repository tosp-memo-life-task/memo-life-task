import {
  IsEmail,
  IsString,
  Matches,
  MaxLength,
  MinLength
} from 'class-validator';

export class SignInRequest {
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6)
  @MaxLength(48)
  @Matches(/^[A-Za-z0-9]+$/)
  password: string;
}
