import { NotFoundException } from '@nestjs/common';

export class WorkspaceNotFoundException extends NotFoundException {
  constructor() {
    super({
      code: 'exception.WORKSPACE.NOT_FOUND',
      message: 'Workspace not found.'
    });
  }
}
