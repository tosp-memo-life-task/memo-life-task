import { UnauthorizedException } from '@nestjs/common';

export class InvitationUnauthorizedException extends UnauthorizedException {
  constructor() {
    super({
      code: 'exception.INVITATION.UNAUTHORIZED',
      message:
        'You are not authorized to modify/decline/accept this invitation.'
    });
  }
}
