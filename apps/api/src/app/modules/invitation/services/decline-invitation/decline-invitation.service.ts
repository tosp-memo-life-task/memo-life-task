import { DeclineInvitationRequestParams } from '@memo-life-task/dtos';
import { Injectable } from '@nestjs/common';

import { InvitationRepository } from '../../../../database/repositories/invitation.repository';

import { ValidatedUserModel } from '../../../../common/models/validated-user.model';

import { CommonDatabaseErrorException } from '../../../../common/exceptions/common-database-error.exception';
import { InvitationNotFoundException } from '../../../../common/exceptions/invitation-not-found.exception';
import { InvitationUnauthorizedException } from '../../../../common/exceptions/invitation-unauthorized.exception';

@Injectable()
export class DeclineInvitationService {
  constructor(private readonly invitationRepository: InvitationRepository) {}

  async declineInvitation(
    params: DeclineInvitationRequestParams,
    validatedUser: ValidatedUserModel
  ): Promise<void> {
    const invitation = await this.invitationRepository
      .findOneOrFail({
        relations: {
          receiver: true
        },
        where: { id: params.id }
      })
      .catch(() => {
        throw new InvitationNotFoundException();
      });

    console.log(invitation);

    if (invitation.receiver.id !== validatedUser.id)
      throw new InvitationUnauthorizedException();

    await this.invitationRepository.remove(invitation).catch((err) => {
      throw new CommonDatabaseErrorException(err);
    });
  }
}
