import { Injectable } from '@nestjs/common';

import { InvitationRepository } from '../../../../database/repositories/invitation.repository';
import { WorkspaceRepository } from '../../../../database/repositories/workspace.repository';

import { ValidatedUserModel } from '../../../../common/models/validated-user.model';

import { AcceptInvitationRequestParams } from '@memo-life-task/dtos';

import { CommonDatabaseErrorException } from '../../../../common/exceptions/common-database-error.exception';
import { InvitationNotFoundException } from '../../../../common/exceptions/invitation-not-found.exception';
import { InvitationUnauthorizedException } from '../../../../common/exceptions/invitation-unauthorized.exception';
import { WorkspaceNotFoundException } from '../../../../common/exceptions/workspace-not-found.exception';

@Injectable()
export class AcceptInvitationService {
  constructor(
    private readonly invitationRepository: InvitationRepository,
    private readonly workspaceRepository: WorkspaceRepository
  ) {}

  async acceptInvitation(
    params: AcceptInvitationRequestParams,
    validatedUser: ValidatedUserModel
  ): Promise<void> {
    const invitation = await this.invitationRepository
      .findOneOrFail({
        relations: { receiver: true, workspace: true },
        where: { id: params.id }
      })
      .catch(() => {
        throw new InvitationNotFoundException();
      });

    if (invitation.receiver.id !== validatedUser.id)
      throw new InvitationUnauthorizedException();

    const workspace = await this.workspaceRepository
      .findOneOrFail({
        relations: { users: true },
        where: { id: invitation.workspace.id }
      })
      .catch(() => {
        throw new WorkspaceNotFoundException();
      });

    workspace.users.push(invitation.receiver);

    await this.workspaceRepository.save(workspace).catch((err) => {
      throw new CommonDatabaseErrorException(err);
    });

    await this.invitationRepository.remove(invitation).catch((err) => {
      throw new CommonDatabaseErrorException(err);
    });
  }
}
