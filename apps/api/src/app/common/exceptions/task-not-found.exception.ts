import { NotFoundException } from '@nestjs/common';

export class TaskNotFoundException extends NotFoundException {
  constructor() {
    super({
      code: 'exception.TASK.NOT_FOUND',
      message: 'Task not found.'
    });
  }
}
