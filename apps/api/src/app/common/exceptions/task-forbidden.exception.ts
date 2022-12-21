import { ForbiddenException } from '@nestjs/common';

export class TaskForbiddenException extends ForbiddenException {
  constructor() {
    super({
      code: 'exception.TASK.FORBIDDEN',
      message: 'This action is forbidden on the task..'
    });
  }
}
