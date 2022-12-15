import { InternalServerErrorException } from '@nestjs/common';

export class CommonDatabaseErrorException extends InternalServerErrorException {
  constructor(err: any) {
    super({
      cause: err,
      code: 'exception.COMMON.UNAUTHORIZED',
      message: 'Database error.'
    });
  }
}
