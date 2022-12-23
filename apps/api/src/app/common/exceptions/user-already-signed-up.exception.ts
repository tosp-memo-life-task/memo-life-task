import { ConflictException } from '@nestjs/common';

export class UserAlreadySignedUpException extends ConflictException {
  constructor() {
    super({
      code: 'exception.USER.ALREADY_SIGNED_UP',
      message: 'User is already signed up.'
    });
  }
}
