import { NotFoundException } from '@nestjs/common';

export class UserNotFoundException extends NotFoundException {
  constructor() {
    super({ code: 'exception.USER.NOT_FOUND', message: 'User not found.' });
  }
}
