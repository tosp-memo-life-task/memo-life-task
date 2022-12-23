import { ForbiddenException } from '@nestjs/common';

export class WorkspaceForbiddenException extends ForbiddenException {
  constructor() {
    super({
      code: 'exception.WORKSPACE.FORBIDDEN',
      message: 'The action you tried doing would be illogical.'
    });
  }
}
