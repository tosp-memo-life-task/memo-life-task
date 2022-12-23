import { Injectable } from '@nestjs/common';

import { InvitationRepository } from '../../../../database/repositories/invitation.repository';

import { ValidatedUserModel } from '../../../../common/models/validated-user.model';

import { RevokeInvitationRequestBody } from '@memo-life-task/dtos';

import { CommonDatabaseErrorException } from '../../../../common/exceptions/common-database-error.exception';
import { InvitationNotFoundException } from '../../../../common/exceptions/invitation-not-found.exception';
import { WorkspaceUnauthroziedException } from '../../../../common/exceptions/workspace-unauthorized.exception';

@Injectable()
export class RevokeInvitationService {
  constructor(private readonly invitationRepository: InvitationRepository) {}

  async revokeInvitation(
    body: RevokeInvitationRequestBody,
    validatedUser: ValidatedUserModel
  ): Promise<void> {
    const invitation = await this.invitationRepository
      .findOneOrFail({
        relations: { sender: true },
        where: {
          receiver: { email: body.email },
          workspace: { id: body.workspaceId }
        }
      })
      .catch(() => {
        throw new InvitationNotFoundException();
      });

    if (invitation.sender.id !== validatedUser.id)
      throw new WorkspaceUnauthroziedException();

    await this.invitationRepository.remove(invitation).catch((err) => {
      throw new CommonDatabaseErrorException(err);
    });
  }
}
