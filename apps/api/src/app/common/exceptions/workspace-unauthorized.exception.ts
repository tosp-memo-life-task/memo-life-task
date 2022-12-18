import { UnauthorizedException } from '@nestjs/common';

export class WorkspaceUnauthroziedException extends UnauthorizedException {
  constructor() {
    super({
      code: 'exception.WORKSPACE.UNAUTHORIZED',
      message: 'You are not authorized to modify/delete this workspace.'
    });
  }
}
