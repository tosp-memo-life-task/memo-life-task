import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class ErrorResponse {
  @ApiProperty({
    description: 'Code name for exception.',
    example: 'exception.common.UNAUTHORIZED',
    examples: ['exception.common.BAD_REQUEST'],
    type: String
  })
  @IsNotEmpty()
  @IsString()
  code: string;

  @ApiProperty({
    description: 'Optional data related to the error.',
    example: { statusCode: 401, message: 'Unauthorized' },
    examples: [
      { statusCode: 409, message: 'Conflict' },
      { statusCode: 401, message: 'Unauthorized' }
    ],
    type: Object
  })
  @IsOptional()
  info?: object;

  @ApiProperty({
    description: 'Exception message.',
    example: 'Unauthorized.',
    examples: ['Bad request.', 'Unauthorized.'],
    type: String
  })
  @IsNotEmpty()
  @IsString()
  message: string;
}
