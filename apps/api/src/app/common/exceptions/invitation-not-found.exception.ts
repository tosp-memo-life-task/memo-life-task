import { NotFoundException } from '@nestjs/common';

export class InvitationNotFoundException extends NotFoundException {
  constructor() {
    super({
      code: 'exception.INVITATION.NOT_FOUND',
      message: 'Invitation not found.'
    });
  }
}
