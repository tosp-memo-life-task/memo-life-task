import { BadRequestException } from '@nestjs/common';

export class CommonBadRequestException extends BadRequestException {
  constructor() {
    super({ code: 'exception.COMMON.BAD_REQUEST', message: 'Bad request.' });
  }
}
