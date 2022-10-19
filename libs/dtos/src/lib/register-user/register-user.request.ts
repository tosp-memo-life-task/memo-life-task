import { IsEmail, IsString, MaxLength, MinLength } from 'class-validator';

export class RegisterUserRequest {
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6)
  @MaxLength(48)
  password: string;
}
