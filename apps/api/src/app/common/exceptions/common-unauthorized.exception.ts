import { UnauthorizedException } from '@nestjs/common';

export class CommonUnauthorizedException extends UnauthorizedException {
  constructor() {
    super({ code: 'exception.COMMON.UNAUTHORIZED', message: 'Unauthorized.' });
  }
}
