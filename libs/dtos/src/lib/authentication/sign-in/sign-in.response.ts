import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsJWT,
  IsPositive,
  IsString,
  IsUrl,
  MaxLength,
  MinLength
} from 'class-validator';

import { ISignInResponse } from '@memo-life-task/interfaces';

export class SignInResponse implements ISignInResponse {
  @ApiProperty({
    description: 'Id of the user.',
    examples: [1, 2, 3],
    type: Number
  })
  @IsPositive()
  id: number;

  @ApiProperty({
    description: 'Email of the user.',
    example: 'example@example.com',
    type: String
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'First name of the user.',
    example: 'John',
    type: String
  })
  @IsString()
  @MinLength(1)
  @MaxLength(128)
  firstName: string;

  @ApiProperty({
    description: 'Last name of the user.',
    example: 'Smith',
    type: String
  })
  @IsString()
  @MinLength(1)
  @MaxLength(128)
  lastName: string;

  @ApiProperty({
    description: "Link to user's profile picture.",
    example: 'https://jollycontrarian.com/images/6/6c/Rickroll.jpg',
    type: String
  })
  @IsUrl()
  pfp: string;

  @ApiProperty({
    description: 'Generated JWT containing information about the user.',
    example:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImV4YW1wbGUxQGV4YW1wbGUuY29tIiwiaWQiOjQsImlhdCI6MTY2OTk5NTkxMywiZXhwIjoxNzAxNTUzNTEzfQ.ZSlWzKQ-hz0NVGGXylGhBhzmjk151TdAmUi-v_hq0Bk',
    type: String
  })
  @IsJWT()
  accessToken: string;
}
