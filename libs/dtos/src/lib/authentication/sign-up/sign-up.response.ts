import {
  IsEmail,
  IsJWT,
  IsPositive,
  IsString,
  IsUrl,
  MaxLength,
  MinLength
} from 'class-validator';

export class SignUpResponse {
  @IsPositive()
  id: number;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(1)
  @MaxLength(128)
  firstName: string;

  @IsString()
  @MinLength(1)
  @MaxLength(128)
  lastName: string;

  @IsUrl()
  pfp: string;

  @IsJWT()
  accessToken: string;
}
