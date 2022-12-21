import { ForbiddenException } from '@nestjs/common';

export class InvitationForbiddenException extends ForbiddenException {
  constructor() {
    super({
      code: 'exception.INVITATION.FORBIDDEN',
      message: "Invitation couldn't be sent."
    });
  }
}
